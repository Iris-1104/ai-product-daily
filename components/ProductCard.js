import MediaGallery from "@/components/MediaGallery";
import SourceLinks from "@/components/SourceLinks";

export default function ProductCard({ product, index }) {
  const number = String(index).padStart(2, "0");
  const dimensions = [
    { label: "杀手锏功能", value: product.killerFeature },
    { label: "关键产品体验", value: product.experience },
    { label: "增长策略", value: product.growth },
    { label: "商业模式", value: product.businessModel }
  ];

  const renderDimension = (item) => (
    <section key={item.label}>
      <h4>{item.label}</h4>
      <p>{item.value}</p>
    </section>
  );

  return (
    <article className="productReport" id={`product-${product.slug}`}>
      <header className="reportHeader">
        <div className="reportEyebrow">
          <span>{number}</span>
          <span>{product.tag}</span>
        </div>
        <h2>{product.name}</h2>
        <h3>{product.tagline}</h3>
        <div className="quickContext">
          <p>{product.positioning}</p>
          <p>{product.audience.join(" · ")}</p>
        </div>
      </header>

      <MediaGallery media={product} alt={`${product.name} 产品视觉`} className="reportMedia" />

      <div className="dimensionGrid">
        {dimensions.map(renderDimension)}
      </div>

      <section className="founderInsight">
        <p className="caps">对 AI 创业者 / AI 产品设计的启发</p>
        <p>{product.insight}</p>
      </section>

      <SourceLinks item={product} />
    </article>
  );
}
