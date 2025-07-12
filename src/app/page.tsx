import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-gray-100 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-lg text-gray-600">
          Empowering your business with modern web and mobile solutions.
        </p>
      </main>
    </div>
  );
}
