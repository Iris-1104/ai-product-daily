export type ProductItem = {
  id: string;
  tag: string;
  name: string;
  title: string;
  image: string;
  summary: string;
  audience: string[];
  insight: string;
  source: string;
};

export const products: ProductItem[] = [
  {
    id: "brand-studio",
    tag: "AI 创作",
    name: "Brand Studio",
    title: "一句话生成完整品牌视觉，而不是只生成一张图",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    summary: "面向创业者、运营和小团队，把品牌命名、视觉方向、社交媒体封面与基础物料整合成一次完整交付。真正的卖点不是模型更强，而是把分散的设计步骤压缩成一个可复用项目。",
    audience: ["创业者", "品牌设计师", "内容创作者"],
    insight: "用户购买的是“从想法到可发布资产”的完整结果。AI 创作产品的竞争会从单次生成，转向项目一致性、可编辑性和复用。"
  },
  {
    id: "video-flow",
    tag: "AI 视频",
    name: "Video Flow",
    title: "从脚本到成片，让普通人五分钟完成第一条视频",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=85",
    summary: "它把镜头拆分、配音、字幕、音乐和转场放进同一流程，体验更像轻量版 CapCut，而不是专业生成工具。产品价值在于帮助用户更快发布，而不是给出更多参数。",
    audience: ["短视频创作者", "市场运营", "小商家"],
    insight: "决定留存的关键是“第一次发布成功率”。最有效的 Onboarding 不是功能教学，而是让用户快速完成并分享第一件作品。"
  },
  {
    id: "shared-memory",
    tag: "AI Workspace",
    name: "Shared Memory",
    title: "让 ChatGPT、Claude 与编码工具共享项目背景",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    summary: "它帮助产品经理、设计师和开发者减少重复解释，让项目目标、历史决策和当前状态在多个 AI 工具之间保持一致。产品重点不是保存聊天记录，而是维护可持续更新的项目记忆。",
    audience: ["产品经理", "开发者", "创业团队"],
    insight: "AI 工作台的长期价值来自“越用越懂项目”。真正值得沉淀的是状态、决策和偏好，而不是海量对话。"
  },
  {
    id: "shopping-guide",
    tag: "AI Shopping",
    name: "Shopping Guide",
    title: "从商品搜索升级为真正的购买决策助手",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
    summary: "用户只需描述预算、场景和偏好，产品会整理候选商品、提炼评价分歧并解释推荐理由。它减少的不是搜索时间，而是比较与决策疲劳。",
    audience: ["普通消费者", "高频网购用户"],
    insight: "Shopping Agent 的核心不是推荐更多商品，而是帮助用户更有信心地做决定。可解释推荐和真实评价摘要会比无限商品流更重要。"
  },
  {
    id: "coding-qa",
    tag: "AI Coding",
    name: "Delivery QA",
    title: "AI 写完代码后，继续运行、测试并修复",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",
    summary: "面向独立开发者和产品团队，把生成代码、启动应用、模拟用户操作与错误修复串成闭环。用户真正愿意付费的不是代码字符数，而是“这个功能能不能直接用”。",
    audience: ["独立开发者", "产品团队", "创业公司"],
    insight: "Coding Agent 应从助手升级成负责交付的协作者。产品界面需要持续显示当前状态、风险和下一步，而不是只展示对话。"
  },
  {
    id: "voice-companion",
    tag: "AI Voice",
    name: "Voice Companion",
    title: "能被打断、会停顿、理解语气的实时语音助手",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1600&q=85",
    summary: "新一代语音产品开始围绕连续对话、情绪感知和自然轮次设计体验，更适合陪伴、通勤和轻任务场景。它们不再要求用户先学会如何对 AI 下指令。",
    audience: ["普通用户", "车载用户", "语言学习者"],
    insight: "语音体验的突破点不是回答更快，而是让用户感觉不需要适应机器。打断、沉默和语气反馈都是核心产品能力。"
  }
];

export const trends = [
  {
    title: "AI 开始交付完整结果",
    text: "用户不再满足于“生成一段内容”，而是希望 AI 完成从输入、处理、校验到发布的完整任务。"
  },
  {
    title: "Workspace 替代单一聊天框",
    text: "项目、文件、记忆、任务状态和协作角色正在成为新一代 AI 产品的主界面。"
  },
  {
    title: "不用学习，成为最强体验优势",
    text: "优秀产品越来越少讲模型和参数，而是直接向用户展示：你现在能完成什么。"
  }
];
