import { ArrowUpRight } from "lucide-react";
import type { ProductItem } from "@/data/daily";

export function ProductCard({ item }: { item: ProductItem }) {
  return (
    <article className="product-card" id={item.id}>
      <div className="product-card__meta">
        <span className="tag">{item.tag}</span>
        <span className="index">Product review</span>
      </div>

      <h2>{item.title}</h2>
      <p className="product-name">{item.name}</p>

      <div className="image-wrap">
        <img src={item.image} alt={`${item.name} 产品视觉`} />
      </div>

      <div className="content-grid">
        <div>
          <p className="eyebrow">这是什么</p>
          <p>{item.summary}</p>
        </div>
        <div>
          <p className="eyebrow">适合谁</p>
          <div className="audiences">
            {item.audience.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="insight">
        <p className="eyebrow">产品启发</p>
        <p>{item.insight}</p>
      </div>

      <a className="source-link" href="#" aria-label={`查看 ${item.name} 原文`}>
        查看原文 <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
