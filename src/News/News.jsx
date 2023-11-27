import React, { useState, useEffect } from "react";

import NewsGrid from "./NewsGrid";

import { ring } from "ldrs";

ring.register();

export default function News() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://newsapi.org/v2/everything?q=coding&pageSize=4&page=4&apiKey=cc6606fc3e454b67bdcf95d561b9b002",
      )
        .then((res) => res.json())
        .then((data) => setNews(data.articles));
    }, 500);
  }, []);
  return (
    <section className="mb-32 mt-16 md:mt-32">
      <div className="font-bold">
        <h2 className="text-center text-blue-500 sm:text-2xl">
          BERITA INTERNASIONAL
        </h2>
        <p className="text-center text-sm font-thin tracking-wider sm:text-base">
          TEKNOLOGI & INFORMASI
        </p>
      </div>
      {news ? (
        <NewsGrid news={news} />
      ) : (
        <div className="mx-auto mt-6 w-fit">
          <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2"
            color="blue"
          ></l-ring>
        </div>
      )}
    </section>
  );
}
