import Link from "next/link";

export default function InvitePage() {
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
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/invite" className="text-xl font-bold text-blue-600">
            Invite
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          You&apos;re Invited!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Join us by accepting the invitation below. Be part of something
          exciting and impactful.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Accept Invitation
        </button>
      </main>
    </div>
  );
}
