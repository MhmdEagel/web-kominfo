import React from "react";
import NewsItem from "./NewsItem";

export default function NewsGrid({ news }) {
  console.log(news);
  return (
    <div className="mx-auto mt-6 grid max-w-fit grid-cols-1 gap-8 md:grid-cols-2">
      {news.map((item) => (
        <NewsItem
          title={item.title}
          img={item.urlToImage}
          url={item.url}
          desc={item.description}
        />
      ))}
    </div>
  );
}
