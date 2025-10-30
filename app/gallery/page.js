// We must use "use client" for filtering state
"use client";

import { useState, useEffect } from "react";
import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

// 1. This query gets EVERYTHING: all portfolios AND all categories
const GET_GALLERY_DATA = gql`
  query GetGalleryData {
    portfolioCategories {
      nodes {
        id
        name
        slug
      }
    }
    portfolios {
      nodes {
        id
        title
        slug
        portfolioCategories {
          nodes {
            id
            slug
          }
        }
        imageGallery(first: 1) {
          nodes {
            id
            guid
          }
        }
      }
    }
  }
`;

export default function GalleryPage() {
  // 2. We set up "state" to hold our data and track the filter
  const [portfolios, setPortfolios] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // 3. We fetch the data when the component loads
  useEffect(() => {
    async function fetchData() {
      const { data } = await getClient().query({ 
        query: GET_GALLERY_DATA,
        fetchPolicy: "no-cache" 
      });
      setPortfolios(data.portfolios.nodes);
      setCategories(data.portfolioCategories.nodes);
      setLoading(false);
    }
    fetchData();
  }, []);

  // 4. This is our filter logic
  const filteredPortfolios =
    selectedCategory === "all"
      ? portfolios
      : portfolios.filter((portfolio) =>
          portfolio.portfolioCategories.nodes.some(
            (cat) => cat.slug === selectedCategory
          )
        );

  if (loading) {
    return <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-900 text-white"><h1 className="text-3xl">Loading Gallery...</h1></main>;
  }

  // 5. We render the page
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-white text-black">
      <h1 className="text-5xl font-bold mb-4">Gallery</h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`py-2 px-4 rounded-full font-semibold text-sm md:text-base whitespace-nowrap ${selectedCategory === 'all' ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`py-2 px-4 rounded-full font-semibold text-sm md:text-base whitespace-nowrap ${selectedCategory === cat.slug ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPortfolios.map((portfolio) => (
          <Link key={portfolio.id} href={`/portfolio/${portfolio.slug}`} className="group cursor-pointer">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                // Use the first image of the gallery as the thumbnail
                src={portfolio.imageGallery.nodes[0].guid}
                alt={portfolio.title}
                fill
                className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold mt-2 group-hover:text-gray-600 transition-colors">{portfolio.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}