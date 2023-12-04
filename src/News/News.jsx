import React, { useState, useEffect } from "react";

import NewsGrid from "./NewsGrid";
import { newsData } from "../data";

import { ring } from "ldrs";

ring.register();

export default function News() {
  const [news, setNews] = useState(newsData());

  return (
    <section className="mb-32 mt-16 md:mt-32">
      <div className="font-bold">
        <h2 className="text-center text-blue-500 sm:text-2xl">
          BERITA
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
