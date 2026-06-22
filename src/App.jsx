import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
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
import { useEffect } from 'react';

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
    category: '品牌运营 · 千川投放 · AI 素材中台',
    title: '九阳生活电器 · 抖音官旗内容运营',
    description:
      '负责抖音官旗号及产品内容运营，根据品牌调性、目标人群洞察和销售节点，利用 AI 数据分析制定阶段性内容计划，围绕产品认知、使用场景和促销转化搭建内容矩阵；利用 AI 结合有米云、云图分析竞品与人群偏好，制定阶段性内容矩阵；通过 AI 辅助脚本生成、混剪提效及衰退素材诊断，快速调整前三秒钩子与卖点顺序。累计交付原创素材 900+ 条、跑量素材 200+ 条，支撑全域月 GMV 稳定 600 万+、ROI 稳定 4 以上；618 期间单日 GMV 峰值 65 万+，环比提升 185%。素材点击率由 2.8% 提升至 5.58%，转化率提升 22%，素材生命周期延长至 10—14 天。利用 Agent 每日跟进投放数据，与投放团队协同定位问题、输出迭代方向，直播间进房成本下降 18%。',
    image: '/assets/project-joyoung-cyber-final.png',
    metrics: ['原创素材 900+', '跑量素材 200+', '月 GMV 600W+', 'ROI 4+', 'CTR 5.58%', '进房成本 -18%'],
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
      '负责项目洽谈、方案报价到交付全流程，AI 全程跟进关键节点保障交付质量。从 0—1 起盘多个品牌项目，完成账号定位、内容规划、矩阵搭建与素材测试，利用 AI 混剪实现内容批量复制放大。管理 10 人内容与投放团队，通过标准化 SOP 与 AI 工具提升多项目并行交付效率。签约多个年服务费 100 万元级项目并获得续约，打造多个百万级曝光内容；单视频 GMV 50 万+，月均 GMV 300 万+；孵化教培账号涨粉 8 万+、变现 500 万+，B 端矩阵累计变现 1000 万+，服装主理人账号月均涨粉 5000+、月变现 300 万+。',
    image: '/assets/project-brand-glass-transparent.png',
    metrics: ['年服务项目 100W+', '单视频 GMV 50W+', '月均 GMV 300W+', 'B端矩阵变现 1000W+', '教培变现 500W+'],
    accent: 'lime',
  },
  {
    number: '03',
    period: '2024.03 — 2024.09',
    company: '杭州研路有你科技有限公司',
    role: '编导、运营主管',
    category: 'IP 打造 · 公域转私域 · 内容 SOP',
    title: '研路有你 · 考研 IP 私域闭环搭建',
    description:
      '负责 B 站、小红书 IP 及矩阵账号运营，围绕考研需求布局差异化内容，通过站内加热与矩阵分发放大曝光。利用 AI 辅助选题拓展、脚本初稿与数据归纳，沉淀内容 SOP。搭建“公域引流—私域承接—社群培育—课程转化”链路，优化用户标签、社群内容与转化话术。从 0—1 搭建考研 IP 账号，累计粉丝突破 15 万+，打造多个 100 万+ 播放作品；沉淀矩阵运营 SOP，累计引流 20000+ 考研用户进入私域，打通公域获客到课程成交完整链路，项目私域累计变现 6000 万+。',
    image: '/assets/project-education-ip.png',
    metrics: ['IP 粉丝 15W+', '多个 100W+ 播放', '私域用户 20000+', '累计变现 6000W+'],
    accent: 'violet',
  },
  {
    number: '04',
    period: '2024.02—2025.01',
    company: '个人项目',
    role: '新媒体运营、摄像师 / 项目主理人',
    category: '个人运营 · 闭环变现 · 全能操盘',
    title: '个人 IP 实践 · 知识付费全流程验证',
    description:
      '独立负责护理考研知识类账号运营，完成账号定位、品牌调性搭建及 40 万字考研教材编写。独立完成“选题—脚本—剪辑—发布—复盘”全流程，根据播放、完播、互动及转化数据持续优化内容，沉淀高转化内容模型。搭建“公域获客—公众号承接—私域运营—课程转化”链路，累计沉淀粉丝 2000+，引导 1500+ 用户进入私域，实现盈利 10 万元+。零预算投放验证内容增长方法论的可复制性。',
    image: '/assets/project-private-domain.png',
    metrics: ['教材 40 万字', '沉淀粉丝 2000+', '私域用户 1500+', '盈利 10W+', '零预算验证'],
    accent: 'gold',
  },
];

const strengths = [
  {
    icon: Target,
    label: 'STRATEGY',
    title: '品牌内容全链路运营',
    text: '熟练抖音官号、商业 IP 与矩阵号运营，结合品牌定位、人群画像与营销节点，完成用户洞察、竞品分析、栏目规划及 SOP 搭建；具备星图达人筛选、商务沟通、Brief 输出与脚本审核经验。',
  },
  {
    icon: Bot,
    label: 'AI WORKFLOW',
    title: 'AI 内容全流程提效',
    text: '熟练运用 AI 贯穿选题、脚本、拍摄、剪辑、测试、放量到迭代全流程，根据投放表现快速调整钩子、卖点与内容形式，稳定为直播间提供引流与转化素材。',
  },
  {
    icon: BarChart3,
    label: 'DATA',
    title: '数据洞察与投放优化',
    text: '熟练使用千川、云图、聚光、有米云、电商罗盘、千瓜、新红等平台，能从消耗、点击率、进房率、转化率与 ROI 中诊断问题，并输出具体修改方向。',
  },
  {
    icon: Layers3,
    label: 'AI AGENT',
    title: 'AI Agent 工作流',
    text: '日常用 AI 与 Agent 完成竞品整理、选题拓展、脚本初稿、素材拆解与数据归纳，减少重复劳动，聚焦内容判断与策略优化。',
  },
  {
    icon: Users,
    label: 'TEAM',
    title: '团队与多项目管理',
    text: '具备 10+ 人团队及多项目并行管理经验，统筹人员分工、项目排期、内容审核、数据复盘与绩效管理。',
  },
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
    time: '2024.03 — 2024.09',
    company: '杭州研路有你科技有限公司',
    role: '编导、运营主管',
    summary: '教育 IP / B站与小红书矩阵 / 私域转化',
  },
  {
    time: '2023.06 — 2024.02',
    company: '杭州觅童文化创意有限公司',
    role: '新媒体运营、摄像师',
    summary: '商业拍摄 / 活动策划 / 账号运营',
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
        '.profile-facts > div',
        '.contact-strip',
        '.contact-strip a',
        '.contact-strip span',
        '.project-card',
        '.project-context',
        '.project-metrics span',
        '.strength-card',
        '.contact-card',
        '.contact-card > a',
        '.contact-card-line',
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
            郑强帅 · 品牌内容营销 / 内容运营策划
            <br />
            用策略、影像、AI 与数据，为品牌建立从内容到商业结果的增长航线。
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
          ['600W+', '官旗月 GMV'],
          ['4+', '短视频投放 ROI'],
          ['2000W+', '教育项目私域变现'],
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
            <img src="/assets/avatar.jpeg" alt="郑强帅个人照片" />
            <div className="portrait-caption">
              <span>ZHENG QIANGSHUAI</span>
              <strong>品牌内容营销 / 内容运营策划</strong>
            </div>
          </div>

          <div className="profile-content" data-reveal>
            <div className="profile-statement">
              <Sparkles size={24} />
              <p>
                4 年新媒体深耕经历，横跨品牌官旗、商业 IP、教育矩阵和私域运营。我擅长从 0
                到 1 搭建内容增长系统，也能在 1 到 100 阶段通过数据复盘持续放大有效模型。
              </p>
            </div>

            <div className="profile-facts">
              <div>
                <span>核心方法</span>
                <strong>策略 × 创意 × 数据 × AI</strong>
              </div>
              <div>
                <span>教育背景</span>
                <strong>四川传媒学院 · 摄影本科 · 专业前 5%</strong>
              </div>
              <div>
                <span>求职方向</span>
                <strong>品牌内容营销 / 内容运营 / 内容策划</strong>
              </div>
            </div>

            <div className="contact-strip">
              <a href={`tel:${contact.phone}`}>
                <Phone size={17} /> {contact.phone}
              </a>
              <span>
                <MessageCircle size={17} /> {contact.wechat}
              </span>
              <a href={`mailto:${contact.email}`}>
                <Mail size={17} /> {contact.email}
              </a>
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
          copy="从职业经历进入具体项目，完整呈现我在品牌官旗、全网种草、教育 IP 与私域增长中的职责、方法与结果。"
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

        <div className="contact-card" data-reveal>
          <span>AVAILABLE FOR INTERVIEW</span>
          <p>我目前正在寻找品牌内容营销、内容运营与内容策划相关机会，期待与你聊聊。</p>
          <a href={`tel:${contact.phone}`}>
            <Phone size={19} />
            <div>
              <small>PHONE</small>
              <strong>{contact.phone}</strong>
            </div>
          </a>
          <div className="contact-card-line">
            <MessageCircle size={19} />
            <div>
              <small>WECHAT</small>
              <strong>{contact.wechat}</strong>
            </div>
          </div>
          <a href={`mailto:${contact.email}`}>
            <Mail size={19} />
            <div>
              <small>EMAIL</small>
              <strong>{contact.email}</strong>
            </div>
          </a>
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
