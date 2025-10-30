'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LatestWorkGrid({ portfolios }) {
  if (!portfolios || portfolios.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
      {portfolios.map((portfolio, index) => (
        <motion.div
          key={portfolio.id}
          // Stagger the animation of each item
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative h-64 md:h-80 w-full overflow-hidden rounded-lg"
        >
          <Link href={`/portfolio/${portfolio.slug}`}>
            <Image
              src={portfolio.imageGallery.nodes[0].guid}
              alt={portfolio.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent" />
            
            {/* Title */}
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              {portfolio.title}
            </h3>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
