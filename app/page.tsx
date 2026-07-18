import { ArrowDown, Bookmark, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products, trends } from "@/data/daily";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="today">
        <div className="hero-kicker">DAILY AI PRODUCT INTELLIGENCE</div>
        <h1>每天发现真正<br />值得研究的 AI 产品</h1>
        <p className="hero-copy">
          从用户需求、产品体验、增长与商业模式出发，
          每天精选 10–15 个 AI 产品与创业案例。
        </p>

        <div className="hero-date">
          <span>2026年7月18日</span>
          <span>星期六</span>
        </div>

        <a className="scroll-cue" href="#feed">
          阅读今日情报 <ArrowDown size={16} />
        </a>
      </section>

      <section className="today-summary">
        <div>
          <span className="section-label">今日一句话</span>
          <h2>AI 正从“展示能力”，转向“替用户完成一件真实的事”。</h2>
        </div>
        <button className="save-button"><Bookmark size={17} /> 收藏今日</button>
      </section>

      <section className="feed" id="feed">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="section-label">PRODUCT OF THE DAY</span>
          <h2>Shared Memory</h2>
          <p>让多个 AI 共享同一个项目，而不是共享一堆聊天记录。</p>
        </div>

        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=90"
            alt="团队协作与共享项目记忆"
          />
        </div>

        <div className="feature-grid">
          <div>
            <h3>核心场景</h3>
            <p>团队在 ChatGPT、Claude、Cursor 等工具间切换时，不再重复解释项目目标、历史决策与当前进度。</p>
          </div>
          <div>
            <h3>为什么每天打开</h3>
            <p>记忆持续积累，工具会越来越理解用户。每一次使用都在降低下一次使用成本。</p>
          </div>
          <div>
            <h3>关键交互</h3>
            <p>记忆在需要时自然出现；用户能查看来源、修正事实，并控制哪些工具可以读取。</p>
          </div>
          <div>
            <h3>商业模式</h3>
            <p>个人订阅叠加团队协作、权限、审计与私有部署，天然具备从个人到企业的升级路径。</p>
          </div>
        </div>

        <div className="takeaway">
          <Sparkles size={20} />
          <p>
            <strong>对 ChatGPT / Codex 的启发：</strong>
            项目状态、用户偏好与历史决策，比聊天记录本身更能形成长期留存。
          </p>
        </div>
      </section>

      <section className="trends">
        <div className="section-heading">
          <span className="section-label">WEEKLY SIGNALS</span>
          <h2>本周产品趋势</h2>
        </div>
        <div className="trend-list">
          {trends.map((trend, i) => (
            <article key={trend.title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{trend.title}</h3>
                <p>{trend.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="best-ux">
        <span className="section-label">BEST UX OF THE DAY</span>
        <div className="best-ux-grid">
          <div>
            <h2>共享“项目记忆”，而不是共享“聊天记录”</h2>
            <p>
              这是今天最值得研究的体验转变。用户真正需要保留的，
              是项目、文件、偏好与历史决策，而不是几十页无法复用的对话。
            </p>
          </div>
          <div className="ux-score">
            <span>体验评分</span>
            <strong>4.8</strong>
            <small>/ 5.0</small>
          </div>
        </div>
      </section>

      <section className="archive" id="archive">
        <div className="section-heading">
          <span className="section-label">ARCHIVE</span>
          <h2>历史情报</h2>
        </div>
        <div className="archive-list">
          {["7月18日", "7月17日", "7月16日", "7月15日"].map((date, i) => (
            <a href="#" key={date}>
              <span>{date}</span>
              <small>{10 + i} products</small>
            </a>
          ))}
        </div>
      </section>

      <footer id="about">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>AI Product Daily</span>
        </div>
        <p>为 AI 产品经理、设计师和创业者制作的每日产品研究简报。</p>
      </footer>
    </main>
  );
}
