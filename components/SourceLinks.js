export default function SourceLinks({ item }) {
  const sources = item.sources?.length
    ? item.sources
    : [{ label: item.sourceLabel, url: item.sourceUrl }].filter((source) => source.label && source.url);

  if (!sources.length) return null;

  return (
    <div className="sourceLinks" aria-label="信息来源">
      {sources.map((source) => (
        <a key={`${source.label}-${source.url}`} href={source.url} target="_blank" rel="noreferrer">
          {source.label}
        </a>
      ))}
    </div>
  );
}
