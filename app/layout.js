import "./globals.css";
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: { default: "AI Product Daily", template: "%s · AI Product Daily" },
  description: "每天精选值得研究的 AI 产品、用户场景、产品体验与增长案例。"
};
export default function RootLayout({ children }) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
