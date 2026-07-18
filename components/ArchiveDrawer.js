"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ArchiveDrawer({ items }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeDrawer = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <button ref={triggerRef} className="archiveTrigger" type="button" onClick={() => setOpen(true)}>
        Archive
      </button>

      {open ? <button className="archiveOverlay" type="button" aria-label="点击遮罩关闭历史情报" onClick={closeDrawer} /> : null}

      <aside className={`archiveDrawer ${open ? "isOpen" : ""}`} role="dialog" aria-modal="true" aria-label="历史情报" inert={!open}>
        <div className="archiveDrawerHeader">
          <div>
            <p className="caps">Daily Archive</p>
            <h2>历史情报</h2>
          </div>
          <button ref={closeRef} type="button" onClick={closeDrawer} aria-label="关闭历史情报">×</button>
        </div>

        <p className="archiveDrawerIntro">按日期回看每天的产品观察、行业事件与趋势信号。</p>

        <div className="archiveDayList">
          {items.map((item) => (
            <Link href={`/daily/${item.slug}`} key={item.slug} onClick={closeDrawer}>
              <time dateTime={item.isoDate}>{item.dateLabel}<span>·{item.weekday}</span></time>
              <p>{item.oneSentence}</p>
              <small>{item.productCount} products</small>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
