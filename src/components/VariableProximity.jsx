import { useEffect, useMemo, useRef } from 'react';
import './VariableProximity.css';

function parseFontVariationSettings(settings) {
  return new Map(
    settings
      .split(',')
      .map((setting) => setting.trim())
      .map((setting) => {
        const [axis, value] = setting.split(' ');
        return [axis.replace(/['"]/g, ''), Number.parseFloat(value)];
      }),
  );
}

function calculateFalloff(distance, radius, falloff) {
  const normalized = Math.min(Math.max(1 - distance / radius, 0), 1);

  if (falloff === 'exponential') {
    return normalized ** 2;
  }

  if (falloff === 'gaussian') {
    return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
  }

  return normalized;
}

function VariableProximity({
  label = '',
  fromFontVariationSettings = "'wght' 400, 'opsz' 9",
  toFontVariationSettings = "'wght' 800, 'opsz' 40",
  containerRef,
  radius = 50,
  falloff = 'linear',
  className = '',
  onClick,
  style,
  ...restProps
}) {
  const letterRefs = useRef([]);
  const mousePositionRef = useRef({ x: -9999, y: -9999 });
  const lastPositionRef = useRef({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    const fromSettings = parseFontVariationSettings(fromFontVariationSettings);
    const toSettings = parseFontVariationSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  useEffect(() => {
    const updatePosition = (clientX, clientY) => {
      if (!containerRef?.current) {
        mousePositionRef.current = { x: clientX, y: clientY };
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      mousePositionRef.current = { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handleMouseMove = (event) => updatePosition(event.clientX, event.clientY);
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) {
        updatePosition(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  useEffect(() => {
    let frameId;

    const loop = () => {
      if (!containerRef?.current) {
        frameId = window.requestAnimationFrame(loop);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const { x, y } = mousePositionRef.current;

      if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
        frameId = window.requestAnimationFrame(loop);
        return;
      }

      lastPositionRef.current = { x, y };

      letterRefs.current.forEach((letterRef) => {
        if (!letterRef) {
          return;
        }

        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top;
        const distance = Math.hypot(x - letterCenterX, y - letterCenterY);

        if (distance >= radius) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
          return;
        }

        const falloffValue = calculateFalloff(distance, radius, falloff);
        const nextSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const value = fromValue + (toValue - fromValue) * falloffValue;
            return `'${axis}' ${value.toFixed(2)}`;
          })
          .join(', ');

        letterRef.style.fontVariationSettings = nextSettings;
      });

      frameId = window.requestAnimationFrame(loop);
    };

    frameId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(frameId);
  }, [containerRef, falloff, fromFontVariationSettings, parsedSettings, radius]);

  let letterIndex = 0;
  const words = label.split(' ');

  return (
    <span className={`${className} variable-proximity`} onClick={onClick} style={{ display: 'inline', ...style }} {...restProps}>
      {words.map((word, wordIndex) => (
        <span className="variable-proximity-word" key={`${word}-${wordIndex}`}>
          {word.split('').map((letter) => {
            const currentLetterIndex = letterIndex;
            letterIndex += 1;

            return (
              <span
                className="variable-proximity-letter"
                key={`${letter}-${currentLetterIndex}`}
                ref={(element) => {
                  letterRefs.current[currentLetterIndex] = element;
                }}
                style={{ fontVariationSettings: fromFontVariationSettings }}
                aria-hidden="true"
              >
                {letter}
              </span>
            );
          })}
          {wordIndex < words.length - 1 ? <span className="variable-proximity-space">&nbsp;</span> : null}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default VariableProximity;
