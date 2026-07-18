const products = [
  {
    slug: "codex-app",
    name: "OpenAI Codex App",
    tag: "AI Coding",
    tagline: "把多个长时间运行的编码 Agent 放进一个可监督的桌面工作台",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=85"
    ],
    positioning: "面向专业软件交付的多 Agent 指挥中心。壁垒不只在模型能力，更在任务隔离、上下文延续、变更审阅与本地开发环境的完整闭环。",
    audience: ["软件工程师", "独立开发者", "技术负责人"],
    killerFeature: "并行运行多个独立 Agent，并通过线程、工作树和差异审阅统一监督交付。",
    experience: "用户以项目和任务为中心管理 Agent，而不是停留在单个聊天框；过程、产物与验证结果持续可见。",
    growth: "从开发者高频工作流切入，通过 CLI、IDE、桌面端和插件生态扩大使用场景与团队渗透率。",
    businessModel: "订阅套餐内提供基础额度，并通过更高套餐、团队席位和额外使用额度变现。",
    insight: "Agent 产品的下一阶段不是增加一个聊天入口，而是让用户能够并行委派、检查风险并接管关键决策。",
    sourceUrl: "https://openai.com/index/introducing-the-codex-app/",
    sourceLabel: "OpenAI 官方发布",
    sources: [
      { label: "OpenAI 发布", url: "https://openai.com/index/introducing-the-codex-app/" },
      { label: "OpenAI / X", url: "https://x.com/OpenAI" },
      { label: "GitHub", url: "https://github.com/openai/codex" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/openai" }
    ]
  },
  {
    slug: "google-flow",
    name: "Google Flow",
    tag: "AI Video",
    tagline: "把 Veo、Imagen 与 Gemini 组合成面向连续叙事的 AI 电影制作工具",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=85"
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/bhmZflwma64?rel=0",
    positioning: "面向创作者的 AI 影像工作台。壁垒来自 Google 多模态模型组合、角色与场景一致性，以及从素材到镜头的连续创作流程。",
    audience: ["导演与编剧", "视频创作者", "品牌内容团队"],
    killerFeature: "用一致的角色、场景和素材生成连续镜头，并在同一工作区继续编辑和扩展故事。",
    experience: "产品围绕故事、镜头和素材组织生成过程，减少在多个模型工具之间复制提示词与重新建立上下文。",
    growth: "借助 Google AI Pro／Ultra 套餐分发，通过作品案例、创作者社区和模型能力更新持续拉新。",
    businessModel: "绑定 Google AI 订阅套餐，以生成额度和前沿模型访问权限形成分层付费。",
    insight: "生成式视频的竞争点正在从单个惊艳片段转向跨镜头一致性、可编辑性和完整叙事工作流。",
    sourceUrl: "https://blog.google/innovation-and-ai/products/google-flow-veo-ai-filmmaking-tool/",
    sourceLabel: "Google 官方发布",
    sources: [
      { label: "Google 发布", url: "https://blog.google/innovation-and-ai/products/google-flow-veo-ai-filmmaking-tool/" },
      { label: "Google Labs / X", url: "https://x.com/GoogleLabs" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/google-flow" }
    ]
  },
  {
    slug: "notion-enterprise-search",
    name: "Notion Enterprise Search",
    tag: "AI Workspace",
    tagline: "让团队在 Notion 和连接的工作应用中，用一次提问找到带来源的答案",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85"
    ],
    positioning: "定位为团队知识入口。壁垒来自既有工作空间、权限体系、第三方连接器和可持续积累的组织上下文。",
    audience: ["知识工作者", "产品与运营团队", "中大型企业"],
    killerFeature: "跨 Notion、Slack、Google Drive 等来源检索，并在答案中保留引用和原始权限。",
    experience: "用户无需先判断信息存在哪个工具里；快速答案和 Research Mode 分别覆盖即时查询与深度研究。",
    growth: "从 Notion 现有团队用户自然升级，通过连接器增加使用价值，并以跨部门知识检索推动席位扩张。",
    businessModel: "作为 Business 与 Enterprise 套餐的重要增值能力，通过团队席位和企业治理需求变现。",
    insight: "企业 AI 的护城河往往不是回答更聪明，而是能否安全接入真实数据、保留权限并提供可验证来源。",
    sourceUrl: "https://www.notion.com/en-gb/product/enterprise-search",
    sourceLabel: "Notion 官方产品页",
    sources: [
      { label: "Notion 产品页", url: "https://www.notion.com/en-gb/product/enterprise-search" },
      { label: "Notion / X", url: "https://x.com/NotionHQ" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/notion" }
    ]
  },
  {
    slug: "perplexity-shopping",
    name: "Perplexity Shopping",
    tag: "AI Commerce",
    tagline: "从商品研究、比较到购买，把搜索答案进一步变成交易动作",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=85"
    ],
    positioning: "定位为对话式购物决策助手。壁垒来自搜索与引用能力、用户查询上下文、商品数据以及逐步完善的交易闭环。",
    audience: ["高频网购用户", "复杂品类消费者", "内容型电商用户"],
    killerFeature: "根据自然语言需求生成候选商品、解释推荐理由，并将部分商品直接带入购买流程。",
    experience: "用户通过连续追问收窄预算、场景和偏好，不必反复打开搜索结果、评测与电商详情页。",
    growth: "依托免费搜索流量建立购物入口，通过节日促销、支付合作和个性化记忆提高转化与复购。",
    businessModel: "潜在收入来自商家合作、导购佣金、支付合作及高阶订阅，同时需要管理推荐中立性。",
    insight: "Shopping Agent 的价值不在展示更多商品，而在降低比较成本并让用户对最终选择更有信心。",
    sourceUrl: "https://www.perplexity.ai/changelog/what-we-shipped-may-30th",
    sourceLabel: "Perplexity 官方更新",
    sources: [
      { label: "Perplexity 更新", url: "https://www.perplexity.ai/changelog/what-we-shipped-may-30th" },
      { label: "Perplexity / X", url: "https://x.com/perplexity_ai" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/perplexity-ai" }
    ]
  },
  {
    slug: "canva-magic-studio",
    name: "Canva Magic Studio",
    tag: "AI Design",
    tagline: "把文案、图片、视频与版式生成集中到一个大众化设计工作流中",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1600&q=85"
    ],
    positioning: "定位为非专业用户也能使用的一站式 AI 设计套件。壁垒来自海量模板、编辑器、品牌资产和成熟的协作分发网络。",
    audience: ["市场运营", "中小企业", "内容创作者"],
    killerFeature: "从一句需求生成可继续编辑的文案、视觉和视频，并快速适配多个发布尺寸。",
    experience: "AI 能力嵌入用户熟悉的画布和模板流程，生成结果不是终点，而是可修改、可协作的设计起点。",
    growth: "通过免费模板和低门槛编辑获取用户，再用 AI 功能、品牌管理与团队协作推动升级。",
    businessModel: "Freemium 模式叠加 Pro、Teams 与 Enterprise 订阅，高阶 AI 用量和品牌治理形成付费差异。",
    insight: "大众 AI 创作工具应把生成能力嵌入成熟任务链，让用户获得可发布、可复用、符合品牌的一组资产。",
    sourceUrl: "https://www.canva.com/newsroom/news/magic-studio/",
    sourceLabel: "Canva 官方发布",
    sources: [
      { label: "Canva 发布", url: "https://www.canva.com/newsroom/news/magic-studio/" },
      { label: "Canva / X", url: "https://x.com/canva" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/canva" }
    ]
  }
];

const industryEvents = [
  {
    slug: "kimi-k3",
    name: "Moonshot AI · Kimi K3",
    summary: "Kimi K3 以 2.8T 参数、原生视觉与 100 万上下文，向前沿开放权重模型发起新一轮冲击",
    image: "https://kimi-file.moonshot.cn/prod-chat-kimi/kfs/4/2/2026-07-17/d9cs7176rtp4tqfofnsg?x-tos-process=image%2Fauto-orient%2C1%2Fstrip%2Fignore-error%2C1",
    videoUrl: "https://video.twimg.com/amplify_video/2077820634730749952/vid/avc1/1920x1080/-7JLoNiYg2boupuD.mp4?tag=29",
    images: [
      "https://kimi-file.moonshot.cn/prod-chat-kimi/kfs/4/2/2026-07-17/d9cs7176rtp4tqfofnsg?x-tos-process=image%2Fauto-orient%2C1%2Fstrip%2Fignore-error%2C1",
      "https://kimi-file.moonshot.cn/prod-chat-kimi/kfs/4/2/2026-07-16/1d9chlgn6rtp4tqfnnmjg?x-tos-process=image%2Fauto-orient%2C1%2Fstrip%2Fignore-error%2C1",
      "https://kimi-file.moonshot.cn/prod-chat-kimi/kfs/4/2/2026-07-17/1d9cv7rt3v89kkemm3860?x-tos-process=image%2Fauto-orient%2C1%2Fstrip%2Fignore-error%2C1"
    ],
    impact: "前沿能力、推理成本与开放程度开始被放在同一张竞争表上，创业团队拥有更多可部署、可微调的底层选择。",
    insight: "减少对单一模型的绑定，把长期壁垒放在专有数据、任务评测、工作流与分发渠道上。",
    sourceUrl: "https://www.kimi.com/blog/kimi-k3",
    sourceLabel: "Kimi 官方发布",
    sources: [
      { label: "Kimi 发布", url: "https://www.kimi.com/blog/kimi-k3" },
      { label: "Kimi 官方视频 / X", url: "https://x.com/Kimi_Moonshot/status/2077821890207547467?s=20" },
      { label: "Moonshot AI / GitHub", url: "https://github.com/MoonshotAI" }
    ]
  },
  {
    slug: "chatgpt-work",
    name: "OpenAI · ChatGPT Work",
    summary: "ChatGPT Work 把插件、Sites、定时任务与 Codex 汇入同一桌面工作空间，重做复杂任务的入口",
    image: "https://images.ctfassets.net/kftzwdyauwt9/3zuG1U7vovcdCnrvHKD29K/00129a9e8d57a02da54c9e9e57d9f87a/OAI_ChatGPTWork_PressBlog_WebMobilePicker_16x9_260708.png?fm=webp&q=90&w=3840",
    images: [
      "https://images.ctfassets.net/kftzwdyauwt9/3zuG1U7vovcdCnrvHKD29K/00129a9e8d57a02da54c9e9e57d9f87a/OAI_ChatGPTWork_PressBlog_WebMobilePicker_16x9_260708.png?fm=webp&q=90&w=3840",
      "https://images.ctfassets.net/kftzwdyauwt9/3340Q2XYfbsirvvYoKTrMY/12887973ea8709d9dd2a25c0d11d0abe/OAI_ChatGPTWork_PressBlog_PluginDirectory_16x9_260708.png?fm=webp&q=90&w=3840"
    ],
    impact: "通用对话框正在变成可安装、可编排、可持续执行的工作操作系统，平台竞争进一步延伸到任务入口与交付界面。",
    insight: "不要只设计一次回答；要设计任务如何接入上下文、调用工具、持续运行，并以可复核的结果完成交付。",
    sourceUrl: "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
    sourceLabel: "OpenAI 官方发布",
    sources: [
      { label: "OpenAI 发布", url: "https://openai.com/index/chatgpt-for-your-most-ambitious-work/" },
      { label: "OpenAI / X", url: "https://x.com/OpenAI" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/openai" }
    ]
  },
  {
    slug: "claude-fable-mythos",
    name: "Anthropic · Claude Fable 5 / Mythos 5",
    summary: "Fable 5 与 Mythos 5 分别强化日常复杂任务与高难度专业工作，形成更清晰的能力和成本分层",
    image: "https://www.anthropic.com/_next/image?q=75&url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fb7055119423427c40a0e4d84054aed17682b50a2-2880x1620.png&w=3840",
    images: [
      "https://www.anthropic.com/_next/image?q=75&url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fb7055119423427c40a0e4d84054aed17682b50a2-2880x1620.png&w=3840",
      "https://www.anthropic.com/_next/image?q=75&url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1e65982497d7d4891219ed0e83141625a291b860-2600x2870.png&w=3840",
      "https://www.anthropic.com/_next/image?q=75&url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fd3c3efe0e8ab310856368cee2b2161439db6676a-1920x1080.png&w=3840"
    ],
    impact: "头部模型厂商进一步用能力、延迟与价格分层覆盖不同任务，单一旗舰模型不再是唯一产品组织方式。",
    insight: "先按任务价值和失败成本路由模型，再决定默认模型；把模型切换做成产品能力，而不是工程补丁。",
    sourceUrl: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    sourceLabel: "Anthropic 官方发布",
    sources: [
      { label: "Anthropic 发布", url: "https://www.anthropic.com/news/claude-fable-5-mythos-5" },
      { label: "Anthropic / X", url: "https://x.com/AnthropicAI" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/claude" }
    ]
  },
  {
    slug: "meta-muse-media",
    name: "Meta · Muse Image / Muse Video",
    summary: "Meta 发布 Muse Image 并预览 Muse Video，把搜索、编码、自我优化与原生音频带入生成式媒体模型",
    image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1020234107374296&version=1783727678",
    images: [
      "https://lookaside.fbsbx.com/elementpath/media/?media_id=1020234107374296&version=1783727678"
    ],
    impact: "媒体生成正在从单次出图升级为会搜索、写代码和自我修正的 Agent，同时把内容溯源内建为模型能力。",
    insight: "创作产品需要同时设计生成、编辑、验证和分发链路；可验证的来源标记会成为企业采用与平台分发的重要条件。",
    sourceUrl: "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",
    sourceLabel: "Meta 官方发布",
    sources: [
      { label: "Meta 发布", url: "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/" },
      { label: "AI at Meta / X", url: "https://x.com/AIatMeta" },
      { label: "Hacker News", url: "https://news.ycombinator.com/from?site=ai.meta.com" }
    ]
  },
  {
    slug: "mistral-robostral-navigate",
    name: "Mistral AI · Robostral Navigate",
    summary: "Mistral 发布仅凭单目 RGB 相机完成长程导航的 8B 模型，把多模态 Agent 推向真实机器人环境",
    image: "https://mistral.ai/images/heros/robostral/mistral-scene-light.webp",
    videoEmbedUrl: "https://www.youtube.com/embed/7dpLB9NoY1A?rel=0",
    impact: "具身智能的落地门槛正从多传感器硬件堆叠，转向轻量视觉模型、仿真数据与持续强化学习的组合。",
    insight: "机器人产品应先聚焦可量化的单一任务闭环，用真实环境失败数据持续训练，再逐步扩展硬件与场景覆盖。",
    sourceUrl: "https://mistral.ai/news/robostral-navigate/",
    sourceLabel: "Mistral AI 官方发布",
    sources: [
      { label: "Mistral 发布", url: "https://mistral.ai/news/robostral-navigate/" },
      { label: "官方演示", url: "https://www.youtube.com/watch?v=7dpLB9NoY1A" },
      { label: "Mistral AI / X", url: "https://x.com/MistralAI" }
    ]
  }
];

export const researchSources = [
  { label: "Product Hunt", url: "https://www.producthunt.com/topics/artificial-intelligence" },
  { label: "Reddit", url: "https://www.reddit.com/r/artificial/" },
  { label: "Hacker News", url: "https://news.ycombinator.com/newest" },
  { label: "GitHub Trending", url: "https://github.com/trending" },
  { label: "There’s An AI For That", url: "https://theresanaiforthat.com/" }
];

const trends = [
  {
    title: "开放权重模型进入前沿竞争",
    text: "模型能力、推理成本和开放程度正在同时竞争。创业团队可以更灵活地在闭源 API、开放权重与私有部署之间组合，但模型本身更难成为长期壁垒。"
  },
  {
    title: "AI 产品从工具升级为工作流平台",
    text: "插件、连接器、项目记忆和多 Agent 协作成为高频更新方向。产品价值从完成一次生成，转向持续理解上下文并推动任务交付。"
  },
  {
    title: "可验证、可控制成为体验核心",
    text: "引用来源、权限继承、过程状态、人工接管和安全降级越来越重要。用户愿意把更复杂的任务交给 AI，前提是能够理解结果来自哪里并控制关键步骤。"
  }
];

export const issues = [
  {
    slug: "2026-07-18",
    isoDate: "2026-07-18",
    dateLabel: "2026年7月18日",
    weekday: "星期六",
    oneSentence: "AI 产品的竞争正在从单点能力，转向可持续交付结果的完整工作流",
    products,
    industryEvents,
    trends
  },
  {
    slug: "2026-07-17",
    isoDate: "2026-07-17",
    dateLabel: "2026年7月17日",
    weekday: "星期五",
    oneSentence: "AI 产品的竞争焦点，正在从生成质量转向任务完成率",
    products: products.slice(0, 4),
    industryEvents: [],
    trends: []
  }
];

export const getLatestIssue = () => issues[0];
export const getIssue = (slug) => issues.find((issue) => issue.slug === slug);
