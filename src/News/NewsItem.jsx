import React from "react";

import NullNewsItem from "./NullNewsItem";

export default function NewsItem({ title, img, url }) {
  return (
    <div
      className="mx-auto flex max-w-fit flex-col items-center justify-center overflow-hidden rounded-lg pb-4 shadow-lg transition-all hover:scale-105"
      target="_blank"
    >
      {img != null ? (
        <img src={img} alt="news image" className="h-[150px] w-[340px]" />
      ) : (
        <NullNewsItem />
      )}
      <h3 className="mx-auto mt-4 max-w-xs text-sm font-bold">{title}</h3>
      <a
        href={url}
        target="_blank"
        className="ml-3 mt-4 self-start rounded-lg bg-blue-500 p-2 text-sm text-white font-bold"
      >
        BACA SELENGKAPNYA
      </a>
    </div>
  );
}
