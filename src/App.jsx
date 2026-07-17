import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GlitchText from './components/GlitchText';

const contact = {
  phone: '19223576408',
  wechat: 'S03120699',
  email: 'damao080808@163.com',
};

const projects = [
  {
    number: '01',
    period: '2025.10 - 2026.07',
    company: '杭州九阳生活电器有限公司',
    role: '内容运营',
    category: '官旗运营 · 千川编导 · 达人协同',
    title: '九阳生活电器 · 抖音官旗内容增长',
    description:
      '面向 220W+ 粉丝的九阳抖音官旗，我负责主页内容与产品千川素材的增长闭环：既要保证品牌官旗内容的稳定调性，也要把新品卖点、大促节点、5A 人群和投放数据转化成能跑量、能复用、能持续迭代的短视频素材。',
    highlights: [
      '内容策划上，结合品牌调性、销售节点和人群画像规划主页视频，明确不同产品在“认知、兴趣、转化”阶段的内容任务，并对接部门总监完成内容审核。',
      '素材生产上，负责九阳官旗千川账户的选题、策划、拍摄、剪辑与复盘，持续优化前 3 秒钩子、卖点顺序、口播节奏和画面组合。',
      '数据复盘上，利用 Agent 每日整理千川、云图、电商罗盘等数据，围绕点击、ROI、GSV 判断素材跑量或衰退原因，和投放团队共创下一轮测试方向。',
      '达人协同上，负责星图达人筛选、商务沟通、合作 Brief、脚本审核和效果复盘，把优质达人表达沉淀为后续可复用素材模板。',
    ],
    takeaway:
      '项目沉淀为“人群洞察 - 卖点拆解 - 素材脚本 - 投放复盘 - 爆款裂变”的千川内容 SOP，并用即梦、即创等 AI 工具把衰退素材二次裂变，缩短素材制作周期。',
    results: [
      '负责账户支撑九阳官旗全域月均 GMV 1000W+，全域净成交 ROI 5+，月消耗 200W+；618 期间单日 GMV 峰值 200W+，大促期整体 ROI 稳定在 7+，单日单视频 GMV 80W+。',
      '打造九阳官旗主页内容矩阵多条百万级播放爆款素材，累计带动粉丝增长 50W+。',
      '通过 A/B 测试与爆款裂变，素材点击率从入职时的 2.8% 提升至 5.58%，转化率提升 22%。',
      '云图衰退素材制作周期由 3 天压缩至 1 天，缩短 66%；AI 优化爆款素材后月均 GMV 额外提升 50W+。',
      '对接头部及腰部达人 50+ 位，交付素材 80+ 条，千川素材跑出率 65%，达人投产比 3.4。',
    ],
    image: '/assets/project-joyoung-cyber-final.png',
    videos: [
      { src: '/assets/videos/joyoung-k7-01.mp4', label: 'K7 内容素材 01' },
      { src: '/assets/videos/joyoung-k7-02.mp4', label: 'K7 Pro · 豆花嘌呤清洗' },
      { src: '/assets/videos/joyoung-k7-03.mp4', label: 'K7 离火版 · 送礼种草' },
    ],
    metrics: ['月均 GMV 1000W+', '大促 ROI 7+', '618 单日 200W+', '涨粉 50W+', 'CTR 5.58%', '素材周期 -66%'],
    accent: 'cyan',
  },
  {
    number: '02',
    period: '2024.08 - 2025.10',
    company: '杭州时代芳华文化科技有限公司',
    role: '编导、运营主管',
    category: 'IP 孵化 · 矩阵搭建 · 10 人团队管理',
    title: '时代芳华 · 多品牌矩阵起盘与团队管理',
    description:
      '在代运营和内容服务场景里，我承担的是“项目负责人 + 编导主管”的复合角色：从客户洽谈、需求梳理、方案报价到签约交付，既要判断客户商业目标，也要把目标拆成账号定位、内容选题、团队排期和数据复盘。',
    highlights: [
      '前期策略上，围绕客户产品、人设和成交链路拆解行业 IP 爆款逻辑，明确账号要解决的是信任建立、种草转化、挂车成交还是私域沉淀。',
      '内容执行上，统筹 10 人内容与投放团队，用蝉妈妈、千瓜等平台完成竞品拆解、选题规划、脚本审核、拍摄排期和投放诊断。',
      '项目管理上，借助 AI 跟进关键节点，统一选题表、脚本模板、审核标准和复盘口径，降低多项目并行时的沟通损耗。',
      '商业结果上，支撑多个年服务费 100W+ 项目续约增购，并在立白花植时代、淘淘氧棉、六神、教培、大健康矩阵和服装主理人项目中跑出可验证结果。',
    ],
    takeaway:
      '项目沉淀为多品牌内容交付 SOP：从“客户目标拆解 - 账号人设定位 - 爆款结构复刻 - 投放诊断 - 团队排期”五个环节提升交付稳定性。',
    results: [
      '签约多个年服务费 100W+ 项目，并支撑客户续约与增购，证明内容服务从交付型项目转向长期增长合作。',
      '策划并编导打造多个主页百万级曝光内容，单视频单日 GMV 80W+。',
      '立白花植时代、淘淘氧棉、六神等项目月均 GMV 300W+。',
      '从 0-1 搭建矩阵大健康行业账号及私域流程，月均新增私域 5000+，月度变现 500W+。',
      '从 0-1 孵化教培账号涨粉 19.7W+、月变现 500W+；服装主理人账号涨粉 5.5W+、月变现 300W+。',
    ],
    image: '/assets/project-brand-glass-transparent.png',
    videos: [
      { src: '/assets/videos/liushen-01.mp4', label: '六神 · 品牌内容案例' },
      { src: '/assets/videos/taotao-yangmian-01.mp4', label: '淘淘氧棉 · 品牌内容案例' },
      { src: '/assets/videos/ziyou-dian-01.mp4', label: '自由点 · 品牌内容案例' },
    ],
    metrics: ['年服务项目 100W+', '单视频单日 GMV 80W+', '月均 GMV 300W+', '教培涨粉 19.7W+', '服装涨粉 5.5W+'],
    accent: 'lime',
  },
  {
    number: '03',
    period: '2023.06 - 2024.08',
    company: '杭州研路有你科技有限公司',
    role: '编导、运营主管',
    category: 'IP 打造 · 公域转私域 · 内容 SOP',
    title: '研路有你 · 考研 IP 私域闭环搭建',
    description:
      '考研项目的核心不是单纯涨粉，而是把“焦虑型搜索需求”转化成可信任的长期陪伴关系。我统筹 B 站 IP 与小红书矩阵账号，围绕择校、备考规划、资料获取、经验分享等场景搭建内容体系，再通过评论区和私域承接完成转化。',
    highlights: [
      '内容体系上，把考研用户需求拆成择校、专业课、复习节奏、避坑经验和课程转化五类选题，分别匹配 B 站长内容和小红书种草内容。',
      '引流路径上，通过站内加热、矩阵分发、评论区关键词承接和私信引导，把高意向用户沉淀到私域社群。',
      '私域运营上，搭建“公域引流 - 私域承接 - 社群培育 - 课程转化”链路，持续优化用户标签、社群内容节奏和转化话术。',
      '团队管理上，管理 6 人内容团队，建立新人培训和选题复盘机制，让矩阵账号内容质量和留资效率保持稳定。',
    ],
    takeaway:
      '项目沉淀为教育 IP 的矩阵运营方法：用免费高价值内容建立信任，用评论区和私域完成用户分层，再用社群内容推动课程成交。',
    results: [
      '从 0-1 搭建考研 IP 账号，账号粉丝突破 15W+。',
      '打造多个 B 站主页百万播放爆品，提升 IP 在考研用户中的专业认知和信任度。',
      '沉淀矩阵运营 SOP，累计引流 50000+ 考研用户进入私域。',
      '通过私域承接、社群培育和课程转化，项目私域累计变现 1.2 亿。',
      '管理 6 人内容团队并建立培训体系，推动团队 GMV 同比增长 23%。',
    ],
    image: '/assets/project-education-ip.png',
    videos: [
      { src: '/assets/videos/yanlu-0717.mp4', label: '研路有你 · 7 月 17 日内容案例' },
      { src: '/assets/videos/yanlu-case-02.mp4', label: '研路有你 · 内容案例 02' },
      { src: '/assets/videos/yanlu-case-03.mp4', label: '研路有你 · 内容案例 03' },
    ],
    metrics: ['IP 粉丝 15W+', '多个 100W+ 播放', '私域引流 50000+', '累计变现 1.2亿', '团队 GMV +23%'],
    accent: 'violet',
  },
  {
    number: '04',
    period: '2024.01 - 2024.12',
    company: '考研培训个人项目',
    role: '项目负责人',
    category: '品牌搭建 · 内容增长 · 私域转化',
    title: '护理考研项目 · 知识付费闭环验证',
    description:
      '这是我个人从 0 到 1 验证的知识付费项目，目标是在没有成熟团队和大预算的情况下，验证“专业内容 IP - 私域承接 - 教材/课程售卖”的小闭环是否成立。',
    highlights: [
      '品牌定位上，围绕护理考研人群对资料、规划和专业课提分的需求，打造“护理考研一遍通”专业 IP。',
      '产品建设上，独立编写 40 万字考研教材，把碎片化内容沉淀成可交付、可售卖、可复购的知识产品。',
      '内容运营上，负责“研知岸”公众号和小红书账号的选题策划、内容发布、私域承接和用户答疑。',
      '转化验证上，通过持续输出专业内容建立信任，再把用户引导至私域，完成资料、课程和社群服务转化。',
    ],
    takeaway:
      '项目验证了我从内容生产者到小型项目负责人的完整能力：既能写内容、做产品，也能处理用户承接、社群信任和付费转化。',
    results: [
      '独立完成护理考研 IP 从定位、内容、教材到私域转化的完整链路验证。',
      '累计沉淀粉丝 2000+，引导 1500+ 用户进入私域。',
      '通过教材、资料、课程和社群服务完成商业化验证，实现盈利 10W+。',
      '沉淀高完播、高转化内容模型，为后续教育垂类账号和知识付费项目提供可复用经验。',
    ],
    image: '/assets/project-private-domain.png',
    mediaImage: '/assets/nursing-xhs-profile.png',
    metrics: ['教材 40 万字', '沉淀粉丝 2000+', '私域用户 1500+', '盈利 10W+'],
    accent: 'gold',
  },
];

const coreCapabilities = [
  '熟练使用蝉妈妈、云图、飞瓜等工具追踪竞品，拆解爆款逻辑；结合产品卖点与5A人群，通过A/B测试及消耗、点击率、ROI等数据诊断，搭建爆款内容框架与素材库。',
  '熟练运营官旗账号、商业IP与矩阵号，结合品牌定位、5A人群画像与营销节点，完成用户洞察、竞品分析及内容SOP搭建。',
  '多品类行业经验：九阳、六神、淘淘氧棉、立白、红蜻蜓等小家电、个护、快消品和服装类目；单月千万GMV，具备快速跨赛道迁移用户心智与内容逻辑的能力。',
  '熟练运用国内外AI与Agent工具，实现文案裂变、数据分析、文生图 / 视频及爆款画面复用，高效完成选题、脚本、素材拆解与数据归纳。',
  '善于千川全域投流，能够结合千川、创作者中心等后台数据定位问题并持续优化爆款内容。',
  '具备10人团队与多项目并行管理经验，统筹人员分工、项目排期、内容审核、数据复盘与绩效管理。',
  '具备星图达人筛选、商务沟通、Brief输出、脚本审核与数据分析经验。',
];

const experiences = [
  {
    time: '2025.10 - 2026.07',
    company: '杭州九阳生活电器有限公司',
    role: '内容运营',
    summary: '抖音官旗 / 千川编导 / 达人协同',
  },
  {
    time: '2024.08 - 2025.10',
    company: '杭州时代芳华文化科技有限公司',
    role: '编导、运营主管',
    summary: '品牌项目统筹 / 内容增长 / 团队管理',
  },
  {
    time: '2023.06 - 2024.08',
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
        '.profile-education',
        '.project-card',
        '.project-context',
        '.project-insight',
        '.project-takeaway',
        '.project-results',
        '.project-metrics span',
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
          <GlitchText speed={1} enableShadows enableOnHover className="logo-glitch">
            ZQS
          </GlitchText>
          <span className="logo-mark">®</span>
        </a>
        <div className="nav-links">
          <a href="#profile">关于我</a>
          <a href="#projects">精选项目</a>
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
            BRAND / CONTENT / QIANCHUAN · 2026
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
            <span>把内容做成</span>
            <br />
            <em>增长结果</em>
          </motion.h1>
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-intro"
          >
            郑强帅 · 内容运营 / 千川编导
            <br />
            4 年新媒体实战，擅长用内容策略、AI 工作流与数据复盘，搭建从爆款生产到生意转化的闭环。
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
          ['1.2亿', '教育私域累计变现'],
          ['10 人', '内容投放团队管理'],
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
          title="以内容为入口，负责从策略到素材、投放协同与转化的闭环。"
        />

        <div className="profile-grid">
          <div className="profile-aside">
            <div className="portrait-card" data-reveal>
              <img src="/assets/profile-casual.jpg" alt="郑强帅个人照片" />
            </div>

            <div className="profile-education" data-reveal>
              <span>EDUCATION / 教育背景</span>
              <h3>四川传媒学院 · 影视广播编导 · 本科</h3>
              <div className="profile-education-meta">
                <p>2020 - 2024</p>
                <p>专业排名前 5%</p>
                <p>GPA 3.5</p>
              </div>
              <p className="profile-education-courses">
                专业课程：人像摄影 96 / 新媒体概论 95 / 新媒体创作 95 / 市场营销 98 / 影视编辑 96
              </p>
            </div>
          </div>

          <div className="profile-content" data-reveal>
            <div className="profile-statement">
              <Sparkles size={24} />
              <p>
                我不是把内容当成单条作品来做，而是把它放进品牌、人群、货品、投放和转化链路里经营。
                从九阳官旗到多品牌矩阵、从教育 IP 到私域课程，我更关注内容能否被复用、被测试、被放大，并最终带来结果。
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
          title="把履历里的职责，拆成可以被复用的增长方法。"
          copy="以下项目来自真实工作和个人运营经历，重点呈现我如何判断业务场景、搭建内容机制，并用数据复盘推动结果。"
        />

        <div className="experience-block projects-experience" data-reveal>
          <div className="experience-label">CAREER PATH</div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-row" key={`${item.time}-${item.company}`}>
                <time>{item.time}</time>
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.summary}</p>
                </div>
                <strong>{item.role}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="project-cases-heading" data-reveal>
          <span>PROJECT CASES</span>
          <p>代表项目、动作与结果</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project-card project-card-${project.number} accent-${project.accent}`}
              key={project.title}
              data-reveal
            >
              <div
                className={`project-visual project-media-slot ${project.videos?.length ? 'has-videos' : ''} ${project.mediaImage ? 'has-image' : ''}`}
                data-project={project.number}
              >
                {project.videos?.length ? (
                  <div className="project-video-grid">
                    {project.videos.map((video) => (
                      <figure className="project-video-item" key={video.src}>
                        <video controls muted playsInline preload="metadata">
                          <source src={video.src} type="video/mp4" />
                          你的浏览器暂不支持视频播放。
                        </video>
                        <figcaption>{video.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : project.mediaImage ? (
                  <img
                    className="project-case-image"
                    src={project.mediaImage}
                    alt={`${project.title}案例截图`}
                    loading="lazy"
                  />
                ) : null}
                <div className="project-visual-meta">
                  <span>CASE {project.number}</span>
                  <strong>{project.role}</strong>
                </div>
              </div>
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
                <div className="project-section-label">APPROACH / 执行方法</div>
                <div className="project-insights">
                  {project.highlights.map((highlight, index) => (
                    <div className="project-insight" key={highlight}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
                <p className="project-takeaway">{project.takeaway}</p>
                <div className="project-results">
                  <div className="project-results-label">业绩结果</div>
                  <div className="project-results-list">
                    {project.results.map((result) => (
                      <p key={result}>
                        <Check size={15} />
                        <span>{result}</span>
                      </p>
                    ))}
                  </div>
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
            一起把下一份
            <br />
            <em>内容增长目标</em>
            <br />
            做成结果。
          </h2>
        </div>

        <div className="contact-visual" data-reveal>
          <img src="/assets/contact-wechat-transparent.png" alt="微信二维码" />
        </div>

        <div className="contact-card" data-reveal>
          <span>AVAILABLE FOR INTERVIEW</span>
          <p>我目前正在寻找内容运营与千川编导相关机会，期待与你聊聊。</p>
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
