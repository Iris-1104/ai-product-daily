"use client";

import { useState } from "react";

export default function MediaGallery({ media, alt, className = "" }) {
  const images = media.images?.length ? media.images : [media.image].filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);

  if (media.videoEmbedUrl) {
    return (
      <div className={`mediaGallery ${className}`}>
        <iframe
          src={media.videoEmbedUrl}
          title={`${alt}视频`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (media.videoUrl) {
    return (
      <div className={`mediaGallery ${className}`}>
        <video controls playsInline poster={media.image} preload="metadata">
          <source src={media.videoUrl} type={media.videoType || "video/mp4"} />
          您的浏览器暂不支持视频播放。
        </video>
      </div>
    );
  }

  const showControls = images.length > 1;
  const previous = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const next = () => setActiveIndex((index) => (index + 1) % images.length);

  return (
    <div className={`mediaGallery ${className}`}>
      <img src={images[activeIndex]} alt={`${alt}，图片 ${activeIndex + 1}`} loading="lazy" />
      {showControls ? (
        <div className="galleryControls">
          <button type="button" onClick={previous} aria-label="查看上一张图片">←</button>
          <span>{activeIndex + 1} / {images.length}</span>
          <button type="button" onClick={next} aria-label="查看下一张图片">→</button>
        </div>
      ) : null}
    </div>
  );
}
