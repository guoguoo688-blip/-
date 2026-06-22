import { useState, useRef, useEffect } from 'react';

function MosaicText({ text, className = '' }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const chars = text.split('');
  const mosaicSize = 24;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`mosaic-text-container ${className}`}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--is-hovering': isHovering ? '1' : '0',
      }}
    >
      <div className="mosaic-text">
        {chars.map((char, index) => (
          <span key={index} className="mosaic-char" style={{ '--char-index': index }}>
            <div className="mosaic-grid">
              {Array.from({ length: mosaicSize }).map((_, i) => (
                <div 
                  key={i} 
                  className="mosaic-cell"
                  style={{ '--cell-index': i }}
                />
              ))}
            </div>
            <span className="mosaic-label">{char === ' ' ? '\u00A0' : char}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MosaicText;
