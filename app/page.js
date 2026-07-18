import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import IndustryEventCard from "@/components/IndustryEventCard";
import { getLatestIssue, researchSources } from "@/content/issues";

export default function Home() {
  const issue = getLatestIssue();

  return (
    <>
      <Header />
      <main>
        <section className="dailyLead wrap" aria-labelledby="daily-lead-title">
          <p className="dailyLeadDate">
            {issue.dateLabel}<span aria-hidden="true">·</span>{issue.weekday}
          </p>
          <h2 id="daily-lead-title">{issue.oneSentence}</h2>
        </section>

        <section className="moduleSection wrap" aria-labelledby="top-products-title">
          <header className="moduleHeader">
            <p className="caps">Product Intelligence</p>
            <h1 id="top-products-title">今日 AI Top 5 新产品观察</h1>
            <p>从定位、体验、增长与商业模式出发，拆解今天最值得研究的 AI 产品。</p>
          </header>
          <div className="reportList">
            {issue.products.slice(0, 5).map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index + 1} />
            ))}
          </div>
        </section>

        <section className="moduleSection wrap" aria-labelledby="industry-events-title">
          <header className="moduleHeader">
            <p className="caps">Industry Updates</p>
            <h1 id="industry-events-title">今日 AI 行业大事件</h1>
            <p>关注头部模型发布、关键产品迭代，以及正在改变行业竞争方式的体验重构。</p>
          </header>
          <div className="eventList">
            {issue.industryEvents.slice(0, 5).map((event) => (
              <IndustryEventCard key={event.slug} event={event} />
            ))}
          </div>
        </section>

        <section className="moduleSection trendsModule wrap" aria-labelledby="weekly-trends-title">
          <header className="moduleHeader">
            <p className="caps">Weekly Signals</p>
            <h1 id="weekly-trends-title">本周 AI 行业趋势</h1>
            <p>从最近一周的产品与模型变化中，提炼三个值得持续跟踪的方向。</p>
          </header>
          <div className="trendGrid">
            {issue.trends.map((trend, index) => (
              <article key={trend.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{trend.title}</h3>
                <p>{trend.text}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="researchNetwork wrap" aria-label="每日情报研究网络">
          <div>
            <p className="caps">Research Network</p>
            <p>官网与官方 X 核验事实，产品社区、开发者社区和开源趋势补充市场反馈。</p>
          </div>
          <nav aria-label="外部情报来源">
            {researchSources.map((source) => (
              <a key={source.label} href={source.url} target="_blank" rel="noreferrer">
                {source.label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </aside>

      </main>
      <footer className="wrap">
        <strong>AI Product Daily</strong>
        <p>为 AI 产品经理、设计师和创业者制作。</p>
      </footer>
    </>
  );
}
