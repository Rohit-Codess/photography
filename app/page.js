import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import LatestWorkGrid from "./components/LatestWorkGrid";

// 1. A new, more powerful query
// We get ALL portfolios for the slider
// We also get the LATEST 6 portfolios for the grid
const GET_HOME_DATA = gql`
  query GetHomeData {
    allPortfolios: portfolios(first: 10) {
      nodes {
        id
        title
        slug
        imageGallery(first: 1) {
          nodes {
            id
            guid
          }
        }
      }
    }
    latestPortfolios: portfolios(first: 6, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        slug
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

export default async function Home() {
  // 2. Fetch the data
  const { data } = await getClient().query({
    query: GET_HOME_DATA,
    fetchPolicy: "no-cache"
  });

  const allPortfolios = data.allPortfolios.nodes;
  const latestPortfolios = data.latestPortfolios.nodes;

  // 3. Render the new homepage layout
  return (
    <div className="flex min-h-screen flex-col items-center bg-white text-black">
      
      {/* Hero Slider Section */}
      <HeroSlider portfolios={allPortfolios} />

      {/* Main Content Section */}
      <section className="w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-light uppercase tracking-wider mb-6">
              Capturing Lifes
              <br />
              Unforgettable Moments
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Welcome to our portfolio. Explore our latest work and discover new stories through powerful imagery.
            </p>
          </div>
          
          {/* Spacer / Text Content on smaller screens */}
          <div className="hidden md:block">
             {/* This space is empty on desktop, matching your design */}
          </div>
        </div>

        {/* Latest Work Grid */}
        <LatestWorkGrid portfolios={latestPortfolios} />

        {/* "View All Galleries" Button */}
        <div className="text-center mt-16">
          <Link href="/gallery" className="inline-block border border-black text-black font-semibold py-3 px-8 text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-black hover:text-white">
            View All Galleries
          </Link>
        </div>
      </section>

    </div>
  );
}
