const products20260819 = [
  {
    slug: "clara-ai-sdr",
    name: "Clara AI SDR",
    tag: "Inbound AI SDR",
    tagline: "把高意向网站访客即时转成有资格的销售机会，并自动演示、答疑、异议处理和预约会议",
    image: "https://clarasdr.ai/clarasdr_open_graph_image.png",
    positioning: "定位为网站内的全流程 AI 销售代表，而不是收集联系方式的聊天窗口。壁垒来自把产品资料、实时意图识别、个性化演示、CRM 写回和人工接管组合成连续成交路径。",
    audience: ["有稳定网站流量的 B2B SaaS 团队", "需要覆盖多时区的销售与市场团队", "希望提升入站线索转化率的增长负责人"],
    killerFeature: "访客无需填表或等待销售，Clara 会实时资格判断、展示匹配其角色与行业的产品内容、处理异议并直接预约会议；高意向会话还能带摘要交给人工。",
    experience: "团队上传 Pitch、产品文档、FAQ 和销售脚本后，把 Clara 部署到网站或产品内；访客以自然语言进入一段完整购买对话，销售在需要时从 Slack、Teams 等渠道接手。",
    growth: "以免费 10 次买家对话和在线演示降低试用门槛，借 Product Hunt 首日榜首获得早期曝光，再通过 CRM 集成、跨语言覆盖和可量化的会议预约向中大型团队扩张。",
    businessModel: "Starter 免费含每月 10 次买家对话；Pay as You Go 为每月 299 美元含 300 次对话并按超额用量收费；Enterprise 提供无限并发、白标、自托管与定制集成。",
    insight: "入站销售 Agent 的价值不在多聊几句，而在把访客意图、产品演示、资格判断和人工接管连成一条可归因漏斗；每一步都应能回写 CRM 并衡量转化。",
    sourceUrl: "https://clarasdr.ai/",
    sourceLabel: "Clara 官方网站",
    sources: [
      { label: "Clara 官网", url: "https://clarasdr.ai/" },
      { label: "Clara 官方定价", url: "https://clarasdr.ai/#pricing" },
      { label: "Product Hunt 首发", url: "https://www.producthunt.com/products/clara-ai-sdr" }
    ]
  },
  {
    slug: "superflow-ai-qa",
    name: "Superflow AI",
    tag: "Agentic Website QA",
    tagline: "把团队现有 QA 清单变成并行网站检查 Agent，在桌面与移动端定位问题并等待人工放行",
    image: "https://usesuperflow.ai/opengraph-image.png",
    positioning: "定位为网站上线前的 Agentic QA 层，而不是通用爬虫或又一套评论工具。壁垒来自把团队自有检查标准转成可学习 Agent、跨页面并行执行，并把发现直接钉在真实页面上。",
    audience: ["Webflow、Framer 与 Shopify 代理商", "频繁发布营销网站的增长团队", "需要品牌、内容和功能联合验收的 QA 团队"],
    killerFeature: "上传 XLS、CSV、PDF 或文档清单后自动生成一组专职 Agent，同时扫过桌面和移动页面；被否决的问题不再重复，人工补抓的遗漏会变成以后检查项。",
    experience: "用户沿用已有验收清单并安装脚本，Agent 在几分钟内并行检查大量页面、附上截图和页面定位；最终判断仍由人完成，确认前内容不会被视为可发布。",
    growth: "用免费 500 Credits 覆盖一次真实站点检查，通过 Webflow、Framer、WordPress、Shopify、Next.js 与 Netlify 适配进入现有交付栈，再借共享问题与团队记忆推动协作扩散。",
    businessModel: "当前免费起步且无需信用卡，以 Credits 承担扫描成本；后续商业价值可围绕高频运行、团队席位、项目管理双向同步和企业治理分层。",
    insight: "生成速度提升后，验证会成为新的交付瓶颈；最有效的 QA Agent 不是给出一份泛化报告，而是学习团队标准、提供页面证据并保留明确的人工发布权。",
    sourceUrl: "https://usesuperflow.ai/",
    sourceLabel: "Superflow 官方网站",
    sources: [
      { label: "Superflow 官网", url: "https://usesuperflow.ai/" },
      { label: "Product Hunt 首发", url: "https://www.producthunt.com/products/superflow-webflow-plugin-for-revisions" },
      { label: "Product Hunt 团队说明", url: "https://www.producthunt.com/products/superflow-webflow-plugin-for-revisions#superflow-ai" }
    ]
  },
  {
    slug: "elevenlabs-mcp-claude",
    name: "ElevenLabs MCP in Claude",
    tag: "Voice Agent Operations",
    tagline: "在 Claude 中用自然语言配置、检查和改进 ElevenLabs 语音 Agent，并通过 OAuth 统一授权",
    image: "https://opengraph.githubassets.com/1/elevenlabs/elevenlabs-mcp",
    positioning: "定位为 ElevenLabs 语音 Agent 的对话式运维入口，而不是只生成音频的 MCP 工具。壁垒来自官方 API 覆盖、Claude Connectors 分发、OAuth 授权和对既有 Agent 配置的读写闭环。",
    audience: ["运营 ElevenLabs 语音 Agent 的产品团队", "希望减少控制台操作的客服与销售团队", "在 Claude 中编排语音工作流的开发者"],
    killerFeature: "连接账户一次后即可让 Claude 查找、审阅、复制、删除或更新语音 Agent 的提示词与声音，并在对话中检查运行配置和持续改进。",
    experience: "用户从 Claude 连接器目录完成 OAuth，无需手工搬运 API Key；随后用自然语言描述要审查或调整的 Agent，Claude 调用官方工具执行并返回可继续讨论的配置结果。",
    growth: "借 Claude 连接器目录触达现有付费用户，同时以官方开源 MCP Server 覆盖 Cursor、Claude Desktop 等开发者入口，让语音能力从 API 发现转成工作流内安装。",
    businessModel: "MCP 连接器本身作为生态入口，实际使用沿用 ElevenLabs 语音、Agent 与 API 的订阅和用量计费；Claude 侧能力与可用性取决于对应套餐。",
    insight: "MCP 的高价值不只是让模型调用新功能，而是让运营人员在熟悉的对话入口管理既有生产对象；官方 OAuth、对象级权限和变更可追踪决定能否进入真实团队。",
    sourceUrl: "https://claude.ai/directory/elevenlabs",
    sourceLabel: "Claude 官方连接器目录",
    sources: [
      { label: "Claude 官方目录", url: "https://claude.ai/directory/elevenlabs" },
      { label: "ElevenLabs 官方 MCP", url: "https://github.com/elevenlabs/elevenlabs-mcp" },
      { label: "Product Hunt 首发", url: "https://www.producthunt.com/products/elevenlabs-mcp-2" },
      { label: "Reddit 社区发布", url: "https://www.reddit.com/r/ElevenLabs/comments/1vqtisu/introducing_the_elevenlabs_mcp_now_available_in/" }
    ]
  },
  {
    slug: "controller-ai",
    name: "Controller AI",
    tag: "Deterministic Agent Workflows",
    tagline: "把关键业务流程做成带类型、版本和审批的 Agent 工具，让每次执行遵循同一条可审计路径",
    image: "https://getcontroller.ai/og-image-v3.png",
    positioning: "定位为 Agent 的确定性执行与治理层。壁垒来自可视化工作流、类型化输入输出、开发与线上版本、逐节点运行日志、人工审批，以及两千多个业务系统集成。",
    audience: ["把 Agent 接入财务、广告和运营流程的团队", "需要审计与审批的企业自动化负责人", "希望把业务规则从长提示词中抽离的 Agent 开发者"],
    killerFeature: "团队先把流程画成可测试工作流，再作为 Tool 挂到 Agent；模型负责判断何时调用，Controller 保证同样步骤和结构化输出，并在高风险动作前等待人工批准。",
    experience: "用户可从现成集成动作开始，也可组合分支、转换、状态和子流程；每次运行都能查看输入、输出、耗时与错误，修改先在开发版本验证后再发布到线上。",
    growth: "以免费选项和自然语言生成工作流降低首次搭建成本，通过 Product Hunt 展示受控 Agent 差异，再借常用 SaaS 集成与团队共享进入生产流程。",
    businessModel: "官网提供免费起步，付费价值围绕工作流运行量、更多集成、团队协作、版本治理和企业级安全支持展开；具体套餐以官方产品内报价为准。",
    insight: "让 Agent 可靠执行的关键不是把流程写进更长提示，而是把规则变成有类型、有版本、有审批的产品对象；推理与确定性执行应各自承担擅长的部分。",
    sourceUrl: "https://getcontroller.ai/",
    sourceLabel: "Controller AI 官方网站",
    sources: [
      { label: "Controller AI 官网", url: "https://getcontroller.ai/" },
      { label: "Controller AI 文档", url: "https://docs.getcontroller.ai/" },
      { label: "Product Hunt 首发", url: "https://www.producthunt.com/products/insight-ai" }
    ]
  },
  {
    slug: "meterless-ai",
    name: "Meterless.ai",
    tag: "Local-First Agent Runtime",
    tagline: "把桌面操作、长期记忆和多 Agent 图保存在本地，让成功工作流跨会话、设备与模型持续复用",
    image: "https://opengraph.githubassets.com/1/Meterless/Meterless",
    positioning: "定位为用户拥有的本地 Agent 工作层，而不是一次性聊天输出。壁垒来自 Relay 可复用任务、Gaia 分层记忆、Swarms 可视化任务图，以及模型无关、可审计的开源 Runtime。",
    audience: ["重视隐私与本地控制的知识工作者", "需要重复桌面流程的运营团队", "构建长期运行与多 Agent 系统的开发者"],
    killerFeature: "Relay 记录并视觉验证跨应用步骤，成功运行保存为 Mission 后可编辑、计划和重放；Gaia 保留项目记忆，Swarms 把一个目标展开成可见、可检查的并行 Agent 图。",
    experience: "用户描述任务并只授权必要窗口，先审查计划和批准高风险步骤；完成后保留任务图、证据和记忆，下次可换更便宜模型复用结构，不必把全部历史重新塞进上下文。",
    growth: "以浏览器内免费工具、Apache 2.0 引擎和 GitHub 可复现实验吸引隐私与 Agent 开发者，再用 Windows Relay、Gaia 候补和平台实施服务承接高价值场景。",
    businessModel: "免费工具与开源引擎负责获客，桌面应用二进制保持专有；未来收入可来自 Relay、Gaia 等产品订阅、企业实施与把 Meterless Runtime 嵌入客户平台。",
    insight: "长期 Agent 的真正资产不是某次模型回答，而是可迁移的任务结构、状态、证据和记忆；让用户拥有这些资产，才能降低模型切换和重复推理成本。",
    sourceUrl: "https://meterless.ai/",
    sourceLabel: "Meterless 官方网站",
    sources: [
      { label: "Meterless 官网", url: "https://meterless.ai/" },
      { label: "Meterless 官方 GitHub", url: "https://github.com/Meterless/Meterless" },
      { label: "Product Hunt 首发", url: "https://www.producthunt.com/products/meterless-ai" }
    ]
  }
];

const industryEvents20260819 = [
  {
    slug: "chatgpt-for-teens",
    name: "OpenAI · ChatGPT for Teens",
    summary: "OpenAI 为 13 至 17 岁用户推出自动启用的青少年体验，把学习引导、健康使用和更强默认保护组合在一起",
    image: "https://images.ctfassets.net/kftzwdyauwt9/3zuG1U7vovcdCnrvHKD29K/00129a9e8d57a02da54c9e9e57d9f87a/OAI_ChatGPTWork_PressBlog_WebMobilePicker_16x9_260708.png?fm=webp&q=90&w=3840",
    impact: "通用 AI 产品开始按年龄重做默认体验，而不是只增加一层内容过滤。年龄预测、Study Mode、作业提醒、Study Hours、家长控制和高风险通知被放进同一产品面，教育价值与发展阶段安全将共同影响未成年用户的采用。",
    insight: "面向未成年人的 AI 应把年龄识别、默认保护、家长可控边界和学习目标做成系统能力；既不能把责任推给一份条款，也不能让家长控制演变为无限读取私人对话。",
    sourceUrl: "https://openai.com/index/chatgpt-for-teens/",
    sourceLabel: "OpenAI 官方发布",
    sources: [
      { label: "OpenAI 官方发布", url: "https://openai.com/index/chatgpt-for-teens/" },
      { label: "OpenAI 青少年说明", url: "https://help.openai.com/en/articles/20001262-what-changes-when-a-chatgpt-user-turns-18" },
      { label: "Associated Press", url: "https://apnews.com/article/650cb35591de6546054d6c4e73b3290a" },
      { label: "Reddit 用户讨论", url: "https://www.reddit.com/r/OpenAI/comments/1vrn6rt/chatgpt_is_getting_a_dedicated_mode_for_teens/" }
    ]
  },
  {
    slug: "openai-astra-cyber-pacing",
    name: "OpenAI · Astra 训练与安全节奏调整",
    summary: "OpenAI 因 Astra 可能达到关键网络能力门槛暂停两周部署向强化学习，并继续暂缓最大规模前沿训练",
    image: "https://images.ctfassets.net/kftzwdyauwt9/3MPipvFMxS8m3kTyCtwFgj/015747dcd34cb667a221688cfca64e0f/Frame.png?w=3840&q=90&fm=webp",
    impact: "前沿实验室首次把研究环境隔离、全链路监控和对齐证据直接变成训练节奏的约束。OpenAI 表示工具型 Sol 级及以上训练与评测需监控，Astra 高风险工作负载采用更严格隔离，监控计算开销估计约为被监控推理的 20%。",
    insight: "高能力模型的发布门禁要前移到训练与评测环境；团队应预先定义触发暂停的能力阈值、网络与凭证边界、告警处置时限，以及恢复训练所需的证据。",
    sourceUrl: "https://openai.com/index/pacing-model-development-cyber-capabilities/",
    sourceLabel: "OpenAI 官方安全更新",
    sources: [
      { label: "OpenAI 官方更新", url: "https://openai.com/index/pacing-model-development-cyber-capabilities/" },
      { label: "OpenAI 事故披露", url: "https://openai.com/index/third-party-cyber-evaluations-involving-openai-models/" },
      { label: "Axios", url: "https://www.axios.com/2026/08/18/openai-pause-astra-preparedness-framework" },
      { label: "Reddit 行业讨论", url: "https://www.reddit.com/r/ArtificialInteligence/comments/1vrz5h9/openai_paused_ai_training_for_two_weeks_unveils/" }
    ]
  },
  {
    slug: "ports-pike-ai-campus",
    name: "OpenAI × NVIDIA × SB Energy · PORTS-Pike",
    summary: "OpenAI 签约俄亥俄州约 8 IT-GW 算力园区，NVIDIA 提供独家计算栈、信用支持并向 SB Energy 投资 15 亿美元",
    image: "https://iprsoftwaremedia.com/219/files/202608/091eea2d2fde579be40f8220fdb42526/partner-promo-pack-logo-lockup-openai-sbenergy-5590550_-press-1920x1080-1.png",
    impact: "项目以 20 年租约把土地、电力、建筑、芯片和模型需求绑定到同一基础设施合同，首批 800MW 目标于 2028 年可用，完整建设预计延续至 2032 年。算力竞争正从采购 GPU 升级为锁定十年级能源、融资与社区承诺。",
    insight: "超大算力项目需要把容量里程碑、电网成本、水资源、技术升级周期和社区收益公开成可核验指标；规模越大，融资结构与单一客户风险越应透明。",
    sourceUrl: "https://openai.com/index/openai-joins-ports-pike-project/",
    sourceLabel: "OpenAI 官方公告",
    sources: [
      { label: "OpenAI 官方公告", url: "https://openai.com/index/openai-joins-ports-pike-project/" },
      { label: "NVIDIA 官方新闻稿", url: "https://nvidianews.nvidia.com/news/nvidia-guarantees-sb-energy-s-ports-pike-technology-campus-in-ohio-to-exclusively-host-nvidia-ai-compute" },
      { label: "Axios", url: "https://www.axios.com/2026/08/17/openai-nvidia-ohio-data-center-sb-energy" },
      { label: "Reddit 行业讨论", url: "https://www.reddit.com/r/technology/comments/1vr12af/openai_announces_massive_data_center_in_ohio_with/" }
    ]
  },
  {
    slug: "openai-democratic-ai-oversight",
    name: "OpenAI · 民主监督能力计划",
    summary: "OpenAI 启动政府 AI 国家安全监督计划，并投入 500 万美元培训、技术支持、Credits 与审查工具试点",
    image: "https://images.ctfassets.net/kftzwdyauwt9/7FgrwtDxicVhqi90R8xgcb/cd3875f42be331450c82ce2ee818cc68/openai-presence-still-1.png?fm=webp&q=90&w=3840",
    impact: "政府采用 AI 后，监督机构也需要能审查输入、输出与工具调用，传统人工抽查难以跟上机器速度。该计划提出可追踪、可读且尽量模型无关的审查工具，同时让授权机构保有证据和结论控制权。",
    insight: "高风险 Agent 的治理产品不应只服务部署方，也要服务独立监督者；证据归属、权限隔离、模型无关导出和人类最终判断，应从架构阶段就确定。",
    sourceUrl: "https://openai.com/index/strengthening-democratic-oversight-in-national-security/",
    sourceLabel: "OpenAI 官方公告",
    sources: [
      { label: "OpenAI 监督计划", url: "https://openai.com/index/strengthening-democratic-oversight-in-national-security/" },
      { label: "OpenAI 国家安全原则", url: "https://openai.com/index/government-national-security-partnerships/" },
      { label: "OpenAI Preparedness Framework", url: "https://openai.com/index/updating-our-preparedness-framework/" }
    ]
  },
  {
    slug: "snowflake-cortex-model-rbac-migration",
    name: "Snowflake Cortex AI · Model RBAC 迁移",
    summary: "Snowflake 从 8 月 17 日开始把 Cortex 模型 Allowlist 映射到 Model RBAC，并将逐步强制嵌入模型权限",
    image: "https://www.snowflake.com/content/dam/snowflake-site/blog/security/12-security.png",
    impact: "企业 AI 的模型访问控制从账户级开关转向可授予具体角色的权限对象。迁移持续至 9 月 4 日，随后 2026_07 Bundle 将推进嵌入模型 RBAC；PUBLIC 角色回填并不覆盖所有执行上下文，生产团队需要主动验证。",
    insight: "多模型平台应把模型与工具都纳入最小权限和回归测试；自动迁移只能解决常见路径，Native Apps、受限调用者与禁用次级角色等边界必须逐一演练。",
    sourceUrl: "https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-2378",
    sourceLabel: "Snowflake 官方发布说明",
    sources: [
      { label: "Snowflake 迁移说明", url: "https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-2378" },
      { label: "Cortex 模型权限文档", url: "https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql-privileges-and-access" },
      { label: "Snowflake AI 治理公告", url: "https://www.snowflake.com/en/blog/enterprise-ai-security-agentic-mcp-governance/" }
    ]
  }
];

const trends20260819 = [
  {
    title: "Agent 竞争从会执行转向可验证、可批准与可重复",
    text: "Superflow 把 QA 清单变成有截图证据的并行检查，Controller 把流程做成带版本和审批的工具，OpenAI 则因 Astra 风险把暂停门禁前移到训练阶段。产品价值正在由自治程度转向可验收结果与清晰接管点。"
  },
  {
    title: "长期工作资产开始与底层模型解耦",
    text: "Meterless 把任务图、记忆和证据留给用户，ElevenLabs MCP 让生产语音 Agent 从不同对话入口被管理，近一周的本地工作台与多模型路由更新也指向同一趋势：真正可迁移的是工作结构，而不是一次回答。"
  },
  {
    title: "AI 治理正在按年龄、能力与组织角色细分",
    text: "ChatGPT for Teens 以年龄决定默认体验，OpenAI 对关键网络能力采用更严格训练隔离，Snowflake 把模型访问迁到角色级权限，民主监督计划则为审查者提供独立工具。统一条款正在让位于分层控制与专门界面。"
  }
];

const products20260718 = [
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

const industryEvents20260718 = [
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

const products20260719 = [
  {
    slug: "acti-agentic-keyboard",
    name: "Acti",
    tag: "Mobile Agent",
    tagline: "把手机键盘变成跨应用调用信息、文档和动作的 Agent 入口",
    image: "https://openacti.com/assets/landing-assets/og-social-20260625.png",
    positioning: "定位为 iOS 与 Android 上的 Agentic Keyboard。壁垒来自键盘这一高频系统入口、可复用 Skill 生态，以及团队在消费级键盘分发和增长上的长期经验。",
    audience: ["移动办公用户", "高频沟通者", "无代码自动化爱好者"],
    killerFeature: "在任意文本框长按 Acti Bar 触发 Skill，直接取回会议链接、Notion 文档、日历动作或实时信息。",
    experience: "用户先输入意图，再长按预览结果并主动应用；产品只有在明确触发时才处理当前请求，避免把键盘变成不可控的后台监听器。",
    growth: "用免费键盘降低安装门槛，以 Skill Builder、Skill Hub 和创作者分享形成供给与分发循环，并借助 Product Hunt 与应用商店扩大新品曝光。",
    businessModel: "当前服务免费，不销售订阅、内购或付费 Credits；免费额度用于控制 AI Skill 的使用量，商业化仍处于后续探索阶段。",
    insight: "Agent 的新入口不一定是独立 App；占据用户意图产生的高频界面，并把授权、预览和执行做成一个短闭环，可能更容易形成习惯。",
    sourceUrl: "https://openacti.com/what-is-agentic-keyboard/",
    sourceLabel: "Acti 官方介绍",
    sources: [
      { label: "Acti 官方介绍", url: "https://openacti.com/what-is-agentic-keyboard/" },
      { label: "Acti 使用条款", url: "https://openacti.com/terms/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/acti-2" }
    ]
  },
  {
    slug: "context-dev",
    name: "Context.dev",
    tag: "AI Data API",
    tagline: "用一个类型化 API 把网页、品牌和商品信息转成 Agent 可直接消费的结构化上下文",
    image: "https://ph-files.imgix.net/32a94a26-3db3-49c0-8b04-6ddd8ce5b479.png",
    positioning: "定位为软件与 AI Agent 的 Web Context 基础设施。壁垒来自抓取、反爬、清洗、实体解析与品牌数据的组合能力，以及统一的类型化响应。",
    audience: ["AI 应用开发者", "数据与增长团队", "需要网页上下文的 Agent 团队"],
    killerFeature: "输入域名或 URL，即可获得干净 Markdown、品牌资料、设计系统、截图或按 JSON Schema 提取的结构化结果。",
    experience: "开发者通过统一鉴权和 SDK 接入，不必分别维护浏览器、代理、HTML 清洗与品牌资产抓取；缓存命中与冷抓取的延迟边界也在文档中明确。",
    growth: "以免费额度和十分钟级接入吸引开发者，再通过 SDK、MCP、Zapier、Make 与表格集成进入更多工作流，并用客户案例强化可信度。",
    businessModel: "按月订阅和 API Credits 计费，提供 Free、Developer、Pro、Scale 与 Enterprise 分层，付费档支持超额用量、并发提升和企业治理。",
    insight: "Agent 数据层的价值不是抓到更多网页，而是把实时性、结构化、失败边界和成本模型做成稳定合同，让上层产品无需重复造轮子。",
    sourceUrl: "https://docs.context.dev/introduction",
    sourceLabel: "Context.dev 官方文档",
    sources: [
      { label: "官方文档", url: "https://docs.context.dev/introduction" },
      { label: "官方定价", url: "https://www.context.dev/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/context-dev" }
    ]
  },
  {
    slug: "anysearch",
    name: "AnySearch",
    tag: "Agent Search",
    tagline: "为 Agent 提供跨垂直数据源的实时检索、去重、融合排序和结构化输出",
    image: "https://anysearch.com/og.png?v=20260511",
    positioning: "定位为 AI Agent 专用搜索基础设施。壁垒来自按意图路由到不同垂直数据源、跨源融合排序，以及 API、MCP 和 Skill 的多入口分发。",
    audience: ["Agent 开发者", "研究与数据产品团队", "需要实时检索的企业应用"],
    killerFeature: "一次查询同时检索合适的垂直来源，过滤重复与低质量内容，并返回可直接放入模型上下文的结构化结果。",
    experience: "开发者可匿名试用或使用 API Key 提升配额，通过 OpenAI 风格的简单请求接入；MCP 与 Skill 包减少不同 Agent 客户端的适配成本。",
    growth: "以每天免费请求额度获取个人开发者，再用 Agent Skill、MCP 和开发者社区扩大集成面，并以更深垂直搜索推动团队与企业升级。",
    businessModel: "Free 计划提供固定日配额；Professional 面向生产团队并处于即将推出阶段，Enterprise 通过定制用量、安全与专属支持销售。",
    insight: "面向 Agent 的搜索应优化可消费的证据密度，而不是页面点击率；稳定结构、去重和来源质量会直接决定下游任务成功率。",
    sourceUrl: "https://www.anysearch.com/docs",
    sourceLabel: "AnySearch 官方文档",
    sources: [
      { label: "官方文档", url: "https://www.anysearch.com/docs" },
      { label: "官方定价", url: "https://anysearch.com/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/anysearch" }
    ]
  },
  {
    slug: "auriko",
    name: "Auriko",
    tag: "LLM Infrastructure",
    tagline: "像交易台一样按成本、缓存、延迟和可靠性为每次 LLM 请求选择推理路径",
    image: "https://www.auriko.ai/opengraph-image?0ff993556cad7b3b",
    positioning: "定位为 LLM 推理的控制面与智能路由层。壁垒来自跨提供商的实时信号、缓存成本模型、容量感知和对用户流量模式的持续校准。",
    audience: ["AI 应用工程团队", "高用量 Agent 产品", "关注推理 FinOps 的平台团队"],
    killerFeature: "在指定模型和硬约束内，按每次请求的预期成本、TTFT、吞吐、可用性与缓存状态选择提供商，并自动故障转移。",
    experience: "开发者替换 OpenAI 兼容的 base URL 即可接入，可使用平台密钥或 BYOK；路由策略、预算、回退链和观测结果集中在同一控制面。",
    growth: "以免费层、零提供商加价和两周 Pro 试用降低迁移风险，通过 OpenAI Agents SDK、LangChain、Vercel AI SDK 与多种 Agent 框架扩大分发。",
    businessModel: "免费层叠加按量模型 API 成本；Pro 为每月 89 美元且不加价提供商价格，Enterprise 通过 SSO、SLA、自定义策略和专属支持销售。",
    insight: "多模型产品的成本优化不能只比较 token 标价；缓存命中、会话粘性、失败重试和容量波动都应进入每个被接受结果的真实成本。",
    sourceUrl: "https://www.auriko.ai/",
    sourceLabel: "Auriko 官方网站",
    sources: [
      { label: "Auriko 官网", url: "https://www.auriko.ai/" },
      { label: "官方定价", url: "https://www.auriko.ai/platform/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/auriko" }
    ]
  },
  {
    slug: "chatcut",
    name: "ChatCut",
    tag: "AI Video Editor",
    tagline: "用自然语言完成粗剪、字幕、配乐和素材生成，同时保留可编辑的专业时间线",
    image: "https://chatcut.io/chatcut-og-image.png",
    positioning: "定位为轻量但专业的 Agentic 视频编辑器。壁垒来自对素材、意图与时间线的联合理解，以及浏览器、桌面 Agent 和 XML 导出的开放工作流。",
    audience: ["视频创作者", "内容营销团队", "没有专业剪辑经验的业务用户"],
    killerFeature: "用提示词完成结构剪辑、字幕、B-roll、音乐、配音和动态视觉，并把结果保留在真实多轨时间线上继续精修。",
    experience: "AI 先处理找高光、去重复和搭建初剪等耗时步骤，用户仍能逐轨修改或导出 XML 交给专业软件，避免被锁在扁平生成结果里。",
    growth: "通过免费起步、ChatGPT／Codex 插件、模板和 Product Hunt 榜单获取创作者，再以可编辑交付和专业软件衔接建立口碑。",
    businessModel: "Freemium 加月度 Credits 订阅；免费档提供基础编辑和试用额度，付费档按月提供更高生成与 Agent 编辑预算。",
    insight: "生成式创作工具要赢得专业用户，关键不是自动化全部步骤，而是把自动化结果变成可检查、可修改、可带走的中间资产。",
    sourceUrl: "https://chatcut.io/",
    sourceLabel: "ChatCut 官方网站",
    sources: [
      { label: "ChatCut 官网", url: "https://chatcut.io/" },
      { label: "官方定价", url: "https://chatcut.io/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/chatcut-ai-video-editor" }
    ]
  }
];

const industryEvents20260719 = [
  {
    slug: "thinking-machines-inkling",
    name: "Thinking Machines Lab · Inkling",
    summary: "Inkling 以开放权重、原生文本图像音频理解和可控推理强度，提供可定制的多模态 Agent 基座",
    image: "https://thinkingmachines.ai/news/introducing-inkling/images/cover-social-inkling-post.png",
    impact: "开放模型竞争开始从单一跑分转向多模态、工具使用、微调平台与推理成本曲线的组合，企业获得更强的专用化控制，也要承担更高部署门槛。",
    insight: "评估开放模型时应同时计算硬件、调优、评测和运维成本；只有当可定制性带来可量化任务提升时，开放权重才会转化为产品壁垒。",
    sourceUrl: "https://thinkingmachines.ai/news/introducing-inkling/",
    sourceLabel: "Thinking Machines Lab 官方发布",
    sources: [
      { label: "官方发布", url: "https://thinkingmachines.ai/news/introducing-inkling/" },
      { label: "官方模型卡", url: "https://huggingface.co/thinkingmachines/Inkling" },
      { label: "The Agent Watch", url: "https://theagentwatch.com/en/briefing/2026-07-18.html" }
    ]
  },
  {
    slug: "prismml-bonsai-27b",
    name: "PrismML · Bonsai 27B",
    summary: "Bonsai 27B 用 1-bit 与 1.58-bit 低比特方案，把多模态推理和 Agent 工作流压缩到消费级设备",
    image: "https://cdn.prod.website-files.com/697a3312d33c2cc715ec3899/6998a823a76f4af93108df60_Bonsai%20Icon%20_%20Horizontal%20Dark.svg",
    impact: "27B 级模型向手机和笔记本迁移，使隐私、离线可用与边缘成本成为新的产品参数，也会加快端云协同和本地 Agent 的实验。",
    insight: "本地 AI 的产品价值应围绕离线、隐私和持续运行设计，并在目标真机上验证速度、内存和质量，避免把压缩比直接等同于用户体验。",
    sourceUrl: "https://prismml.com/news/prismml-releases-bonsai-27b",
    sourceLabel: "PrismML 官方发布",
    sources: [
      { label: "官方发布", url: "https://prismml.com/news/prismml-releases-bonsai-27b" },
      { label: "官方模型集合", url: "https://huggingface.co/collections/prism-ml/bonsai-27b" },
      { label: "The Agent Watch", url: "https://theagentwatch.com/en/briefing/2026-07-18.html" }
    ]
  },
  {
    slug: "tec-do-navos-2",
    name: "Tec-Do · Navos 2.0",
    summary: "Navos 2.0 把选品、创意、达人触达、短剧制作和桌面执行串成面向全球营销的多 Agent 工作流",
    image: "https://mmx.prnewswire.com/media/MS1884792/20260717085906EDT_image_1.jpg?id=OA2768826&p=facebook",
    impact: "垂直 Agent 正从提供建议升级为跨工具执行完整业务流程，竞争焦点转向行业数据、任务编排、授权边界和最终业务指标。",
    insight: "设计垂直 Agent 时先定义可验收的商业结果，再倒推所需角色、数据和人工审批点；聊天界面只是入口，不应成为产品边界。",
    sourceUrl: "https://www.prnewswire.com/apac/news-releases/tec-do-launches-navos-2-0-at-waic-advancing-the-next-era-of-agentic-commerce-302828632.html",
    sourceLabel: "Tec-Do 官方新闻稿",
    sources: [
      { label: "Tec-Do 新闻稿", url: "https://www.prnewswire.com/apac/news-releases/tec-do-launches-navos-2-0-at-waic-advancing-the-next-era-of-agentic-commerce-302828632.html" },
      { label: "Tec-Do 新闻页", url: "https://www.prnewswire.com/news/tec__do/" },
      { label: "The Agent Watch", url: "https://theagentwatch.com/en/briefing/2026-07-18.html" }
    ]
  },
  {
    slug: "alterion-draco",
    name: "Alterion · Draco",
    summary: "Draco 作为企业 Agent 的运行时控制面，在高风险动作执行前识别意图、应用策略并保留审计轨迹",
    image: "https://cdn.prod.website-files.com/69ab449e4b3c36765d1d8838/6a592ccaae8b8b7f6646365e_Upload.jpg",
    impact: "Agent 安全从上线前评测延伸到持续运行时治理，权限、策略、成本和行为漂移将逐步进入同一控制面。",
    insight: "高风险 Agent 必须把最小权限、动作前拦截、人工批准和可追溯日志做成默认路径，并把治理延迟纳入核心体验指标。",
    sourceUrl: "https://www.alterion.ai/blog/introducing-draco",
    sourceLabel: "Alterion 官方发布",
    sources: [
      { label: "Alterion 发布", url: "https://www.alterion.ai/blog/introducing-draco" },
      { label: "Draco 产品页", url: "https://alterion.ai/platform/draco" },
      { label: "The Agent Watch", url: "https://theagentwatch.com/en/briefing/2026-07-18.html" }
    ]
  },
  {
    slug: "bunkerhill-carebricks-series-b",
    name: "Bunkerhill Health · Carebricks",
    summary: "Bunkerhill Health 完成 Series B、累计融资 5500 万美元，推动医院把临床与运营想法部署为受治理的 AI Agent",
    image: "https://www.bunkerhillhealth.com/opengraph-image.jpg?opengraph-image.405_6gg-1hyca.jpg?dpl=dpl_9HbYRfDWQgm2Btm117YHA1C4h4qG",
    impact: "资本开始押注已进入真实机构、能证明流程结果的垂直 Agent 平台；医疗场景也把治理、监测与安全能力提升为商业化前提。",
    insight: "垂直 Agent 的增长证据应从模型能力转向部署数量、等待时间、随访完成率等业务指标，并清楚区分公司披露与独立验证。",
    sourceUrl: "https://www.bunkerhillhealth.com/resources/series-b-announcement",
    sourceLabel: "Bunkerhill Health 官方发布",
    sources: [
      { label: "官方融资公告", url: "https://www.bunkerhillhealth.com/resources/series-b-announcement" },
      { label: "Fortune", url: "https://fortune.com/2026/07/16/bunkerhill-health-raises-55-million-ai-agents-work-inside-hospitals/" },
      { label: "The Agent Watch", url: "https://theagentwatch.com/en/briefing/2026-07-18.html" }
    ]
  }
];

const products20260720 = [
  {
    slug: "basert",
    name: "BaseRT",
    tag: "Local LLM Runtime",
    tagline: "为 Apple Silicon 提供一条命令启动、无需 API Key 的高性能本地模型运行时",
    image: "https://www.basecompute.co/preview.png",
    positioning: "定位为 Apple Silicon 设备上的本地 LLM 推理运行时。壁垒来自面向 Metal 与芯片内存架构的软硬件协同优化、覆盖主流开源模型的兼容层，以及可复现的真机基准。",
    audience: ["Mac 开发者", "本地 AI 应用团队", "隐私敏感型企业"],
    killerFeature: "一条命令即可在 Mac 上加载并服务模型，官方基准称部分预填充任务最高可比 llama.cpp 快 6.4 倍、比 MLX 快 3.9 倍。",
    experience: "用户安装运行时后选择模型并启动本地端点，编码 Agent 或应用可直接连接；请求不需要云端 API Key，数据也无需离开设备。",
    growth: "用免费运行时和公开基准吸引 Mac 开发者，通过文档、研究报告、模型兼容清单与编码 Agent 场景形成技术口碑。",
    businessModel: "开发者运行时当前免费，企业通过私有部署、性能优化与技术支持等定制合作进行商业化。",
    insight: "端侧模型的竞争不只看参数规模；针对硬件的内核优化、可复现基准和现成工具兼容，才会直接转化为等待时间与使用成本优势。",
    sourceUrl: "https://www.basecompute.co/getbasert",
    sourceLabel: "BaseCompute 官方产品页",
    sources: [
      { label: "BaseRT 产品页", url: "https://www.basecompute.co/getbasert" },
      { label: "官方文档", url: "https://docs.basecompute.co/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/basert" }
    ]
  },
  {
    slug: "rewisp",
    name: "Rewisp",
    tag: "Ambient Memory",
    tagline: "把 Mac 屏幕中的文字变化沉淀成可搜索、可追问且完全本地的个人工作记忆",
    image: "https://yashmitb.github.io/Rewisp/assets/shots/today.png",
    positioning: "定位为 macOS 上的开源环境记忆层。壁垒来自不落盘截图的本地 OCR、文本版本追踪、语义检索，以及通过 MCP 向多种编码和对话工具开放记忆。",
    audience: ["知识工作者", "研究人员", "使用 Claude、Cursor 或 VS Code 的开发者"],
    killerFeature: "持续记录屏幕文字而非图片，并能回答某个页面发生了什么变化、用户承诺过什么，以及相关上下文在哪里出现。",
    experience: "用户通过快捷面板搜索或追问一天的工作，晚上收到摘要；原始截图不写入磁盘，SQLite 记忆、敏感应用排除、Touch ID Vault 与删除控制都留在本机。",
    growth: "以 MIT 开源、免费下载和 GitHub 协作降低信任门槛，再借 MCP 接入 Claude、Cursor、VS Code 等现有工作流扩大使用面。",
    businessModel: "当前为免费开源的独立项目，主要依靠社区贡献和资助支持，尚未公布付费订阅。",
    insight: "环境记忆产品的核心不是捕获越多越好，而是在回忆价值、存储最小化、敏感应用排除和用户可删除性之间建立可信默认值。",
    sourceUrl: "https://yashmitb.github.io/Rewisp/",
    sourceLabel: "Rewisp 官方网站",
    sources: [
      { label: "Rewisp 官网", url: "https://yashmitb.github.io/Rewisp/" },
      { label: "Rewisp GitHub", url: "https://github.com/yashmitb/Rewisp" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/rewisp-an-ambient-memory-for-your-mac" }
    ]
  },
  {
    slug: "double-career-agent",
    name: "Double",
    tag: "Career Agent",
    tagline: "用持续理解个人经历的 AI Career Agent 完成岗位判断、材料定制和人脉引荐",
    image: "https://trydouble.ai/assets/og-banner.jpg",
    positioning: "定位为通过消息界面工作的个人求职 Agent。壁垒来自薪酬与招聘数据、对个人经历的长期记忆、职位匹配排序，以及从建议到申请执行的闭环。",
    audience: ["主动求职者", "职业转型者", "需要提高申请效率的专业人士"],
    killerFeature: "结合个人背景与实时岗位数据排序机会，生成定制申请材料并寻找暖介绍，在真正发送前保留用户确认。",
    experience: "用户像与职业顾问聊天一样补充目标和经历，Double 持续更新上下文，再给出岗位解释、材料草稿和下一步动作，关键外发操作由用户批准。",
    growth: "用每月免费 Credits 降低首次体验门槛，通过可分享的职业建议、求职结果和人脉引荐形成口碑，再以更高任务额度推动升级。",
    businessModel: "采用 Credits 订阅：免费档每月 75 Credits，Pro 每月 15 美元含 700 Credits，Max 每月 45 美元含 2500 Credits。",
    insight: "高风险个人 Agent 应把推荐依据与最终授权做成体验主线；越接近代用户申请和联系他人，越需要可检查的中间结果。",
    sourceUrl: "https://trydouble.ai/",
    sourceLabel: "Double 官方网站",
    sources: [
      { label: "Double 官网", url: "https://trydouble.ai/" },
      { label: "官方定价", url: "https://trydouble.ai/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/double-6" }
    ]
  },
  {
    slug: "citedspy",
    name: "CitedSpy",
    tag: "AI Search Analytics",
    tagline: "持续追踪品牌在主流 AI 搜索答案中的出现、引用、情绪和竞争份额",
    image: "https://www.citedspy.com/og/default.png",
    positioning: "定位为 AI 搜索可见度监测平台。壁垒来自跨模型、跨提示变体的持续采样，引用和情绪归因，以及把单次回答转成可比较的时间序列。",
    audience: ["品牌营销团队", "SEO 与内容团队", "代理商和公关团队"],
    killerFeature: "同时监测 ChatGPT、Perplexity、Gemini、Copilot、Claude 与 Grok，识别品牌缺席、竞品引用来源和情绪变化。",
    experience: "用户配置品牌、竞品与关键问题后获得自动周报或日报，可查看各模型的可见度分布、引用缺口和需要优先补强的内容。",
    growth: "用 14 天试用和可直接汇报的自动报告获客，借代理商多品牌场景与可见度基准扩大账户，再通过更新频率和席位升级。",
    businessModel: "按品牌数量、追踪问题、更新频率和团队席位分层订阅，当前从个人档到 Growth、Pro 与企业方案逐级销售。",
    insight: "生成式搜索优化不能依赖一次手动提问；只有固定问题集、模型与提示变体的重复采样，才能区分稳定分布和偶然回答。",
    sourceUrl: "https://www.citedspy.com/",
    sourceLabel: "CitedSpy 官方网站",
    sources: [
      { label: "CitedSpy 官网", url: "https://www.citedspy.com/" },
      { label: "官方定价", url: "https://www.citedspy.com/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/citedspy" }
    ]
  },
  {
    slug: "panguard-ai",
    name: "Panguard.AI",
    tag: "Agent Security",
    tagline: "用开源技能审计与运行时防护拦截 AI Agent 的恶意提示、工具调用和供应链风险",
    image: "https://panguard.ai/og-image.png",
    positioning: "定位为 AI Agent 的开源安全运行时。壁垒来自技能安装前扫描、提示和工具调用的实时策略层、异常检测，以及可共享的攻击战术规则网络。",
    audience: ["Agent 开发者", "企业安全团队", "部署 Claude、Cursor、Codex CLI 等工具的组织"],
    killerFeature: "在 Skill 安装前做静态风险扫描，并在运行时检查输入、工具和输出，触发阻断、告警或响应 Playbook。",
    experience: "开发者通过开源组件接入常见 Agent 平台，先审计第三方 Skill，再在真实运行中获得分层防护与事件记录；策略既可本地使用也可纳入团队治理。",
    growth: "以 MIT 开源、免费社区版和公开规则库扩大开发者覆盖，通过支持更多 Agent 框架和攻击情报协作形成网络效应。",
    businessModel: "Community 版免费；Team 当前标价每月 500 美元并采用候补名单，Business 为定制方案，Enterprise 从每年 15 万美元起。",
    insight: "Agent 安全必须同时覆盖安装前供应链和运行中动作；只扫描提示或只做模型评测，都无法保护会调用真实工具的生产系统。",
    sourceUrl: "https://panguard.ai/",
    sourceLabel: "Panguard.AI 官方网站",
    sources: [
      { label: "Panguard.AI 官网", url: "https://panguard.ai/" },
      { label: "官方文档", url: "https://docs.panguard.ai/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/panguard-ai" }
    ]
  }
];

const industryEvents20260720 = [
  {
    slug: "emdoor-ailyn-ai-hub",
    name: "Emdoor · Ailyn AI Hub",
    summary: "Ailyn AI Hub 在 WAIC 2026 首发，以统一智能层调度 PC、NAS、算力盒与 IoT 设备上的模型和数据",
    image: "https://mma.prnasia.com/media2/3006622/image1.jpg?p=medium600",
    impact: "硬件厂商正在把竞争从单台 AI PC 扩展到家庭与企业的多设备编排层，存储、算力、模型和个人数据的跨端协同可能形成新的系统入口。",
    insight: "多设备 AI 产品应先定义身份、权限、数据位置和离线降级，再追求无缝调度；否则统一入口会同时放大隐私与故障半径。",
    sourceUrl: "https://en.prnasia.com/releases/global/emdoor-launches-ailyn-ai-hub-at-waic-2026-unifying-intelligence-across-every-device-541142.shtml",
    sourceLabel: "Emdoor 官方新闻稿",
    sources: [
      { label: "Emdoor 新闻稿", url: "https://en.prnasia.com/releases/global/emdoor-launches-ailyn-ai-hub-at-waic-2026-unifying-intelligence-across-every-device-541142.shtml" },
      { label: "Emdoor Digital", url: "https://www.emdoordigital.com/" }
    ]
  },
  {
    slug: "black-lake-industrial-agents",
    name: "Black Lake · Industrial Agents",
    summary: "黑湖科技在 WAIC 2026 展示面向订单、报价、排产和交付决策的工业 Agent，并入选 SAIL Top30",
    image: "https://www.blacklake.cn/home/industrial-process-stage-outsourcing-supplier-top-raster.png?v=20260702-supplier-top",
    impact: "制造业 Agent 正从知识问答进入受产能、物料、交期和工艺约束的真实决策流程，行业数据与系统连接的重要性开始高于通用对话能力。",
    insight: "垂直 Agent 应用真实约束验证决策，并把公司披露的准确率、客户数与独立效果评估分开呈现，避免把演示指标直接当成生产价值。",
    sourceUrl: "https://www.prnewswire.com/apac/news-releases/black-lake-technologies-shortlisted-as-sail-award-top30-finalist-and-selected-as-global-industrial-ai-flagship-case-showcasing-latest-industrial-agent-at-waic-2026-302828984.html",
    sourceLabel: "Black Lake 官方新闻稿",
    sources: [
      { label: "官方新闻稿", url: "https://www.prnewswire.com/apac/news-releases/black-lake-technologies-shortlisted-as-sail-award-top30-finalist-and-selected-as-global-industrial-ai-flagship-case-showcasing-latest-industrial-agent-at-waic-2026-302828984.html" },
      { label: "黑湖科技官网", url: "https://www.blacklake.cn/" }
    ]
  },
  {
    slug: "iflytek-guidex-waic",
    name: "iFLYTEK · GuideX",
    summary: "GuideX 在 WAIC 2026 强调从回答问题升级为完成公共服务任务，以多模态交互串起完整服务流程",
    image: "https://www.iflytek.com/en/Public/Uploads/uploadfile/images/20251125/jingguoqian.png",
    impact: "数字人产品正在摆脱展示型问答，向机场、政务大厅和零售等场景的任务终端演进，语音、视觉、业务系统和异常转人工必须一起工作。",
    insight: "公共服务 Agent 的核心指标应是任务完成率、排队时间和人工接管质量，而不是对话轮数；多模态交互也必须有无障碍和噪声环境测试。",
    sourceUrl: "https://www.iflytek.com/en/businessproducts/digitalhuman/guidex.html",
    sourceLabel: "iFLYTEK GuideX 官方产品页",
    sources: [
      { label: "GuideX 产品页", url: "https://www.iflytek.com/en/businessproducts/digitalhuman/guidex.html" },
      { label: "iFLYTEK 官方案例", url: "https://www.iflytek.com/en/news-events/news/337.html" },
      { label: "GlobeNewswire", url: "https://www.globenewswire.com/news-release/2026/04/10/3271505/0/en/guidex-iflytek-brings-virtual-human-services-into-real-world-scenarios-at-gitex-asia-2026.html" }
    ]
  },
  {
    slug: "doordash-cli",
    name: "DoorDash · dd-cli",
    summary: "DoorDash 发布 dd-cli 限量测试，让开发者和 AI Agent 从终端搜索商家、组建购物车并预览结账",
    image: "https://opengraph.githubassets.com/1/doordash-oss/doordash-cli",
    impact: "消费平台开始主动提供机器可读入口，Agent 商务的竞争将从浏览器自动化转向稳定接口、身份授权、支付确认和售后责任。",
    insight: "面向 Agent 的交易接口应把搜索、价格、库存、确认和支付拆成明确状态，并在不可逆操作前强制展示真实总价与用户授权。",
    sourceUrl: "https://github.com/doordash-oss/doordash-cli",
    sourceLabel: "DoorDash 官方 GitHub",
    sources: [
      { label: "DoorDash 官方 GitHub", url: "https://github.com/doordash-oss/doordash-cli" },
      { label: "The New Stack", url: "https://thenewstack.io/doordash-cli-agents-order/" },
      { label: "Reddit 讨论", url: "https://www.reddit.com/r/linuxmemes/comments/1uymacn/door_dash_cli/" }
    ]
  },
  {
    slug: "roblox-build-mobile-creation",
    name: "Roblox · Build",
    summary: "Roblox 预告移动端 Build 公测，让用户用文字提示生成基础可玩体验，并与 Studio 共用项目后端",
    image: "https://cms-media.roblox.com/assets/fb3c1fc8-6d2b-4463-b3c9-d628a3420bdc.webp",
    impact: "生成式创作入口被直接放进内容消费平台后，创作供给、分发和游玩反馈可以形成更短闭环，也会放大质量、安全和同质化压力。",
    insight: "平台型 AI 创作工具不能只优化生成成功率，还要把试玩、分析、实验与升级到专业编辑器的路径连起来，才能把一次提示变成可持续作品。",
    sourceUrl: "https://about.roblox.com/newsroom/2026/07/build-without-limits-on-roblox",
    sourceLabel: "Roblox 官方发布",
    sources: [
      { label: "Roblox 官方发布", url: "https://about.roblox.com/newsroom/2026/07/build-without-limits-on-roblox" },
      { label: "Roblox 投资者关系", url: "https://ir.roblox.com/news/news-details/2026/Roblox-Introduces-Build-A-New-Way-to-Create-on-the-Platform/default.aspx" },
      { label: "MacRumors", url: "https://www.macrumors.com/2026/07/16/roblox-ai-game-creation/" }
    ]
  }
];

const products20260817 = [
  {
    slug: "grok-bot",
    name: "Grok Bot",
    tag: "Persistent AI Teammate",
    tagline: "给每个长期任务一台独立云电脑，让 Agent 登录工具、持续执行并带回完成结果",
    image: "https://pbs.twimg.com/amplify_video_thumb/2087221157787525120/img/n9OrR6nUrxVZL4oY.jpg",
    positioning: "定位为可长期运行的通用知识工作 Agent，而不是一次性浏览器自动化。壁垒来自 SpaceXAI 模型、Cursor 分发、独立虚拟机、持久登录状态和多 Bot 协作形成的完整执行环境。",
    audience: ["需要自动化跨系统运营的知识工作者", "希望把重复流程交给 Agent 的团队", "已有 Cursor 或 SuperGrok 付费账户的重度用户"],
    killerFeature: "每个 Bot 拥有自己的浏览器、文件与终端，可保持登录并在用户关闭电脑后继续工作；多个 Bot 还能分工协作并在需要决策时回到用户。",
    experience: "用户为 Bot 命名、描述岗位并登录所需工具，之后像给同事发消息一样派活；结果、阻塞和升级请求回到同一会话，减少重复搭环境与重放步骤。",
    growth: "先向 SuperGrok Heavy、Cursor Ultra 与 Cursor Teams Premium 用户开放早期 Beta，借助官方工作案例和高传播演示建立认知，再通过企业候补名单进入团队采购。",
    businessModel: "Grok Bot 当前捆绑在 SuperGrok Heavy、Cursor Ultra 与 Cursor Teams Premium 等高阶订阅中，企业版采用候补与销售接洽，尚未公布独立定价。",
    insight: "持久 Agent 的产品单位正在从一次会话变成一个有环境、有身份、有状态的岗位；真正的留存来自任务历史、登录上下文和可复用工作方式。",
    sourceUrl: "https://x.com/bot/status/2087224798078517251",
    sourceLabel: "Grok Bot 官方发布",
    sources: [
      { label: "Grok Bot 官方发布", url: "https://x.com/bot/status/2087224798078517251" },
      { label: "SpaceXAI Grok 文档", url: "https://docs.x.ai/grok/overview" },
      { label: "Launch Archive", url: "https://launcharchive.ai/launches/grok-bot-launches-in-early-beta--x_2087224798078517251" },
      { label: "Reddit 使用讨论", url: "https://www.reddit.com/r/SPCXInvestors/comments/1vmbjgl/introducing_grok_bot_now_in_early_beta_bots_are/" }
    ]
  },
  {
    slug: "matic-cues",
    name: "Matic Cues",
    tag: "Embodied Home Interface",
    tagline: "让家庭清洁机器人理解 70 多种语言和指向手势，用自然交流定位并处理具体污渍",
    image: "https://pbs.twimg.com/amplify_video_thumb/2087962757044015104/img/VoFGBTb05E5fYBQd.jpg",
    positioning: "定位为 Matic 家庭机器人的自然交互层，而不是额外的语音遥控器。壁垒来自设备端视觉、持续 3D 地图、语音与人体姿态联合理解，以及已在真实家庭运行的清洁硬件。",
    audience: ["Matic 现有家庭用户", "有儿童或老人的多成员家庭", "重视本地隐私与低学习成本的智能家居用户"],
    killerFeature: "用户只需指向地面并说出清洁请求，Matic 就会把语音、手势和 3D 空间位置合并，自动前往目标区域并选择清洁动作。",
    experience: "交互不要求打开 App 或记住菜单；儿童、老人和非英语用户可用日常说话与指向完成请求。首批用户反馈显示功能会随机器人固件分批推送，跟随速度等边界仍在迭代。",
    growth: "用高传播的家庭演示视频把机器人能力从参数转成可理解场景，并向已售设备免费更新形成口碑；硬件端以六个月试用、限时折扣和美国本地交付降低购买风险。",
    businessModel: "Cues 作为 Matic 软件能力随硬件提供；单机器人加底座当前售价 1,245 美元，耗材另有每台每年 96 美元的 Annual Bag Pass。",
    insight: "具身 AI 的好界面不是让人学习机器人指令，而是让机器人读懂人已经会用的语言、视线和手势；自然交互本身就是硬件采用率的增长功能。",
    sourceUrl: "https://x.com/maticrobots/status/2087962897267990915",
    sourceLabel: "Matic Robots 官方发布",
    sources: [
      { label: "Matic Cues 官方发布", url: "https://x.com/maticrobots/status/2087962897267990915" },
      { label: "Matic 官方产品页", url: "https://maticrobots.com/product" },
      { label: "Matic 社区反馈", url: "https://www.reddit.com/r/MaticRobots/comments/1vnj5n9/introducing_cues_voice_gesture_control_for_matic/" },
      { label: "Launch Archive", url: "https://launcharchive.ai/launches/cues-voice-and-gesture-control-for-matic--x_2087962897267990915" }
    ]
  },
  {
    slug: "lindy-teammate",
    name: "Lindy Teammate",
    tag: "Shared AI Employee",
    tagline: "把会学习的 AI 同事放进 Slack，让整支团队共享公司知识并持续交付跨工具工作",
    image: "https://pbs.twimg.com/amplify_video_thumb/2086858922296819712/img/mgQL8qpJv6GMjuzP.jpg",
    positioning: "定位为团队共享的 AI 员工，而不是个人自动化工作流集合。壁垒来自 Slack 原生分发、跨会议与文件的组织记忆、数百个应用连接器，以及从团队反馈中更新工作方式。",
    audience: ["希望在 Slack 内部署 Agent 的运营团队", "需要共享知识与重复流程自动化的中小企业", "已有 Lindy 个人助理使用经验的团队"],
    killerFeature: "任何成员都能在 Slack 中 @mention 同一个 Teammate，请它引用会议、文件和连接工具回答问题或执行任务；它会把反馈沉淀为全团队可复用的工作记忆。",
    experience: "用户无需切换到 Agent 控制台，直接在现有频道派活、追问和补充规则；共享上下文减少每个人单独配置助手的成本，但团队权限与错误学习仍需要管理员治理。",
    growth: "从 Lindy 已有个人助理与 5,000 多家客户向团队场景扩张，以 Slack 入口降低培训成本，再用案例、模板和会自我更新的组织记忆提高席位渗透。",
    businessModel: "个人方案按月订阅与使用量分层，官方页面列出 Plus 49.99 美元、Pro 99.99 美元和 Max 199.99 美元；Teammate 的共享记忆与团队治理主要面向 Enterprise 销售。",
    insight: "团队 Agent 的护城河不是再多一个聊天入口，而是能否把个人反馈变成受控的组织记忆；学习速度越快，权限、纠错和版本回滚越重要。",
    sourceUrl: "https://x.com/Altimor/status/2086861887611019623",
    sourceLabel: "Lindy 创始人发布",
    sources: [
      { label: "Lindy Teammate 发布", url: "https://x.com/Altimor/status/2086861887611019623" },
      { label: "Lindy 官方网站", url: "https://www.lindy.ai/" },
      { label: "Lindy 官方功能与定价说明", url: "https://www.lindy.ai/blog/personal-assistant-salary" },
      { label: "Launch Archive", url: "https://launcharchive.ai/launches/flo-crivello--x_2086861887611019623" }
    ]
  },
  {
    slug: "nuphos-ai",
    name: "NuphosAI",
    tag: "Governed DevOps Agent Workspace",
    tagline: "给生产运维 Agent 加上原生 IAM、审批、审计与团队记忆，让调查到执行都留在可控边界内",
    image: "https://pbs.twimg.com/amplify_video_thumb/2086830387028971520/img/nTTexAoOgy4afnfC.jpg",
    positioning: "定位为 AI 原生 DevOps 工作区，而不是给通用编码 Agent 一把云账号密钥。壁垒来自 AWS、GCP、Azure 与 Cloudflare 的细粒度身份接入、临时权限、审批审计和跨事故积累的基础设施记忆。",
    audience: ["平台工程与 SRE 团队", "需要安全引入运维 Agent 的云安全负责人", "管理多云迁移、事故响应和合规整改的工程组织"],
    killerFeature: "每个 Agent 会话都能绑定原生 IAM 角色，先观察资源、读取日志和生成计划，再按审批流申请动作权限；所有建议与执行进入审计轨迹。",
    experience: "团队下载 macOS 工作区并连接现有云栈，不必迁移监控与部署工具；成员也可从 Slack、Discord 或 iMessage 发起调查和批准动作，Agent 则持续学习服务、运行手册与历史事故。",
    growth: "以 macOS 预览和无需迁移的接入路径吸引早期 DevOps 团队，通过公开演示与工程师社交传播展示生产治理差异，再用事故响应、云迁移和合规修复场景进入企业。",
    businessModel: "官网提供预览下载和 Contact Sales，尚未公开标准套餐；商业化预计以团队席位、生产连接器、自托管与企业安全能力报价。",
    insight: "生产 Agent 的第一产品需求不是更高自治，而是最小权限、可审批动作和可重放证据；把治理做进日常体验，才能从终端玩具进入值班流程。",
    sourceUrl: "https://nuphos.ai/",
    sourceLabel: "Nuphos 官方网站",
    sources: [
      { label: "Nuphos 官方网站", url: "https://nuphos.ai/" },
      { label: "Nuphos 创始人发布", url: "https://x.com/yuaan1in/status/2086833877902061595" },
      { label: "Launch Archive", url: "https://launcharchive.ai/launches/nuphosai-ai-native-devops-workspace--x_2086833877902061595" }
    ]
  },
  {
    slug: "unsloth-desktop",
    name: "Unsloth Desktop",
    tag: "Local Model Workbench",
    tagline: "在 Mac、Windows 和 Linux 的一个开源桌面应用里本地运行、训练、搜索、调工具并导出模型",
    image: "https://pbs.twimg.com/amplify_video_thumb/2087174761277538304/img/-4DttctjenMfxyVf.jpg",
    positioning: "定位为本地模型从下载、运行到微调和导出的统一工作台。壁垒来自 Unsloth 的训练内核、广泛硬件与模型格式兼容、数据配方，以及可连接 Claude Code 和 Codex 的 OpenAI 兼容接口。",
    audience: ["希望离线使用模型的开发者", "需要低显存微调的 ML 工程师", "对代码与数据隐私敏感的个人和企业"],
    killerFeature: "同一桌面界面支持 MLX、GGUF、扩散视频、音频与多 GPU 模型，并把无代码训练、沙箱代码执行、私有搜索、RAG、MCP 和格式导出串成一条本地流水线。",
    experience: "用户可从图形界面选择模型和硬件，直接聊天、比较、生成数据集或启动训练；安装和首版兼容仍在快速迭代，社区最新 Beta 已继续修复外部推理连接与搜索工具问题。",
    growth: "用开源、离线和跨平台降低试用阻力，借助 Unsloth 的模型仓库与开发者社区快速分发，再通过 GitHub、Reddit 和持续 Beta 发布吸收硬件兼容反馈。",
    businessModel: "Desktop 标准版与核心开源能力免费；Unsloth Pro 和 Enterprise 通过更快训练、多 GPU、多节点与支持服务销售，价格需联系团队。",
    insight: "本地 AI 的机会不只是隐私，而是把推理、训练和 Agent 工具做成普通开发者可操作的产品；硬件适配与安装恢复力会像模型质量一样决定口碑。",
    sourceUrl: "https://unsloth.ai/docs/desktop",
    sourceLabel: "Unsloth Desktop 官方文档",
    sources: [
      { label: "Unsloth Desktop 文档", url: "https://unsloth.ai/docs/desktop" },
      { label: "Unsloth 官方发布", url: "https://x.com/UnslothAI/status/2087177146662072546" },
      { label: "Unsloth GitHub", url: "https://github.com/unslothai/unsloth" },
      { label: "Reddit 首发反馈", url: "https://www.reddit.com/r/unsloth/comments/1vli9xs/meet_unsloth_desktop_the_first_desktop_app_to_run/" }
    ]
  }
];

const industryEvents20260817 = [
  {
    slug: "cursor-joins-spacex",
    name: "Cursor × SpaceX · 收购完成",
    summary: "Cursor 于 8 月 14 日确认正式并入 SpaceX，模型训练、算力与开发者分发进入同一体系",
    image: "https://cursor.com/marketing-static/_next/image?q=70&url=https%3A%2F%2Fptht05hbb1ssoooe.public.blob.vercel-storage.com%2Fassets%2Fuploads%2Fclose-og-image-1-B5D1caLmbVsj0JInrL2qKgXzLPMGoU.png&w=1920",
    impact: "收购把 Cursor 的专业开发者入口、模型 harness 与 SpaceXAI 的大规模算力和 Grok 模型垂直整合。Cursor 表示将用更大 GPU 资源训练更强且更经济的模型，Grok 4.6 已展示合作方向；AI 编码竞争进一步从应用层扩展到算力、模型与渠道的一体化。",
    insight: "当底层模型与应用入口被同一公司整合，产品团队需要同时评估能力增益和供应商集中风险；可替换模型、数据可迁移与合同边界会成为企业采购重点。",
    sourceUrl: "https://cursor.com/blog/joining-spacex",
    sourceLabel: "Cursor 官方公告",
    sources: [
      { label: "Cursor 官方公告", url: "https://cursor.com/blog/joining-spacex" },
      { label: "Cursor 官方发布 / X", url: "https://x.com/cursor_ai/status/2088249881718919393" },
      { label: "AP 收购背景", url: "https://apnews.com/article/a5c60fcbaaca262cf107d30f1de899ef" },
      { label: "Reddit 用户讨论", url: "https://www.reddit.com/r/cursor/comments/1vo6zxz/cursor_is_now_part_of_spacex_cursor_ai/" }
    ]
  },
  {
    slug: "zai-glm-5-3",
    name: "Z.ai · GLM-5.3",
    summary: "GLM-5.3 强化编码 Agent 与网络防御能力，并因高风险能力把开放权重发布延后两周",
    image: "https://pbs.twimg.com/media/HPqGDYVXAAEtyrV.jpg",
    impact: "Z.ai 在官方发布中把 GLM-5.3 定位为面向编码和网络防御的 743B 基座后训练版本。公司选择先开放服务、延迟权重并进行额外安全测试，显示开放模型厂商也开始把能力发布与风险分级绑定，而不是把 API 与权重同步视为默认。",
    insight: "开放权重不等于一次性全量开放；产品可以按 API、受控测试、模型卡和权重分阶段交付，并把高风险评测与延迟策略提前写进发布计划。",
    sourceUrl: "https://x.com/Zai_org/status/2088132965922476159",
    sourceLabel: "Z.ai 官方发布",
    sources: [
      { label: "Z.ai 官方发布", url: "https://x.com/Zai_org/status/2088132965922476159" },
      { label: "Z.ai 开发者文档", url: "https://docs.z.ai/guides/llm/glm-5" },
      { label: "Axios", url: "https://www.axios.com/2026/08/14/china-open-source-ai-glm-53" },
      { label: "Launch Archive", url: "https://launcharchive.ai/launches/glm-5-3-built-to-code-for-cyber-defense--x_2088132965922476159" }
    ]
  },
  {
    slug: "deepseek-v4-pro-ga",
    name: "DeepSeek · V4-Pro GA",
    summary: "DeepSeek 推出 V4-Pro 正式版，增强 Agent 生产表现、可调推理强度与原生 Responses API",
    image: "https://pbs.twimg.com/media/HPmOJZlbUAAOgVt.jpg",
    impact: "V4-Pro 从预览进入正式版后覆盖 App、Web 与 API，并以 low、high、max 等推理强度适配不同任务成本。原生 OpenAI Responses API 降低迁移门槛，同时新的峰谷定价引发开发者对实际成本与替代服务的公开比较。",
    insight: "模型升级不只要公布能力分数，还要让推理强度、价格与接口兼容可配置；产品应基于真实任务建立路由和预算上限，避免默认使用最高强度。",
    sourceUrl: "https://x.com/deepseek_ai/status/2087864585504305397",
    sourceLabel: "DeepSeek 官方发布",
    sources: [
      { label: "DeepSeek 官方发布", url: "https://x.com/deepseek_ai/status/2087864585504305397" },
      { label: "DeepSeek API 更新", url: "https://api-docs.deepseek.com/updates" },
      { label: "DeepSeek 模型与价格", url: "https://api-docs.deepseek.com/quick_start/pricing/" },
      { label: "Reddit 成本讨论", url: "https://www.reddit.com/r/DeepSeek/comments/1vnujem/my_deepseek_bill_goes_from_33_to_100_offpeak_and/" }
    ]
  },
  {
    slug: "ltx-2-5",
    name: "LTX · LTX-2.5",
    summary: "LTX-2.5 以开放权重、原生多镜头和按场景复杂度分配算力，升级本地音视频生成工作流",
    image: "https://pbs.twimg.com/amplify_video_thumb/2087232120250867712/img/U-7HW8OFEz4_4gNh.jpg",
    impact: "LTX-2.5 把角色、场景、灯光、声音和风格一致性放进一次多镜头生成，并通过 Diffusion Fidelity Rendering 将更多计算分给复杂画面。模型权重、Hugging Face 与 ComfyUI 工作流同步开放，使本地创作团队能直接评测、微调和商业部署。",
    insight: "视频模型的产品竞争正从单段画质转向跨镜头一致性、可控算力与现有节点工作流兼容；首日提供权重、模板和迁移路径能显著缩短社区采用周期。",
    sourceUrl: "https://ltx.io/newsroom/introducing-ltx-2-5",
    sourceLabel: "LTX 官方发布",
    sources: [
      { label: "LTX 官方发布", url: "https://ltx.io/newsroom/introducing-ltx-2-5" },
      { label: "LTX 官方模型页", url: "https://ltx.io/model/ltx-2-5" },
      { label: "官方 Hugging Face", url: "https://huggingface.co/Lightricks/LTX-2.5" },
      { label: "Reddit 首发反馈", url: "https://www.reddit.com/r/StableDiffusion/comments/1vlqy46/ltx25_is_here/" }
    ]
  },
  {
    slug: "dyna-2-world-action-model",
    name: "DYNA Robotics · Dyna-2",
    summary: "Dyna-2 用超过 100 万小时人类视频预训练世界动作模型，并验证人类到机器人的迁移缩放规律",
    image: "https://pbs.twimg.com/amplify_video_thumb/2086855652966817792/img/39LJteONqeNrvXhO.jpg",
    impact: "Dyna-2 在 1,000 到 100 万小时数据阶梯上呈现可持续缩放，并报告人类视频规模增加会改善未见过的机器人数据预测。模型只需少量机器人后训练即可覆盖多种双臂与灵巧手任务，为具身 AI 提供了比昂贵遥操作数据更可扩展的预训练轴。",
    insight: "物理 AI 团队应把公开视频预训练、少量真机后训练和盲测任务拆成清晰证据链；缩放规律能指导数据投资，但仍需用真实成功率、延迟和失败恢复验证产品价值。",
    sourceUrl: "https://www.dyna.co/dyna-2",
    sourceLabel: "DYNA Robotics 官方研究",
    sources: [
      { label: "Dyna-2 官方研究", url: "https://www.dyna.co/dyna-2" },
      { label: "DYNA 官方发布 / X", url: "https://x.com/DynaRobotics/status/2086856327150858298" },
      { label: "DYNA 官方网站", url: "https://www.dyna.co/" },
      { label: "Launch Archive", url: "https://launcharchive.ai/launches/dyna-2-world-action-model-introduced--x_2086856327150858298" }
    ]
  }
];

const trends20260817 = [
  {
    title: "AI 员工从单次自动化升级为持久身份与共享记忆",
    text: "Grok Bot 为每个任务提供独立云电脑，Lindy Teammate 把反馈沉淀为团队记忆，NuphosAI 则把生产身份、审批和审计放进运维 Agent。Agent 的产品边界正在从回答能力扩展到环境、权限、连续状态与组织协作。"
  },
  {
    title: "开放模型进入分阶段发布与本地工作台竞争",
    text: "GLM-5.3 因网络能力延迟开放权重，LTX-2.5 同步发布模型与 ComfyUI 工作流，Unsloth Desktop 把运行、训练和导出带到本地。开放不再只是许可证，而是发布节奏、硬件可达性和工具链完整度的综合产品策略。"
  },
  {
    title: "视频成为连接生成内容与具身智能的新数据轴",
    text: "LTX-2.5 用多镜头和动态算力服务创作，Dyna-2 则用百万小时人类视频验证跨具身迁移。视频模型正在同时向可控生产和物理世界理解扩张，数据质量、时序一致性与真实任务评测成为共同壁垒。"
  }
];

const products20260811 = [
  {
    slug: "oqoqo",
    name: "Oqoqo",
    tag: "Coding Agent Evaluation Lab",
    tagline: "在隔离云沙箱中复现实战编码任务，并横向比较 Claude Code、Codex、Cursor 等 Agent",
    image: "https://ph-files.imgix.net/4803aacd-f18f-46bc-b10c-5a2e31ffb701.jpeg",
    positioning: "定位为编码 Agent 的实验与采购决策平台，而不是只跑固定题库的模型排行榜。壁垒来自可复用任务集、隔离云沙箱，以及对工具调用、命令、token、摩擦点和通过率的统一追踪。",
    audience: ["评估编码 Agent 的工程管理者", "维护内部基准与回归测试的平台团队", "需要为团队选择 AI 开发工具的技术负责人"],
    killerFeature: "把真实仓库任务或私有基准放进隔离环境后，可用相同任务比较 Claude Code、Codex、Cursor、GitHub Copilot、OpenCode 等 Agent，并记录完整执行轨迹与结果。",
    experience: "用户可从网页、CLI 或 MCP 发起实验，选择任务集、Agent 与模型后并行运行；结果页把成功率、耗时、token、命令和失败摩擦点放在同一视图，便于复现差异而不是凭单次演示判断。",
    growth: "以免费月度运行额度和主流编码 Agent 预置适配降低首次评估成本，通过 Product Hunt 触达正在采购或迁移工具的工程团队，再用私有任务集和持续回归形成留存。",
    businessModel: "提供免费月度运行额度，后续可订阅或购买额外运行次数；全部功能向不同套餐开放，模型推理费用由用户自带密钥或另行承担。",
    insight: "Agent 评测必须从静态问答升级为可复现的环境内执行；统一任务、工具权限与轨迹证据，才能把排行榜分数转化为真实采购和上线判断。",
    sourceUrl: "https://oqoqo.ai/",
    sourceLabel: "Oqoqo 官方网站",
    sources: [
      { label: "Oqoqo 官网", url: "https://oqoqo.ai/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/oqoqo" }
    ]
  },
  {
    slug: "portfolio-lab",
    name: "Portfolio Lab",
    tag: "AI Quant Strategy Builder",
    tagline: "用专业量化模型生成、检验并纸上交易投资策略，再通过 MCP 接入用户券商",
    image: "https://cdn.prod.website-files.com/69ba9f13686f8d9624d189cb/6a579ab3835f1b82820216e4_og-image-home.png",
    positioning: "定位为把自然语言投资想法转成可审计策略的 AI 量化实验室，而不是给出单次买卖建议的聊天机器人。壁垒来自专业量化模型、长期市场数据、样本外验证和真实券商执行路径。",
    audience: ["希望验证投资假设的个人投资者", "需要快速研究策略的量化与财富管理团队", "构建金融 Agent 的开发者"],
    killerFeature: "Agent 会把目标转成策略并依次经过样本内、样本外和实时纸上交易验证；用户确认后还能经 MCP 让 Agent 在自己的券商账户执行，同时保留规则和测试证据。",
    experience: "用户先描述收益目标、风险偏好或市场观点，系统生成可查看的策略与回测；每一步都能比较基准、检查失效区间并在模拟环境观察，避免从一段自然语言直接跳到真实交易。",
    growth: "以免费 Explorer 和公开策略审计内容吸引自助投资者，通过 Product Hunt 首发折扣促进年付，再用 Agent 交易、更多资产与高级分析推动升级。",
    businessModel: "基础 Explorer 免费，付费层解锁 Agent 交易、更多资产与高级分析；官方同时以注册投资顾问身份提供托管服务，具体费率以产品内披露为准。",
    insight: "高风险 Agent 的核心体验不是更快执行，而是把假设、样本外验证、模拟运行和最终授权串成证据链；越接近资金动作，越需要明确的阶段门。",
    sourceUrl: "https://portfoliolab.ai/",
    sourceLabel: "Portfolio Lab 官方网站",
    sources: [
      { label: "Portfolio Lab 官网", url: "https://portfoliolab.ai/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/portfolio-lab" }
    ]
  },
  {
    slug: "paritok",
    name: "Paritok",
    tag: "Coding Agent Context Compression",
    tagline: "在不删除原始上下文的前提下压缩工具输出、文件和历史，让编码 Agent 工作更久",
    image: "https://www.paritok.com/logo.png",
    positioning: "定位为编码 Agent 与模型之间的上下文压缩网关，而不是摘要插件。壁垒来自针对工具轨迹训练的本地 4B 模型、可回读原文的非破坏式设计，以及对主流 Agent 的低摩擦接入。",
    audience: ["运行长程编码任务的开发者", "控制模型输入成本的 AI 工程团队", "需要私有化处理代码上下文的企业"],
    killerFeature: "网关自动压缩工具结果、文件与对话历史，同时保留原始内容；当 Agent 需要细节时可调用 read_original 回读，降低 token 占用而不把信息永久丢掉。",
    experience: "用户用两条命令接到现有编码 Agent 后即可工作，无需改变提示方式；压缩在后台发生，出现疑问时 Agent 能追溯原文，因此长任务不会因一次激进摘要而失去恢复路径。",
    growth: "以 Apache 2.0 模型、本地自托管和开源 GitHub 建立开发者信任，通过 Product Hunt 展示 token 节省与长任务对比，再用免运维托管网关承接团队用户。",
    businessModel: "本地自托管免费；托管服务按输入 token 计费，官网标示每百万 token 0.30 美元，并在 8 月底前提供免信用卡试用。",
    insight: "长程 Agent 的上下文管理不应只有删除与保留两种状态；可压缩、可定位、可回读的分层记忆，能同时改善成本、续航和失败恢复。",
    sourceUrl: "https://www.paritok.com/",
    sourceLabel: "Paritok 官方网站",
    sources: [
      { label: "Paritok 官网", url: "https://www.paritok.com/" },
      { label: "Paritok GitHub", url: "https://github.com/Paritok-official/paritok-4b-v1" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/paritok" }
    ]
  },
  {
    slug: "prime-agent",
    name: "Prime Agent",
    tag: "Self-improving Coding Harness",
    tagline: "让编码 Agent 在运行中把经验沉淀为记忆、技能、提示与新子 Agent，并持续改写自身脚手架",
    image: "https://primeintellect.ai/blog/prime-agent/cover.png?v=prime-agent",
    positioning: "定位为可自我改进的开源编码 Agent harness，而不是固定提示与工具集。壁垒来自 Recursive Language Model、Continual Harness、持久 Python REPL、可恢复会话和运行后自我精炼机制的组合。",
    audience: ["研究自改进 Agent 的开发者与实验室", "需要长程自动化的开源工程团队", "构建专用编码 Agent 的平台团队"],
    killerFeature: "Agent 可调用 refine 检查执行轨迹，把有效模式写成持久记忆、技能、提示或子 Agent，甚至调整自己的脚手架；下一次任务因此从上一次失败和成功中继续学习。",
    experience: "用户安装开源 harness 后可在持久 REPL 中运行任务、派生子 Agent 并恢复中断会话；自我改进结果是可检查的文件和配置，团队可以保留有用变化，也能发现测试环境中的投机行为。",
    growth: "以开源代码、研究博客和 ARC-AGI-3、Factorio 等可复现实验吸引 Agent 开发者，通过 Product Hunt 扩散，再与 Prime Intellect 的环境、评测和训练基础设施形成生态入口。",
    businessModel: "Prime Agent 免费开源；商业价值主要承接到 Prime Intellect 的算力、环境、评测与训练平台，Agent 本身未公布独立付费方案。",
    insight: "自我改进产品必须同时设计学习与约束：让 Agent 保存有效经验很重要，但评测防投机、变更可审阅和会话可恢复决定了改进能否被信任。",
    sourceUrl: "https://www.primeintellect.ai/blog/prime-agent",
    sourceLabel: "Prime Intellect 官方研究博客",
    sources: [
      { label: "Prime Agent 研究博客", url: "https://www.primeintellect.ai/blog/prime-agent" },
      { label: "Prime Agent GitHub", url: "https://github.com/PrimeIntellect-ai/prime-agent" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/prime-intellect" }
    ]
  },
  {
    slug: "ai-group-call",
    name: "AI Group Call",
    tag: "Multi-agent Voice Room",
    tagline: "把一个目标变成六个不同角色的实时语音圆桌，并在会后输出总结与行动项",
    image: "https://aigroupcall.app/assets/icon.png",
    positioning: "定位为多视角实时讨论空间，而不是单个语音助手。壁垒来自六角色轮流发言、真正打断、可编辑角色阵容、实时转录与可重进房间构成的群聊状态机。",
    audience: ["需要快速拆解复杂决策的个人与小团队", "进行创意发散和风险评审的产品经理", "希望通过语音获得多视角反馈的创业者"],
    killerFeature: "用户输入目标后即可进入六个 AI 角色组成的语音房间，成员一次一人发言并能被用户随时打断；角色可编辑，会议时钟可暂停，离开后还能回到同一房间。",
    experience: "从一句目标直接开会，用户像主持人一样插话、追问或调整角色；屏幕同步显示逐字稿，结束后自动整理结论和行动项，减少在多个聊天线程间手动复制观点。",
    growth: "以 Android 首发、每个账户 1 分钟免信用卡体验和 Product Hunt 演示降低尝试成本，用可分享的多角色讨论场景传播，并预告 iOS 版本扩大移动端覆盖。",
    businessModel: "每个账户提供 1 分钟免费体验；免费额度后的具体分钟包或订阅价格尚未在官网公开，当前商业化方向预计围绕语音使用量。",
    insight: "多 Agent 产品的价值不只是增加回答数量，而是把角色差异、轮次秩序、打断权和会后收敛做成可控体验，避免圆桌退化为并排生成。",
    sourceUrl: "https://aigroupcall.app/",
    sourceLabel: "AI Group Call 官方网站",
    sources: [
      { label: "AI Group Call 官网", url: "https://aigroupcall.app/" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.aigroupcall" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/ai-group-call" }
    ]
  }
];

const industryEvents20260811 = [
  {
    slug: "meta-muse-glimmer",
    name: "Meta · Muse Glimmer 30B",
    summary: "Meta 开放可在消费级设备运行的 30B 多模态 Agent 模型 Muse Glimmer，并提供官方本地量化版本",
    image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/models/meta-models/Muse-Glimmer-30B.png",
    impact: "Muse Glimmer 把文本、图像、工具调用与长上下文 Agent 能力压进单张消费级 GPU 可运行的开放权重模型，并以 Apache 2.0 许可降低二次开发门槛。头部实验室再次把前沿产品竞争延伸到本地推理、隐私和开发者可控性。",
    insight: "本地 Agent 模型的产品指标不应只看榜单，还要共同评估内存占用、量化质量、工具兼容和持续运行稳定性；官方量化与完整运行配方会直接影响采用速度。",
    sourceUrl: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model",
    sourceLabel: "Meta AI Research 官方发布",
    sources: [
      { label: "Meta AI Research", url: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model" },
      { label: "官方 Hugging Face 模型", url: "https://huggingface.co/meta-models/Muse-Glimmer-30B" },
      { label: "Associated Press", url: "https://apnews.com/article/df8a4e7d7825470d09e8090367457c2c" }
    ]
  },
  {
    slug: "openai-gpt-5-6-cyber-daybreak",
    name: "OpenAI · GPT-5.6-Cyber 与 Daybreak",
    summary: "OpenAI 发布面向受信防御者的 GPT-5.6-Cyber，并把 Daybreak 扩展为 Blue 与 Red 两级访问",
    image: "https://images.ctfassets.net/kftzwdyauwt9/3MPipvFMxS8m3kTyCtwFgj/015747dcd34cb667a221688cfca64e0f/Frame.png?w=3840&q=90&fm=webp",
    impact: "Daybreak Blue 为授权防御工作开放 GPT-5.6 Sol 的更多能力，Red 则提供拒答更少、面向漏洞研究和利用验证的 GPT-5.6-Cyber。访问通过身份核验、硬件密钥、监控和用途限制治理，说明高能力模型正在形成按风险与专业资质分层的产品面。",
    insight: "当能力与滥用风险同时上升，产品不能只在开放与封闭之间二选一；模型、用户资格、任务范围、工具权限和持续监控必须被设计成同一个访问系统。",
    sourceUrl: "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/",
    sourceLabel: "OpenAI 官方发布",
    sources: [
      { label: "GPT-5.6-Cyber 发布", url: "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/" },
      { label: "Daybreak 合作伙伴计划", url: "https://openai.com/index/putting-frontier-cyber-models-in-more-trusted-hands/" },
      { label: "Astra 能力响应", url: "https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/" }
    ]
  },
  {
    slug: "nvidia-ai-compute-financing-platforms",
    name: "NVIDIA · AI 算力融资平台",
    summary: "NVIDIA 联合六家全球资管与投行建立独立融资平台，计划长期动员超过 5000 亿美元第三方资本",
    image: "https://iprsoftwaremedia.com/219/files/20224/6296531eb3aed3741918b6b5_DH1L4415-HDR-20220527-r5/DH1L4415-HDR-20220527-r5_dba29dde-5a9b-4ac8-bf58-a0b78da89547-prv.jpg?v=dba29dde-5a9b-4ac8-bf58-a0b78da89547",
    impact: "Apollo、BlackRock、Blackstone、Brookfield、Goldman Sachs 与 KKR 将围绕芯片、电力、土地和数据中心建立融资能力。超过 5000 亿美元指平台计划长期动员的第三方资本总额，并非 NVIDIA 收入或单一基金；算力开始被包装成可融资的基础设施资产类别。",
    insight: "AI 基础设施产品需要同时优化技术利用率与金融可承保性；长期合同、可预测现金流、资产残值和客户集中风险，都会变成算力平台的核心产品参数。",
    sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-partners-with-apollo-blackrock-blackstone-brookfield-goldman-sachs-and-kkr-to-establish-ai-compute-infrastructure-financing-platforms-to-mobilize-over-500-billion-of-third-party-capital",
    sourceLabel: "NVIDIA 官方新闻稿",
    sources: [
      { label: "NVIDIA 官方新闻稿", url: "https://nvidianews.nvidia.com/news/nvidia-partners-with-apollo-blackrock-blackstone-brookfield-goldman-sachs-and-kkr-to-establish-ai-compute-infrastructure-financing-platforms-to-mobilize-over-500-billion-of-third-party-capital" },
      { label: "Axios", url: "https://www.axios.com/2026/08/10/nvidia-financing-ai-goldman-sachs-blackrock" },
      { label: "Reddit 市场讨论", url: "https://www.reddit.com/r/singularity/comments/1vkywi9/breaking_nvidia_partners_with_apollo_blackrock/" }
    ]
  },
  {
    slug: "anthropic-riot-rockdale-lease",
    name: "Anthropic × Riot · Rockdale 191MW 长约",
    summary: "Anthropic 与 Riot 签署 20 年、191MW 的 AI 数据中心租约，把比特币矿场电力资产转向模型算力",
    image: "https://www.riotplatforms.com/wp-content/uploads/2024/04/Riot-share-image-1.png",
    impact: "Riot 在二季度公告中把该交易列为首项战略进展，长期租约为 Rockdale 园区提供 AI 数据中心需求，并把原有电力、土地和并网能力重新定价。模型公司的算力扩张正在加速吸收加密矿业已锁定的能源基础设施。",
    insight: "把矿场改造成 AI 数据中心不是简单换客户；供电稳定性、网络、冷却、建设里程碑与客户集中度需要共同产品化，长期租约也应保留容量交付和风险分段。",
    sourceUrl: "https://www.riotplatforms.com/riot-platforms-reports-second-quarter-2026-financial-results-and-strategic-highlights/",
    sourceLabel: "Riot Platforms 官方公告",
    sources: [
      { label: "Riot 二季度官方公告", url: "https://www.riotplatforms.com/riot-platforms-reports-second-quarter-2026-financial-results-and-strategic-highlights/" },
      { label: "SEC Riot 公司文件", url: "https://www.sec.gov/edgar/browse/?CIK=1167419&owner=exclude" },
      { label: "Reddit 交易讨论", url: "https://www.reddit.com/r/FRMI/comments/1vkx8jx/riot_platforms_announces_a_new_datacenter_lease/" }
    ]
  },
  {
    slug: "scale-ai-francis-desouza-ceo",
    name: "Scale AI · Francis deSouza 就任 CEO",
    summary: "Francis deSouza 于 8 月 10 日正式接任 Scale AI CEO，负责扩张数据与应用两条业务线",
    image: "https://mmx.prnewswire.com/media/MS1960933/20260726_Scale3909-ID-4d11b0cd5cd7.jpg?id=OA2802380&p=publish",
    impact: "Scale 在创始人 Alexandr Wang 转任董事长、Jason Droege 担任过渡 CEO 后进入新的经营阶段。deSouza 的企业软件与生命科学经历，配合 Scale 在政府、医疗和企业应用的增长，表明数据基础设施公司正在向高风险行业的完整应用交付延伸。",
    insight: "从数据供应商升级为应用平台，需要把领域销售、合规、交付责任与模型评测能力一起补齐；领导团队的行业运营经验会直接影响产品能否进入关键业务。",
    sourceUrl: "https://www.prnewswire.com/news-releases/scale-ai-appoints-francis-desouza-as-ceo-to-lead-next-phase-of-companys-growth-302838437.html",
    sourceLabel: "Scale AI 官方新闻稿",
    sources: [
      { label: "Scale AI 官方新闻稿", url: "https://www.prnewswire.com/news-releases/scale-ai-appoints-francis-desouza-as-ceo-to-lead-next-phase-of-companys-growth-302838437.html" },
      { label: "Scale AI 公司介绍", url: "https://scale.com/about" },
      { label: "Axios", url: "https://www.axios.com/2026/07/30/scale-ai-google-cloud-coo-francis-desouza" }
    ]
  }
];

const trends20260811 = [
  {
    title: "Agent 竞争从能力演示转向可复现评测与自我改进",
    text: "Oqoqo 用隔离任务和完整轨迹比较编码 Agent，Prime Agent 让脚手架从执行经验中持续变化，OpenAI 则为高风险能力增加分级访问与监控。Agent 产品的核心资产正在变成环境、证据、恢复和治理闭环。"
  },
  {
    title: "上下文效率与本地运行成为新的分发杠杆",
    text: "Paritok 用可回读压缩延长编码任务，Muse Glimmer 把多模态 Agent 能力带到消费级设备。模型与工具开始围绕内存、token、隐私和离线可用性共同优化，本地部署不再只是企业合规选项。"
  },
  {
    title: "算力扩张进入长期资本与能源资产重组阶段",
    text: "NVIDIA 把 AI 算力包装成可融资资产，Anthropic 与 Riot 用 20 年长约把矿场电力迁移到模型基础设施。竞争焦点正从谁能买到 GPU，延伸到谁能锁定资本、土地、电力并持续交付容量。"
  }
];

const products20260807 = [
  {
    slug: "cloudflare-os",
    name: "Cloudflare OS",
    tag: "Company-wide AI Operating System",
    tagline: "用开源企业 AI 操作系统为每位员工生成带权限边界的 Agent、应用与工作流",
    image: "https://blog.cloudflare.com/_emdash/api/media/file/01KZ7KNNANPJDHWFZFBPEFG96H.png",
    positioning: "定位为承载企业上下文、工具和规则的 AI 操作系统，而不是单点聊天助手。壁垒来自 Cloudflare 将身份访问、MCP 工具目录、AI Gateway、DLP 与 Workers 运行时组合成统一权限和执行层。",
    audience: ["希望把 AI 扩展到全公司的管理者", "负责内部工具与权限的平台团队", "需要安全自助自动化的业务团队"],
    killerFeature: "员工用自然语言描述需求后，系统可在个人工作区生成一次性应用或可复用工作流；Agent 默认没有访问权，只能继承当前用户被明确授予的数据与工具权限。",
    experience: "用户从自己的 Agent 工作区调用公司连接器、规则与知识，不必先学习新的低代码界面；生成的应用可继续迭代并分享给同事，管理侧则能在统一入口审计身份、模型调用和数据流向。",
    growth: "以开源 starter kit 和 Cloudflare 现有开发者、Zero Trust 客户降低采用门槛，再用内部实践案例证明规模化价值；官方称内部已生成超过 4,000 个应用和工具，并在上月节省 10,000 个销售工时。",
    businessModel: "Cloudflare OS starter 以开源方式提供，官方未公布独立订阅；商业价值主要随 Workers、Access、MCP Portal、AI Gateway 与数据防护等 Cloudflare 服务的使用增长。",
    insight: "企业 Agent 的关键不是给所有人同一个聊天框，而是让身份、权限、工具和组织规则成为生成应用时自动继承的底座，业务自助与安全治理才能同步扩张。",
    sourceUrl: "https://blog.cloudflare.com/how-we-use-ai-with-cloudflare-os/",
    sourceLabel: "Cloudflare 官方博客",
    sources: [
      { label: "Cloudflare OS 发布", url: "https://blog.cloudflare.com/how-we-use-ai-with-cloudflare-os/" },
      { label: "Cloudflare OS Starter", url: "https://github.com/cloudflare/cloudflare-os-starter" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/cloudflare" }
    ]
  },
  {
    slug: "rippling-ai-spend-console",
    name: "AI Spend Console by Rippling",
    tag: "AI Spend Intelligence",
    tagline: "把企业 AI 支出按供应商、模型、员工和团队拆开，并关联到可验证的业务产出",
    image: "https://ph-files.imgix.net/9ad1bcd8-64eb-4e40-89a1-279309d409f0.jpeg",
    positioning: "定位为 AI 工具采购与价值归因控制台，而不是传统 SaaS 费用看板。壁垒来自 Rippling 的人员、组织、应用和设备数据，可把模型账单映射到团队结构、GitHub 产出与绩效信号。",
    audience: ["需要治理 AI 预算的财务与 IT 团队", "评估开发者 AI 工具 ROI 的工程管理者", "管理多家模型和席位的企业采购团队"],
    killerFeature: "统一追踪 OpenAI、Claude、Cursor 等工具的费用，并按供应商、模型、员工和团队下钻；管理者还能把支出与 PR 数量、修订次数和绩效信号并排比较，用自然语言生成看板与策略。",
    experience: "团队接入现有账单和员工目录后即可看到异常增长、重复工具与低利用率席位；筛选器从总预算一路钻取到个人和模型，让预算讨论从发票汇总转向谁在什么工作中产生了什么结果。",
    growth: "以无需 Rippling 订阅的免费独立产品进入尚未购买其主平台的公司，通过 Product Hunt 与官方社区首发获客，再把 AI 治理需求延伸到身份、设备、费用和人力系统。",
    businessModel: "AI Spend Console 当前免费且无需 Rippling 主产品订阅；官方未公布独立付费层，现阶段更像导入企业数据关系并带动 Rippling 平台销售的获客入口。",
    insight: "企业 AI 预算会从统计 token 和席位，升级到验证产出与组织目标的关联；能把费用、身份和工作结果接起来的产品，比单纯压缩模型单价更接近采购决策。",
    sourceUrl: "https://www.rippling.com/platform/ai/ai-spend-console",
    sourceLabel: "Rippling 官方页面",
    sources: [
      { label: "Rippling AI Spend Console", url: "https://www.rippling.com/platform/ai/ai-spend-console" },
      { label: "Rippling 官方社区发布", url: "https://www.reddit.com/r/rippling/comments/1vhmnxf/introducing_ai_spend_console/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/rippling" }
    ]
  },
  {
    slug: "superlog-responder",
    name: "Superlog Responder",
    tag: "Slack Incident Response Agent",
    tagline: "在 Slack 告警线程里自动完成排噪、根因调查、证据汇总并提交可合并修复",
    image: "https://ph-files.imgix.net/2f855288-7e17-4daa-a4a0-1b30dca9ecf7.jpeg",
    positioning: "定位为驻留在现有 Slack 告警流里的事故响应 Agent，而不是新的监控面板。壁垒来自把 Sentry、Datadog 告警与代码仓库、运行上下文、团队记忆和修复验证连接成一个线程内闭环。",
    audience: ["需要降低告警噪音的平台与 SRE 团队", "没有专职值班工程师的创业公司", "希望缩短根因定位和修复时间的开发团队"],
    killerFeature: "连接现有 Sentry 或 Datadog Slack 告警后，Responder 会判断是否需要升级、收集代码和运行证据、在原线程解释根因，并在能够安全修复时创建可审阅和合并的 PR。",
    experience: "团队继续使用熟悉的 Slack 频道，不用切到额外控制台；每次响应都保留证据、推理和升级路径，用户可用提示词、仓库范围、记忆与升级规则调整 Agent 的自主边界。",
    growth: "用 100 个免费 credits、Apache 2.0 开源仓库和无需替换现有监控的集成路径降低试用成本，通过 Product Hunt 与工程师社区传播真实事故线程，再向持续高频值班团队售卖托管额度。",
    businessModel: "社区版免费开源；Superlog Cloud 提供免费层、按量付费和月度 credit 套餐，具体团队价格随使用量与托管需求选择。",
    insight: "事故 Agent 要赢得信任，必须在团队已有的告警入口里给出证据、可逆补丁和明确升级条件；减少切换成本与保留人类审阅同样重要。",
    sourceUrl: "https://responder.superlog.sh/",
    sourceLabel: "Superlog Responder 官方页面",
    sources: [
      { label: "Superlog Responder", url: "https://responder.superlog.sh/" },
      { label: "Superlog GitHub", url: "https://github.com/superloglabs/superlog" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/superlog" }
    ]
  },
  {
    slug: "annotate",
    name: "Annotate",
    tag: "Visual Context for Coding Agents",
    tagline: "录下屏幕、指向问题并边说边画，再让编码 Agent 读取逐帧时间线与转录",
    image: "https://ph-files.imgix.net/a1277012-5c25-421c-a58b-73e355bc76e2.jpeg",
    positioning: "定位为人向编码 Agent 传递视觉问题的本地上下文工具，而不是通用录屏软件。壁垒来自把语音、光标、绘图和关键帧精确同步，并通过本地 MCP 暴露成 Agent 可检索的结构化时间线。",
    audience: ["用 Cursor、Claude Code 或 Codex 开发界面的工程师", "需要高效提交视觉 bug 的设计和产品团队", "重视代码与屏幕数据本地处理的 Mac 用户"],
    killerFeature: "用户录制屏幕时可以指点、圈画并口述问题，Annotate 将语音与对应帧同步；Cursor、Claude Code 和 Codex 可经本地 MCP 直接读取时间线、截图与转录，不再依赖模糊文字描述。",
    experience: "按下录制后像给同事讲解一样操作应用，结束即得到可回放的标注时间线；把记录交给 Agent 后，它能跳到口述发生的准确画面，减少手动截图、命名和粘贴上下文。",
    growth: "以免登录、免上传、免费和 Apple Silicon 原生体验吸引隐私敏感的开发者，通过 MCP 指南和 Product Hunt 展示从录屏到修复的短闭环，再依靠作品演示在编程社区自然传播。",
    businessModel: "当前产品免费，全部处理在本地完成；官方尚未公布订阅、团队版或其他商业化计划。",
    insight: "多模态开发工具不应只让模型看见屏幕，还要保留人类注意力发生的时间和位置；同步的指向、语音和帧比一次性截图包含更高密度的意图。",
    sourceUrl: "https://xannotate.com/",
    sourceLabel: "Annotate 官方网站",
    sources: [
      { label: "Annotate 官网", url: "https://xannotate.com/" },
      { label: "Annotate MCP 指南", url: "https://xannotate.com/mcp" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/annotate-8" }
    ]
  },
  {
    slug: "copilotkit-channels-sdk",
    name: "CopilotKit Channels SDK",
    tag: "Chat-native Agent Delivery",
    tagline: "把现有 AG-UI Agent 直接发布到 Slack 和 Microsoft Teams，并保留流式交互与审批",
    image: "https://cdn.sanity.io/images/y3fjfzcd/production/1b206c0d2d53c2942a619360d2fdc71418d54741-1600x1000.png?w=1200&h=630&fit=crop&auto=format",
    positioning: "定位为 Agent 从应用内界面走向工作聊天渠道的开源交付层。壁垒来自 AG-UI 协议、平台原生卡片、身份映射、持久状态与人工审批共同保持同一个 Agent 的交互语义。",
    audience: ["已有 AG-UI Agent 的应用开发者", "在 Slack 或 Teams 内部署内部 Agent 的平台团队", "需要审批和持久会话的企业 AI 产品团队"],
    killerFeature: "开发者不用重写 Agent，即可把同一 AG-UI 后端接入 Slack 与 Teams；消息支持流式输出、平台原生按钮和卡片、人工审批、身份和会话状态，Discord 与 Google Chat 在官方路线图中。",
    experience: "用户在每天工作的频道里提及或私聊 Agent，审批和结果都留在原对话上下文；开发者可自行运行 SDK，也可接入 CopilotKit 的持久化与企业部署层处理身份、状态和生产运维。",
    growth: "以开源 SDK、文档和现有 CopilotKit 开发者生态降低接入门槛，通过 Product Hunt 触达需要聊天分发的团队，再用 Slack、Teams 之外的渠道扩展形成协议与适配器网络效应。",
    businessModel: "Channels SDK 开源且可自行运行；生产级持久状态和企业部署由 Enterprise Intelligence 承接，目前处于早期访问阶段，官方未公开标准价格。",
    insight: "Agent 的下一轮分发不只发生在独立应用商店，而是在用户已经协作的对话里；渠道适配必须保留状态、审批和原生组件，不能退化成纯文本 webhook。",
    sourceUrl: "https://www.copilotkit.ai/channels",
    sourceLabel: "CopilotKit Channels 官方页面",
    sources: [
      { label: "CopilotKit Channels", url: "https://www.copilotkit.ai/channels" },
      { label: "Channels SDK 官方博客", url: "https://www.copilotkit.ai/blog/channels-sdk" },
      { label: "官方文档", url: "https://docs.copilotkit.ai/reference/channels" },
      { label: "CopilotKit GitHub", url: "https://github.com/CopilotKit/CopilotKit" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/copilotkit" }
    ]
  }
];

const industryEvents20260807 = [
  {
    slug: "anthropic-fable-5-biology-safeguards",
    name: "Anthropic · Fable 5 生物安全更新",
    summary: "Anthropic 更新 Fable 5 生物分类器，在维持高风险防护的同时将生物相关降级约减少 85%",
    image: "https://www.anthropic.com/api/opengraph-illustration?name=Node%20Bird&backgroundColor=heather",
    impact: "新分类器已经覆盖 Anthropic 产品表面，更多健康教育、临床信息和低风险生物问题可以继续由 Fable 5 回答；涉及双重用途病毒学、毒理学或分子设计的高风险请求仍会降级到 Opus 5。前沿模型的安全竞争开始从统一拒答，转向更细粒度地保留合法专业价值。",
    insight: "安全体验应同时衡量危险请求拦截率与正常任务受损率；当模型能力分层存在时，把高风险请求路由到更合适的安全配置，比对所有用户一刀切更可持续。",
    sourceUrl: "https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards",
    sourceLabel: "Anthropic 官方发布",
    sources: [
      { label: "Anthropic 安全更新", url: "https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards" },
      { label: "Anthropic Newsroom", url: "https://www.anthropic.com/news" },
      { label: "Fable 5 与 Mythos 5 发布", url: "https://www.anthropic.com/news/claude-fable-5-mythos-5" }
    ]
  },
  {
    slug: "openai-gpt-5-6-sol-luna-august-update",
    name: "OpenAI · GPT-5.6 Sol / Luna 八月更新",
    summary: "OpenAI 调整 ChatGPT 的 GPT-5.6 Sol 与 Luna，让付费用户获得更聚焦推理，并扩大免费用户的思考入口",
    image: "https://images.ctfassets.net/kftzwdyauwt9/3MPipvFMxS8m3kTyCtwFgj/015747dcd34cb667a221688cfca64e0f/Frame.png?w=3840&q=90&fm=webp",
    impact: "Plus 与 Pro 用户的 Sol 更新将即时回答与更深推理收进同一模型并加入思考强度滑杆；Free 与 Go 默认逐步切换到 Luna，并提供 Think 按钮和不限量文本聊天。OpenAI 的内部评估显示，在选定的高细节提示中，相比 GPT-5.5 Instant，Luna 与 Sol 出现事实错误的回答分别减少约 62% 与 68%，但该结果不代表所有任务。",
    insight: "模型升级的产品价值需要同时落在默认路径、用户可控的思考成本和可解释的质量指标上；让轻量用户也能明确触发推理，比只在模型选择器增加名称更能改变行为。",
    sourceUrl: "https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/",
    sourceLabel: "OpenAI 官方发布",
    sources: [
      { label: "OpenAI ChatGPT 更新", url: "https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/" },
      { label: "GPT-5.6 八月更新系统卡", url: "https://cdn.openai.com/pdf/GPT_5_6_August_Updates.pdf" },
      { label: "OpenAI 官方账号", url: "https://x.com/OpenAI" }
    ]
  },
  {
    slug: "google-weathernext-cyclones",
    name: "Google DeepMind · WeatherNext Cyclones",
    summary: "Google DeepMind 开源 WeatherNext 2 与专用气旋模型，把热带气旋路径、强度和风场预测提前一天",
    image: "https://lh3.googleusercontent.com/3BMNDD6KsweyeknlgRFzv4YGRpwQsVyHMAoWStS_AVk1AFjAKHWNNIdPx1C4r3jjUVRZzk0XzQrReViFE9Af824sc-ttQTU1afHB5aLvNGEYX8QRtw%3Dw1440-h810-n-nu",
    impact: "官方论文与业务测试显示，新系统的三日预测可达到前代模型两日预测的水平，相当于增加一天有效提前量；WeatherNext 能在 TPU 上不到一分钟生成 1,000 个成员、最长 15 天的集合预报，并同时覆盖路径、强度与风场不确定性。专业科学模型正在从单次精度展示走向开放权重与业务验证。",
    insight: "高风险预测产品不能只给一个最可能答案；快速生成大规模集合、公开模型并与领域机构持续验证，才能把模型能力转化为可操作的概率和提前量。",
    sourceUrl: "https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/",
    sourceLabel: "Google DeepMind 官方博客",
    sources: [
      { label: "Google DeepMind 发布", url: "https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/" },
      { label: "WeatherNext GitHub", url: "https://github.com/google-deepmind/weathernext" },
      { label: "Google Earth AI", url: "https://ai.google/earth-ai/" }
    ]
  },
  {
    slug: "nvidia-cosmos-3-physical-ai-workflows",
    name: "NVIDIA · Cosmos 3 物理 AI 生态",
    summary: "NVIDIA 集中展示 Cosmos 3 开放世界模型如何生成训练数据、测试策略并专门化机器人与自动驾驶系统",
    image: "https://blogs.nvidia.com/wp-content/uploads/2026/08/nv-ov-ito-social-1920x1080-1.jpg",
    impact: "Cosmos 3 家族覆盖 Edge、Nano 与 Super 等尺寸，并被机器人、自动驾驶和视觉 AI 团队用于合成世界、后训练策略与仿真验证；模型、权重、代码和技术资料通过 Hugging Face 与 GitHub 开放。物理 AI 的竞争正从单个演示转向数据生成、世界建模、策略训练与部署工具链的组合。",
    insight: "面向现实世界的模型需要与仿真数据、策略评估和部署硬件共同设计；开放权重只有接上可复现工作流和行业伙伴，才会形成真正的开发平台。",
    sourceUrl: "https://blogs.nvidia.com/blog/open-world-models-physical-ai/",
    sourceLabel: "NVIDIA 官方博客",
    sources: [
      { label: "NVIDIA 官方发布", url: "https://blogs.nvidia.com/blog/open-world-models-physical-ai/" },
      { label: "NVIDIA Cosmos 3 模型集合", url: "https://huggingface.co/collections/nvidia/cosmos3" },
      { label: "NVIDIA Cosmos GitHub", url: "https://github.com/NVIDIA/Cosmos" }
    ]
  },
  {
    slug: "hugging-face-baseten-inference-provider",
    name: "Hugging Face × Baseten · Inference Providers",
    summary: "Hugging Face 将 Baseten 接入 Inference Providers，让开发者从模型页与统一 SDK 调用托管开源模型",
    image: "https://huggingface.co/blog/assets/inference-providers/welcome-baseten.png",
    impact: "首批集成覆盖对话与文本生成任务，开发者可通过 Hugging Face JavaScript、Python SDK 或模型页调用 Baseten 上的 Kimi K3、DeepSeek V4 Flash、GLM-5.2 等模型，并选择自带 Baseten key 或由 Hugging Face 路由计费。模型发现、统一接口和专业推理基础设施进一步收敛。",
    insight: "模型市场的关键体验不只是列出更多权重，而是让发现、鉴权、调用和账单在同一条路径完成；供应商适配越标准化，差异化就越需要回到可靠性、延迟和部署能力。",
    sourceUrl: "https://huggingface.co/blog/baseten",
    sourceLabel: "Hugging Face 官方博客",
    sources: [
      { label: "Hugging Face × Baseten 发布", url: "https://huggingface.co/blog/baseten" },
      { label: "Hugging Face Inference Providers", url: "https://huggingface.co/docs/inference-providers/index" },
      { label: "Baseten 官方网站", url: "https://www.baseten.co/" }
    ]
  }
];

const trends20260807 = [
  {
    title: "AI 价值度量从使用量转向可归因结果",
    text: "Rippling 把模型支出连接到 PR 与绩效信号，Cloudflare 用应用数量和节省工时披露内部价值，OpenAI 则用事实错误率解释默认模型更新。采购与增长叙事正在从多少人用了 AI，转向哪些工作结果因 AI 改变。"
  },
  {
    title: "Agent 分发进入工作实际发生的界面",
    text: "Cloudflare OS 把 Agent 放进员工工作区，CopilotKit 将同一 Agent 带到 Slack 与 Teams，Annotate 让屏幕讲解直接进入编码上下文。新入口的共同点是保留身份、状态和人类意图，而不是再造孤立聊天框。"
  },
  {
    title: "开放模型走向专业化与可部署生态",
    text: "WeatherNext 面向气旋预测开放专用模型，NVIDIA 用 Cosmos 3 连接世界建模与物理 AI 工作流，Hugging Face 与 Baseten 打通模型发现和托管推理。开放权重的竞争正在延伸到领域验证、工具链与稳定部署。"
  }
];

const products20260806 = [
  {
    slug: "adant-ai",
    name: "AdAnt AI",
    tag: "Social Ad Creative Agent",
    tagline: "把产品网址或参考视频变成可编辑、可批量测试的短视频广告方案",
    image: "https://adant.ai/og-image.png",
    positioning: "定位为社交广告团队的创意 Agent，而不是单次文生视频工具。壁垒来自把受众与卖点提炼、爆款结构拆解、素材管理和多版本迭代放进同一对话画布，让策略与制作共享上下文。",
    audience: ["DTC 与电商品牌增长团队", "负责短视频投放的创意团队", "需要持续产出广告变体的代理商"],
    killerFeature: "粘贴产品网址或灵感视频后，系统会拆解钩子、场景、节奏、字幕和视觉节拍，再结合品牌资产生成面向 TikTok、Instagram Reels 与 YouTube Shorts 的 9:16 可编辑变体。",
    experience: "用户先与创意 Agent 对齐受众、卖点和方向，再在同一工作区复用产品、头像与参考素材；一条有效结构可以继续更换钩子、演员、CTA 和产品角度，减少跨工具搬运。",
    growth: "以至少一条免费视频和 Product Hunt 当日首发降低试用成本，用可分享广告成片制造作品传播；官方首发方案再通过月度订阅与按量 credits 覆盖高频测试团队。",
    businessModel: "当前公开单一方案为每月 39 美元，额外生成额度按量购买；Product Hunt 首发期提供首月优惠，企业或更高用量方案尚未公开。",
    insight: "生成式广告的价值不在一次产出，而在让洞察、素材、实验变量和结果复用形成循环；把赢家结构沉淀为可继续对话的资产，才可能压缩下一轮测试成本。",
    sourceUrl: "https://adant.ai/",
    sourceLabel: "AdAnt 官方网站",
    sources: [
      { label: "AdAnt 官网", url: "https://adant.ai/" },
      { label: "AdAnt 定价", url: "https://adant.ai/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/adant-ai" }
    ]
  },
  {
    slug: "wispr-flow-notetaker",
    name: "Wispr Flow Notetaker",
    tag: "Context-aware Meeting Notes",
    tagline: "在 Mac 本地捕捉任意会议，把准确逐字稿、说话人、决策与行动项变成可搜索上下文",
    image: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6a724a4e3c71e2882636aa0f_notetaker-og%20(1).jpg",
    positioning: "定位为 Flow 语音输入之上的会议上下文层，而不是入会机器人。壁垒来自个人词典、日历与历史会议信息共同校正人名和术语，并把会议、消息与邮件连接成可追溯答案。",
    audience: ["会议密集的管理者与知识工作者", "需要准确决策记录的产品和销售团队", "已经使用 Claude、ChatGPT 或 Cursor 的 Flow 用户"],
    killerFeature: "无需邀请机器人，只要 Mac 能播放或麦克风能听到的 Zoom、Meet、Teams、Slack Huddles 和线下对话都能捕捉；会后识别真实姓名，并通过 MCP 把历史会议接入 Claude、ChatGPT 与 Cursor。",
    experience: "会议开始时一键记录，实时查看按说话人分离的转录；走神时点击 What did I miss 即刻追上，结束后获得按主题整理的决定、依赖和下一步，还能跨会议提问并回到原始来源。",
    growth: "借 Flow 现有跨端用户与个人词典降低冷启动，通过免费计划、Granola 一键迁移和 Product Hunt 首发吸引替换用户，再用无限用量与团队管理推动升级。",
    businessModel: "Notetaker 包含在 Wispr Flow 中，免费计划可长期使用；Pro 提供无限使用，Flow for Teams 覆盖公司级协作，具体价格沿用 Flow 现有订阅体系。",
    insight: "会议记录的竞争正在从摘要文风转向上下文可信度；把人名、术语、历史关系与原始证据先做准，再开放给其他 Agent，笔记才会成为可执行的组织记忆。",
    sourceUrl: "https://wisprflow.ai/notetaker",
    sourceLabel: "Wispr Flow Notetaker 官方页面",
    sources: [
      { label: "Wispr Flow Notetaker", url: "https://wisprflow.ai/notetaker" },
      { label: "Wispr Flow 定价", url: "https://wisprflow.ai/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/wisprflow" }
    ]
  },
  {
    slug: "ngrok-ai-gateway",
    name: "ngrok AI Gateway",
    tag: "Unified Model Gateway",
    tagline: "用一个 OpenAI 兼容端点统一路由公共、定制与私有自托管模型",
    image: "https://ngrok.ai/og-image.png",
    positioning: "定位为开发者的托管模型流量控制面，而不是新的推理供应商。壁垒来自 ngrok 既有私网连接能力，把本地模型与公共 API 放进同一网关，同时提供密钥权限、故障转移和成本可观测性。",
    audience: ["同时使用多家模型的 AI 应用团队", "部署私有或自托管模型的平台工程师", "需要统一成本与权限治理的开发组织"],
    killerFeature: "应用只需把 baseURL 改为 gateway.ngrok.ai，即可在 OpenAI、Anthropic、定制端点和私网本地模型之间路由，并按应用或开发者限制可访问的供应商与模型。",
    experience: "用户预付 credits 后创建网关 key，用原有 OpenAI、Anthropic 或 Vercel AI SDK 发起请求；控制台按应用、模型和供应商展示 token、延迟、错误与成本，失败时按配置自动重试和切换。",
    growth: "以 OpenAI 兼容接口和无需分别注册供应商的默认 key 缩短首次调用，通过 ngrok 既有开发者社区、文档与 Product Hunt 首发获客，再用私网模型连接和 BYOK 扩展企业场景。",
    businessModel: "网关按每百万 token 0.05 美元收取路由与可观测费用，推理成本另计；采用预付 credits，不设订阅或长期承诺，BYOK 用户继续由原供应商计费。",
    insight: "模型路由真正的护城河不是多一个下拉框，而是把网络边界、密钥最小权限、失败策略和单位经济性放在同一控制面，让换模型不再意味着重做基础设施。",
    sourceUrl: "https://ngrok.ai/",
    sourceLabel: "ngrok AI Gateway 官方网站",
    sources: [
      { label: "ngrok AI Gateway", url: "https://ngrok.ai/" },
      { label: "ngrok 官方文档", url: "https://ngrok.com/docs/ai-gateway/overview" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/ngrok-ai-gateway" }
    ]
  },
  {
    slug: "cloudflare-wallets",
    name: "Cloudflare Wallets",
    tag: "Programmable Agent Wallet",
    tagline: "给人和 AI Agent 提供可读身份、稳定币账户与带预算边界的机器支付钱包",
    image: "https://blog.cloudflare.com/_emdash/api/media/file/01KZ517FXTQNNJ8YGVAX2EV3YW.png",
    positioning: "定位为 Agentic Internet 的买方支付与身份基础设施，与 Cloudflare Monetization Gateway 的卖方收款能力配套。壁垒来自把 Cloudflare 账户、可读 handle、x402 微支付和网络侧 Agent 工具连接起来。",
    audience: ["让 Agent 购买 API 与内容的开发者", "需要给员工 Agent 分配预算的组织", "通过 x402 销售数据、工具和推理服务的商家"],
    killerFeature: "一个 Account Wallet 可以创建多个面向 Agent 的 Virtual Wallet，并分别设置额度、允许清单与单笔交易上限；Agent 通过 API key 自主付款，超限时再请求人类授权。",
    experience: "当前用户先在 cloudflare.pay 认领与账户绑定的可读 handle；钱包开放后可入金、创建虚拟钱包并委派预算，让 Agent 无需传统注册、绑卡和生成 API key 就能试用 x402 端点。",
    growth: "先用稀缺 handle 预约形成身份网络，再借 Cloudflare Agents SDK、Monetization Gateway 与既有网站和开发者分发构建双边市场；低额微支付降低 Agent 试用新 API 的摩擦。",
    businessModel: "目前处于 handle 认领与候补阶段，钱包、入金和交易的正式收费尚未公布；未来价值来自支付、身份与 Cloudflare 商家基础设施之间的网络效应。",
    insight: "Agent 商业化需要同时解决谁在行动、能花多少、钱付给谁和异常时谁接管；把预算约束做成钱包原语，比在每个应用里重复开发审批更容易规模化。",
    sourceUrl: "https://blog.cloudflare.com/wallets/",
    sourceLabel: "Cloudflare 官方博客",
    sources: [
      { label: "Cloudflare Wallets 发布", url: "https://blog.cloudflare.com/wallets/" },
      { label: "Cloudflare Wallet handle", url: "https://cloudflare.pay/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/cloudflare" }
    ]
  },
  {
    slug: "kiro-crew",
    name: "Kiro Crew",
    tag: "Persistent Agent Workspace",
    tagline: "用开源工作区让多个编码 Agent 跨会话记住项目上下文、经验与技能",
    image: "https://kiro.dev/images/crew/session-pr.png?h=db3a350a",
    positioning: "定位为编码 Agent 的持久协作工作区，而不是另一个 IDE。壁垒来自把会话、项目知识、可复用技能与多种工具表面连接起来，让 Agent 在本地或远程运行后仍能累积经验。",
    audience: ["并行运行多个编码 Agent 的开发者", "需要保留项目知识的工程团队", "在终端、聊天渠道与云端之间切换任务的 Agent 用户"],
    killerFeature: "Crew 把 Agent 会话收进同一项目工作区，并持续保存上下文、教训和技能；用户能跨本地与远程环境、Discord 或 Telegram 继续工作，而不必每次重新解释代码库。",
    experience: "打开工作区即可看到项目内的 Agent 会话、当前进展与合并结果；任务完成后的经验可沉淀为后续会话可调用的记忆或技能，多个 Agent 共享项目背景但保持各自执行轨迹。",
    growth: "以开源仓库、Kiro 首页入口和 Product Hunt 首发进入现有编码 Agent 社区，通过本地优先与多工具连接降低迁移成本，再把 Crew 用户导向 Kiro 的云端、模型与企业治理能力。",
    businessModel: "Crew 本身以开源方式提供，仓库未公布独立订阅；Kiro 主产品采用 credits 计费并提供付费与企业方案，Crew 可作为其 Agent 工作流入口。",
    insight: "当 Agent 数量增加，团队最容易丢失的不是代码而是经验；把会话结果沉淀为项目级记忆，并允许不同入口继续使用，能让一次执行转化为复利。",
    sourceUrl: "https://kiro.dev/",
    sourceLabel: "Kiro 官方网站",
    sources: [
      { label: "Kiro Crew", url: "https://kiro.dev/" },
      { label: "KiroCrew GitHub Releases", url: "https://github.com/kirodotdev/KiroCrew/releases" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/kiro" }
    ]
  }
];

const industryEvents20260806 = [
  {
    slug: "meta-muse-code-spark-1-2",
    name: "Meta · Muse Code 与 Muse Spark 1.2",
    summary: "Meta 发布终端编码 Agent Muse Code 测试版，并用协同训练的 Muse Spark 1.2 支撑长程软件工程任务",
    image: "https://research.meta.ai/images/media-backups/introducing-muse-code-and-muse-spark-1-2/hero-light-v1.webp",
    impact: "Muse Code 把规划、编码、验证与工具调用写入可重放的本地事件日志，并让常驻后台 Agent 在隔离 worktree 中并行工作；Meta 展示的 GPU 内核优化任务超过 1000 次工具调用、单次可运行 24 小时。竞争由单轮代码补全进一步转向可恢复的长程执行系统。",
    insight: "长时间编码 Agent 的核心产品指标应包含恢复成功率、重复探索成本和验证闭环，而不只是基准分；模型与 harness 协同训练会让运行时设计本身成为能力的一部分。",
    sourceUrl: "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
    sourceLabel: "Meta 官方研究博客",
    sources: [
      { label: "Meta 官方发布", url: "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2" },
      { label: "Meta Muse Spark 模型页", url: "https://developer.meta.com/ai/models/muse-spark/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/" }
    ]
  },
  {
    slug: "macpaw-liquid-ai-elix",
    name: "MacPaw × Liquid AI · Elix",
    summary: "MacPaw 与 Liquid AI 合作，把面向 Apple Silicon 的端侧推理带入 Elix，并计划开放给 Setapp 开发者",
    image: "https://ai.macpaw.com/og-image.png",
    impact: "MacPaw 的 Elix 以 MLX、量化、推测解码和 KV cache 复用在 Mac 上运行模型，并与本地优先记忆层 Mnemos 组成 Agent 底座。合作把 Liquid AI 的小模型路线接入消费级 Mac 与 Setapp 分发，端侧 AI 从单个应用功能走向可供第三方复用的平台层。",
    insight: "端侧推理若要成为生态能力，必须同时解决模型适配、Swift 开发体验、记忆、订阅校验与分发；把这些公共成本集中在平台层，才能让小团队经济地交付私密 AI 功能。",
    sourceUrl: "https://ai.macpaw.com/",
    sourceLabel: "MacPaw AI 官方页面",
    sources: [
      { label: "MacPaw AI", url: "https://ai.macpaw.com/" },
      { label: "MacPaw 官方活动回顾", url: "https://macpaw.com/news/flip-the-script-2026-recap" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/08/05/macpaw-taps-liquid-ai-to-offer-on-device-inference-to-devs-building-for-its-app-store/" }
    ]
  },
  {
    slug: "nvidia-osaa-safe",
    name: "NVIDIA · OSAA SAFE 工作组",
    summary: "Open Secure AI Alliance 推进 SAFE 提案，为企业共享 AI 网络安全事件建立保密、无责的行业机制",
    image: "https://blogs.nvidia.com/wp-content/uploads/2026/08/osaia-logo-garden_press-kit_1920x1080_84_use.png",
    impact: "NVIDIA 发起的 OSAA 汇集云、安全、企业软件与开源组织，联盟成立后进一步讨论 Shared AI Findings Exchange：让成员在不暴露敏感细节的前提下报告事件、接收通知并复盘。AI Agent 安全开始从各家内部红队扩展为跨供应链的共同防御基础设施。",
    insight: "平台团队应把事件分类、最小披露、可信接收方和修复证据提前标准化；当 Agent 跨模型、工具与供应商运行，单一厂商的告警已经不足以覆盖系统风险。",
    sourceUrl: "https://blogs.nvidia.com/blog/open-secure-ai-alliance/",
    sourceLabel: "NVIDIA 官方博客",
    sources: [
      { label: "NVIDIA OSAA 发布", url: "https://blogs.nvidia.com/blog/open-secure-ai-alliance/" },
      { label: "Linux Foundation", url: "https://www.linuxfoundation.org/blog/open-models-and-open-weights-are-foundational-to-secure-ai" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/08/04/nvidia-doesnt-mess-around-a-week-after-open-ai-industry-group-formed-its-already-showing-progress/" }
    ]
  },
  {
    slug: "shopify-q2-ai-commerce",
    name: "Shopify · Q2 AI Commerce",
    summary: "Shopify 披露 AI 搜索带来的流量与订单同比增至约三倍，商品页成为主要承接入口",
    image: "https://cdn.shopify.com/b/shopify-brochure2-assets/d617483c5e5cdd01ae8b4f2571c76f34.png?originalWidth=2400&originalHeight=1260",
    impact: "Shopify 二季度收入 35.83 亿美元、同比增长 34%，GMV 达 1155.67 亿美元。公司在财报电话会上称 AI 推荐会话更常直接进入商品详情页，且购买分布延伸到长尾类别；AI 搜索正在成为增量发现渠道，而非只复制传统关键词流量。",
    insight: "面向 Agent 的商业增长依赖结构化商品数据、实时库存与可直接交易的接口；品牌不应只做面向人的 SEO，还要把目录语义和结账能力设计成机器可以可靠调用的产品面。",
    sourceUrl: "https://www.shopify.com/investors/press-releases/shopify-delivers-big-30-growth-across-gmv-revenue-gross-profit",
    sourceLabel: "Shopify 官方财报",
    sources: [
      { label: "Shopify Q2 2026 财报", url: "https://www.shopify.com/investors/press-releases/shopify-delivers-big-30-growth-across-gmv-revenue-gross-profit" },
      { label: "Shopify Commerce for Agents", url: "https://www.shopify.com/commerce-for-agents" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/08/05/shopify-says-ai-search-is-driving-more-traffic-and-sales-not-replacing-google/" }
    ]
  },
  {
    slug: "klaviyo-acquires-agency-ai",
    name: "Klaviyo · 收购 Agency AI",
    summary: "Klaviyo 收购客户成功 Agent 创业公司 Agency AI，创始人 Elias Torres 将出任首席产品官",
    image: "https://cdn.prod.website-files.com/68dfcddc308200f286057fd2/68e6f00ab8d0611cd0ba1264_og-image.jpg",
    impact: "Agency AI 的约 25 人团队与客户成功 Agent 技术将并入 Klaviyo，交易条款未披露。Torres 从 Drift 与 HubSpot 积累的 B2B 产品经验将用于加速 Composer、Customer Agent 等能力，B2C CRM 的竞争继续从营销自动化转向跨获客、服务与留存的 Agent 组合。",
    insight: "收购垂直 Agent 团队的价值不仅是模型或功能，更是领域工作流、评估数据与产品领导力；平台并购后应保留原产品的闭环指标，避免只把 Agent 拆成零散入口。",
    sourceUrl: "https://www.klaviyo.com/newsroom",
    sourceLabel: "Klaviyo 官方新闻室",
    sources: [
      { label: "Klaviyo 新闻室", url: "https://www.klaviyo.com/newsroom" },
      { label: "Agency AI 官方介绍", url: "https://www.agency.inc/press" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/08/05/klaviyo-acquires-elias-torres-agency-in-full-circle-reunion-for-tech-founders/" }
    ]
  }
];

const trends20260806 = [
  {
    title: "Agent 运行时开始围绕持久状态设计",
    text: "Muse Code 的可重放事件日志、Kiro Crew 的项目记忆与 Wispr 的跨会议上下文都指向同一变化：长程任务的关键资产是可恢复状态。产品应把会话、经验和验证结果做成可迁移数据，而不是一次性聊天记录。"
  },
  {
    title: "身份、预算与事件共享成为 Agent 信任边界",
    text: "Cloudflare Wallets 把支付权限下沉到虚拟钱包，ngrok 用 scoped key 约束模型访问，OSAA 则探索跨公司的安全事件交换。Agent 能力越强，越需要在基础设施层明确谁能做什么、能花多少和出事后如何共同响应。"
  },
  {
    title: "垂直数据与本地执行重新塑造分发",
    text: "Shopify 的 AI 推荐流量、AdAnt 的广告实验闭环与 MacPaw 的端侧平台表明，通用模型正通过结构化商业数据和设备内运行进入具体工作。下一阶段优势更可能来自渠道、专有反馈和低摩擦执行，而非单一模型包装。"
  }
];

const products20260804 = [
  {
    slug: "agentsky",
    name: "AgentSky",
    tag: "Managed Agent Runtime",
    tagline: "把 Claude Code、Codex 等编码 Agent 变成可恢复、可换模型并可从多端继续的托管会话",
    image: "https://agentsky.dev/opengraph-image?a3ac3459b930bc37",
    positioning: "定位为编码 Agent 的托管运行时，而不是新的模型或聊天壳。壁垒来自持久会话、隔离沙箱、快照恢复和跨 harness 迁移，让团队可以更换 Claude Code、Codex、Hermes 或 OpenClaw 而不丢失任务历史。",
    audience: ["长时间运行编码 Agent 的开发者", "需要远程接管任务的工程团队", "同时评估多种 Agent 与模型的平台团队"],
    killerFeature: "同一会话可以在 Web、API、CLI、Slack、Telegram、WhatsApp 或 iMessage 间继续，并在运行失败后从快照恢复；用户还能保留历史上下文切换 harness 或模型。",
    experience: "创建 Agent 后直接进入独立沙箱，运行中可查看完整历史、暂停、恢复或复制环境配置；消息渠道连接到同一会话，离开电脑后也不必重开任务或重述上下文。",
    growth: "用注册即送 3 美元额度、无订阅和按量计费降低首次托管门槛，通过 Product Hunt 首发、开发者渠道与多 harness 兼容覆盖已有 Agent 用户，再以远程渠道和恢复能力提高留存。",
    businessModel: "采用预付 credits 按量计费，不收席位费或订阅费；harness 本身免费，模型按官方列价结算，计算资源按秒收费，暂停或挂起状态不计费。",
    insight: "Agent 运行时间越长，产品壁垒越可能落在状态持久化、失败恢复与可替换性上；让用户能带着历史切换模型和入口，比单纯增加一个聊天界面更能建立基础设施价值。",
    sourceUrl: "https://agentsky.dev/",
    sourceLabel: "AgentSky 官方网站",
    sources: [
      { label: "AgentSky 官网", url: "https://agentsky.dev/" },
      { label: "AgentSky 定价", url: "https://agentsky.dev/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/agentsky" }
    ]
  },
  {
    slug: "ctruh-studio",
    name: "Ctruh Studio",
    tag: "No-code 3D Experience",
    tagline: "用 AI 和无代码编辑器在浏览器中制作可交互的 3D 展示、虚拟商店与 AR 体验",
    image: "https://framerusercontent.com/images/ThnhcHqVqGvCJ07Ao0J1GoXCjkU.png",
    positioning: "定位为品牌和零售团队的浏览器原生 3D 创作与发布平台。壁垒来自自研 Web 3D 引擎与 VersaAI，把文本、图片和视频转成可编辑资产，并把制作、交互、部署和效果分析放在同一工作流。",
    audience: ["品牌与电商营销团队", "产品展示和零售体验设计师", "没有 3D 工程团队的中小企业"],
    killerFeature: "用户可在浏览器里生成或导入 3D 资产，搭建产品展厅、虚拟门店、配置器和 WebAR 场景，再以链接或嵌入代码发布到网站与主流电商系统，无需安装 App 或 SDK。",
    experience: "从模板或空白场景开始后，团队在可视化画布中布置资产、设置交互与品牌元素，实时预览不同设备上的表现；发布后继续从统一面板查看体验数据并迭代。",
    growth: "通过 Product Hunt 发布和可分享的 3D 链接制造作品传播，以零售、汽车、房地产等垂直案例降低教育成本，再借 Shopify、Magento、WooCommerce 与定制站点集成进入商业项目。",
    businessModel: "官方企业方案采用项目制报价，费用覆盖设计、开发、性能优化与交付；Studio 的公开自助价格尚未披露，销售路径以演示和定制方案为主。",
    insight: "生成 3D 资产只是入口，真正可持续的产品价值来自把交互编排、跨端发布、商业系统集成和效果数据串成闭环，让一次演示变成可运营的数字触点。",
    sourceUrl: "https://www.ctruh.com/products/studio",
    sourceLabel: "Ctruh Studio 官方页面",
    sources: [
      { label: "Ctruh Studio", url: "https://www.ctruh.com/products/studio" },
      { label: "Ctruh WebXR Commerce", url: "https://xrcommerce.ctruh.com/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/ctruh-studio" }
    ]
  },
  {
    slug: "airtop-google-ads",
    name: "Airtop for Google Ads Automation",
    tag: "Advertising Agent",
    tagline: "让营销团队用对话完成 Google Ads 建设、浪费排查、优化与周期报告",
    image: "https://www.airtop.ai/opengraph-image.jpg?7f1a3e92fb88f0aa",
    positioning: "定位为 Google Ads 的对话式执行 Agent，而不是只读报表或通用浏览器自动化。壁垒来自将账户、CRM 上下文、关键词研究和网页操作放进同一 Agent，同时把所有真实改动保留在人类批准之后。",
    audience: ["管理多个广告账户的增长团队", "代理商与独立投放顾问", "缺少专职投手的中小企业"],
    killerFeature: "用户用自然语言要求创建 campaign、找出浪费支出、调整投放或生成报告，Agent 会研究关键词并操作 Google Ads，但所有变更都先形成可审阅建议，只有明确批准后才执行。",
    experience: "连接广告账户后即可在聊天中询问表现或下达任务；系统能运行周期审计，通过 Slack 或邮件推送发现，并结合 CRM 数据解释哪些投放带来真实业务结果。",
    growth: "借助 Google Ads 这一高价值且结果可量化的单一场景切入，用免费额度、7 天试用和 Product Hunt 首发吸引营销团队，再以持续审计、通知和多账户工作流推动付费。",
    businessModel: "免费版提供 1000 credits、3 个会话和 1 个 Agent；Starter、Professional 与 Enterprise 月费分别为 26、170 和 502 美元，年付享 10% 折扣。",
    insight: "高风险执行 Agent 的关键体验不是自动点击，而是把建议、依据、审批和动作结果放在同一链路；先用只读诊断建立信任，再逐步扩大可执行权限。",
    sourceUrl: "https://www.airtop.ai/google-ads",
    sourceLabel: "Airtop 官方 Google Ads 页面",
    sources: [
      { label: "Airtop for Google Ads", url: "https://www.airtop.ai/google-ads" },
      { label: "Airtop 定价", url: "https://www.airtop.ai/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/airtop" }
    ]
  },
  {
    slug: "mpai",
    name: "mpai",
    tag: "Multiplayer Coding Agent",
    tagline: "把已经运行的 Codex 或 Claude Code 终端会话变成可邀请、可撤销的多人协作空间",
    image: "https://godfaddaai.github.io/multiplayer-ai/og-card.png",
    positioning: "定位为现有编码 Agent 会话的多人协作层，而不是新的云端 IDE。壁垒来自直接进入正在运行的终端会话、通过 Tailscale 建立私有连接，并为参与者权限、提示词记录和撤销访问提供明确边界。",
    audience: ["结对使用编码 Agent 的工程师", "远程排障与代码评审团队", "希望保留本地环境和现有会话的开发者"],
    killerFeature: "主机安装一次后，队友粘贴邀请命令即可进入同一个 Codex 或 Claude Code 会话；可以只观看或共同提示，所有提示进入追加式审计记录，主机随时撤销访问。",
    experience: "产品保持终端原生，不要求迁移仓库、上传上下文或重开 Agent；参与者看到同一输出并共同输入，但不能获得主机 shell、删除文件或代理审批等高风险能力。",
    growth: "以 macOS public alpha、MIT 开源和一条可复制的邀请命令降低试用成本，通过 Product Hunt、GitHub 与首批十支团队共创打磨协作边界，再依靠真实结对场景获得口碑。",
    businessModel: "当前以 MIT 许可免费开源，允许商业使用且没有托管中继或已公布付费层；现阶段目标是获取公开 alpha 团队和社区贡献。",
    insight: "多人 Agent 协作不应等同于共享整台机器；把会话、输入权、文件权和审批权拆开，才能在保留本地工作流的同时建立可理解的安全边界。",
    sourceUrl: "https://godfaddaai.github.io/multiplayer-ai/",
    sourceLabel: "mpai 官方网站",
    sources: [
      { label: "mpai 官网", url: "https://godfaddaai.github.io/multiplayer-ai/" },
      { label: "mpai 官方 GitHub", url: "https://github.com/godfaddaai/multiplayer-ai" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/mpai" }
    ]
  },
  {
    slug: "open-minis",
    name: "Open Minis",
    tag: "On-device Mobile Agent",
    tagline: "在 iOS 与 Android 手机上运行带 Linux 沙箱和原生系统桥接的开源 AI Agent",
    image: "https://opengraph.githubassets.com/1/OpenMinis/OpenMinis",
    positioning: "定位为可验证、无账户的端侧移动 Agent，而不是把手机界面接到云端自动化服务。壁垒来自手机内的 Alpine Linux 沙箱、30 多个原生系统桥接和 BYOM 模式，使文件、工具与密钥边界可由用户掌控。",
    audience: ["重视隐私和可审计性的移动用户", "希望构建手机自动化的开发者", "需要跨 iOS 与 Android 部署个人 Agent 的开源社区"],
    killerFeature: "Agent 可在手机沙箱里安装软件包、运行 Python、编辑文件和使用浏览器，并通过授权桥接访问健康、日历、提醒、HomeKit、联系人、蓝牙、剪贴板、媒体与设备能力。",
    experience: "安装后无需注册账户，用户自行选择模型供应商并保存 API key；任务在隔离 Linux 环境执行，每项原生能力单独授权，数据与工作文件默认留在设备上。",
    growth: "以免费、开源、无遥测和无内购建立隐私差异，通过 App Store、GitHub release 与 Product Hunt 获取开发者用户，再由社区扩展桥接和端侧工作流。",
    businessModel: "当前应用免费、开源且没有内购，用户自行承担所选远程模型的 API 费用；项目未公布订阅或托管商业方案。",
    insight: "端侧 Agent 的机会不只在离线推理，而在于给模型一个用户可检查、系统可隔离的执行环境；权限逐项授权和 BYOM 能把隐私承诺落实为产品结构。",
    sourceUrl: "https://openminis.app/",
    sourceLabel: "Open Minis 官方网站",
    sources: [
      { label: "Open Minis 官网", url: "https://openminis.app/" },
      { label: "Open Minis GitHub Releases", url: "https://github.com/OpenMinis/OpenMinis/releases" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/open-minis" }
    ]
  }
];

const industryEvents20260804 = [
  {
    slug: "qwen3-8-max",
    name: "Alibaba Qwen · Qwen3.8-Max",
    summary: "阿里发布 2.4 万亿参数 MoE 旗舰模型 Qwen3.8-Max，面向百万上下文与长程多模态 Agent",
    image: "https://img.alicdn.com/imgextra/i3/O1CN01eBklSt1jT2S77Xekm_!!6000000004548-2-tps-224-224.png",
    impact: "官方页面显示模型每次激活 950 亿参数，支持文本、图像和视频输入，最大输入约 99.1 万 token、输出 13.1 万 token，并内置代码解释器、网页与图像搜索工具。Qwen 同时预告开放权重版本随后到来，旗舰模型竞争进一步转向长时间工作、工具调用和可部署性。",
    insight: "百万上下文不是把更多文件塞进提示词就结束；产品应为多日任务设计状态压缩、阶段检查、失败恢复和工具证据，让长程能力能稳定转化为交付。",
    sourceUrl: "https://qwen.ai/blog?id=qwen3.8",
    sourceLabel: "Qwen 官方发布",
    sources: [
      { label: "Qwen 官方发布", url: "https://qwen.ai/blog?id=qwen3.8" },
      { label: "Qwen Cloud 模型页", url: "https://www.qwencloud.com/models/qwen3.8-max" },
      { label: "Qwen 官方 X", url: "https://x.com/Alibaba_Qwen/status/2084100707423289643" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/qwen3" }
    ]
  },
  {
    slug: "nvidia-nemotronlabs-voicechat-11b",
    name: "NVIDIA · NemotronLabs VoiceChat 11B",
    summary: "NVIDIA 开放 11B 全双工语音模型，在自然打断与低延迟对话中加入实时工具调用",
    image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/models/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B.png",
    impact: "官方模型卡标注 8 月 3 日发布：单一端到端架构联合流式语音理解与生成，约 450 毫秒轮次延迟，并用独立输出通道产生工具调用脚本。模型采用 OpenMDW 1.1 许可，提供离线推理与 WebSocket 流式部署，但当前明确仅面向研究用途。",
    insight: "语音 Agent 的体验指标应从转写准确率扩展到抢话、停顿、工具等待话术和失败恢复；在动作执行期间仍保持自然对话，才是真正区别于 ASR、LLM、TTS 串联方案的价值。",
    sourceUrl: "https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B",
    sourceLabel: "NVIDIA 官方模型卡",
    sources: [
      { label: "NVIDIA 官方模型卡", url: "https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B" },
      { label: "NVIDIA NeMo 官方代码", url: "https://github.com/NVIDIA-NeMo/Speech/tree/nemotron-labs-voicechat" },
      { label: "NVIDIA VoiceChat Early Access", url: "https://developer.nvidia.com/nemotron-voicechat-early-access" }
    ]
  },
  {
    slug: "microsoft-project-perception-preview",
    name: "Microsoft · Project Perception 公测",
    summary: "微软开放 Project Perception 公测，用红、蓝、绿三类 Agent 连续发现、判断并修复安全风险",
    image: "https://blogs.microsoft.com/wp-content/uploads/2026/07/OMB-Project-Perception-Final-Hero-7_27-1024x576.png",
    impact: "Project Perception 于 8 月 3 日进入 public preview，首个场景把 MAI-Cyber-1-Flash 接入 MDASH 多模型团队处理软件漏洞管理。微软称该配置在 CyberGym 得分 96%，比 Mythos 高 12 点，并较当前 MDASH 配置节省近 50% 成本，Agent 安全由生成告警走向闭环防御。",
    insight: "企业 Agent 平台需要把感知、上下文、模型路由、协调器和执行器分层，并让人类保留最终控制；只有把质量、延迟和成本一起路由，全天候工作流才有可持续经济性。",
    sourceUrl: "https://blogs.microsoft.com/blog/2026/07/27/rethinking-security-for-the-age-of-ai/",
    sourceLabel: "Microsoft 官方博客",
    sources: [
      { label: "Microsoft 官方博客", url: "https://blogs.microsoft.com/blog/2026/07/27/rethinking-security-for-the-age-of-ai/" },
      { label: "Microsoft Security 客户案例", url: "https://techcommunity.microsoft.com/blog/microsoft-security-blog/how-nationwide-stays-ahead-of-attackers-with-project-perception/4540534" },
      { label: "Microsoft 研究访谈", url: "https://commandline.microsoft.com/taesoo-kim-interview-mdash-security-research/" }
    ]
  },
  {
    slug: "white-house-frontier-ai-framework",
    name: "美国白宫 · 前沿 AI 自愿评估框架",
    summary: "白宫完成前沿模型自愿评估框架，拟让开发者在发布前与政府开展受控网络能力测试",
    image: "https://www.whitehouse.gov/wp-content/uploads/2025/03/WH47-Presidential-Actions-Social-Share-Card.jpg",
    impact: "Axios 8 月 3 日报道框架已经完成但内容尚未公开，并将与企业继续讨论。其法源行政令要求建立机密网络能力基准，允许开发者自愿提交覆盖范围内模型供政府在向可信伙伴开放前最多评估 30 天，同时明确不构成强制许可、预先审查或发布审批。",
    insight: "前沿模型团队应提前把发布前评测、机密材料访问、合作方分级与披露边界产品化；即使框架自愿，能否用可审计流程证明风险控制也会影响政府和关键基础设施采购。",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
    sourceLabel: "白宫行政令",
    sources: [
      { label: "白宫行政令", url: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/" },
      { label: "白宫官方事实清单", url: "https://www.whitehouse.gov/fact-sheets/2026/06/fact-sheet-president-donald-j-trump-promotes-advanced-artificial-intelligence-innovation-and-security/" },
      { label: "Axios", url: "https://www.axios.com/2026/08/03/white-house-finalizes-ai-framework-behind-closed-doors" }
    ]
  },
  {
    slug: "palantir-q2-2026-aip-growth",
    name: "Palantir · Q2 2026 AIP 增长",
    summary: "Palantir 披露二季度收入同比增长 93%，美国商业业务在 AIP 需求推动下增长 149%",
    image: "https://img.youtube.com/vi/yTHNjVWnoWo/maxresdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/yTHNjVWnoWo?rel=0",
    impact: "SEC 财报附件显示，季度收入 19.35 亿美元，美国商业收入 7.64 亿美元，Rule of 40 得分达到 155%；公司把全年收入指引上调至 81.50 亿至 81.58 亿美元。企业 AI 采购的评价正在从模型试验转向能否在受控数据和业务流程中产生可量化价值。",
    insight: "面向企业的 AI 产品要把模型能力包装为可部署、可治理且能对应经营指标的工作流；销售材料若不能连接真实使用、合同扩张和利润结构，就很难跨过试点阶段。",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm",
    sourceLabel: "Palantir SEC 财报附件",
    sources: [
      { label: "Palantir SEC 财报附件", url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm" },
      { label: "Palantir SEC 8-K", url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/pltr-20260803.htm" },
      { label: "Palantir 官方财报直播", url: "https://www.youtube.com/live/yTHNjVWnoWo" }
    ]
  }
];

const trends20260804 = [
  {
    title: "Agent 基础设施从模型绑定转向可替换运行时",
    text: "AgentSky、mpai、Open Minis 与 Qwen3.8-Max 共同显示，持久状态、跨入口继续、失败恢复和模型切换正在变成基础能力。团队应把上下文和权限设计成可迁移资产，而不是锁在单一模型或聊天窗口中。"
  },
  {
    title: "AI 执行界面深入浏览器、终端与端侧系统",
    text: "Airtop 把广告账户变成对话式执行面，Ctruh 把 3D 生产放进浏览器，mpai 与 Open Minis 则进入终端和手机。产品竞争正从回答质量转向能否在用户已有环境里安全完成动作。"
  },
  {
    title: "安全评测与结果证据成为发布和采购门槛",
    text: "Project Perception、美国前沿模型框架和 Palantir 财报把同一信号放大：高风险 AI 必须同时证明能力、成本、人类控制与业务结果。可审计评测和清晰权限会越来越接近产品本身，而不只是合规附件。"
  }
];

const products20260802 = [
  {
    slug: "nudgeforme",
    name: "NudgeForMe",
    tag: "AI Email Agent",
    tagline: "扫描已发送邮件里的沉默机会，在原邮箱中起草符合上下文的下一封跟进",
    image: "https://nudgeforme.com/nudge-logo.png",
    videoUrl: "https://nudgeforme.com/nudge-demo-web.mp4",
    positioning: "定位为收件箱里的跟进执行 Agent，而不是又一个邮件改写器。壁垒来自识别提案、回款、引荐、审批和支持请求中的真实开放环路，结合完整线程、回复状态与个人语气决定何时跟进、何时停止。",
    audience: ["销售与商务拓展人员", "自由职业者与顾问", "需要追踪回款、审批和客户请求的小团队"],
    killerFeature: "连接 Gmail、Google Workspace、Outlook、Microsoft 365、Yahoo、iCloud 或 IMAP 后，系统回看已发送会话，找出无人回复但仍有下一步的线程，并直接在原邮箱生成可审阅草稿；检测到回复后自动停止追踪。",
    experience: "产品默认使用草稿模式，用户先看到为什么这条会话值得跟进，再审阅基于整段对话生成的文本；可用过滤器避开 FYI 和礼貌收尾，Pro 用户再选择自动起草或自动发送。",
    growth: "用免费扫描、无需信用卡和首发两个月 Pro 免费降低连接邮箱的心理门槛，通过 Product Hunt 当日榜首、推荐奖励与真实漏单案例获得传播，再用多邮箱和自动化推动升级。",
    businessModel: "免费版含 1 个邮箱、每月 100 次草稿额度和 30 天回看；Pro 月付 12 美元或年付 96 美元，含 3 个邮箱、每月 1000 次额度、更长回看、自动草稿与可选自动发送。",
    insight: "高价值 Agent 不一定从更宽的工作流切入；把一个经常被遗忘、结果容易衡量的开放环路做成默认可控的闭环，更容易同时证明收入价值与建立授权信任。",
    sourceUrl: "https://nudgeforme.com/",
    sourceLabel: "NudgeForMe 官方网站",
    sources: [
      { label: "NudgeForMe 官网", url: "https://nudgeforme.com/" },
      { label: "NudgeForMe 定价", url: "https://nudgeforme.com/#pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/nudgeforme" }
    ]
  },
  {
    slug: "port22",
    name: "Port22",
    tag: "Mobile Coding Agent",
    tagline: "把 Mac 上正在运行的 Claude Code、Codex、OpenCode 与 Aider 会话安全带到手机",
    image: "https://tryport22.com/port22/transcript.png",
    videoUrl: "https://tryport22.com/port22/demo.mp4",
    positioning: "定位为现有编码 Agent 的通用移动遥控器，而不是新的终端或 Agent 包装层。壁垒来自直接附着到 Mac 上已经运行的会话、保留原生审批选项，并在局域网与端到端加密中继之间无缝切换。",
    audience: ["长时间运行编码 Agent 的开发者", "需要离开电脑仍能处理审批的工程师", "同时使用多种 CLI Agent 的团队成员"],
    killerFeature: "手机实时显示会话转录、运行状态和卡住原因，Agent 请求权限时推送通知，并让用户点击原始审批选项；无需猜测快捷键、迁移终端或重配已有 Agent。",
    experience: "在 Mac 安装轻量端并与手机配对后即可看到所有受支持会话；用户可以在通勤或会议间隙检查进展、响应输入请求，随后回到桌面继续同一任务。",
    growth: "以一个 Mac、两个并发会话的免费入口和 Product Hunt 当日发布吸引重度 Agent 用户，通过同时支持 Claude Code、Codex、OpenCode 与 Aider 扩大可用人群，并用移动通知形成高频回访。",
    businessModel: "首发提供 1 台 Mac 与 2 个会话的免费使用且功能完整；官网当前仍以候补名单为主要入口，更多设备或会话的付费档位尚未公开。",
    insight: "随着 Agent 运行时间变长，新的稀缺资源不是生成速度，而是人的注意力和接管时机；把状态与授权压缩到移动端，能在不改变主工作流的前提下提升任务完成率。",
    sourceUrl: "https://tryport22.com/",
    sourceLabel: "Port22 官方网站",
    sources: [
      { label: "Port22 官网", url: "https://tryport22.com/" },
      { label: "Port22 隐私说明", url: "https://tryport22.com/privacy" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/port22" }
    ]
  },
  {
    slug: "agentmicro",
    name: "AgentMicro",
    tag: "Agent Observability",
    tagline: "在 macOS 菜单栏聚合并行 Codex 任务的实时状态、耗时与未读结果",
    image: "https://agentmicro.cc/screenshots/agentmicro-menu.png",
    positioning: "定位为 Codex Desktop 与 CLI 的本地优先微型可观察层。壁垒不是复杂仪表盘，而是从本机元数据可靠区分思考、完成、等待输入、错误和空闲五种状态，同时不读取或上传提示词、回复和源码。",
    audience: ["并行运行多个 Codex 任务的开发者", "希望减少窗口切换的 macOS 用户", "重视本地数据边界的 Agent 使用者"],
    killerFeature: "菜单栏用颜色和项目名持续显示所有任务，记录运行时长并标出未读结果；点击某条即可回到对应任务，不需要逐个翻查桌面窗口或终端标签。",
    experience: "基础状态检测无需辅助功能权限，安装后即可在一个紧凑菜单中查看任务；可选增强检测必须显式开启，产品不会替用户点击、输入或批准任何操作。",
    growth: "用免费开源、单一用途和可审计源码切入 Codex 重度用户，通过 Product Hunt、GitHub 与开发者口碑传播；菜单栏常驻带来天然日活，并为社区适配更多任务状态留下接口。",
    businessModel: "当前完全免费并以开源项目分发，没有订阅、云服务或已公布的商业付费层。",
    insight: "Agent 可观察性未必先需要企业级控制台；先把最频繁的状态焦虑变成一眼可见、点击可回的本地体验，可以用极低学习成本建立稳定使用习惯。",
    sourceUrl: "https://agentmicro.cc/",
    sourceLabel: "AgentMicro 官方网站",
    sources: [
      { label: "AgentMicro 官网", url: "https://agentmicro.cc/" },
      { label: "AgentMicro 官方 GitHub", url: "https://github.com/fizzy718/AgentMicro" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/agentmicro" }
    ]
  },
  {
    slug: "basedash-audit-logs",
    name: "Basedash Audit Logs",
    tag: "AI Governance",
    tagline: "为每次登录、配置变更与 AI 数据查询建立可筛选、可导出的原生审计轨迹",
    image: "https://www.basedash.com/og/p/pricing.png",
    positioning: "定位为 AI 原生 BI 内置的企业审计证据层。壁垒来自把用户、角色、数据访问、自然语言问题、生成查询与配置变化放在同一治理上下文，并与 SSO、SCIM、RBAC、行级权限和自托管组合交付。",
    audience: ["受监管企业的数据与安全团队", "需要让业务人员自助分析的 IT 管理者", "向客户交付 AI 分析能力的 SaaS 团队"],
    killerFeature: "系统记录谁在何时访问了什么数据、向 AI 分析师提出了什么问题、创建或发布了哪些仪表盘以及改动了哪些设置，并支持筛选、API、SIEM 流式输出和自定义保留策略。",
    experience: "管理员无需拼接应用日志和模型调用记录即可按人员、资源与动作回溯事件；审计轨迹与数据库层行级权限协同，使 AI 即使生成异常 SQL 也无法越过用户的数据范围。",
    growth: "Basedash 以连续拆分企业能力为独立产品的方式在 Product Hunt 高频发布，用安全审查中的真实问题教育市场，再通过 14 天试用、案例与 750 多个数据源进入团队。",
    businessModel: "Audit Logs 已包含在定制报价的 Enterprise 方案中；Startup 方案为每月 1000 美元、最多 25 位用户并另计 AI 用量，但不含此次企业审计能力。",
    insight: "企业 AI 的购买门槛正在从回答准确率转向能否重建一次决策的完整证据链；审计若只记录登录而不记录 AI 问题、数据范围和输出动作，就无法支撑真实问责。",
    sourceUrl: "https://www.basedash.com/",
    sourceLabel: "Basedash 官方网站",
    sources: [
      { label: "Basedash 官网", url: "https://www.basedash.com/" },
      { label: "Basedash 定价", url: "https://www.basedash.com/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/basedash" }
    ]
  },
  {
    slug: "kopai",
    name: "Kopai",
    tag: "Agent Marketplace",
    tagline: "让专家无代码上传知识、发布垂直 Agent，并按每次对话持续获得收入",
    image: "https://usekopai.com/api/og",
    positioning: "定位为专业知识 Agent 的创建工作台与交易市场。壁垒来自把知识库、系统提示、工具、评测、计费、发现和评论放进一条发布链路，让专家出售可交互的判断过程，而不是一次性课程或文档。",
    audience: ["教育、合规、制造与支持领域专家", "希望产品化个人知识的顾问", "寻找垂直专业 Agent 的企业与个人买家"],
    killerFeature: "创作者上传资料、设定范围与安全规则后即可无代码发布 Agent，平台在上线前检查知识检索、工具调用、越狱防护和范围遵循，并按每条消息计费。",
    experience: "Agent 可先保持私有反复测试，再一键进入可搜索市场；买家按主题发现、直接对话并评价，创作者也能把同一 Agent 导入自己的站点，生成界面在隔离沙箱中运行。",
    growth: "用免费创建、Product Hunt 当日发布和市场内 SEO 获取首批供给与需求，通过细分行业页面、评论和按使用付费降低买家试用成本，再让创作者带着既有受众进入平台。",
    businessModel: "市场按每条消息收费，创作者保留 70% 收入、平台获得 30% 以覆盖发现、托管、评测、支付与信任机制；创建和发布入口当前免费。",
    insight: "Agent 市场的关键不是上架数量，而是如何证明某个专家知识仍然有效、回答没有越界且按真实使用结算；评测与信任层会比模型调用本身更接近平台壁垒。",
    sourceUrl: "https://usekopai.com/",
    sourceLabel: "Kopai 官方网站",
    sources: [
      { label: "Kopai 官网", url: "https://usekopai.com/" },
      { label: "Kopai 官方文档", url: "https://docs.usekopai.com/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/kopai-the-marketplace-for-ai-agents" }
    ]
  }
];

const industryEvents20260802 = [
  {
    slug: "deepseek-v4-flash-0731",
    name: "DeepSeek · DeepSeek-V4-Flash-0731",
    summary: "DeepSeek 正式开放 V4 Flash 更新权重，用更强 Agent 能力取代预览版并保留 MIT 许可",
    image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/models/deepseek-ai/DeepSeek-V4-Flash-0731.png",
    impact: "官方模型卡显示，新版在 Terminal Bench 2.1 达到 82.7、DeepSWE 达到 54.4，并引入 low、high、max 三档 reasoning effort；权重可本地部署且支持 vLLM、SGLang 的 DSpark 推测解码。开放模型竞争由聊天能力进一步转向长程编码、工具使用和推理成本。",
    insight: "开放模型发布应同时交付权重、代理评测、推理模板与部署配方；对产品团队而言，可复现的 Agent 运行链路比单一总分更能决定是否值得迁移。",
    sourceUrl: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
    sourceLabel: "DeepSeek 官方模型卡",
    sources: [
      { label: "DeepSeek 官方模型卡", url: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731" },
      { label: "DeepSeek-V4 技术报告", url: "https://arxiv.org/abs/2606.19348" },
      { label: "Reddit 实测讨论", url: "https://www.reddit.com/r/DeepSeek/comments/1vbi0wk/deepseekv4flash_api_is_now_in_public_beta/" }
    ]
  },
  {
    slug: "minimax-h3-preview",
    name: "MiniMax · H3 开放预告",
    summary: "MiniMax 公布 H3 通用多模态视频模型，并预告北京时间 8 月 3 日开放模型权重",
    image: "https://cdn.modelscope.cn/social-thumbnails/models/MiniMax/MiniMax-H3.png",
    impact: "H3 把文本、图像、音频与视频放进同一上下文，统一处理生成、参考和编辑，并瞄准影视、广告、品牌、电商与游戏等商业内容场景。官方 ModelScope 页面在开放前提供订阅提醒，说明视频模型的竞争正在从单任务效果转向多素材理解、精细控制与可部署权重。",
    insight: "对生成式视频产品，发布节奏要明确区分展示、在线体验和权重开放；产品机会在于围绕同一创作上下文持续编辑，而不是让用户在多个任务模型之间重复上传素材。",
    sourceUrl: "https://x.com/MiniMax_AI/status/2083006198828417501",
    sourceLabel: "MiniMax 官方 X",
    sources: [
      { label: "MiniMax 官方 X", url: "https://x.com/MiniMax_AI/status/2083006198828417501" },
      { label: "MiniMax 官方 ModelScope", url: "https://modelscope.cn/models/MiniMax/MiniMax-H3" },
      { label: "Reddit 开放时间讨论", url: "https://www.reddit.com/r/StableDiffusion/comments/1vbjta9/release_date_for_minimax_h3_open_weight_is_out/" }
    ]
  },
  {
    slug: "gemini-robotics-2",
    name: "Google DeepMind · Gemini Robotics 2",
    summary: "Google DeepMind 推出三款 Robotics 2 模型，让机器人获得全身控制、精细操作与多机器人协作",
    image: "https://img.youtube.com/vi/4lSQnrMC6nY/maxresdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/4lSQnrMC6nY?rel=0",
    impact: "Gemini Robotics 2 负责视觉语言到动作，ER 2 规划持续数分钟的多步任务并协调机器人团队，On-Device 2 可离线运行并用少于 200 个示例在数小时内适配新本体。ER 2 已进入 AI Studio，VLA 与端侧版本面向早期合作伙伴，物理 AI 正从桌面抓取扩展到全身协作系统。",
    insight: "机器人产品不能只展示一次成功动作；应分别度量规划、执行、自纠错、人体接近安全与跨本体迁移，并为云端推理不可用时设计端侧降级。",
    sourceUrl: "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/",
    sourceLabel: "Google DeepMind 官方发布",
    sources: [
      { label: "Google DeepMind 官方发布", url: "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/" },
      { label: "Google DeepMind 官方视频", url: "https://www.youtube.com/watch?v=4lSQnrMC6nY" },
      { label: "Axios", url: "https://www.axios.com/2026/07/30/google-robotics-software-update" }
    ]
  },
  {
    slug: "openai-astra-ten-advances",
    name: "OpenAI · Astra 十项数学进展",
    summary: "OpenAI 公布内部 Astra 模型生成的十项数学与理论计算机科学结果，并发布论文与 Lean 证书",
    image: "https://opengraph.githubassets.com/1/openai/ten-proofs",
    impact: "十项结果覆盖高维球堆积、编码理论、群论、算术电路、量子复杂性、格密码和组合数学；官方称寻找解法的总 token 按 Sol API 费率约 2000 美元，之后由人类协助整理，并由模型形式化为可机器检查的 Lean 证书。前沿模型开始从解题榜单进入公开研究主张与可验证产物。",
    insight: "科学 Agent 的可信体验必须把发现、人工编辑、形式化证明和独立复核拆开呈现；可下载的证书、代码和推理材料，比一句“模型取得突破”更能形成产品信任。",
    sourceUrl: "https://openai.com/index/ten-advances-in-mathematics/",
    sourceLabel: "OpenAI 官方发布",
    sources: [
      { label: "OpenAI 官方发布", url: "https://openai.com/index/ten-advances-in-mathematics/" },
      { label: "OpenAI 官方论文", url: "https://cdn.openai.com/pdf/ten-proofs-oai.pdf" },
      { label: "Lean 证书仓库", url: "https://github.com/openai/ten-proofs" },
      { label: "r/math 讨论", url: "https://www.reddit.com/r/math/comments/1vch950/openai_ten_advances_in_mathematics_and/" }
    ]
  },
  {
    slug: "eu-ai-act-article-50",
    name: "欧盟 AI Act · Article 50",
    summary: "欧盟 AI 法案第 50 条今日开始适用，要求披露 AI 交互并标记特定生成或操纵内容",
    image: "https://digital-strategy.ec.europa.eu/sites/default/files/styles/newsroom_large/public/newsroom/items/7_GPAI_CoP_Documentation_Jic10w91oXHE9jpiwiGysX4P4_241037.jpg?itok=6ixNBNvj",
    impact: "提供方需告知用户正在与 AI 直接交互，并为生成或操纵内容加入机器可读标记；部署方需披露深度伪造、无人工编辑的公共利益文本、情绪识别和生物特征分类。现有生成系统的标记义务可过渡到 12 月 2 日，违规最高可罚 1500 万欧元或全球年营业额 3%。",
    insight: "透明度不能只靠页面角落的一行说明；产品团队需要把交互披露、机器标记、内容标签、生成时间与人工审核状态作为可审计字段，从创建链路开始设计。",
    sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/guidelines-transparency-ai-generated-content",
    sourceLabel: "欧盟委员会官方指南",
    sources: [
      { label: "欧盟委员会 Article 50 指南", url: "https://digital-strategy.ec.europa.eu/en/policies/guidelines-transparency-ai-generated-content" },
      { label: "欧盟委员会快速事实", url: "https://digital-strategy.ec.europa.eu/en/factpages/quick-facts-transparency-rules-ai-systems" },
      { label: "Reuters", url: "https://live.euronext.com/en/financial-news/ai-generated-ads-should-be-exempt-eu-transparency-rules-retail-association-says" }
    ]
  }
];

const trends20260802 = [
  {
    title: "Agent 竞争转向长程执行与可观察性",
    text: "DeepSeek 强化编码与工具评测，Port22 和 AgentMicro 则补齐移动审批与并行状态。模型能力只有进入可监控、可接管的长任务链路，才会真正转化为完成率。"
  },
  {
    title: "多模态智能开始统一数字创作与物理行动",
    text: "MiniMax H3 用统一上下文理解并生成多种媒体，Gemini Robotics 2 把视觉语言推理推进到全身动作与多机器人协作。产品边界正从单一模态工具转向连续世界状态。"
  },
  {
    title: "可验证与可追责成为商业化前置条件",
    text: "Astra 的 Lean 证书、Basedash 的 AI 审计轨迹和欧盟 Article 50 同时指向证据链。高风险 AI 产品必须说明谁做了什么、依据什么、何时由人接管，而不是只展示最终输出。"
  }
];

const products20260730 = [
  {
    slug: "prelint",
    name: "Prelint",
    tag: "AI Product Review",
    tagline: "在每个 AI 生成的 Pull Request 合并前，对照产品规格、业务规则与架构决策检查方向漂移",
    image: "https://prelint.com/api/og?title=Prevent+product+drift+in+AI-written+code.&description=Prelint+checks+every+pull+request+against+your+product+specs.+Catch+misalignment+before+it+ships.",
    positioning: "定位为 AI 编码之后、技术代码审查之外的产品意图检查层。壁垒来自把分散在仓库、Notion、Linear、Slack 与会议中的决策构造成持续积累的 decision ledger，并区分不同来源的权威程度，而不是只做一次语义比对。",
    audience: ["大量采用编码 Agent 的产品研发团队", "有合规与架构约束的软件公司", "需要监督异步 PR 的技术负责人"],
    killerFeature: "每次 PR 自动解释 Agent 做了什么产品决策、是否违背既有规格与约束、后果和可逆性，并通过 GitHub、GitLab、CLI 与 MCP 让 Agent 在开发中自我修正。",
    experience: "安装应用并指向 Markdown、YAML 等规格文件后即可在下一次 PR 获得行内反馈；用户看到的是“是否应该这样构建”的证据和建议，而不是另一组风格、性能或语法问题。",
    growth: "用 10 美元免费 Credits 和无需信用卡的接入降低试用门槛，通过 Product Hunt 日榜、NVIDIA Inception、开发者口碑与永久推荐奖励获客；公开仓库免费，便于从开源项目扩散到付费团队。",
    businessModel: "按完成的审查计费，每次 1 美元，无席位费或订阅最低消费；失败、取消和超时审查免费，公开开源项目免费，大客户可使用发票或年度预付。",
    insight: "当代码产出速度不再稀缺，真正昂贵的失败会从“代码能不能跑”转向“团队是否在构建正确的产品”；围绕意图、来源权威和决策历史建立控制层，比再加一个通用审查模型更有机会形成复利。",
    sourceUrl: "https://prelint.com/",
    sourceLabel: "Prelint 官方网站",
    sources: [
      { label: "Prelint 官网", url: "https://prelint.com/" },
      { label: "Prelint 定价", url: "https://prelint.com/pricing" },
      { label: "Prelint 官方 X", url: "https://x.com/prelint_ai" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/prelint" }
    ]
  },
  {
    slug: "soundgate-guitar",
    name: "SoundGate Guitar",
    tag: "AI Music Tutor",
    tagline: "让手机实时听辨吉他演奏，并用可视化指板、个性化反馈和练习计划补上自学者缺少老师的环节",
    image: "https://soundgate.ai/generative_audio.png",
    positioning: "定位为随时可用的 AI 吉他陪练。壁垒来自低延迟音高、节奏与技巧识别，叠加适应技能和目标的课程路径、练习连续性与长期演奏数据，而不是只提供乐谱或聊天问答。",
    audience: ["自学吉他的初学者", "需要即时纠错的中级演奏者", "希望用碎片时间练习的音乐学习者"],
    killerFeature: "用户直接对着手机演奏，交互式指板以近实时方式显示检测到的音符，AI Tutor 再根据实际演奏给出反馈、回答问题并生成定制练习。",
    experience: "无需专用拾音硬件即可开始；反馈覆盖音高、时值和技巧，日目标与连续练习把一次演示转成可重复习惯。产品目前从吉他切入，并计划扩展到更广的音乐学习生态。",
    growth: "以免费 iOS 应用、Product Hunt 日榜与真实演奏挑战降低体验门槛，通过每日目标、streak 和自适应课程推动留存；团队还用 GITEX 现场体验和音乐教育内容建立品牌认知。",
    businessModel: "当前 App 与首发版本免费，官方尚未公开订阅或内购档位；先用吉他场景验证识别质量、学习效果和留存，再为更多乐器与高阶课程探索商业化。",
    insight: "垂直教育 AI 的关键不是把知识讲得更多，而是采集学习过程中的真实行为信号、即时指出偏差，并把下一次练习自动调到合适难度。",
    sourceUrl: "https://soundgate.ai/",
    sourceLabel: "SoundGate 官方网站",
    sources: [
      { label: "SoundGate 官网", url: "https://soundgate.ai/" },
      { label: "App Store", url: "https://apps.apple.com/us/app/soundgate-guitar/id6760704644" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/soundgate-guitar-app" }
    ]
  },
  {
    slug: "medley-mission",
    name: "Medley /mission",
    tag: "Multi-Agent Orchestration",
    tagline: "在 Claude Code 里把一个结果目标拆成可视任务图，并协调 Claude、Codex 与其他模型并行或跨夜执行",
    image: "https://medley.sh/opengraph-image?c22d6c2f3df7bbe4",
    positioning: "定位为 Claude Code 内的长任务与多 Agent 编排插件。壁垒来自把任务分解、依赖图、异构模型路由、人类审批和网页 Mission Board 放进用户已有终端，而不是要求团队迁移到另一套独立工作台。",
    audience: ["使用 Claude Code 的创业者与工程师", "需要跨会话推进复杂工作的独立团队", "希望组合多家模型能力的 Agent 重度用户"],
    killerFeature: "输入 `/mission` 加结果目标后，系统生成带预算、期限和依赖的实时任务图，按步骤调用 Claude、GPT、Gemini、Grok、Qwen、DeepSeek 或本地模型，并在发布、发送、消费和联系他人前停下确认。",
    experience: "任务从熟悉的 Claude Code 会话开始，终端展示当前树状计划，浏览器 URL 同步状态与交接；工作可顺序、并行或跨夜运行，用户无需守着多个 Agent 窗口，也能在敏感动作前重新接管。",
    growth: "用免费插件和三条命令安装获得 Claude Code 用户，通过 Product Hunt 日榜、Y Combinator 网络和公开基准结果制造开发者传播，再凭大量现成工具连接扩大任务边界。",
    businessModel: "Medley 当前免费，复用用户已经拥有的 Claude Code 与模型访问权限；跨模型调用可自带 OpenRouter 等密钥，官方尚未公布托管协作或企业付费方案。",
    insight: "多 Agent 产品的核心不是同时启动更多模型，而是把目标、依赖、预算、交接与审批变成用户看得懂的结构；可观察的任务图会比“后台正在工作”更能建立长期信任。",
    sourceUrl: "https://www.medley.sh/",
    sourceLabel: "Medley 官方网站",
    sources: [
      { label: "Medley 官网", url: "https://www.medley.sh/" },
      { label: "Medley 官方 GitHub", url: "https://github.com/Spine-AI/medley" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/spine-2" }
    ]
  },
  {
    slug: "clinicframe-scribe",
    name: "ClinicFrame Scribe",
    tag: "Clinical AI",
    tagline: "在面诊或远程问诊中安静记录对话，并在会诊结束后立即生成可进入 EHR 的结构化临床笔记",
    image: "https://clinicframe.com/assets/og-home.webp",
    positioning: "定位为为医疗场景原生构建的桌面端 Ambient Scribe。壁垒来自 HIPAA 基础设施、医疗术语和专科适配、患者历史上下文、常用临床模板与不让会议机器人加入通话的低干扰采集方式。",
    audience: ["门诊医生", "心理治疗师与精神科医生", "需要减少文书时间的医疗团队"],
    killerFeature: "桌面应用自动识别面诊或 Zoom、Teams、Google Meet 会话，区分说话人并实时转写，结束后生成 SOAP、DAP、BIRP 或自定义格式的笔记，复制到 EHR 只需数十秒。",
    experience: "医生在会前看到历史摘要，会中只需点击一次开始，Quick Bar 保持在当前窗口上方，会后审阅而非从零书写；音频在生成笔记后不保存，BAA 可按需签署。",
    growth: "用七天免卡试用、首发三个月折扣和不限会诊的 Beta 方案降低科室试用阻力，通过 Product Hunt、医疗专业口碑与既有 CompliantChatGPT 用户交叉转化。",
    businessModel: "按用户订阅，月付 34.99 美元，年付 335.88 美元、折合 27.99 美元／月；当前 Beta 暂不限用量，后续会在引入会话上限前通知用户。",
    insight: "高敏感垂直 AI 的采用取决于工作流摩擦和数据边界是否同时降低；“不用机器人入会、音频不保留、输出可直接进现有系统”比单纯提高转写分数更接近购买理由。",
    sourceUrl: "https://clinicframe.com/",
    sourceLabel: "ClinicFrame 官方网站",
    sources: [
      { label: "ClinicFrame 官网", url: "https://clinicframe.com/" },
      { label: "ClinicFrame 定价", url: "https://clinicframe.com/pricing" },
      { label: "ClinicFrame 安全说明", url: "https://clinicframe.com/security" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/clinic-scribe-clinicframe" }
    ]
  },
  {
    slug: "memorycustodian",
    name: "MemoryCustodian",
    tag: "Agent Memory",
    tagline: "把项目决策、约束与弃用方案保存为仓库内 Markdown，并只向当前任务加载真正相关的记忆",
    image: "https://opengraph.githubassets.com/5813d41c55b73d0fe197b186f03c4ea37dd7711b4fef755ad3f5f38e2c060c7d/waittim/MemoryCustodian",
    videoEmbedUrl: "https://www.youtube.com/embed/mYKzzATlOPw?rel=0",
    positioning: "定位为跨 Codex、Claude Code、Gemini 与通用编码 Agent 的本地项目记忆协议。壁垒来自 manifest 路由、可审查与可回滚的 Markdown 数据、确定性 CLI 维护，以及对删除、压缩和迁移采用预览优先的安全设计。",
    audience: ["频繁切换编码 Agent 的开发者", "需要跨会话保留架构决策的项目团队", "重视本地优先与可审计性的开源用户"],
    killerFeature: "初始化后用 manifest 先加载项目 brief，再按任务选择 decisions、constraints、do-not-use 或特定 area 文件，避免把完整聊天历史和所有规则塞进每个提示词。",
    experience: "记忆和代码一起进入版本控制，人类可以 diff、review、删除与恢复；CLI 在变更前展示完整计划，Agent 负责语义判断，工具只执行有预算和结构约束的确定性操作，日常运行无需云服务。",
    growth: "以 MIT 开源、Product Hunt 发布、可复现演示和 Codex／Claude／Gemini 多入口安装获取开发者，靠仓库原生、离线可用与无运行时模型依赖建立信任，并通过社区贡献扩展适配器。",
    businessModel: "MIT 开源且本地运行，目前没有托管订阅或商业付费层；价值先沉淀在协议、CLI 与跨 Agent 兼容性，后续商业化尚未公开。",
    insight: "Agent 记忆不是无限保存聊天，而是建立可选择、可遗忘、可验证的项目事实层；当上下文成本和错误记忆同时增长，显式路由与治理会比更大的上下文窗口更重要。",
    sourceUrl: "https://github.com/waittim/MemoryCustodian",
    sourceLabel: "MemoryCustodian 官方 GitHub",
    sources: [
      { label: "官方 GitHub", url: "https://github.com/waittim/MemoryCustodian" },
      { label: "官方演示", url: "https://www.youtube.com/watch?v=mYKzzATlOPw" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/memorycustodian" }
    ]
  }
];

const industryEvents20260730 = [
  {
    slug: "microsoft-mai-cyber-1-flash",
    name: "Microsoft · MAI-Cyber-1-Flash / MDASH",
    summary: "微软首个网络安全专用模型进入 MDASH，用轻量模型处理大部分漏洞任务，并把昂贵模型留给最难的少数案例",
    image: "https://microsoft.ai/wp-content/uploads/2026/07/Cyber-1-New-Header.png",
    impact: "MAI-Cyber-1-Flash 源自 MAI-Thinking-1，在 MDASH 的多 Agent 漏洞识别与修复系统中承担约 90% 的任务，难题再路由到 GPT-5.4。微软报告组合在 CyberGym 达到 95.95%，较现有最佳 MDASH 配置降低 50% 成本，并将能力扩展到 Project Perception 的持续安全工作流。安全 AI 的竞争因此从单模型榜单走向专有数据、任务路由和闭环修复。",
    insight: "高价值 Agent 不必让最强模型处理每一步；先按失败成本分层任务，用专用小模型覆盖高频路径，再把低置信度案例升级给强模型与人工，可以同时改善完成率和单位经济。",
    sourceUrl: "https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/",
    sourceLabel: "Microsoft AI 官方发布",
    sources: [
      { label: "Microsoft AI 官方发布", url: "https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/" },
      { label: "MAI-Thinking-1 技术报告", url: "https://microsoft.ai/pdf/mai-thinking-1.pdf" },
      { label: "Microsoft Security 官方博客", url: "https://blogs.microsoft.com/blog/2026/07/27/rethinking-security-for-the-age-of-ai/" },
      { label: "TECH NOISY", url: "https://tech-noisy.com/2026/07/29/ai-daily-news-2026-07-28/" }
    ]
  },
  {
    slug: "anthropic-open-weights-position",
    name: "Anthropic · Open-Weights 模型立场",
    summary: "Anthropic 明确反对按类别禁用开放权重模型，同时主张前沿芯片管制、遏制工业级蒸馏并对足够强的开放与闭源模型统一做安全测试",
    image: "https://cdn.sanity.io/images/4zrzovbb/website/62993bb857986e2808c2a75024f384e7b85312b6-2400x1254.png",
    impact: "Dario Amodei 的公开声明把行业争论从“开放还是封闭”重新拉回能力阈值与可验证风险：低危险能力的开放模型被视为公共产品，但一旦具备高水平网络、生物或对齐风险，就应接受与闭源模型相同的发布前测试。监管框架若采纳能力中立原则，将直接影响模型发布、评测披露与企业采购。",
    insight: "产品团队需要维护可替换的模型路由和风险分级，不应把“开源”或“闭源”当作安全代理变量；真正需要记录的是模型能力、部署边界、评测证据和事故后能否撤回。",
    sourceUrl: "https://www.anthropic.com/news/position-open-weights-models",
    sourceLabel: "Anthropic 官方声明",
    sources: [
      { label: "Anthropic 官方声明", url: "https://www.anthropic.com/news/position-open-weights-models" },
      { label: "Bloomberg Law", url: "https://news.bloomberglaw.com/privacy-and-data-security/anthropics-amodei-rejects-open-model-ban-but-calls-for-testing" },
      { label: "TECH NOISY", url: "https://tech-noisy.com/2026/07/29/ai-daily-news-2026-07-28/" }
    ]
  },
  {
    slug: "anthropic-cognizant-expansion",
    name: "Anthropic × Cognizant · Claude 企业合作扩展",
    summary: "Cognizant 将 Claude 深入工程与运营平台，并以 3 万名已培训员工和全球高级合作伙伴身份把 Agent 带进制造、生命科学与保险流程",
    image: "https://cdn.sanity.io/images/4zrzovbb/website/6d4a0d28992ade92d6fa63646fd9c9d318245c6c-2400x1260.jpg",
    impact: "Claude Code 已进入 Cognizant 的 Flowsource 规格驱动开发模块，Claude 也被嵌入 Neuro AI Engineering 与 IT Ops。双方披露的客户案例包括把合同审查时间最多缩短 40%、抽取准确率提高到 88% 以上，以及每名核保人员每周节省约八小时。模型厂商的企业扩张正在从直销席位转向由大型 SI 把行业上下文、治理和交付能力打包。",
    insight: "面向大企业的 AI 产品要同时设计可复用能力和伙伴可交付边界；提供规格、评测、权限与审计接口，让懂行业的实施方能稳定落地，比单纯扩大销售团队更容易穿透核心系统。",
    sourceUrl: "https://www.anthropic.com/news/cognizant-anthropic",
    sourceLabel: "Anthropic 官方发布",
    sources: [
      { label: "Anthropic 官方发布", url: "https://www.anthropic.com/news/cognizant-anthropic" },
      { label: "Claude Partner Network", url: "https://www.anthropic.com/partners" },
      { label: "TECH NOISY", url: "https://tech-noisy.com/2026/07/29/ai-daily-news-2026-07-28/" }
    ]
  },
  {
    slug: "perplexity-pplx-cli",
    name: "Perplexity · pplx CLI",
    summary: "Perplexity 把 Search API 和网页内容提取做成终端原生 CLI，以结构化 JSON 直接服务编码 Agent、脚本与 CI 工作流",
    image: "https://opengraph.githubassets.com/598177061b112d20b8fae7b898b5cee006d67e586dfc1c96559a29c90dcfd79c/perplexityai/perplexity-cli",
    impact: "`pplx search web` 支持域名、时间与地域过滤，`pplx content fetch` 返回清洗内容和发布日期、作者、付费墙等元数据；macOS Apple Silicon 与 Linux x86_64／arm64 已有校验和安装包，输出统一走 stdout JSON。搜索能力开始从面向人的问答 UI 下沉为 Agent 可组合的基础命令，Perplexity Search API 定价为每千次 5 美元。",
    insight: "Agent 工具应优先提供确定输出、稳定版本、可校验安装和清晰成本，而不是再包装一个聊天界面；当工具能自然进入 shell、Skill 与 CI，分发就会跟着现有开发流程发生。",
    sourceUrl: "https://github.com/perplexityai/perplexity-cli",
    sourceLabel: "Perplexity 官方 GitHub",
    sources: [
      { label: "Perplexity 官方 GitHub", url: "https://github.com/perplexityai/perplexity-cli" },
      { label: "Perplexity Search API 定价", url: "https://docs.perplexity.ai/docs/getting-started/pricing" },
      { label: "Perplexity API 限流", url: "https://docs.perplexity.ai/docs/admin/rate-limits-usage-tiers" },
      { label: "TECH NOISY", url: "https://tech-noisy.com/2026/07/29/ai-daily-news-2026-07-28/" }
    ]
  },
  {
    slug: "nvidia-jetson-build-ai-anywhere",
    name: "NVIDIA Jetson · Build AI Anywhere",
    summary: "NVIDIA 用 Jetson Orin Nano Super、AGX Orin 与配套 Agent Skills 展示本地视觉、语音和机器人开发如何从云端工作流走向随身边缘设备",
    image: "https://blogs.nvidia.com/wp-content/uploads/2026/07/SarahGuo_Jetson_FeaturedImage-1680x945.png",
    videoUrl: "https://blogs.nvidia.com/wp-content/uploads/2026/07/SarahGuo_Jetson01_captions.mp4",
    impact: "Jetson Orin Nano Super 以 67 TOPS 支持入门级生成式 AI 与机器人开发，AGX Orin 提供 275 TOPS；官方展示的 Reachy Mini 助手可在无云、无 API Key、运行时无网络的条件下完成低延迟视觉与语音交互。Device Skills 与 BSP Skills 又让编码 Agent 参与设备配置、优化和部署，Physical AI 的进入门槛正从硬件专家项目下降到开发者工作流。",
    insight: "边缘 AI 产品要把模型、设备管理、可复现部署和离线体验一起设计；只展示端侧推理速度不足以形成产品，能否让普通开发者通过熟悉的 Agent 工具稳定部署才决定生态增长。",
    sourceUrl: "https://blogs.nvidia.com/blog/build-ai-with-nvidia-jetson/",
    sourceLabel: "NVIDIA 官方博客",
    sources: [
      { label: "NVIDIA 官方博客", url: "https://blogs.nvidia.com/blog/build-ai-with-nvidia-jetson/" },
      { label: "NVIDIA Jetson 产品页", url: "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/" },
      { label: "Jetson Platform Services", url: "https://github.com/NVIDIA-AI-IOT/jetson-platform-services" }
    ]
  }
];

const trends20260730 = [
  {
    title: "代码 Agent 的价值层正从生成速度上移到意图与记忆治理",
    text: "Prelint 检查 PR 是否偏离产品决策，MemoryCustodian 把约束和弃用方案变成仓库内可路由记忆，Framer 用分支隔离 AI 修改，DeepSeek 的模型别名退役则暴露版本治理需求。最近一周表明，代码生成继续商品化后，团队会为“保持方向、保留决策、可安全回退”付费。"
  },
  {
    title: "多模型路由正在取代单一旗舰模型的默认心智",
    text: "Microsoft 用 MAI-Cyber-1-Flash 覆盖大多数安全任务、难题再升级到 GPT-5.4，Medley 在一张任务图里组合 Claude、GPT、Gemini 与开源模型，Opus 5 也用 Effort 控制成本和深度。产品架构正在从选一个默认模型，转向按价值、置信度、延迟和失败成本动态编排。"
  },
  {
    title: "垂直 AI 的购买理由从能力演示转向可量化工作闭环",
    text: "ClinicFrame 围绕会前历史、会中采集和会后 EHR 笔记闭环设计，SoundGate 直接以演奏信号驱动反馈与练习，Cognizant 则用合同审查和核保节省时间证明 Claude 的企业价值。最近七天更有说服力的产品不再只说模型更聪明，而是明确接入什么信号、交付什么产物、节省多少真实工作。"
  }
];

const products20260727 = [
  {
    slug: "athena-shoplazza",
    name: "Athena by Shoplazza",
    tag: "AI Commerce Agent",
    tagline: "从一句商品描述、照片或旧店链接开始，生成可上线店铺并继续执行电商运营",
    image: "https://ph-files.imgix.net/1c1ade07-9a43-458f-965a-414dc8bfdfa6.jpeg",
    positioning: "定位为覆盖建站、商品、营销和履约的电商编排 Agent。壁垒来自 Shoplazza 既有交易底座、订单与商品事实源，以及把广告、支付、物流和会员动作留在同一审批链，而不是只生成一个店铺模板。",
    audience: ["跨境电商卖家", "独立站创业者", "精简型电商运营团队"],
    killerFeature: "输入品牌描述、商品照片或现有店铺链接后，约三分钟生成三个可预览版本；店铺上线后还能批量建商品、配置折扣与配送、准备广告活动，并在重要动作前按批次请求确认。",
    experience: "用户先用极少信息得到完整页面、商品、政策与本地化文案，再逐轮调整；Shoplazza 保持客户、商品和订单的事实源，Athena 读取实时状态并把获批动作写回对应系统，失败步骤会停止依赖任务并给出恢复建议。",
    growth: "以首个店铺免费、100 个奖励 Credits 和七天试用降低冷启动门槛，借 Shoplazza 商家网络和 Product Hunt 日榜曝光获客，再从建站这一显性需求扩展到高频商品、促销和投放工作。",
    businessModel: "免费体验加 Credits 与后续订阅转化；首发明确提供免费首店、奖励 Credits 和七天试用，但官网尚未公开完整付费档位，因此不推断具体价格。",
    insight: "垂直 Agent 的价值不只是多做几步，而是明确哪个系统拥有事实、哪些动作必须批准，以及跨系统部分失败后如何恢复；这些边界决定用户是否敢把真实业务交出去。",
    sourceUrl: "https://www.shoplaza.ai/",
    sourceLabel: "Athena 官方网站",
    sources: [
      { label: "Athena 官网", url: "https://www.shoplaza.ai/" },
      { label: "Shoplazza 官方 X", url: "https://twitter.com/shoplazzacom" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/athena-by-shoplazza" }
    ]
  },
  {
    slug: "openbase-coder",
    name: "Openbase",
    tag: "Voice Coding Agent",
    tagline: "用手机语音派发、引导和审批编码 Agent，再回到电脑继续同一条工程线程",
    image: "https://ph-files.imgix.net/d06eaf1a-fcac-48a1-92a8-1ba8e756c7de.jpeg",
    positioning: "定位为 AI 编程的 Voice IDE 和远程监督层。壁垒来自 Mac 本地运行时、iPhone 语音与审阅入口、跨 Codex 和 Claude Code 等后端的线程路由，以及把权限批准、报告和 diff 放进同一控制面。",
    audience: ["经常离开工位的软件工程师", "并行管理多个编码 Agent 的开发者", "需要保留本地代码边界的技术团队"],
    killerFeature: "从手机发起真实编码任务，在 Agent 工作中继续语音纠偏、批准敏感命令、读取测试报告和审阅 diff；桌面、网页、iOS 与 CLI 围绕同一个本地线程同步。",
    experience: "Mac 端负责仓库和实际会话，手机成为低摩擦遥控器；危险命令会暂停等待批准，完成后展示测试与变更，而不是用一句“已完成”代替工程证据。用户回到桌面时可从原线程继续。",
    growth: "以 AGPL 开源运行时、公开文档和免费选项建立开发者信任，通过 Product Hunt、GitHub 和候补名单积累早期用户，再靠插件、Skills、Routines 与多后端兼容扩大生态。",
    businessModel: "当前处于 Beta，开放核心 CLI／运行时并通过候补名单分发 Mac、iOS 和 Openbase Cloud；仓库已包含订阅与 Cloud DevSpace 服务层，但官方尚未公布价格。",
    insight: "异步 Agent 越强，用户越需要低带宽的监督界面；把语音用于意图和纠偏，把审批、测试与 diff 保留为可视证据，比把完整 IDE 塞进手机更符合真实场景。",
    sourceUrl: "https://openbase.cloud/",
    sourceLabel: "Openbase 官方网站",
    sources: [
      { label: "Openbase 官网", url: "https://openbase.cloud/" },
      { label: "官方文档", url: "https://docs.openbase.cloud/" },
      { label: "官方 GitHub", url: "https://github.com/openbase-community/openbase-coder" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/openbase-2" }
    ]
  },
  {
    slug: "purebox-ai",
    name: "PureBox.ai",
    tag: "AI Email Triage",
    tagline: "先解释并分组 Gmail 清理建议，等用户批量确认后才归档或移入垃圾箱",
    image: "https://ph-files.imgix.net/fa819b2a-12d0-423b-81f1-eb01af9e68a4.jpeg",
    positioning: "定位为 Review-first 的 Gmail 清理与持续分拣层。壁垒来自利用用户真实打开、回复和归档历史建立个性化判断，并把 Attention、Archive、Trash 三类建议、原因、审批和撤销做成完整信任闭环。",
    audience: ["长期积压 Gmail 的知识工作者", "担心自动清理误删的用户", "需要把邮箱接给 AI 助手的个人用户"],
    killerFeature: "首次扫描就按用户既有处理习惯分类，每封邮件都给出通俗理由；任何移动或删除动作都先展示再批准，并在真实 Gmail 中保留历史和可撤销路径。",
    experience: "免费扫描最多 1000 封邮件，几分钟内展示需关注、可归档和可清理的实际分布与预计节省时间；用户可整批同意或逐项检查，之后仍在熟悉的 Gmail 中工作，无需切换邮箱客户端。",
    growth: "用无需信用卡的免费扫描先展示个人化 ROI，通过节省时间估算推动升级；同时提供受同一护栏约束的 Remote MCP Server，让现有 AI 助手成为新的分发入口。",
    businessModel: "Freemium 订阅；免费版扫描最多 1000 封邮件，Pro 年付折算 4.99 美元／月或月付 7.99 美元，覆盖完整邮箱、持续分类、历史与一键恢复。",
    insight: "高风险自动化的转化关键不是更强的“自动”，而是先让用户看见系统准备做什么、为什么这样做、如何撤销；证明价值和建立信任可以是同一个体验。",
    sourceUrl: "https://purebox.ai/",
    sourceLabel: "PureBox 官方网站",
    sources: [
      { label: "PureBox 官网与定价", url: "https://purebox.ai/" },
      { label: "官方安全说明", url: "https://purebox.ai/security" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/purebox-ai" }
    ]
  },
  {
    slug: "brainfeed-scroll-better",
    name: "BrainFeed",
    tag: "AI Learning Feed",
    tagline: "把学习目标、文章、视频和 PDF 变成可滚动卡片，再用间隔重复对抗看完就忘",
    image: "https://ph-files.imgix.net/5452d557-703f-48b3-9861-c9e4a705f6e6.png",
    positioning: "定位为替代碎片时间刷社交媒体的个性化学习 Feed。壁垒来自把内容采集、AI 拆解、目标驱动推荐与 Star Field 记忆机制连起来，让产品不仅提高消费率，也对长期保留负责。",
    audience: ["习惯碎片化刷手机的学习者", "积压长文和视频的知识工作者", "希望围绕目标持续输入的学生与创业者"],
    killerFeature: "分享文章、YouTube、PDF 或设定学习目标后生成短卡片；用户双击值得记住的卡片加入 Star Field，星光随记忆衰退，再用一道快速回忆题把内容重新巩固。",
    experience: "每次只需三到五分钟，用户继续使用熟悉的上下滚动动作，但 Feed 围绕自选目标组织；可从手机分享菜单、WhatsApp、短信或粘贴链接采集，重要知识会主动在遗忘前回来。",
    growth: "当前完全免费并以 iOS 首发、Android 早期访问和 Discord 社区扩大种子用户；Product Hunt 与 Reddit 上“替代 doomscrolling”的强叙事带来话题传播，免费层最多支持 15 个活跃目标和 15 条分享链接。",
    businessModel: "早期访问阶段完全免费，官网尚未公布订阅或广告方案；团队优先用采用、反馈与记忆行为验证留存，再决定商业化。",
    insight: "把坏习惯换成好结果，比要求用户建立全新习惯更容易；真正差异不在把内容切短，而在产品是否能让用户决定什么值得记住，并对之后的回忆负责。",
    sourceUrl: "https://www.scrollbrainfeed.com/",
    sourceLabel: "BrainFeed 官方网站",
    sources: [
      { label: "BrainFeed 官网", url: "https://www.scrollbrainfeed.com/" },
      { label: "App Store", url: "https://apps.apple.com/us/app/brainfeed-scroll-better/id6767833159" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/brainfeed-scroll-better" },
      { label: "Reddit / SideProject", url: "https://www.reddit.com/r/SideProject/comments/1v4w5m3/dont_lose_hours_of_your_idle_moments_to_social/" }
    ]
  },
  {
    slug: "yoggi-ai-kids",
    name: "Yoggi",
    tag: "Kids AI Companion",
    tagline: "为 3–15 岁儿童提供随年龄调整的语音对话、故事和画图，并把控制权留给家长",
    image: "https://ph-files.imgix.net/cecf25dd-dc22-43d7-bdad-90d1baac07e1.png",
    positioning: "定位为儿童第一次接触 AI 的专用聊天产品。壁垒来自按年龄调整词汇、长度和语气，叠加内容过滤、家长 PIN、用量限制、会话历史、摘要与安全提醒，而不是给通用聊天模型换一个卡通皮肤。",
    audience: ["3–15 岁儿童家庭", "希望监督孩子使用 AI 的家长", "需要多语言语音陪学的家庭"],
    killerFeature: "孩子可像打电话一样实时语音聊天、生成插图并参与分支故事；家长设置每日消息上限、锁定设置、查看完整历史和 AI 摘要，并通过邮件接收需要关注的安全提醒。",
    experience: "低龄儿童无需读写即可使用，回答会随年龄与偏好自动调整；产品不展示广告和外部链接，遇到超出聊天边界的问题会引导孩子寻找可信成年人，避免把 AI 包装成父母替代品。",
    growth: "以 iOS 和 Android 免费下载降低家庭试用门槛，通过 Product Hunt、应用商店版本更新与创始人在 Reddit 的透明讨论获取早期反馈；12 种语言扩大跨地区自然分发。",
    businessModel: "Freemium 应用内订阅；App Store 显示免费下载，Premium 月付 6.99 美元、年付 69.99 美元，付费围绕持续使用与家长能力展开。",
    insight: "面向儿童的 AI 产品不能只宣传过滤率；年龄适配、家长可见性、时间边界、升级到真人帮助的路径和无广告激励，必须共同构成可被家庭理解的安全模型。",
    sourceUrl: "https://yoggichat.app/",
    sourceLabel: "Yoggi 官方网站",
    sources: [
      { label: "Yoggi 官网", url: "https://yoggichat.app/" },
      { label: "App Store", url: "https://apps.apple.com/app/yoggi-ai-chat-for-kids/id6785544354" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/yoggi" },
      { label: "创始人 Reddit 发布", url: "https://www.reddit.com/r/ProductHunters/comments/1v6yqg1/launched_yoggi_a_safe_ai_for_kids_today/" }
    ]
  }
];

const industryEvents20260727 = [
  {
    slug: "claude-opus-5",
    name: "Anthropic · Claude Opus 5",
    summary: "Opus 5 以与 Opus 4.8 相同价格逼近 Fable 5 能力，并强化长任务验证、编码、知识工作与计算机操作",
    image: "https://www.anthropic.com/_next/image?q=75&url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F54b7ab1d2c2521f83ae5d2da5f9d99321c370d24-2880x1620.png&w=3840",
    impact: "Anthropic 正把前沿能力快速下沉到日常付费层：Opus 5 成为 Max 默认和 Pro 最强模型，API 仍为每百万输入 5 美元、输出 25 美元，并提供 Effort 档位与更快的 Fast mode。竞争焦点进一步从单次峰值转向单位任务成功率、验证行为和可控成本。",
    insight: "产品选模不应只看榜单总分；用真实任务评测不同 Effort 下的完成率、工具次数、延迟与失败恢复，再把高价值复杂任务路由到强模型，才能把能力升级转成稳定毛利。",
    sourceUrl: "https://www.anthropic.com/news/claude-opus-5",
    sourceLabel: "Anthropic 官方发布",
    sources: [
      { label: "Anthropic 官方发布", url: "https://www.anthropic.com/news/claude-opus-5" },
      { label: "Anthropic 系统卡", url: "https://www.anthropic.com/claude-opus-5-system-card" },
      { label: "Axios", url: "https://www.axios.com/2026/07/24/anthropic-releases-new-model-opus-5" }
    ]
  },
  {
    slug: "meta-ai-agentic-muse-spark",
    name: "Meta AI · Muse Spark 1.1 Agent",
    summary: "Meta AI 开始连接邮箱与日历、持续执行计划、生成研究和幻灯片，并允许用户在运行中实时纠偏",
    image: "https://about.fb.com/wp-content/uploads/2026/07/02_Daily-briefing_Trending_Carousel-02.jpg?fit=1920%2C1672&resize=960%2C836",
    videoUrl: "https://about.fb.com/wp-content/uploads/2026/07/01_Shopping.mp4",
    impact: "消费级 AI 助手从回答与生成推进到长期任务和个人上下文：一次设置后可持续交付训练计划、每日简报和商品提醒，并利用 Meta 内容与 Marketplace 完成研究和视觉结果。Meta 的社交与商业数据正在变成 Agent 的独特执行面。",
    insight: "持续型 Agent 需要把计划、触发频率、连接的数据源、当前进度和用户随时纠偏能力放在同一界面；越强调“替你做”，越要让用户容易理解它何时运行、用了什么上下文。",
    sourceUrl: "https://about.fb.com/news/2026/07/meta-ai-muse-spark-doesnt-just-think-it-acts/",
    sourceLabel: "Meta 官方发布",
    sources: [
      { label: "Meta 官方发布", url: "https://about.fb.com/news/2026/07/meta-ai-muse-spark-doesnt-just-think-it-acts/" },
      { label: "Muse Spark 1.1", url: "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/" },
      { label: "Axios", url: "https://www.axios.com/2026/07/24/meta-muse-spark-agents" }
    ]
  },
  {
    slug: "deepseek-v4-api-alias-retirement",
    name: "DeepSeek V4 · 旧 API 别名退役",
    summary: "DeepSeek 按计划停止 deepseek-chat 与 deepseek-reasoner 旧模型名，开发者需显式迁移到 V4 Flash 或 V4 Pro",
    image: "https://api-docs.deepseek.com/img/v4-spec-en.png",
    impact: "7 月 24 日 15:59 UTC 后，旧别名不再作为 V4 Flash 思考／非思考模式的兼容入口。此次变化没有发布新模型，却会直接影响依赖旧字符串的生产调用，提醒市场关注模型升级之外的 API 生命周期、显式版本与回滚准备。",
    insight: "所有模型调用都应经过可配置路由层，持续监控官方弃用时间、模型名与价格；在切换前跑任务级回归、准备双写或快速回滚，避免供应商的一次别名清理变成业务事故。",
    sourceUrl: "https://api-docs.deepseek.com/news/news260424/",
    sourceLabel: "DeepSeek 官方 API 公告",
    sources: [
      { label: "DeepSeek 官方公告", url: "https://api-docs.deepseek.com/news/news260424/" },
      { label: "DeepSeek 更新日志", url: "https://api-docs.deepseek.com/updates/" },
      { label: "DeepSeek 快速开始", url: "https://api-docs.deepseek.com/quick_start/pricing-details-usd/" },
      { label: "Reddit / DeepSeek", url: "https://www.reddit.com/r/DeepSeek/comments/1v53d7c/deepseek_api_service_down_its_happening_bros/" }
    ]
  },
  {
    slug: "google-agentic-calling-guide",
    name: "Google Search · Agentic Calling 更新",
    summary: "Google 更新官方指南，用户可让 Search 或 AI Mode 致电附近商家核对库存、价格与优惠，再通过短信或邮件收取摘要",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/holiday_shopping_hero.width-200.format-webp_jYHca1x.webp",
    impact: "Agent 正从网页点击进入现实世界的电话网络。Google 把 Gemini、Duplex、Shopping Graph 与本地商家连接起来，让没有结构化库存 API 的小店也能被 AI 查询；语音行动与结构化搜索之间的边界进一步模糊。",
    insight: "当目标系统没有 API 时，电话和邮件仍可成为 Agent 的执行接口；产品要同时设计身份披露、问题模板、商家拒绝、结果置信度与可追溯摘要，才能把非结构化行动变成可靠数据。",
    sourceUrl: "https://blog.google/products-and-platforms/products/shopping/how-to-agentic-calling-let-google-call/",
    sourceLabel: "Google 官方更新",
    sources: [
      { label: "Google 官方使用指南", url: "https://blog.google/products-and-platforms/products/shopping/how-to-agentic-calling-let-google-call/" },
      { label: "Google 官方功能发布", url: "https://blog.google/products-and-platforms/products/shopping/agentic-checkout-holiday-ai-shopping/" },
      { label: "Google 商家帮助", url: "https://support.google.com/business/answer/16190256" }
    ]
  },
  {
    slug: "framer-agents-branching-community",
    name: "Framer · Agents / Branching / Community",
    summary: "Framer 集中推广画布 Agent、安全分支与创作者社区，让 AI 从生成页面扩展到持续修改、审查和协作发布",
    image: "https://framerusercontent.com/images/yRScckrzBI8ErwMPJUrMpiqfdc.jpg?height=1520&width=2400",
    impact: "网站生成工具正在吸收软件工程的协作范式：Agent 可直接修改可编辑画布、CMS 和代码组件，Branching 隔离并行的人类与 AI 变更，Community 再承担模板和作品分发。竞争从首屏生成转向完整生产与生态闭环。",
    insight: "生成式编辑器若要进入团队，必须提供分支、预览、差异与应用回主线的路径；把 AI 变更当成可审查的协作者产物，而不是直接覆盖用户作品，才能扩大任务范围。",
    sourceUrl: "https://www.framer.com/agents/",
    sourceLabel: "Framer 官方 Agents 页面",
    sources: [
      { label: "Framer Agents", url: "https://www.framer.com/agents/" },
      { label: "Framer AI 产品页", url: "https://www.framer.com/ai/" },
      { label: "Framer Branching 文档", url: "https://www.framer.com/help/articles/how-to-use-branches-in-framer/" },
      { label: "Product Hunt 发布动态", url: "https://www.producthunt.com/products/framer" }
    ]
  }
];

const trends20260727 = [
  {
    title: "Agent 的竞争焦点从回答质量转向可监督执行",
    text: "Meta AI 开始长期运行计划，Athena 执行跨系统电商动作，Google 用电话触达没有 API 的商家，Openbase 则把编码 Agent 的批准和 diff 带到手机。最近一周共同指向：Agent 的核心体验正在变成何时行动、依据什么、哪里暂停，以及人如何低成本纠偏。"
  },
  {
    title: "可逆与隔离正在成为 AI 产品的默认协作原语",
    text: "PureBox 先展示再移动邮件，Framer 用 Branching 隔离 AI 变更，Athena 在跨系统失败时阻止依赖任务继续，DeepSeek 的别名退役也暴露了调用层回滚需求。AI 越深入真实资产，预览、审批、版本和恢复就越不是高级功能，而是采用前提。"
  },
  {
    title: "产品开始围绕特定人群和习惯重做模型入口",
    text: "Yoggi 用年龄适配与家长控制重做儿童聊天，BrainFeed 借滚动习惯承载间隔重复，Openbase 用语音远程监督工程任务，Opus 5 则按 Effort 服务不同成本边界。通用模型能力继续普及，真正的产品差异更多来自人群边界、行为设计和任务反馈回路。"
  }
];

const products20260724 = [
  {
    slug: "teable-3",
    name: "Teable 3.0",
    tag: "AI Business Database",
    tagline: "把表格、PostgreSQL、自动化和应用生成合成一个可审计的 AI 业务工作台",
    image: "https://ph-files.imgix.net/c39739f6-9aac-4814-9aca-9b9c0a2ce105.jpeg",
    positioning: "定位为面向业务团队的 AI Spreadsheet 与应用底座。壁垒来自真实 PostgreSQL 关系模型、开源与自托管能力，以及让 Agent 在同一份数据、权限、自动化和应用界面上工作，而不是把 AI 叠在封闭表格之上。",
    audience: ["运营与销售团队", "需要内部工具的中小企业", "数据与自动化团队"],
    killerFeature: "用自然语言连接或迁移现有数据，再直接生成带关系表、仪表盘、邮件、触发器和审批的业务应用；工作流会持久保存，每一步可查看、归因和回滚。",
    experience: "用户可从 Excel、Airtable、文件或一句业务需求开始，AI 识别字段关系并搭建数据和界面；团队继续用表格式视图修改，Agent 只在授权范围内读写，失败步骤和变更历史保持可见。",
    growth: "以免费 200 Credits、开源 GitHub 和自托管版本建立信任，通过模板社区、Airtable 迁移与 Product Hunt 日榜第一吸引团队，再用更大记录量、自动化额度和权限能力推动扩张。",
    businessModel: "Freemium 席位订阅加用量增购；Free 为 0 美元，Pro 年付 10 美元／席位／月，Business 年付 20 美元／席位／月，AI Credits、自动化次数、记录量和企业权限形成分层。",
    insight: "让 Agent 操作业务数据时，生成能力只是入口；真实数据模型、细粒度权限、逐步日志和可恢复变更才是团队把系统当作事实源的前提。",
    sourceUrl: "https://teable.ai/",
    sourceLabel: "Teable 官方网站",
    sources: [
      { label: "Teable 官网", url: "https://teable.ai/" },
      { label: "官方定价", url: "https://teable.ai/pricing" },
      { label: "官方 GitHub", url: "https://github.com/teableio/teable" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/teable-4" }
    ]
  },
  {
    slug: "promptql-multiplayer-ai",
    name: "PromptQL",
    tag: "Team AI Workspace",
    tagline: "把团队对话、AI 线程、业务数据和持续更新的共享知识放进同一个多人工作空间",
    image: "https://ph-files.imgix.net/5d9a6589-3b5e-4351-98a3-1ccd01ce5ba2.jpeg",
    positioning: "定位为取代 Slack 加私人 AI 对话的 Multiplayer AI。壁垒来自把数据库、SaaS、代码 Agent 与事件接入共享线程，并把同事纠正沉淀为带引用、版本和权限范围的团队知识，而不是每个人重复维护自己的上下文。",
    audience: ["跨职能产品团队", "数据密集型企业", "需要共享 AI 上下文的远程团队"],
    killerFeature: "在共享线程里让 AI 展示来源和假设，@真正懂业务的同事纠正一次后，将结果写成团队 Skill、Wiki 条目或语义模型更新，后续所有获准用户都能复用。",
    experience: "用户从类似 ChatGPT 的新线程开始，PromptQL 自动读取 Slack、文档、工单、CRM 和数仓；讨论、执行与审核留在一处，作用域会贯穿检索、内容创建和更新，避免机密上下文跨团队泄露。",
    growth: "用最高 100 美元项目 Credits 和每位新队友最高 70 美元 Credits 形成邀请循环，同时提供 Web、Mac、Windows、iOS 与 Android 入口；Hasura 团队先内部停用 Slack，再以真实使用案例和 Product Hunt 验证定位。",
    businessModel: "按 OLU 统一计量模型 Token、基础设施与 Sandbox，Starter 公开价为每 OLU 0.20 美元，首发期 0.14 美元；连接自有 Codex 套餐可免对应 OLU 费用，Enterprise 以 VPC、SSO、审计和自带模型定制定价。",
    insight: "企业知识库的问题不是没人会写，而是维护与真实工作分离；把纠错、引用和权限更新嵌入任务线程，知识才会随使用复利而不是持续腐烂。",
    sourceUrl: "https://promptql.io/",
    sourceLabel: "PromptQL 官方网站",
    sources: [
      { label: "PromptQL 官网", url: "https://promptql.io/" },
      { label: "官方定价", url: "https://promptql.io/pricing" },
      { label: "官方共享上下文文章", url: "https://promptql.io/blog/on-shared-context" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/promptql" }
    ]
  },
  {
    slug: "podcastor-ai-twin",
    name: "PodcastorAI",
    tag: "AI Video Podcast",
    tagline: "把脚本、链接、PDF、音频或想法在约十五分钟内变成由数字分身主持的视频播客",
    image: "https://ph-files.imgix.net/48f4ca97-d60d-4e2c-846e-ad461fbe8425.jpeg",
    positioning: "定位为从选题到可发布视频的一站式 AI 播客工作室。壁垒来自把脚本生成、自然语音、个人数字分身、双主持人调度、画面布局和视频渲染放在同一工程，而不是只输出音频或一张会说话的头像。",
    audience: ["知识型创作者", "企业内容营销团队", "课程与培训制作人"],
    killerFeature: "上传一张照片即可建立可复用 AI 主持人，并把既有音频、网页或文档转成单人或双人视频播客；同一项目可输出 YouTube 的 16:9 和 TikTok 的 9:16 版本。",
    experience: "用户选择真人、卡通或宠物主持风格与 32 种语言声音，先审核可编辑脚本，再切换 Talk Show、Split Screen 等布局并渲染；无需摄像机、录音棚或独立剪辑软件。",
    growth: "以免费选项和首个订阅七折降低首集门槛，用作品在 YouTube 与短视频平台自然分发；联盟计划提供每位付费客户 30% 的最长一年经常性佣金，建立创作者带创作者的渠道。",
    businessModel: "订阅加生成额度，官方联盟页列出 Audio Creator 9.99 美元／月、Video Starter 26 美元／月和 Creator Pro 49.99 美元／月，按音频、视频与高级数字主持能力分层。",
    insight: "AI 内容工具要压缩的不是某一个生成步骤，而是从原始素材到可发布资产的全部交接成本；固定主持人、品牌布局和多尺寸复用决定连续生产效率。",
    sourceUrl: "https://podcastor.ai/",
    sourceLabel: "PodcastorAI 官方网站",
    sources: [
      { label: "PodcastorAI 官网", url: "https://podcastor.ai/" },
      { label: "官方 AI Hosts 说明", url: "https://podcastor.ai/studio/remote-podcast-generator" },
      { label: "官方联盟与套餐", url: "https://podcastor.ai/affiliate" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/podcastorai" }
    ]
  },
  {
    slug: "basement-agentic-checkout",
    name: "Basement",
    tag: "Agentic Shopping",
    tagline: "让浏览器记住衣橱和真实偏好，跨站比价后在预算内用一次性卡替用户完成结账",
    image: "https://ph-files.imgix.net/76f03c6f-3fd9-4aac-a2d1-eba36991c31c.png",
    positioning: "定位为站在消费者一侧的 AI Shopping Browser。壁垒来自用户长期购买与浏览偏好、跨网页的价格和口碑信号，以及用 Crossmint 一次性支付卡把推荐、安全授权和真实交易连成闭环。",
    audience: ["高频网购用户", "价格敏感消费者", "希望自动补货的家庭用户"],
    killerFeature: "Baseling 可寻找更低价格并代为下单，每笔购买只生成一张限定单个订单和预算上限的一次性卡，真实银行卡不直接交给商家，也不能超出用户授权金额。",
    experience: "用户在 iOS 浏览器或 Chrome 扩展打开商品页，即时看到 Reddit、Trustpilot、X 与 Bluesky 的真实讨论；AI 结合 Closet 中的既有商品和浏览行为给建议，重要购买仍保留预算确认。",
    growth: "用 iPhone 与 Chrome 完全免费降低替换浏览器的成本，以价格提醒、补货和真实社区评论制造高频回访；页面内多人讨论、好友邀请与个人信誉等级形成社交分发。",
    businessModel: "目前对消费者免费，官网未公布订阅、佣金或支付收入方案；潜在商业化来自交易与商家服务，但在官方披露前不将其视为既定模式。",
    insight: "Agentic Commerce 的信任不能靠一句“由你控制”；把预算上限、单次支付凭证、真实总价和可见确认做成技术边界，才能让推荐顺利进入交易。",
    sourceUrl: "https://www.basementbrowser.com/",
    sourceLabel: "Basement 官方网站",
    sources: [
      { label: "Basement 官网", url: "https://www.basementbrowser.com/" },
      { label: "官方下载页", url: "https://www.basementbrowser.com/download" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/basement-browser" },
      { label: "Product Hunt 编辑观察", url: "https://www.producthunt.com/newsletters/archive/53061-death-to-meetings" }
    ]
  },
  {
    slug: "megaphone-on-device",
    name: "Megaphone",
    tag: "On-device Dictation",
    tagline: "按住 Fn 说话，让 Apple 端侧语音与基础模型把干净文字直接写进任意 Mac 应用",
    image: "https://ph-files.imgix.net/ca88159b-cd89-4344-8a9b-029545ff0044.png",
    positioning: "定位为免费、开源、完全端侧的 macOS 听写工具。壁垒来自原生 Swift 对 Apple SpeechAnalyzer 与 Foundation Models 的低延迟组合，以及不依赖账户、API Key、订阅或云端录音服务器的隐私和成本结构。",
    audience: ["Mac 知识工作者", "开发者与写作者", "重视隐私的语音输入用户"],
    killerFeature: "SpeechAnalyzer 边说边转写，端侧 Foundation Models 自动删除口头语、处理自我修正、补全标点并根据当前应用调整格式，还支持光标处改写和语音宏。",
    experience: "用户按住 Fn 开始、松开即把处理后的文字写入当前光标；私有 Dictionary 可学习姓名、缩写和技术词，支持多语言、自定义快捷键与字典导入导出，全程不上传录音。",
    growth: "以 MIT 许可、GitHub 源码和零价格获得开发者信任，通过 Product Hunt 与 Hacker News 的端侧基准话题切入；作者在首发日让 Agent 读取评论并自动提 PR，把社区建议快速变成版本更新。",
    businessModel: "完全免费且无账户、API Key、订阅或云端服务，当前没有商业化方案；成本由用户现有 Apple Silicon 设备承担，开源项目主要以采用和贡献衡量增长。",
    insight: "当操作系统内建模型达到可用阈值，过去依赖云推理和订阅的微型工具会被重新定价；本地速度、隐私和零边际推理成本可以共同成为产品卖点。",
    sourceUrl: "https://megaphone.kuber.studio/",
    sourceLabel: "Megaphone 官方网站",
    sources: [
      { label: "Megaphone 官网", url: "https://megaphone.kuber.studio/" },
      { label: "官方 GitHub", url: "https://github.com/Kuberwastaken/megaphone" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/megaphone-3" },
      { label: "Product Hunt 编辑观察", url: "https://www.producthunt.com/newsletters/archive/53061-death-to-meetings" }
    ]
  }
];

const industryEvents20260724 = [
  {
    slug: "google-atlas-ai-economy",
    name: "Google · ATLAS v1.0",
    summary: "Google 基于 1500 万次去标识化交互发布 AI 经济使用图谱，覆盖 150 多个国家、800 类职业和 4000 项任务",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/hero_image_3_1.width-200.format-webp.webp",
    impact: "ATLAS 将 AI 采用讨论从能力基准推进到真实使用证据：工作场景覆盖面很广，但典型职业只在约 21% 的任务中使用 AI，完全自动化不到 10%。这为产品定岗、劳动力政策和价值衡量提供了更细颗粒度的基线。",
    insight: "不要把“某岗位可被 AI 覆盖”直接等同于自动化率；先观察用户在哪些任务主动调用、是否协作完成、失败后如何接管，再用任务渗透与结果质量设计路线图。",
    sourceUrl: "https://blog.google/innovation-and-ai/technology/research/understanding-the-ai-economy/",
    sourceLabel: "Google 官方发布",
    sources: [
      { label: "Google 官方发布", url: "https://blog.google/innovation-and-ai/technology/research/understanding-the-ai-economy/" },
      { label: "ATLAS v1.0 完整报告", url: "https://ai.google/static/documents/GoogleATLASv1.pdf" },
      { label: "Google AI & Economy 项目", url: "https://ai.google/economy/" }
    ]
  },
  {
    slug: "gemini-flash-family",
    name: "Google · Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber",
    summary: "Google 用高性价比主力、低延迟轻量和受限网络安全模型组成新的 Flash 家族，面向大规模 Agent 工作负载",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini-3-5_3-6_3-5-Cyber__key-art.width-200.format-webp.webp",
    impact: "模型分层从“旗舰与便宜版”进一步细化为任务路由产品：3.6 Flash 强调编码与计算机操作，Flash-Lite 强调吞吐，Flash Cyber 则与 CodeMender 绑定并限制在政府和可信伙伴。厂商开始同时竞争任务成本、工具能力和部署边界。",
    insight: "产品默认模型应由延迟、吞吐、失败成本和安全权限共同决定；把轻量子任务、主 Agent 与受限高风险能力拆开，比让一个模型处理所有请求更容易控制成本和风险。",
    sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/",
    sourceLabel: "Google 官方发布",
    sources: [
      { label: "Google 官方发布", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" },
      { label: "Gemini 3.6 Flash 模型卡", url: "https://deepmind.google/models/model-cards/gemini-3-6-flash/" },
      { label: "Gemini 3.5 Flash-Lite 模型卡", url: "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/gemini-3-6-flash-family" }
    ]
  },
  {
    slug: "procore-digital-coworkers",
    name: "Procore · Digital Coworker Packages",
    summary: "Procore 将 20 个建筑行业 Agent 按 Starter、Pro 和 Enterprise 打包，并预告可注入企业标准流程的 Skills",
    image: "https://images.ctfassets.net/8pep15rt0kef/6bll9eUMO8A9FDloc9g6dh/73eea5eb91a74b2fc8e98849c107395e/Procore-AI-Hero-2.png?f=center&fit=fill",
    impact: "垂直 SaaS 正把 Agent 从问答功能变成可采购的数字岗位组合。Procore 用工地数据、多模态图纸、权限、150 多个动作和 Control Tower 形成行业执行层，说明深行业系统比通用聊天入口更接近可量化 ROI。",
    insight: "垂直 Agent 应按真实岗位任务打包，先交付搜索、审查、日志等可验收动作，再允许客户用 SOP 和项目标准教会系统；同时把用量、权限和每个 Agent 的结果集中治理。",
    sourceUrl: "https://www.procore.com/press/procore-introduces-digital-coworker-packages-expands-ai-agent-library-and-previews-skills-to-help-construction-teams-put-ai-to-work",
    sourceLabel: "Procore 官方发布",
    sources: [
      { label: "Procore 官方发布", url: "https://www.procore.com/press/procore-introduces-digital-coworker-packages-expands-ai-agent-library-and-previews-skills-to-help-construction-teams-put-ai-to-work" },
      { label: "Procore 官方产品页", url: "https://www.procore.com/ai" },
      { label: "Procore 官方博客", url: "https://www.procore.com/blog/your-digital-coworkers-are-ready-to-work" },
      { label: "Procore 产品更新", url: "https://www.procore.com/whats-new" }
    ]
  },
  {
    slug: "amd-anthropic-mi450",
    name: "AMD × Anthropic · MI450 / Helios 合作",
    summary: "Anthropic 将部署最多 2GW AMD MI450 Helios 系统，AMD 同时承诺未来最多 50 亿美元战略投资并用 Claude 加速 ROCm",
    image: "https://newsroom.amd.com/images/2026/07/0112ce03-4e6a-4481-96df-e15ba7c16fe8.jpg",
    impact: "前沿模型公司的算力采购开始同时追求供应多元化、软硬件协同和资本绑定。Anthropic 既引入 AMD 大规模容量，又用 Claude 优化 AMD 软件栈，可能加快 ROCm 在真实训练与推理负载中的成熟度，并加强对 Nvidia 之外的选择。",
    insight: "依赖大模型基础设施的产品应把供应商切换能力、性能回归和单位任务成本纳入架构；只在 API 层做多模型，而底层算力、数据和评测不可迁移，仍然会形成单点锁定。",
    sourceUrl: "https://newsroom.amd.com/news/amd-anthropic-strategic-partnership/",
    sourceLabel: "AMD 官方发布",
    sources: [
      { label: "AMD 官方发布", url: "https://newsroom.amd.com/news/amd-anthropic-strategic-partnership/" },
      { label: "Tom's Hardware", url: "https://www.tomshardware.com/tech-industry/amd-to-supply-anthropic-with-2-gigawatts-of-instinct-mi450-gpus" },
      { label: "Reddit / Hardware", url: "https://www.reddit.com/r/hardware/comments/1v3hmwg/amd_and_anthropic_announce_strategic_partnership/" }
    ]
  },
  {
    slug: "apec-digital-ai-ministerial",
    name: "APEC · 2026 Digital and AI Ministerial Statement",
    summary: "APEC 数字与 AI 部长在成都发布联合声明，把基础设施、技能、互操作、数字信任、开放创新和安全数据合作列为共同方向",
    image: "https://www.apec.org/images/default-source/newsrelease/2026/dmm-press-release-head-table.png?sfvrsn=55d2d9f3_1",
    impact: "亚太 AI 政策讨论开始从原则宣示走向互操作、标准、数字韧性和能力建设。对跨境 AI 产品而言，身份、数据流、内容可信与安全治理将越来越需要兼顾区域共同框架和各经济体的具体规则。",
    insight: "面向多市场的 AI 产品应提前建立可配置的数据驻留、透明度、审计和内容来源能力；把合规做成可复用平台层，才能在不同市场规则变化时快速适配。",
    sourceUrl: "https://www.apec.org/press/news-releases/2026/0724_DMM",
    sourceLabel: "APEC 官方发布",
    sources: [
      { label: "APEC 官方发布", url: "https://www.apec.org/press/news-releases/2026/0724_DMM" },
      { label: "APEC 联合声明", url: "https://www.apec.org/meeting-papers/sectoral-ministerial-meetings/telecommunicationsandinformation/2026-apec-digital-and-ai-ministerial-statement" },
      { label: "APEC 声明摘要", url: "https://www.apec.org/press/news-releases/2026/0723_DMM_MA" }
    ]
  }
];

const trends20260724 = [
  {
    title: "共享上下文正在从知识库功能变成 Agent 的组织资产",
    text: "PromptQL 把同事纠正沉淀为共享 Skill，Teable 让 Agent 在同一关系数据上协作，Procore 则把企业 SOP 注入垂直 Agent。最近一周的产品共同说明：长期壁垒不只是模型记住更多，而是团队能否共同维护有来源、有权限、会随工作更新的上下文。"
  },
  {
    title: "模型竞争转向单位任务成本与异构算力组合",
    text: "Gemini Flash 家族按主力、吞吐和网络安全任务分层，AMD 与 Anthropic 把 2GW 算力采购、ROCm 优化和资本合作绑在一起，PromptQL 也按 OLU 统一不同模型成本。产品开始同时优化模型路由、步骤数、基础设施和结果成功率，而不是只比较 Token 单价。"
  },
  {
    title: "可执行 Agent 的信任边界被直接做进产品体验",
    text: "Basement 用单次预算卡限制购买，Teable 保留步骤日志与回滚，Procore 继承项目权限并提供来源引用，APEC 则把互操作和数字信任列入区域合作。Agent 越接近真实动作，授权范围、可验证证据和恢复路径越需要成为用户可见的核心界面。"
  }
];

const products20260723 = [
  {
    slug: "humalike-hermes",
    name: "Humalike x Hermes",
    tag: "Agent Behavior",
    tagline: "用一条命令让 Hermes Agent 学会群聊中的时机、语气、人物记忆和社交边界",
    image: "https://ph-files.imgix.net/81247ace-6ea9-4a84-8357-07eccd0257c8.jpeg",
    positioning: "定位为 AI Agent 的行为基础设施与 Hermes 即插即用插件。壁垒来自把轮次判断、群体规范、Theory of Mind、Persona 与 Social Memory 拆成可组合 API，并用真实群聊研究和评测持续改进，而不是只靠系统提示词塑造人设。",
    audience: ["Hermes 与开源 Agent 用户", "社区和协作产品团队", "对话式 AI 开发者"],
    killerFeature: "一条命令安装后，Agent 会判断何时发言或保持沉默，适应群聊语气，记住谁说过什么，并在 Slack、Telegram 与 WhatsApp 中处理多人对话。",
    experience: "用户保留原有 Hermes Agent，只添加行为插件；它会把长回复拆成更自然的短消息，并在新消息打断时重新判断是否继续。行为分类与记忆由 Humalike API 承载，便于快速更新，也要求团队认真处理多人记忆边界。",
    growth: "借 Hermes 与 Nous Research 生态的一键集成切入，用 GitHub 插件、Product Hunt 首发和 20 美元免卡 Credits 获取开发者，再把同一组行为 API 扩展到游戏、教育、陪伴与企业协作。",
    businessModel: "开发者先获得 20 美元免费 API Credits，后续按 API 使用量与企业合作变现；官网目前未公开标准付费价目表。",
    insight: "对话 Agent 的产品质量不仅取决于说什么，还取决于何时不说、如何被打断以及哪些记忆可以在多人场景中安全复用。",
    sourceUrl: "https://humalike.ai/",
    sourceLabel: "Humalike 官方网站",
    sources: [
      { label: "Humalike 官网", url: "https://humalike.ai/" },
      { label: "官方 Hermes 插件", url: "https://github.com/Humalike/hermes-humalike-plugin" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/humalike-2" }
    ]
  },
  {
    slug: "migma-ai-email-marketing",
    name: "Migma AI",
    tag: "AI Email Marketing",
    tagline: "从品牌、受众和营销日历主动生成整套邮件活动，并在发送后继续学习收入表现",
    image: "https://migmaa-sandbox.s3.us-east-1.amazonaws.com/public/media/images/1783773871836-1-series.png",
    positioning: "定位为从创意到投递的一体化 AI 邮件营销平台。壁垒来自自研跨邮箱渲染引擎、品牌和活动上下文、细分与本地化、发送合规以及效果反馈，而不是只生成一段邮件文案。",
    audience: ["电商品牌与 SaaS 团队", "邮件营销人员", "营销代理商"],
    killerFeature: "描述一次活动目标后，自动建立完整邮件序列、受众分群、发送节奏和多语言版本，并在 Gmail、Outlook、Apple Mail 等邮箱中保持一致呈现。",
    experience: "用户可从一句需求、Figma、HTML、截图或 Claude 设计开始，在可视化画布中逐元素修改；连接域名后检查链接、送达与深浅色渲染，再直接发送并追踪打开、点击与转化。",
    growth: "以免费 Hobby 入口、品牌邮件 Remix 库和 Product Hunt 获取营销用户，通过 Mailchimp、Klaviyo、Slack、Telegram 及 Agent 工具集成进入现有流程，再以团队协作和持续效果学习提高留存。",
    businessModel: "Freemium 加 Premium 与 Enterprise 订阅；免费 Hobby 计划承担试用，付费价值来自完整活动、发送、分析、团队协作和企业集成，官网当前未在静态定价页公开具体金额。",
    insight: "营销 Agent 真正的闭环不是生成得更快，而是把品牌约束、跨客户端质量、合规发送和收入反馈变成下一次活动的共享记忆。",
    sourceUrl: "https://migma.ai/",
    sourceLabel: "Migma 官方网站",
    sources: [
      { label: "Migma 官网", url: "https://migma.ai/" },
      { label: "官方定价与能力", url: "https://migma.ai/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/migma-ai" }
    ]
  },
  {
    slug: "buzzy-ai-codirector",
    name: "Buzzy",
    tag: "AI Video Studio",
    tagline: "在无限画布中完成灵感、分镜、一致角色、镜头控制和局部重绘的 Agentic 视频创作",
    image: "https://ph-files.imgix.net/7a186743-acc3-4685-a8c5-827c2f1aa0b0.jpeg",
    positioning: "定位为创作者的 AI Co-director 与无限视频画布。壁垒来自把灵感检索、Moodboard、故事板、跨镜头角色和场景一致性、灯光机位控制与精细编辑放在同一工程中，并聚合 Kling、Runway、Veo 等模型。",
    audience: ["导演与短片创作者", "品牌广告团队", "动画和视觉概念设计师"],
    killerFeature: "先把角色、物体、地点和镜头组织成详细故事板，再跨任意长度的叙事保持主体一致，并像 Photoshop 一样局部修改视频、换光线和机位。",
    experience: "用户可从社区作品或灵感素材进入 Flow，在无限画布上并排探索参考、镜头与版本；Agent 先搭建分镜，用户再针对角色、构图、角度和局部画面反复调整。",
    growth: "用免费生成额度、公开社区作品与可复用 Workflow 降低创作门槛，通过 Product Hunt 和作品传播获客，再以多模型整合、专业导出与品牌广告工作流推动升级。",
    businessModel: "有限免费生成加周付或年付 Pro 订阅，并用视频 Credits 计量生成；官方条款显示不同长度按 Credits 消耗，高阶功能包含无水印高清导出、广告素材库与数据追踪。",
    insight: "视频生成产品正在从单次 Prompt 升级为可回看、可分支、可局部修改的制作空间；一致性资产与编辑控制比模型菜单更能形成长期壁垒。",
    sourceUrl: "https://www.buzzy.now/",
    sourceLabel: "Buzzy 官方网站",
    sources: [
      { label: "Buzzy 官网", url: "https://www.buzzy.now/" },
      { label: "官方订阅条款", url: "https://www.buzzy.now/terms-and-conditions" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/buzzy-2" }
    ]
  },
  {
    slug: "kastra-runtime-authorization",
    name: "Kastra",
    tag: "Agent Security",
    tagline: "在 Claude、Cursor、Codex 与 OpenClaw 每次执行前，用确定性策略做毫秒内授权",
    image: "https://ph-files.imgix.net/305af063-b2ab-409e-8bc8-92570b6dec0e.jpeg",
    positioning: "定位为 AI 系统的 Runtime Authorization 控制面。壁垒来自把身份、作用域、内容、目标、人工审批和加密审计放进每个 Prompt、工具调用、Shell 命令与 API 请求的执行路径，并支持云、VPC 与离线部署。",
    audience: ["Agent 平台工程师", "安全与合规团队", "使用编码 Agent 的开发者"],
    killerFeature: "用一套 Policy as Code 在动作发生前返回 ALLOW、DENY 或 HOLD，p99 决策延迟低于 1 毫秒，并为每次结果写入哈希链审计证据。",
    experience: "个人开发者可用本地 Edge 代理和一行配置保护 Claude Code、Cursor 或 Codex；平台团队可通过 Proxy、Sidecar 或 SDK 统一约束多 Agent、限制花费，并把高风险步骤送给指定人员批准。",
    growth: "以个人开发者永久免费、本地无账户启动和 Product Hunt 首发优惠建立入口，再用 OpenAI、Anthropic、Gemini、Kubernetes 与主流 Agent 框架集成进入企业，最终通过合规和部署需求扩张。",
    businessModel: "个人本地层永久免费，生产环境通过托管多区域云、单租户 VPC、Air-gapped 自托管和企业支持销售；企业套餐采用联系销售定价。",
    insight: "Agent 安全不应只在输出后报警；把每个动作变成带身份、范围、批准人和可验证证据的运行时决策，才能真正限制自动化的爆炸半径。",
    sourceUrl: "https://kastra.ai/",
    sourceLabel: "Kastra 官方网站",
    sources: [
      { label: "Kastra 官网", url: "https://kastra.ai/" },
      { label: "官方平台说明", url: "https://kastra.ai/platform" },
      { label: "官方文档", url: "https://kastra.ai/docs" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/kastra" }
    ]
  },
  {
    slug: "box-ascii-agent-vm",
    name: "box by ASCII",
    tag: "Agent Compute",
    tagline: "两秒启动带 SSH、Docker、桌面与持久状态的完整 Ubuntu VM，让 Agent 安全并行工作",
    image: "https://ph-files.imgix.net/3e0cf7e1-069e-496e-8e92-92b1b1da81b5.jpeg",
    positioning: "定位为 Agent Factory 的低成本完整虚拟机。壁垒来自自研快照和磁盘级 Fork、完整 VM 隔离、稳定的大规模自助并发，以及围绕长时间 Agent 而不是短时容器优化的欧洲基础设施成本。",
    audience: ["编码 Agent 与软件工厂", "Agent 平台开发者", "需要隔离桌面的安全和自动化团队"],
    killerFeature: "`box new` 约两秒得到 4 vCPU／8GB 的 Ubuntu VM，预装 Docker、VS Code、Chrome、GitHub CLI 等工具，并可停止快照、秒级恢复或从状态 Fork 新机器。",
    experience: "开发者可用 CLI、HTTP API 或 Python／TypeScript SDK 批量创建机器，通过 SSH、SCP 或 60fps 虚拟桌面接管；停止后保留文件和服务配置并暂停计费，便于长任务等待和分支实验。",
    growth: "以清晰的 Agent 专用 CLI、Markdown 文档、Product Hunt 和低至每秒计费吸引开发者，通过自助 100–1,200 台并发、模板与创始人支持进入 Agent 平台和软件工厂。",
    businessModel: "按秒计费且账户每月最低 20 美元；20 美元包含约 200 万 VM 秒，约等于 555 小时的 4 vCPU／8GB 机器时间，可在任意数量的 box 间共享。",
    insight: "长时间 Agent 的计算产品不能只追求冷启动；可持久化、可 Fork、可接管、停止即停费和明确隔离边界共同决定任务经济性。",
    sourceUrl: "https://box.ascii.dev/",
    sourceLabel: "box 官方网站",
    sources: [
      { label: "box 官网与定价", url: "https://box.ascii.dev/" },
      { label: "官方 API 文档", url: "https://docs.ascii.dev/box/api/v1" },
      { label: "官方 SDK 文档", url: "https://docs.ascii.dev/box/sdks/overview" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/box-4" }
    ]
  }
];

const industryEvents20260723 = [
  {
    slug: "openai-presence",
    name: "OpenAI · Presence",
    summary: "Presence 把策略、工具、仿真、评测、升级和 Codex 改进循环组合成可部署的企业语音与聊天 Agent 产品",
    image: "https://images.ctfassets.net/kftzwdyauwt9/7FgrwtDxicVhqi90R8xgcb/cd3875f42be331450c82ce2ee818cc68/openai-presence-still-1.png?fm=webp&q=90&w=3840",
    impact: "头部模型公司正从提供模型和 Agent SDK，进一步进入企业高价值工作流的设计、部署与持续运营。Presence 以有限通用可用和 FDE 交付，说明可靠性、权限、评测和改进速度已成为企业 Agent 的核心商品。",
    insight: "先为 Agent 定义一个可验收的岗位、最小知识和系统权限，再用真实会话、人工升级与回归评测驱动改进；不要从全能助手和无限权限开始。",
    sourceUrl: "https://openai.com/index/introducing-openai-presence/",
    sourceLabel: "OpenAI 官方发布",
    sources: [
      { label: "OpenAI 官方发布", url: "https://openai.com/index/introducing-openai-presence/" },
      { label: "OpenAI Newsroom", url: "https://openai.com/news/company-announcements/" },
      { label: "Reddit 讨论", url: "https://www.reddit.com/r/OpenAI/comments/1v3gx7e/introducing_openai_presence/" }
    ]
  },
  {
    slug: "synthesia-roleplay-sessions",
    name: "Synthesia · Roleplay Sessions",
    summary: "Roleplay Sessions 让员工与实时 AI Avatar 练习销售、管理和客服对话，并按技能 Rubric 获得评分与辅导",
    image: "https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/6a5face0fdf4c407b7aa2139_How-to_Roleplay-Sessions_Thumbnail%203.webp",
    videoEmbedUrl: "https://share.synthesia.io/embeds/videos/01437df3-da5d-4b80-b89f-3bbf399b37c6",
    impact: "企业生成式视频平台开始从内容生产扩展到行为练习和绩效测量。交互 Avatar、业务 Rubric、尝试记录与团队分析形成新的数据闭环，也把采购价值从节省制作成本推向可证明的技能提升。",
    insight: "教育和培训产品应把观看之后的练习、针对性反馈和前后测放进同一流程；可量化能力变化比内容生成量更接近最终业务价值。",
    sourceUrl: "https://www.synthesia.io/features/roleplay-sessions",
    sourceLabel: "Synthesia 官方产品页",
    sources: [
      { label: "Synthesia 产品页", url: "https://www.synthesia.io/features/roleplay-sessions" },
      { label: "官方互动演示", url: "https://share.synthesia.io/embeds/videos/01437df3-da5d-4b80-b89f-3bbf399b37c6" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/22/synthesias-ai-training-platform-is-moving-beyond-videos-into-live-coaching/" }
    ]
  },
  {
    slug: "substack-scan-ai-text",
    name: "Substack · Scan for AI Text",
    summary: "Substack 接入 Pangram，让读者扫描新发布的文章、Notes、评论和回复，并允许作者补充创作透明度说明",
    image: "https://support.substack.com/hc/article_attachments/51577446161940",
    impact: "内容平台正在把 AI 来源判断直接交给读者，但检测结果仍是概率估计而非事实证明。平台一方面回应低质批量内容，另一方面必须处理误判、作者解释权、关闭检测和反馈纠错。",
    insight: "内容治理产品不要把检测分数包装成判决；应明确适用范围和不确定性，为创作者提供上下文声明、申诉和关闭机制，并用阅读质量与信任指标验证效果。",
    sourceUrl: "https://support.substack.com/hc/en-us/articles/50891130623508-How-can-I-detect-AI-on-Substack",
    sourceLabel: "Substack 官方帮助中心",
    sources: [
      { label: "Substack 官方说明", url: "https://support.substack.com/hc/en-us/articles/50891130623508-How-can-I-detect-AI-on-Substack" },
      { label: "Pangram 技术说明", url: "https://pangram.substack.com/p/how-does-pangram-work" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/22/substacks-new-tool-tells-you-whos-been-writing-their-newsletters-with-ai/" },
      { label: "Reddit 社区反馈", url: "https://www.reddit.com/r/Substack/comments/1v3errp/substacks_new_ai_detection_tool/" }
    ]
  },
  {
    slug: "glow-endpoint-ai-security",
    name: "Glow · Endpoint AI Security",
    summary: "Glow 以 1.8 亿美元融资和 12 亿美元估值出隐身，用专用 Agent 持续发现、评估并阻止端点软件与 AI 风险",
    image: "https://cdn.prod.website-files.com/69ef932dc67c7db253e00edc/6a60fcf0991b0523680b6eaa_Press%20Release%2001%20%281%29.png",
    impact: "AI 工具、编码 Agent 与供应链依赖把企业攻击面重新推回员工设备。Glow 的高额 Series A 说明资本和客户开始把 Shadow AI、软件资产真实清单和自动化预防视为独立安全品类。",
    insight: "企业 AI 产品必须提供可发现的软件和 Agent 清单、托管账户、策略执行与自动修复；安全团队若只能在事故后看到日志，就跟不上机器速度的安装和执行。",
    sourceUrl: "https://www.glow.io/news/glow-emerges-from-stealth-with-180-million",
    sourceLabel: "Glow 官方公告",
    sources: [
      { label: "Glow 官方公告", url: "https://www.glow.io/news/glow-emerges-from-stealth-with-180-million" },
      { label: "Glow 产品页", url: "https://www.glow.io/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/22/glow-emerges-from-stealth-at-1-2b-valuation-to-challenge-endpoint-security-in-the-ai-era/" }
    ]
  },
  {
    slug: "samsung-galaxy-z8-ai",
    name: "Samsung · Galaxy Z Fold8 Ultra / Fold8 / Flip8",
    summary: "Samsung 发布三款 Z8 折叠设备，并让 Galaxy AI 与 Gemini Intelligence 针对大屏多任务和 FlexWindow 深度适配",
    image: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/07/22215435/Samsung-Mobile-Galaxy-Unpacked-July-2026-Galaxy-Z-Fold8-Ultra-Galaxy-Z-Fold8-Galaxy-Z-Flip8-Launch_main1_F.jpg",
    impact: "移动 AI 的竞争正在从是否内置助手转向模型如何理解屏幕形态、当前内容和连续任务。Samsung 用三个折叠形态承载不同 AI 入口，也强化了硬件、系统 UI、合作模型与隐私控制的联合设计。",
    insight: "端侧 AI 不应只是全设备复用同一个聊天框；要根据屏幕尺寸、姿态和用户当下动作设计信息密度、快捷操作和交接路径，同时保留透明度与控制。",
    sourceUrl: "https://news.samsung.com/global/samsung-galaxy-z-fold8-ultra-fold8-and-flip8foldables-perfected-for-every-way-of-living",
    sourceLabel: "Samsung 官方发布",
    sources: [
      { label: "Samsung 官方发布", url: "https://news.samsung.com/global/samsung-galaxy-z-fold8-ultra-fold8-and-flip8foldables-perfected-for-every-way-of-living" },
      { label: "Samsung First Look", url: "https://news.samsung.com/global/galaxy-unpacked-july-2026-a-first-look-at-galaxy-z-fold8-ultra-galaxy-z-fold8-and-galaxy-z-flip8" },
      { label: "Axios", url: "https://www.axios.com/2026/07/22/samsung-foldable-galaxy-smartphones" },
      { label: "Reddit 现场 AMA", url: "https://www.reddit.com/r/samsung/comments/1v3fkrn/ama_hands_on_with_the_galaxy_z_fold8_ultra_z/" }
    ]
  }
];

const trends20260723 = [
  {
    title: "Agent 栈开始拆出行为、授权、隔离与持续改进层",
    text: "Humalike 管理何时说话，Kastra 决定动作能否执行，box 提供可持久化隔离环境，Presence 用真实会话和评测持续改进，Glow 则治理端点风险。生产 Agent 正从一个模型加工具，演化为可分工、可替换的完整运行栈。"
  },
  {
    title: "AI 产品价值从生成结果转向可测量的业务闭环",
    text: "Migma 把邮件生成连接到转化反馈，Synthesia 把培训视频延伸到练习、评分和技能分析，Buzzy 把视频模型放进可编辑分镜。生成质量仍重要，但能否追踪效果并驱动下一轮改进，正在决定付费和留存。"
  },
  {
    title: "个人设备与沟通现场成为下一轮 Agent 入口",
    text: "Samsung 按折叠形态重做移动 AI，Humalike 进入多人群聊，Presence 覆盖语音与聊天，Glow 围绕员工端点建立安全边界。Agent 越靠近真实意图和动作现场，越需要上下文适配、隐私分区与明确接管点。"
  }
];

const products20260722 = [
  {
    slug: "lev8",
    name: "Lev8",
    tag: "AI GTM",
    tagline: "把实时网页搜索、联系人核验、购买信号与多渠道触达交给一组并行 GTM Agent",
    image: "https://lev8.com/og-image.png",
    positioning: "定位为 AI-native GTM 平台。壁垒来自 50 多个数据提供方与开放网页的实时信号、跨来源身份核验，以及从发现到外联共享同一证据链，而不是一份静态联系人数据库。",
    audience: ["B2B 创始人", "销售与 RevOps 团队", "招聘与合作伙伴团队"],
    killerFeature: "用自然语言描述目标人群后，并行 Agent 搜索、核验、补全并解释为什么现在值得联系，再生成跨邮件和社交渠道的个性化触达。",
    experience: "用户可从一句复杂条件或 CSV 开始，逐条查看实时来源、身份与可达性分数，在发送前检查建议角度和证据；监控 Agent 会继续跟踪换岗、融资、招聘和技术栈变化。",
    growth: "以每月 500 Credits 的免费层和 Product Hunt 首发优惠降低试用成本，再用 1,000 多个集成、实时信号监控和多渠道工作流推动团队升级。",
    businessModel: "Freemium 加 Credits 订阅，Free 为 0 美元／月，Starter、Pro、Scale 分别为 49、199、499 美元／月，并按线索与发送基础设施分层。",
    insight: "销售 Agent 的差异化不在能写多少封邮件，而在能否把新鲜信号、身份消歧、来源证据和合规发送节奏做成一个可检查的决策链。",
    sourceUrl: "https://lev8.com/",
    sourceLabel: "Lev8 官方网站",
    sources: [
      { label: "Lev8 官网", url: "https://lev8.com/" },
      { label: "官方定价", url: "https://lev8.com/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/lev8" }
    ]
  },
  {
    slug: "cartai",
    name: "CartAI",
    tag: "Agentic Commerce",
    tagline: "用一个 API 或 MCP Server 让 Agent 在真实商家页面完成搜索、支付、下单与订单确认",
    image: "https://framerusercontent.com/assets/rj32zIyR11EQviOlmHnIYume3aU.png",
    positioning: "定位为 Agentic Commerce as a Service。壁垒来自跨商家实时商品与结账执行层、标准化订单状态、支付授权轨道，以及无需商家预先集成也能完成原生交易的覆盖面。",
    audience: ["AI 助手与购物 Agent 团队", "内容与导购平台", "电商开发者"],
    killerFeature: "提交商品 URL、客户与支付 Session 后，Agent 在商家真实页面完成选品、地址、支付和确认，并通过 Webhook 返回每个状态变化。",
    experience: "开发者可以选 API、MCP Server 或即将推出的 Hosted Cart；读操作先返回跨商家实时价格和库存，购买前可要求用户确认，支付卡数据不进入开发者后端。",
    growth: "用开发者文档、测试环境和多种接入形态进入 Agent 工作流，再通过跨 7 万多个品牌的归因与佣金能力吸引导购和内容平台。",
    businessModel: "生产 API 按交易量、GMV 基点或其他用量指标收费，同时捕获商品与结账的联盟佣金并与发布方分成。",
    insight: "购物 Agent 的关键基础设施不是推荐卡片，而是把价格变化、用户授权、幂等、支付合规和订单状态做成可编程且可恢复的交易协议。",
    sourceUrl: "https://www.cartai.ai/",
    sourceLabel: "CartAI 官方网站",
    sources: [
      { label: "CartAI 官网", url: "https://www.cartai.ai/" },
      { label: "官方结账文档", url: "https://www.cartai.ai/product/checkouts" },
      { label: "官方服务条款", url: "https://www.cartai.ai/terms" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/cartai" }
    ]
  },
  {
    slug: "ditto-site",
    name: "ditto.site",
    tag: "Web-to-Code",
    tagline: "把任意公开网页确定性还原为可维护的 Next.js 或 Vite 组件化代码",
    image: "https://ditto.site/assets/og.png",
    positioning: "定位为 AI 建站时代的确定性网页捕获到代码编译器。壁垒来自浏览器渲染捕获、设计 Token 与交互状态提取、字节稳定输出和可公开审计的方法，而不是依赖 LLM 猜页面。",
    audience: ["AI App Builder 团队", "前端工程师", "设计到代码工具开发者"],
    killerFeature: "输入一个公开 URL，五分钟内获得拆分为 Section 和 Component 的 TypeScript 项目，并保留字体、资源、响应式布局、悬浮状态和可复现动效。",
    experience: "用户可本地自托管，也能通过 REST API 或 MCP 让 Agent 发起 Clone、查看进度、按需读取文件并下载完整项目；输出默认可直接运行和继续编辑。",
    growth: "以 MIT 开源、免费托管 API、GitHub 传播和 MCP 接入获取开发者，再把生成结果作为其他 AI 建站产品的新用户起点。",
    businessModel: "当前官网标示 0 美元并采用 MIT 许可证，支持免费自托管与 Hosted API，尚未公布付费套餐。",
    insight: "AI 编程产品不必把所有步骤都交给生成模型；对可观测、可验证的任务采用确定性管线，能同时降低成本、漂移与后续维护负担。",
    sourceUrl: "https://www.ditto.site/",
    sourceLabel: "ditto.site 官方网站",
    sources: [
      { label: "ditto.site 官网", url: "https://www.ditto.site/" },
      { label: "官方 GitHub", url: "https://github.com/ion-design/ditto.site" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/ditto-site" }
    ]
  },
  {
    slug: "rerun-build",
    name: "Rerun",
    tag: "No-Code Agents",
    tagline: "用自然语言搭建会持续运行、展示过程并在敏感动作前暂停审批的工作 Agent",
    image: "https://rerun.build/og-image.png",
    positioning: "定位为非技术团队的全天候 Agent 运行平台。壁垒来自每个工作区的私有服务器、实时运行与成本可观测性、Agent 间交接和 Slack／App 审批，而不只是一个可视化 Prompt Builder。",
    audience: ["独立创业者", "中小团队", "代理商与运营团队"],
    killerFeature: "Agent 可按时间、邮件或业务事件自行唤醒，在退款、付款或对外邮件等敏感步骤暂停，用户批准后从原状态继续执行。",
    experience: "用户描述任务、连接工具即可在数分钟内上线；仪表盘持续显示每一步、Token、交接和成功率，并允许使用平台模型、自己的 API Key、订阅或本地模型。",
    growth: "用首轮免费且无需信用卡降低启动门槛，通过无代码模板、团队邀请、专家分销与多模型兼容覆盖创业、地产、电商、代理商和财务运营场景。",
    businessModel: "SaaS 订阅按 Agent、席位、私有服务器和内含模型用量分层，Solo、Team、Scale 月付分别为 34、74、94 美元，企业版定制。",
    insight: "面向大众的 Agent 平台首先要消除运行焦虑：把自动触发、过程可见、成本边界和不可逆动作审批默认做进产品，而不是留给用户补安全规则。",
    sourceUrl: "https://rerun.build/",
    sourceLabel: "Rerun 官方网站",
    sources: [
      { label: "Rerun 官网与定价", url: "https://rerun.build/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/rerun-2" }
    ]
  },
  {
    slug: "jockey-twelvelabs",
    name: "Jockey by TwelveLabs",
    tag: "Video Intelligence",
    tagline: "让 Agent 跨整套照片与视频资料库按人物、场景、语义和精确时刻检索与推理",
    image: "https://ph-files.imgix.net/fac6282f-4f0f-4f1d-9a48-508a1d56db4e.jpeg",
    positioning: "定位为视频理解的 Agent Layer。壁垒来自 Marengo 的跨模态检索、Pegasus 的视频描述、整库级推理与帧级时间戳，以及多年沉淀的视频原生模型和 API。",
    audience: ["内容创作者与剪辑师", "品牌广告团队", "媒体应用开发者"],
    killerFeature: "在一个 Knowledge Store 中追踪人物或主题、解释匹配原因、抽取结构化数据并把相关片段组合成可编辑 Highlight Reel。",
    experience: "用户连接照片和视频后，可在 Jockey、Claude 的 MCP 或 API 中直接提问；答案映射到精确时刻，营销团队还能按 Hook、人才、Logo、格式与表现批量标注素材。",
    growth: "以 Research Preview、有限免费注册和 Product Hunt 首发收集高质量反馈，再借 Claude MCP、开发者 SDK 和创作者案例进入现有内容工作流。",
    businessModel: "按媒体存储与速率订阅，Free 提供 5GB，Plus 为 20 美元／月并提供 100GB，更高档位面向更大媒体库和团队。",
    insight: "多模态资料库的价值不在生成一段总结，而在返回可定位、可组合、可继续执行的时刻；时间戳和结构化证据是视频 Agent 的核心接口。",
    sourceUrl: "https://jockey.twelvelabs.io/",
    sourceLabel: "TwelveLabs 官方产品页",
    sources: [
      { label: "Jockey 官方产品页", url: "https://jockey.twelvelabs.io/" },
      { label: "TwelveLabs 发布说明", url: "https://docs.twelvelabs.io/docs/get-started/release-notes" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/twelvelabs" }
    ]
  }
];

const industryEvents20260722 = [
  {
    slug: "google-gemini-flash-july-2026",
    name: "Google · Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber",
    summary: "Google 同日发布面向高质量 Agent、高吞吐任务和防御型代码安全的三款 Gemini Flash 模型",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini-3-5_3-6_3-5-Cyber__key-art__statement_.width-1300.jpg",
    impact: "模型产品正在从单一能力阶梯转向按主 Agent、低成本子 Agent 和高风险专业任务分工；3.6 Flash 降低输出成本与工具循环，Flash-Lite 面向高吞吐，Cyber 则以受限访问处理双重用途风险。",
    insight: "产品团队应按任务价值、吞吐和风险路由模型，并把成本、工具调用次数和非预期修改纳入评测；专业高风险能力还需要独立的访问控制与审计策略。",
    sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/",
    sourceLabel: "Google 官方发布",
    sources: [
      { label: "Google 官方发布", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" },
      { label: "Gemini API 文档", url: "https://ai.google.dev/gemini-api/docs/latest-model" },
      { label: "Google DeepMind · Flash Cyber", url: "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/" }
    ]
  },
  {
    slug: "applied-intuition-dana",
    name: "Applied Intuition · Dana",
    summary: "Dana 把构建、测试、部署与运营收进同一 Agentic Platform，加速安全关键型 Physical AI 交付",
    image: "https://cdn.sanity.io/images/a86leg7v/production/453c700bcadba0d0866ad9d22e4a1563498a7393-3000x2000.jpg?rect=0,213,3000,1575&w=1200&h=630",
    impact: "Physical AI 的平台层开始复用汽车、卡车、矿业和农业积累的数据、仿真、评测与治理能力，Agent 不再只控制一次动作，而是进入从开发到车队运营的全生命周期。",
    insight: "进入真实世界的 Agent 必须把仿真、可追溯评测、权限和部署治理做成统一产品面；自然语言入口不能替代安全边界和行业工作流。",
    sourceUrl: "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana",
    sourceLabel: "Applied Intuition 官方发布",
    sources: [
      { label: "Applied Intuition 发布", url: "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana" },
      { label: "Dana 官方产品页", url: "https://www.appliedintuition.com/dana" },
      { label: "Dana 官方深度介绍", url: "https://www.appliedintuition.com/blog/dana-new-way-to-build-physical-ai" }
    ]
  },
  {
    slug: "microsoft-amd-azure-ai-hpc",
    name: "Microsoft × AMD · Azure AI & HPC Infrastructure",
    summary: "Azure 将引入 AMD Helios 与新一代 EPYC，推出面向 AI 数据、芯片设计和规模推理的三类 VM",
    image: "https://blogs.microsoft.com/wp-content/uploads/2026/07/OMB-Azure-AMD-Hero-1024x576.jpg",
    impact: "云端 AI 基础设施进一步异构化：HDv2 服务数据准备与 Agent 协调，HXv2 面向 EDA 与技术计算，ND MI455X v7 承接大规模推理，给训练和推理团队增加 Nvidia 之外的完整栈选择。",
    insight: "产品团队应按数据准备、编排、训练和推理拆分基础设施需求，用端到端成本与能耗验证硬件选择，而不是只比较单一加速器峰值。",
    sourceUrl: "https://blogs.microsoft.com/blog/2026/07/20/microsoft-expands-azure-ai-and-hpc-infrastructure-with-amd/",
    sourceLabel: "Microsoft 官方博客",
    sources: [
      { label: "Microsoft 官方博客", url: "https://blogs.microsoft.com/blog/2026/07/20/microsoft-expands-azure-ai-and-hpc-infrastructure-with-amd/" },
      { label: "AMD 官方公告", url: "https://www.amd.com/en/newsroom/press-releases/2026-7-20-microsoft-to-deploy-next-gen-amd-instinct-and-amd-.html" },
      { label: "Tom's Hardware", url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/microsoft-will-deploy-amds-helios-rack-scale-ai-accelerator-at-scale-on-azure-radeon-instinct-mi455x-and-epyc-venice-power-will-be-available-through-redmonds-cloud-infrastructure" }
    ]
  },
  {
    slug: "gritt-physical-ai-launch",
    name: "Gritt · Physical AI for Infrastructure",
    summary: "Gritt 携 3240 万美元融资出隐身，用可挂载现有工程机械的 AI 系统自动化太阳能与基础设施施工",
    image: "https://www.gritt.ai/launch/og/pr-og.jpg",
    impact: "Physical AI 的商业化路径开始避开从零制造机器人，转向在施工现场现有设备上叠加感知、控制和学习；每次部署同时产生任务数据与现场决策数据。",
    insight: "具身产品可先复用客户已拥有、会维护的硬件，从高频危险任务建立 ROI 和数据飞轮；扩展任务前必须证明精度、安全边界和现场可靠性。",
    sourceUrl: "https://www.gritt.ai/news/gritt-launches-physical-ai",
    sourceLabel: "Gritt 官方发布",
    sources: [
      { label: "Gritt 官方发布", url: "https://www.gritt.ai/news/gritt-launches-physical-ai" },
      { label: "Gritt 产品介绍", url: "https://www.gritt.ai/news/introducing-gritt" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/21/gritt-exits-stealth-with-34-million-for-robots-to-build-solar-plants-then-everything-else/" }
    ]
  },
  {
    slug: "spotify-labs-studio-rollout",
    name: "Spotify Labs · Studio Research Preview",
    summary: "Studio 开始逐步开放，把个性化音乐、私人 Podcast、网页研究与日历邮箱动作组合成桌面 AI 工作台",
    image: "https://storage.googleapis.com/pr-newsroom-wp/1/2026/05/Header-1024x576.png",
    videoUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2026/05/Studio-V2-1.mp4",
    impact: "音频平台正从推荐内容升级为基于用户品味和外部上下文生成、编排并跨设备保存内容的 Agent，Spotify 的资料库与分发网络因此变成新的个人计算界面。",
    insight: "个性化 Agent 的壁垒来自长期偏好与原生分发，但连接日历、邮箱和浏览器后必须默认提供动作确认、结果核验与清晰的数据权限。",
    sourceUrl: "https://newsroom.spotify.com/2026-05-21/studio-by-spotify-labs-launch/",
    sourceLabel: "Spotify 官方更新",
    sources: [
      { label: "Spotify 官方更新", url: "https://newsroom.spotify.com/2026-05-21/studio-by-spotify-labs-launch/" },
      { label: "官方演示视频", url: "https://storage.googleapis.com/pr-newsroom-wp/1/2026/05/Studio-V2-1.mp4" },
      { label: "Reddit 早期反馈", url: "https://www.reddit.com/r/truespotify/comments/1uzxq20/studio_by_spotify_labs/" }
    ]
  }
];

const products20260721 = [
  {
    slug: "fuzzy-ai",
    name: "Fuzzy AI",
    tag: "AI Sales",
    tagline: "先用内容和互动把陌生潜客变熟，再以你的语气发起 LinkedIn 与邮件触达",
    image: "https://getfuzzy.ai/images/fuzzy-hero.jpeg",
    videoEmbedUrl: "https://www.youtube.com/embed/PNs_VTpEbPo?rel=0",
    positioning: "定位为关系优先的 AI 销售平台。壁垒来自把潜客研究、LinkedIn 互动、个人内容、外联序列、回复和团队协作串在一个共享记忆中，而不是单纯扩大冷邮件量。",
    audience: ["B2B 创始人", "销售与增长团队", "代理商和招聘团队"],
    killerFeature: "先识别正在关注相关市场的潜客，用 Prospect-Only Feed 和品牌语气记忆持续建立熟悉度，再按用户设定的自动化程度启动个性化触达。",
    experience: "用户描述目标客户后，Agent 建名单、补全研究并建议评论或内容；团队可看到谁正在维护某段关系，重要消息支持逐条审核，避免重复触达和黑盒发送。",
    growth: "用免费试用、Product Hunt 首发、销售方法论内容与 Slack 社区获客，再以团队共享上下文、重复触达防护和完整工作流提高席位扩张。",
    businessModel: "采用 B2B SaaS 订阅与免费试用，按销售使用场景、自动化能力和团队协作需求分层，并提供会议演示与企业销售。",
    insight: "销售 Agent 的价值不应只用发送量衡量；把关系升温信号、品牌语气、团队协同和人工审核放进同一状态机，才可能提升回复质量而不透支信任。",
    sourceUrl: "https://getfuzzy.ai/",
    sourceLabel: "Fuzzy AI 官方网站",
    sources: [
      { label: "Fuzzy AI 官网", url: "https://getfuzzy.ai/" },
      { label: "官方定价", url: "https://getfuzzy.ai/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/fuzzy-ai-2" }
    ]
  },
  {
    slug: "nautis",
    name: "Nautis",
    tag: "Startup OS",
    tagline: "用一个共享业务记忆和 AI Chief of Staff 统筹融资、财务、CRM 与日常运营",
    image: "https://getnautis.com/platform-og.jpg",
    positioning: "定位为创始人的 AI-native Startup Operating System。壁垒来自 30 多个业务模块共享同一公司上下文，以及跨融资、财务、销售和运营的可审计动作链。",
    audience: ["早期创业者", "小型创业团队", "自由职业者与代理商"],
    killerFeature: "在一次对话中读取真实公司数据，连续完成材料审阅、投资人匹配、邮件草拟、数据室搭建和 CRM 更新，并在外发前等待批准。",
    experience: "用户从免费账户导入业务资料后，每天获得风险和优先级简报；每次 AI 调用都记录 Credits 与美元成本，对外邮件、支付和编辑进入明确审批点。",
    growth: "以免费起步、五分钟设置和创始人模板降低迁移门槛，通过投资人目录、计算器与生成器获取搜索流量，再以跨模块数据网络提高留存。",
    businessModel: "Freemium 加 AI Credits 计量，免费入口用于建立完整公司上下文，付费价值来自更高用量、更多业务模块与团队协作。",
    insight: "全栈业务 Agent 的护城河不是模块数量，而是数据能否跨模块复用、动作是否可追溯，以及用户能否在不可逆步骤前轻松接管。",
    sourceUrl: "https://getnautis.com/",
    sourceLabel: "Nautis 官方网站",
    sources: [
      { label: "Nautis 官网", url: "https://getnautis.com/" },
      { label: "官方定价", url: "https://getnautis.com/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/nautis" }
    ]
  },
  {
    slug: "loova-ads-studio",
    name: "Loova Ads Studio",
    tag: "AI Ad Creative",
    tagline: "在一个工作台生成 UGC、商品广告、数字人视频和静态素材，并围绕转化批量迭代",
    image: "https://static.loova.ai/upload/www/Your_All_In_One_Creative_Playground_2_926b4086bf.png",
    positioning: "定位为品牌与代理商的全栈 AI 广告工作室。壁垒来自聚合多种图像和视频模型、复用商品与角色参考，以及把生成任务封装成面向广告转化的 Agent 工作流。",
    audience: ["电商品牌", "效果广告团队", "创意代理商与内容创作者"],
    killerFeature: "从商品 URL 或参考素材出发，生成 UGC、商品片、Avatar 视频和静态广告，并用 Viral Ad Clone 复刻已验证的创意结构。",
    experience: "用户在同一界面选择广告类型、商品和参考角色，Agent 自动组合脚本、画面与视频模型；生成后可继续用提示编辑，减少在多模型网站之间搬运素材。",
    growth: "以免费注册、低单条素材成本和热门模型聚合吸引创作者，通过模板、爆款复刻和 Creative Partner Program 获取品牌与代理商分发。",
    businessModel: "Freemium 加 Credits 订阅，并用部分模型的 Unlimited 套餐提升高频创作者付费；官方首发称单条广告生成成本可低于 2 美元。",
    insight: "生成广告工具要从展示模型能力转向验证商业假设；把商品上下文、创意结构、版本管理和效果反馈连起来，比简单增加模型数量更重要。",
    sourceUrl: "https://loova.ai/",
    sourceLabel: "Loova 官方网站",
    sources: [
      { label: "Loova 官网", url: "https://loova.ai/" },
      { label: "官方定价", url: "https://loova.ai/pricing" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/loova-agents" }
    ]
  },
  {
    slug: "replay-qa",
    name: "Replay QA",
    tag: "Agentic Testing",
    tagline: "持续探索 Web 应用、记录可重放会话，并把根因与修复上下文直接交给编码 Agent",
    image: "https://www.replay.io/replayQA_og-image.png",
    positioning: "定位为面向 AI 编码时代的自动化 QA Agent。壁垒来自可确定重放的浏览器记录、运行时上下文捕获，以及从发现缺陷到向编码 Agent 提供根因的闭环。",
    audience: ["Web 开发团队", "使用编码 Agent 的创业公司", "QA 与工程效率团队"],
    killerFeature: "连接 GitHub 仓库做持续测试，或输入 URL 做一次性检查；Agent 自动探索应用并为每个真实缺陷保留可重放证据。",
    experience: "用户无需先编写测试脚本，提交仓库或网址后即可查看 Agent 的操作轨迹、失败时刻和根因；修复上下文可直接交给 Cursor、Codex 等编码工具。",
    growth: "以免费产品和单 URL 即时检查降低试用成本，借 GitHub 持续集成进入开发流程，再用可分享的 Replay 让缺陷证据在团队内传播。",
    businessModel: "Replay QA 首发阶段免费，通过底层 Replay 调试与团队协作能力形成开发者入口，后续可围绕持续运行、团队治理和企业支持扩展付费。",
    insight: "AI 写代码越快，验证瓶颈越明显；测试 Agent 需要输出可复现证据和根因，而不只是另一份可能需要人工复核的缺陷描述。",
    sourceUrl: "https://qa.replay.io/",
    sourceLabel: "Replay QA 官方产品",
    sources: [
      { label: "Replay QA", url: "https://qa.replay.io/" },
      { label: "Replay 官网", url: "https://www.replay.io/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/replayio" }
    ]
  },
  {
    slug: "skippr-ai",
    name: "Skippr AI",
    tag: "In-Product Agent",
    tagline: "把能看屏幕、实时对话并操作软件的 AI 员工直接嵌入产品，为每位用户完成上手和排障",
    image: "https://ph-files.imgix.net/690b93bb-d720-44bd-8139-c6bb55b5b385.jpeg",
    positioning: "定位为产品内实时 AI 员工。壁垒来自会话级议程与记忆、语音和屏幕感知、内置浏览器自动化，以及只需两行代码的嵌入式分发。",
    audience: ["SaaS 产品团队", "客户成功团队", "需要交互式上手的复杂软件"],
    killerFeature: "Agent 能看到用户当前界面，用十种语言实时说话并直接操作软件，从讲解升级为替用户完成配置、激活和排障步骤。",
    experience: "团队上传知识、配置品牌后生成嵌入组件或会议链接；用户在完整会话中保持共同议程，Agent 一边解释一边演示和操作，减少帮助中心与人工接力。",
    growth: "用两行代码、无卡注册和 200 免费 Credits 获取产品团队，通过会议链接先验证场景，再以产品内嵌入扩大到每个终端用户。",
    businessModel: "Credits 按量模式叠加企业销售，免费额度用于自助试用；更深的安全、集成、容量和服务能力面向企业客户。",
    insight: "产品内 Agent 的关键指标应是激活率和问题解决率，而非对话数；只有具备可观察界面、可执行动作和明确回退，才真正像员工而不是悬浮客服。",
    sourceUrl: "https://skippr.ai/",
    sourceLabel: "Skippr 官方网站",
    sources: [
      { label: "Skippr 官网", url: "https://skippr.ai/" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/skippr-3" }
    ]
  }
];

const industryEvents20260721 = [
  {
    slug: "mcp-2026-07-28-rc",
    name: "Model Context Protocol · 2026-07-28 RC",
    summary: "MCP 发布新版规范候选，移除协议级会话和初始化握手，让远程 Server 更容易无状态扩缩容",
    image: "https://blog.modelcontextprotocol.io/og-image.png",
    impact: "MCP 正从开发者连接协议走向大规模生产基础设施；无状态请求、可路由 Header、缓存 TTL 与 OpenTelemetry 语义会降低负载均衡和跨团队运维成本。",
    insight: "协议升级包含破坏性变化，产品团队应在正式版前建立版本协商、兼容测试和回滚路径，并把用户确认与长任务状态从隐式会话迁到明确数据模型。",
    sourceUrl: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
    sourceLabel: "MCP 官方博客",
    sources: [
      { label: "MCP 官方 RC", url: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/" },
      { label: "MCP 官方草案", url: "https://modelcontextprotocol.io/specification/draft" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/20/ais-most-important-protocol-is-getting-a-little-bit-easier-to-use/" }
    ]
  },
  {
    slug: "natural-series-a",
    name: "Natural · Agentic Payments",
    summary: "Natural 完成 3000 万美元 Series A，要把账户、支付、卡、结算和可观测性做成 Agent 原生金融底座",
    image: "https://www.natural.com/assets/images/blog/natural-series-a/natural-series-a-hero.jpg",
    impact: "Agent 商务的竞争开始从代用户下单延伸到持有资金、身份授权、争议处理和跨轨结算；支付基础设施需要同时支持机器速度与人类责任边界。",
    insight: "支付 Agent 应把身份、额度、审批、审计和异常回滚设计为一等能力；越追求自动化交易量，越需要每笔动作都可解释、可冻结和可追索。",
    sourceUrl: "https://www.natural.com/blog/natural-series-a",
    sourceLabel: "Natural 官方公告",
    sources: [
      { label: "Natural 融资公告", url: "https://www.natural.com/blog/natural-series-a" },
      { label: "Natural 产品页", url: "https://www.natural.com/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/20/natural-raises-30m-to-reinvent-payments-for-ai-agents-and-take-on-stripe/" }
    ]
  },
  {
    slug: "adobe-project-indigo-ai-playground",
    name: "Adobe · Project Indigo AI Playground",
    summary: "Project Indigo 1.1 小范围测试拍摄现场的 AI 批评、重拍建议、对象编辑和风格化",
    image: "https://research.adobe.com/articles/playground/playground_files/playground-screenshot-lantern2.png",
    impact: "生成式编辑正在从独立创作工具进入相机快门旁边，把拍摄、判断、重拍和编辑压缩成一个即时闭环，也让真实感与内容来源标记更重要。",
    insight: "把 AI 放进专业流程时，应优先提供针对任务的按钮和建议，再保留自由提示；同时明确实验覆盖率、图像上传、训练用途与身份漂移等限制。",
    sourceUrl: "https://research.adobe.com/articles/playground/playground.html",
    sourceLabel: "Adobe Research 官方发布",
    sources: [
      { label: "Adobe Research", url: "https://research.adobe.com/articles/playground/playground.html" },
      { label: "Project Indigo", url: "https://research.adobe.com/articles/indigo/indigo.html" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/20/adobe-camera-apps-new-feature-will-critique-your-photos-using-ai/" }
    ]
  },
  {
    slug: "youtube-ai-content-policy",
    name: "YouTube · AI Content Policy",
    summary: "YouTube 细化不可变现的低质 AI 内容类型，并继续要求对逼真生成或重大修改内容进行披露",
    image: "https://www.youtube.com/img/desktop/yt_1200.png",
    impact: "内容平台正在把治理重心从是否使用 AI 转向原创价值、批量模板、误导风险和观看体验；低成本生成不再自动等于可分发或可变现。",
    insight: "AI 内容产品应从生成阶段保存来源与编辑记录，帮助创作者披露并避免模板化重复；增长模型也要围绕长期留存，而不是短期批量供给。",
    sourceUrl: "https://support.google.com/youtube/answer/1311392?hl=en",
    sourceLabel: "YouTube 官方变现政策",
    sources: [
      { label: "YouTube 变现政策", url: "https://support.google.com/youtube/answer/1311392?hl=en" },
      { label: "YouTube AI 披露规则", url: "https://support.google.com/youtube/answer/14328491?hl=en" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/20/youtube-clarifies-policies-around-ai-slop-and-upsetting-videos/" }
    ]
  },
  {
    slug: "hugging-face-security-incident",
    name: "Hugging Face · Security Incident",
    summary: "Hugging Face 披露自主 Agent 攻击利用恶意数据集取得代码执行并访问内部数据与服务凭证",
    image: "https://huggingface.co/blog/assets/security-incident-july-2026/thumbnail.png",
    impact: "模型与数据平台的攻击面已扩展到可执行数据处理流水线，攻击者也能用 Agent 规模化侦察和横向移动；AI 供应链安全必须覆盖数据、凭证和运行环境。",
    insight: "接收外部数据集的产品应默认隔离解析与模板执行、最小化工作节点凭证，并为密钥轮换和客户影响通知准备可演练的响应流程。",
    sourceUrl: "https://huggingface.co/blog/security-incident-july-2026",
    sourceLabel: "Hugging Face 官方披露",
    sources: [
      { label: "Hugging Face 官方披露", url: "https://huggingface.co/blog/security-incident-july-2026" },
      { label: "官方安全文档", url: "https://huggingface.co/docs/hub/security" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/20/hugging-face-confirms-breach-affected-internal-datasets-and-credentials-urges-users-to-take-action/" }
    ]
  }
];

const trends20260722 = [
  {
    title: "Agent 栈开始按任务价值拆分模型与计算资源",
    text: "Gemini 3.6 Flash、Flash-Lite 与 Flash Cyber 分别承担主任务、高吞吐和高风险安全工作，Azure 也把数据、EDA 与推理映射到不同 AMD 基础设施。模型路由和异构计算正在成为产品成本结构的一部分。"
  },
  {
    title: "可观察、可批准、可引用成为 Agent 的默认体验",
    text: "Lev8 给出实时来源，Rerun 展示每一步并暂停敏感动作，CartAI 用状态机和 Webhook 记录交易。结合本周 MCP 无状态化与 Hugging Face 安全事件，生产 Agent 正从能执行转向能被监督和追责。"
  },
  {
    title: "Physical AI 从单点机器人走向平台与存量设备改造",
    text: "Dana 统一真实机器的开发、测试、部署与治理，Gritt 把智能层挂到现有施工机械，Robostral Navigate 则降低导航传感器门槛。行业正用平台复用和软硬解耦加速落地。"
  }
];

const trends20260721 = [
  {
    title: "垂直 Agent 正把分散工具压缩成共享业务上下文",
    text: "Fuzzy AI、Nautis 与 Skippr AI 都不满足于单点生成，而是把研究、记忆、动作和团队状态集中到一个连续工作流。竞争焦点正在从功能数量转向上下文复用和任务完成率。"
  },
  {
    title: "AI 入口进入任务发生现场并保留人工批准",
    text: "Replay QA 在缺陷出现的浏览器会话中工作，Project Indigo 在拍摄现场给重拍建议，Nautis 在外发与支付前等待确认。缩短感知到行动的距离，同时保留接管点，成为新的体验范式。"
  },
  {
    title: "Agent 基础设施开始同时补齐协议、支付与安全",
    text: "MCP 无状态化降低连接运维成本，Natural 构建机器原生支付轨道，Hugging Face 事件则暴露数据流水线和凭证风险。Agent 从演示走向生产后，基础设施必须把速度、审计和责任一起设计。"
  }
];

const trends20260720 = [
  {
    title: "本地推理与本地记忆开始组合成个人 AI 底座",
    text: "BaseRT 把模型推理压到 Apple Silicon，Rewisp 把工作记忆留在本机，Panguard 也强调本地可控的安全层。端侧产品正从单一离线功能，走向推理、记忆和治理的完整栈。"
  },
  {
    title: "机器可读接口正在取代脆弱的界面自动化",
    text: "DoorDash dd-cli、Rewisp MCP 与 Panguard 的 Agent 平台接入都把动作和数据做成结构化合同。下一阶段的 Agent 分发入口，会更多围绕 CLI、MCP、Skill 和稳定 API 展开。"
  },
  {
    title: "垂直 Agent 从给建议转向受约束地完成任务",
    text: "Double、Black Lake Industrial Agents、GuideX 与 Roblox Build 分别进入求职、制造、公共服务和游戏创作闭环。壁垒正在转向领域数据、系统连接、人工审批和可验收结果。"
  }
];

const trends20260719 = [
  {
    title: "Agent 从助手升级为可验收的垂直生产线",
    text: "ClawTeams、Navos 2.0 与 Carebricks 都把价值锚定在电商、营销或医疗的完整结果，而不是一次回答。目标拆解、角色协作、例外升级和业务指标正在成为新产品骨架。"
  },
  {
    title: "开放权重与端侧压缩形成两条部署路线",
    text: "Inkling 强调开放、多模态与可定制，Bonsai 27B 强调低比特和消费设备部署。团队需要按数据敏感度、延迟、调优收益和总运维成本选择端、云或混合架构。"
  },
  {
    title: "数据质量与运行时治理进入同一基础设施层",
    text: "Context.dev、AnySearch 解决 Agent 获取可用上下文的问题，Draco 解决 Agent 执行动作时的安全与审计问题。可靠 Agent 栈正在同时覆盖输入证据、权限、行为和成本。"
  }
];

export const researchSources = [
  { label: "Product Hunt", url: "https://www.producthunt.com/topics/artificial-intelligence" },
  { label: "Reddit", url: "https://www.reddit.com/r/artificial/" },
  { label: "Hacker News", url: "https://news.ycombinator.com/newest" },
  { label: "GitHub Trending", url: "https://github.com/trending" },
  { label: "There’s An AI For That", url: "https://theresanaiforthat.com/" }
];

const trends20260718 = [
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
    slug: "2026-08-19",
    isoDate: "2026-08-19",
    dateLabel: "2026年8月19日",
    weekday: "星期三",
    oneSentence: "AI 产品正在把自然交互、可验证执行与分层治理组装成更可信的长期工作系统",
    products: products20260819,
    industryEvents: industryEvents20260819,
    trends: trends20260819
  },
  {
    slug: "2026-08-17",
    isoDate: "2026-08-17",
    dateLabel: "2026年8月17日",
    weekday: "星期一",
    oneSentence: "AI 产品正在把持久身份、受控执行与视频世界模型组装成可持续交付的新工作系统",
    products: products20260817,
    industryEvents: industryEvents20260817,
    trends: trends20260817
  },
  {
    slug: "2026-08-11",
    isoDate: "2026-08-11",
    dateLabel: "2026年8月11日",
    weekday: "星期二",
    oneSentence: "AI 产品正在把可复现评测、本地效率与长期算力资产组装成更可控的 Agent 基础设施",
    products: products20260811,
    industryEvents: industryEvents20260811,
    trends: trends20260811
  },
  {
    slug: "2026-08-07",
    isoDate: "2026-08-07",
    dateLabel: "2026年8月7日",
    weekday: "星期五",
    oneSentence: "AI 产品正在把权限、可归因价值与专业化开放模型装进用户已经工作的界面",
    products: products20260807,
    industryEvents: industryEvents20260807,
    trends: trends20260807
  },
  {
    slug: "2026-08-06",
    isoDate: "2026-08-06",
    dateLabel: "2026年8月6日",
    weekday: "星期四",
    oneSentence: "AI 产品正在把持久状态、机器支付与垂直数据组装成可执行、可治理的新基础设施",
    products: products20260806,
    industryEvents: industryEvents20260806,
    trends: trends20260806
  },
  {
    slug: "2026-08-04",
    isoDate: "2026-08-04",
    dateLabel: "2026年8月4日",
    weekday: "星期二",
    oneSentence: "AI 产品正在把可替换运行时、环境内执行与可审计结果组装成新一代 Agent 基础设施",
    products: products20260804,
    industryEvents: industryEvents20260804,
    trends: trends20260804
  },
  {
    slug: "2026-08-02",
    isoDate: "2026-08-02",
    dateLabel: "2026年8月2日",
    weekday: "星期日",
    oneSentence: "AI 产品正在把长程执行、多模态行动与可验证证据链组装成新的商业基础设施",
    products: products20260802,
    industryEvents: industryEvents20260802,
    trends: trends20260802
  },
  {
    slug: "2026-07-30",
    isoDate: "2026-07-30",
    dateLabel: "2026年7月30日",
    weekday: "星期四",
    oneSentence: "AI 产品正在把意图、记忆、模型路由与垂直反馈组装成可持续交付的 Agent 系统",
    products: products20260730,
    industryEvents: industryEvents20260730,
    trends: trends20260730
  },
  {
    slug: "2026-07-27",
    isoDate: "2026-07-27",
    dateLabel: "2026年7月27日",
    weekday: "星期一",
    oneSentence: "AI 产品正在把行动、审批、恢复与人群边界做成 Agent 的新基础体验",
    products: products20260727,
    industryEvents: industryEvents20260727,
    trends: trends20260727
  },
  {
    slug: "2026-07-24",
    isoDate: "2026-07-24",
    dateLabel: "2026年7月24日",
    weekday: "星期五",
    oneSentence: "AI 产品正在把共享上下文、异构算力与可验证执行组装成新的业务基础设施",
    products: products20260724,
    industryEvents: industryEvents20260724,
    trends: trends20260724
  },
  {
    slug: "2026-07-23",
    isoDate: "2026-07-23",
    dateLabel: "2026年7月23日",
    weekday: "星期四",
    oneSentence: "AI 产品正在把行为、授权、隔离与效果反馈组装成可长期运营的 Agent 系统",
    products: products20260723,
    industryEvents: industryEvents20260723,
    trends: trends20260723
  },
  {
    slug: "2026-07-22",
    isoDate: "2026-07-22",
    dateLabel: "2026年7月22日",
    weekday: "星期三",
    oneSentence: "AI 产品正在把专业 Agent、异构模型与可监督执行组合成新的生产栈",
    products: products20260722,
    industryEvents: industryEvents20260722,
    trends: trends20260722
  },
  {
    slug: "2026-07-21",
    isoDate: "2026-07-21",
    dateLabel: "2026年7月21日",
    weekday: "星期二",
    oneSentence: "AI 产品正在把共享上下文、现场执行与人类批准收进同一个闭环",
    products: products20260721,
    industryEvents: industryEvents20260721,
    trends: trends20260721
  },
  {
    slug: "2026-07-20",
    isoDate: "2026-07-20",
    dateLabel: "2026年7月20日",
    weekday: "星期一",
    oneSentence: "AI 产品正在从云端对话框，迁移到本地底座、机器接口与垂直执行闭环",
    products: products20260720,
    industryEvents: industryEvents20260720,
    trends: trends20260720
  },
  {
    slug: "2026-07-19",
    isoDate: "2026-07-19",
    dateLabel: "2026年7月19日",
    weekday: "星期日",
    oneSentence: "AI 产品正在从能回答问题，转向能在真实边界内交付完整结果",
    products: products20260719,
    industryEvents: industryEvents20260719,
    trends: trends20260719
  },
  {
    slug: "2026-07-18",
    isoDate: "2026-07-18",
    dateLabel: "2026年7月18日",
    weekday: "星期六",
    oneSentence: "AI 产品的竞争正在从单点能力，转向可持续交付结果的完整工作流",
    products: products20260718,
    industryEvents: industryEvents20260718,
    trends: trends20260718
  },
  {
    slug: "2026-07-17",
    isoDate: "2026-07-17",
    dateLabel: "2026年7月17日",
    weekday: "星期五",
    oneSentence: "AI 产品的竞争焦点，正在从生成质量转向任务完成率",
    products: products20260718.slice(0, 4),
    industryEvents: [],
    trends: []
  }
];

export const getLatestIssue = () => issues[0];
export const getIssue = (slug) => issues.find((issue) => issue.slug === slug);
