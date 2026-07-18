import MediaGallery from "@/components/MediaGallery";
import SourceLinks from "@/components/SourceLinks";

export default function IndustryEventCard({ event }) {
  return (
    <article className="eventReport">
      <MediaGallery media={event} alt={`${event.name} 发布相关视觉`} className="eventMedia" />
      <div className="eventContent">
        <header className="eventHeader">
          <h2>{event.name}</h2>
          <h3>{event.summary}</h3>
        </header>

        <div className="eventAnalysis">
          <section>
            <h4>行业影响</h4>
            <p>{event.impact}</p>
          </section>
          <section>
            <h4>产品启示</h4>
            <p>{event.insight}</p>
          </section>
        </div>

        <SourceLinks item={event} />
      </div>
    </article>
  );
}
