import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gray-900">
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/30" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl font-light">
              Capturing Stories Through Our Lens
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome to <span className="font-semibold text-black">Lens & Light Studio</span>, 
                where every photograph tells a unique story. Founded with a passion for capturing 
                lifes most precious moments, we specialize in creating timeless imagery that 
                resonates with emotion and authenticity.
              </p>
              <p>
                Our journey began with a simple belief: photography is more than just taking pictures—
                its about preserving memories, celebrating milestones, and creating art that speaks 
                to the soul. With years of experience and a keen eye for detail, weve had the privilege 
                of documenting countless stories.
              </p>
              <p>
                From intimate portraits to grand celebrations, we approach every project with dedication, 
                creativity, and a commitment to excellence. We believe in building genuine connections 
                with our clients, understanding their vision, and bringing it to life through our lens.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              {/* Replace the div above with an actual image when available:
              <Image
                src="/path-to-about-image.jpg"
                alt="About Lens & Light Studio"
                fill
                className="object-cover"
              />
              */}
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wedding Photography</h3>
              <p className="text-gray-600">
                Capturing the magic and emotion of your special day with artistic elegance and attention to every detail.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Portrait Photography</h3>
              <p className="text-gray-600">
                Professional portraits that capture your unique personality and essence in stunning detail.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial Photography</h3>
              <p className="text-gray-600">
                High-quality imagery for brands, products, and events that make a lasting impression.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-gray-600">We start by understanding your vision, needs, and preferences.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-gray-600">Careful planning and preparation to ensure everything runs smoothly.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Shooting</h3>
                <p className="text-gray-600">Professional photography session with creative direction and expertise.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Delivery</h3>
                <p className="text-gray-600">Expertly edited photos delivered in your preferred format.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lets create something beautiful together. Get in touch to discuss your photography needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white font-semibold py-4 px-10 text-lg tracking-wide uppercase transition-all duration-300 hover:bg-gray-800 hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
