import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Copy,
  Layers3,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const contact = {
  phone: '19223576408',
  wechat: 'S03120699',
  email: 'damao080808@163.com',
};

const projects = [
  {
    number: '01',
    period: '2025.10 — 2026.06',
    company: '杭州九阳生活电器有限公司',
    role: '内容运营',
    category: '官旗运营 · 千川素材 · 达人协同',
    title: '九阳生活电器 · 抖音官旗内容运营',
    description:
      '负责粉丝 220 万+ 的九阳抖音官旗主页及产品千川内容运营，结合品牌调性、5A 人群与销售节点策划主页内容，并独立完成两个千川账户的编、拍、剪、投放复盘全流程。运用蝉妈妈、有米云、云图、电商罗盘及 Agent 分析点击、ROI、GSV 等指标，持续优化前三秒钩子、卖点顺序与画面组合，搭建可复用的爆款框架和高转化素材库；同时负责星图达人筛选、商务沟通、Brief、脚本审核与效果复盘。支撑官旗全域月均 GMV 1000 万+、全域净成交 ROI 5+、短视频 ROI 4+；618 单日 GMV 峰值 135 万+，整体 GMV 环比提升 185.22%、ROI 环比提升 25.36%。素材点击率由 2.8% 提升至 5.58%，转化率提升 22%；对接达人 50+ 位，交付达人素材 80+ 条，千川素材跑出率 65%，投产比 3.4。',
    image: '/assets/project-joyoung-cyber-final.png',
    metrics: ['月均 GMV 1000W+', '全域 ROI 5+', '618 单日 135W+', 'GMV 环比 +185.22%', 'CTR 5.58%', '达人投产比 3.4'],
    accent: 'cyan',
  },
  {
    number: '02',
    period: '2024.09 — 2025.09',
    company: '杭州时代芳华文化科技有限公司',
    role: '编导、运营主管',
    category: 'IP 孵化 · 矩阵搭建 · 10 人团队管理',
    title: '时代芳华 · 多品牌矩阵起盘与团队管理',
    description:
      '负责前期洽谈、需求梳理、方案报价、签约到交付全流程，借助 AI 跟进关键节点并保障交付质量；结合客户与产品特性拆解行业 IP 爆款逻辑，制定内容方向与选题规划。统筹 10 人内容与投放团队，利用蝉妈妈、千瓜等平台完成竞品分析、A/B 测试及投放诊断，通过标准化 SOP 与 AI 工具提升多项目并行效率。签约多个年服务费 100 万元级项目并支撑续约增购，打造多个主页百万级曝光内容；小黄车单视频 GMV 80 万+，淘淘氧棉、六神、红蜻蜓等挂车项目月均 GMV 300 万+；教培账号涨粉 19.7 万+、变现 500 万+，B 端矩阵累计变现 1000 万+，服装主理人账号涨粉 5.5 万+、月变现 300 万+。',
    image: '/assets/project-brand-glass-transparent.png',
    metrics: ['年服务项目 100W+', '单视频 GMV 80W+', '月均 GMV 300W+', '教培涨粉 19.7W+', 'B端变现 1000W+'],
    accent: 'lime',
  },
  {
    number: '03',
    period: '2023.06 — 2024.09',
    company: '杭州研路有你科技有限公司',
    role: '编导、运营主管',
    category: 'IP 打造 · 公域转私域 · 内容 SOP',
    title: '研路有你 · 考研 IP 私域闭环搭建',
    description:
      '统筹 B 站 IP 与小红书矩阵账号，围绕考研需求搭建差异化内容体系，覆盖选题、文案、制作与复盘全流程，并通过站内加热、矩阵分发和评论区承接引导用户沉淀至私域。搭建“公域引流—私域承接—社群培育—课程转化”闭环，持续优化用户标签、社群内容与转化话术；管理 6 人内容团队并建立培训体系，推动团队 GMV 同比增长 23%。从 0—1 搭建考研 IP 账号，累计粉丝 15 万+，打造多个 100 万+ 播放作品；沉淀矩阵运营 SOP，累计引流 20000+ 考研用户进入私域，项目私域累计变现 6000 万+。',
    image: '/assets/project-education-ip.png',
    metrics: ['IP 粉丝 15W+', '多个 100W+ 播放', '私域用户 20000+', '累计变现 6000W+', '团队 GMV +23%'],
    accent: 'violet',
  },
  {
    number: '04',
    period: '2024.01 — 2024.12',
    company: '考研培训个人项目',
    role: '项目负责人',
    category: '品牌搭建 · 内容增长 · 私域转化',
    title: '护理考研项目 · 知识付费闭环验证',
    description:
      '独立负责护理考研知识类账号运营，完成账号定位、内容规划与品牌调性搭建，打造“护理考研一遍通”专业 IP，并独立编写 40 万字考研教材。负责“研知岸”公众号与小红书账号的选题策划、内容发布、公众号运营及私域承接，持续输出专业内容，沉淀高完播、高转化内容模型。累计沉淀粉丝 2000+，引导 1500+ 用户进入私域，实现盈利 10 万元+。',
    image: '/assets/project-private-domain.png',
    metrics: ['教材 40 万字', '沉淀粉丝 2000+', '私域用户 1500+', '盈利 10W+'],
    accent: 'gold',
  },
];

const strengths = [
  {
    icon: Target,
    label: 'STRATEGY',
    title: '品牌内容全链路运营',
    text: '熟练运营官旗账号、商业 IP 与矩阵号，结合品牌定位、5A 人群画像与营销节点，完成用户洞察、竞品分析及 SOP 搭建；具备星图达人筛选、商务沟通、Brief 输出与脚本审核经验。',
  },
  {
    icon: Bot,
    label: 'AI WORKFLOW',
    title: 'AI 与 Agent 工作流',
    text: '掌握国内外 AI 与 Agent，覆盖文案裂变、数据分析、文生图、图生视频及爆款画面裂变，并用于竞品整理、选题拓展、脚本初稿、素材拆解与数据归纳。',
  },
  {
    icon: BarChart3,
    label: 'DATA',
    title: '爆款拆解与数据优化',
    text: '熟练使用蝉妈妈、云图、有米云、飞瓜等平台，追踪同类目、同场景竞品，结合产品卖点、5A 人群和使用场景开展 A/B 测试，并从消耗、点击率、转化率与 ROI 中诊断问题。',
  },
  {
    icon: Layers3,
    label: 'CATEGORY',
    title: '多品类商业实战',
    text: '具备九阳、六神、淘淘氧棉、红蜻蜓等小家电、快消品与服装项目经验，覆盖品牌官旗、内容种草、挂车转化与私域增长，单月 GMV 达千万级。',
  },
  {
    icon: Users,
    label: 'TEAM',
    title: '团队与多项目管理',
    text: '具备搭建并管理 10 人内容与投放团队的经验，能够统筹人员分工、项目排期、内容审核、数据复盘与绩效管理，保障多项目并行交付。',
  },
];

const coreCapabilities = [
  '熟练使用蝉妈妈、云图、有米云、飞瓜等平台，追踪同类目、同场景、同效果的竞品，拆解爆款逻辑；结合产品卖点、5A 人群与使用场景进行 A/B 测试，并从消耗、点击率、转化率和 ROI 中诊断问题。',
  '熟练运营官旗账号、商业 IP 与矩阵号，结合品牌定位、5A 人群画像与营销节点，完成用户洞察、竞品分析及 SOP 搭建；具备星图达人筛选、商务沟通、Brief 输出与脚本审核经验。',
  '掌握国内外 AI 与 Agent，覆盖文案裂变、数据分析、文生图、图生视频及爆款画面裂变，并用于竞品整理、选题拓展、脚本初稿、素材拆解与数据归纳。',
  '具备九阳、六神、淘淘氧棉、红蜻蜓等小家电、快消品与服装项目经验，单月 GMV 达千万级。',
  '具备搭建并管理 10 人团队及多项目并行管理经验，统筹人员分工、项目排期、内容审核、数据复盘与绩效管理。',
];

const experiences = [
  {
    time: '2025.10 — 2026.06',
    company: '杭州九阳生活电器有限公司',
    role: '内容运营',
    summary: '品牌官旗 / 千川素材 / 达人协同',
  },
  {
    time: '2024.09 — 2025.09',
    company: '杭州时代芳华文化科技有限公司',
    role: '编导、运营主管',
    summary: '品牌项目统筹 / 内容增长 / 团队管理',
  },
  {
    time: '2023.06 — 2024.09',
    company: '杭州研路有你科技有限公司',
    role: '编导、运营主管',
    summary: '教育 IP / B站与小红书矩阵 / 私域转化',
  },
  {
    time: '2024.01 — 2024.12',
    company: '考研培训个人项目',
    role: '项目负责人',
    summary: '品牌搭建 / 内容增长 / 私域转化',
  },
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((element) => observer.observe(element));

    const glassElements = document.querySelectorAll(
      [
        '.nav',
        '.nav-links a',
        '.nav-contact',
        '.button',
        '.hero-stat',
        '.portrait-card',
        '.portrait-caption',
        '.profile-statement',
        '.project-card',
        '.project-context',
        '.project-metrics span',
        '.strength-card',
        '.contact-card',
        '.contact-card > a',
      ].join(','),
    );

    const handlePointerEnter = (event) => {
      event.currentTarget.classList.add('glass-hovered');
    };

    const handlePointerLeave = (event) => {
      const target = event.currentTarget;
      target.classList.remove('glass-hovered', 'glass-pressed');
    };

    const handlePointerDown = (event) => {
      const target = event.currentTarget;
      target.classList.remove('glass-pressed');
      window.requestAnimationFrame(() => target.classList.add('glass-pressed'));
      window.setTimeout(() => target.classList.remove('glass-pressed'), 520);
    };

    glassElements.forEach((element) => {
      element.classList.add('apple-glass-interactive');
      element.addEventListener('pointerenter', handlePointerEnter);
      element.addEventListener('pointerleave', handlePointerLeave);
      element.addEventListener('pointerdown', handlePointerDown);
    });

    return () => {
      observer.disconnect();
      glassElements.forEach((element) => {
        element.removeEventListener('pointerenter', handlePointerEnter);
        element.removeEventListener('pointerleave', handlePointerLeave);
        element.removeEventListener('pointerdown', handlePointerDown);
      });
    };
  }, []);

  return (
    <main>
      <Navigation />
      <Hero />
      <div className="content-video-stage">
        <div className="content-video-layer" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/assets/content-background.mp4" type="video/mp4" />
          </video>
          <div className="content-video-overlay" />
        </div>
        <div className="content-sections">
          <Profile />
          <Projects />
          <Strengths />
          <Contact />
        </div>
      </div>
    </main>
  );
}

function Navigation() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="logo" href="#home" aria-label="返回首页">
          <span className="logo-orbit" />
          ZQS<span>®</span>
        </a>
        <div className="nav-links">
          <a href="#profile">关于我</a>
          <a href="#projects">精选项目</a>
          <a href="#strengths">个人优势</a>
          <a
            href="https://my.feishu.cn/docx/EpibdPa9yosYlex29YocqqTRn7c?from=from_copylink"
            target="_blank"
            rel="noreferrer"
          >
            作品集
          </a>
        </div>
        <a className="nav-contact" href="#contact">
          联系我 <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function ElegantShape({ className, delay, width, height, rotate, color }) {
  return (
    <motion.div
      className={`hero-elegant-shape ${className}`}
      initial={{ opacity: 0, y: -120, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
    >
      <motion.div
        style={{ width, height }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="hero-elegant-shape-surface" style={{ '--shape-color': color }} />
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.45 + index * 0.18,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <img className="hero-space-art" src="/assets/hero-space-astronaut.png" alt="" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-geometric-field" aria-hidden="true">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          color="99, 102, 241"
          className="shape-one"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          color="244, 114, 182"
          className="shape-two"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          color="168, 85, 247"
          className="shape-three"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          color="245, 158, 11"
          className="shape-four"
        />
      </div>

      <div className="hero-grid container">
        <div className="hero-copy">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="status-pill"
          >
            <span />
            BRAND CONTENT EXPLORER · 2026
          </motion.div>
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-index"
          >
            PERSONAL PORTFOLIO / ZHENG QIANGSHUAI
          </motion.p>
          <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <span>探索内容增长的</span>
            <br />
            <em>无限可能</em>
          </motion.h1>
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-intro"
          >
            郑强帅 · 品牌运营 / 内容运营
            <br />
            用内容策略、AI 与数据，为品牌建立从爆款生产到商业转化的增长链路。
          </motion.p>
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-actions"
          >
            <a className="button button-primary" href="#projects">
              <Play size={17} fill="currentColor" /> 查看精选项目
            </a>
            <a className="button button-ghost" href="#contact">
              立即联系 <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        <div className="hero-orbit-labels" data-reveal aria-hidden="true">
          <div className="orbit-label orbit-label-one">
            <Sparkles size={18} />
            <span>创意策略</span>
          </div>
          <div className="orbit-label orbit-label-two">
            <Bot size={18} />
            <span>AI 内容</span>
          </div>
          <div className="orbit-label orbit-label-three">
            <BarChart3 size={18} />
            <span>数据增长</span>
          </div>
        </div>
      </div>

      <div className="hero-stats container">
        {[
          ['4 年', '新媒体内容经验'],
          ['1000W+', '官旗月均 GMV'],
          ['5+', '全域净成交 ROI'],
          ['6000W+', '教育项目私域变现'],
        ].map(([value, label]) => (
          <div className="hero-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <a className="scroll-hint" href="#profile" aria-label="向下查看">
        SCROLL <ArrowDown size={14} />
      </a>
    </section>
  );
}

function SectionTitle({ index, eyebrow, title, copy }) {
  return (
    <div className="section-title" data-reveal>
      <span>{index}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <div className="section-lead">{copy}</div>}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="container">
        <SectionTitle
          index="01"
          eyebrow="PROFILE / ABOUT ME"
          title="我不是在“做内容”，而是在经营内容的商业价值。"
        />

        <div className="profile-grid">
          <div className="portrait-card" data-reveal>
            <img src="/assets/profile-casual.jpg" alt="郑强帅个人照片" />
          </div>

          <div className="profile-content" data-reveal>
            <div className="profile-statement">
              <Sparkles size={24} />
              <p>
                4 年新媒体经验，覆盖九阳、六神、淘淘氧棉、红蜻蜓等小家电、快消与服装项目。
                我擅长把品牌定位、5A 人群、爆款拆解、AI 工作流和投放数据连接起来，
                搭建从内容生产到生意转化的可复制增长系统。
              </p>
            </div>

            <div className="profile-capabilities" data-reveal>
              {coreCapabilities.map((item, index) => (
                <article className="profile-capability-item" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionTitle
          index="02"
          eyebrow="EXPERIENCE & SELECTED PROJECTS"
          title="工作经历与经过业务验证的内容方法。"
          copy="从职业经历进入具体项目，完整呈现我在品牌官旗、千川素材、商业 IP、教育矩阵与私域增长中的职责、方法与结果。"
        />

        <div className="project-cases-heading" data-reveal>
          <span>PROJECT CASES</span>
          <p>代表项目与成果</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project-card project-card-${project.number} accent-${project.accent}`}
              key={project.title}
              data-reveal
            >
              <div className="project-info">
                <div className="project-info-head">
                  <span className="project-number">{project.number}</span>
                  <p className="project-category">{project.category}</p>
                </div>
                <div className="project-context">
                  <time>{project.period}</time>
                  <strong>{project.company}</strong>
                  <span>{project.role}</span>
                </div>
                <h3>
                  {project.title.split(' · ').map((part, index) => (
                    <span key={part}>
                      {part}
                      {index === 0 ? <br /> : null}
                    </span>
                  ))}
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <span key={metric}>
                      <Check size={14} /> {metric}
                    </span>
                  ))}
                </div>
                <div className="project-note">
                  CASE STUDY
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <div className="container">
        <SectionTitle
          index="03"
          eyebrow="WHY ME"
          title="既能想清楚，也能做出来，更能用数据讲明白。"
        />
        <div className="strength-grid">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="strength-card" key={item.title} data-reveal>
                <div className="strength-top">
                  <span>0{index + 1}</span>
                  <Icon size={24} />
                </div>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <div>{item.text}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copiedKey, setCopiedKey] = useState('');

  const copyContact = async (key, value) => {
    const fallbackCopy = () => {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const succeeded = document.execCommand('copy');
      textarea.remove();
      return succeeded;
    };

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      if (!fallbackCopy()) return;
    }

    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(''), 1600);
  };

  const contactRows = [
    { key: 'phone', label: 'PHONE', value: contact.phone, href: `tel:${contact.phone}`, icon: Phone },
    { key: 'wechat', label: 'WECHAT', value: contact.wechat, icon: MessageCircle },
    { key: 'email', label: 'EMAIL', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  ];

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-backdrop" aria-hidden="true" />
      <div className="container contact-layout">
        <div className="contact-heading" data-reveal>
          <p>LET&apos;S CREATE SOMETHING VALUABLE.</p>
          <h2>
            一起把下一个
            <br />
            <em>内容增长机会</em>
            <br />
            做成结果。
          </h2>
        </div>

        <div className="contact-visual" data-reveal>
          <img src="/assets/contact-wechat-transparent.png" alt="微信二维码" />
        </div>

        <div className="contact-card" data-reveal>
          <span>AVAILABLE FOR INTERVIEW</span>
          <p>我目前正在寻找品牌运营与内容运营相关机会，期待与你聊聊。</p>
          {contactRows.map((item) => {
            const Icon = item.icon;
            const ValueTag = item.href ? 'a' : 'div';

            return (
              <div className="contact-card-line" key={item.key}>
                <Icon size={19} />
                <div className="contact-card-value">
                  <small>{item.label}</small>
                  <ValueTag href={item.href}>
                    <strong>{item.value}</strong>
                  </ValueTag>
                </div>
                <button
                  className={`contact-copy-button ${copiedKey === item.key ? 'is-copied' : ''}`}
                  type="button"
                  onClick={() => copyContact(item.key, item.value)}
                  aria-label={`复制${item.label}`}
                  title={`复制 ${item.value}`}
                >
                  {copiedKey === item.key ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copiedKey === item.key ? '已复制' : '复制'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-line container">
        <span>© 2026 郑强帅 · PERSONAL PORTFOLIO</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default App;
