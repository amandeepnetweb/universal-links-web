import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link href="/about-us" className="text-xl font-bold text-blue-600">
            About Us
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a team of passionate developers dedicated to building
          high-quality web and mobile applications. Our mission is to simplify
          technology for businesses and individuals.
        </p>
      </main>
    </div>
  );
}
