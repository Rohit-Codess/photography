import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

// Query to get a single portfolio by slug with ALL images
const GET_PORTFOLIO_BY_SLUG = gql`
  query GetPortfolioBySlug($slug: ID!) {
    portfolio(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      portfolioCategories {
        nodes {
          id
          name
          slug
        }
      }
      imageGallery {
        nodes {
          id
          guid
          title
          altText
        }
      }
    }
  }
`;

export default async function PortfolioDetailPage({ params }) {
  // Get the slug from the URL (await params in Next.js 15+)
  const { slug } = await params;

  // Fetch the portfolio data
  const { data } = await getClient().query({
    query: GET_PORTFOLIO_BY_SLUG,
    variables: { slug },
    fetchPolicy: "no-cache"
  });

  const portfolio = data.portfolio;

  // Handle case where portfolio is not found
  if (!portfolio) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
          <Link href="/gallery" className="text-blue-600 hover:underline">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Back Button */}
        <Link 
          href="/gallery" 
          className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>

        {/* Portfolio Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{portfolio.title}</h1>

        {/* Categories */}
        {portfolio.portfolioCategories.nodes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {portfolio.portfolioCategories.nodes.map((category) => (
              <span
                key={category.id}
                className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        {/* Portfolio Description (if exists) */}
        {portfolio.content && (
          <div 
            className="prose max-w-3xl text-gray-600 mb-12"
            dangerouslySetInnerHTML={{ __html: portfolio.content }}
          />
        )}
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.imageGallery.nodes.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? 'md:col-span-2 h-[500px]' : 'h-[400px]'
              }`}
            >
              <Image
                src={image.guid}
                alt={image.altText || image.title || portfolio.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation to other portfolios could go here */}
        <div className="text-center mt-16">
          <Link 
            href="/gallery" 
            className="inline-block border border-black text-black font-semibold py-3 px-8 text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-black hover:text-white"
          >
            View More Portfolios
          </Link>
        </div>
      </div>
    </div>
  );
}
