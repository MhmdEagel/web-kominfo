import React from "react";
import NewsItem from "./NewsItem";

export default function NewsGrid({ news }) {
  console.log(news);
  return (
    <div className="mx-auto mt-6 grid max-w-fit grid-cols-1 gap-8 md:grid-cols-3 md:justify-center items-center">
      {news.map((item) => (
        <NewsItem
          key={item.id}
          title={item.title}
          img={item.imageUrl}
          label={item.label}
          desc={item.desc}
        />
      ))}
    </div>
  );
}
