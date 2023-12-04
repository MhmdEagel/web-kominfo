import React from "react";

import NullNewsItem from "./NullNewsItem";

export default function NewsItem({ title, img, label, desc }) {
  return (
    <div
      className="mx-auto flex flex-col overflow-hidden rounded-lg pb-4 shadow-lg transition-all hover:scale-105 cursor-pointer"
      target="_blank"
    >
      {img != null ? (
        <img src={img} alt="news image" className="h-[150px] w-[340px]" />
      ) : (
        <NullNewsItem />
      )}
      <h3 className="ml-3 mt-4 max-w-xs self-start text-base font-bold">
        {title}
      </h3>
      <p className="ml-3 mt-4 max-w-xs">{desc}</p>
      <p className="ml-3 mt-3 w-fit rounded-lg bg-orange-200 text-orange-500 py-1 px-2 text-sm">
        {label.toUpperCase()}
      </p>
      
    </div>
  );
}
