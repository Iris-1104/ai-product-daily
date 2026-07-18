# AI Product Daily

一个可直接部署到 Vercel 的 Next.js 网站，视觉参考 Claude 的温暖留白、衬线标题与单列阅读体验。

## 本地运行

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`

## 部署到 Vercel

1. 将项目上传到 GitHub。
2. 登录 Vercel，点击 **Add New → Project**。
3. 导入该 GitHub 仓库。
4. 保持默认 Next.js 配置，点击 **Deploy**。

## 每日更新内容

编辑：

```text
data/daily.ts
```

产品卡片字段包括：

- tag
- name
- title
- image
- summary
- audience
- insight
- source

## 下一阶段建议

- 接入 CMS（Notion / Sanity / Supabase）
- 将每天的自动化情报写入数据库
- 增加日期路由 `/daily/2026-07-18`
- 增加全文搜索、标签筛选、收藏和 RSS
- 为真实来源补充原文 URL 与官方截图
