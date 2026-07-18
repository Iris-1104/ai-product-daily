# AI Product Daily — Production Starter

这是一个可直接部署到 Vercel 的 Next.js 16 JavaScript 项目。

## 稳定性设计

- 使用 JavaScript，不包含 `tsconfig.json`，不会触发 TypeScript 依赖检测问题。
- 仅依赖 `next`、`react`、`react-dom`。
- 固定版本，减少部署时的依赖漂移。
- 包含首页、日期归档页、404、SEO metadata、sitemap、robots 和健康检查。
- Node.js 最低版本为 20.9。

## 部署

将压缩包内的文件直接上传到 GitHub 仓库根目录，再由 Vercel 部署。

Vercel 设置：

- Framework Preset：Next.js
- Root Directory：留空
- Build Command：默认
- Install Command：默认
- Node.js Version：20.x 或更高

## 每日更新

编辑 `content/issues.js`，复制一个 issue 对象，更新日期、产品信息和原文链接，然后放到 `issues` 数组最前面。

## 环境变量

部署成功后设置：

`NEXT_PUBLIC_SITE_URL=https://你的域名`

## 健康检查

访问 `/api/health`。
