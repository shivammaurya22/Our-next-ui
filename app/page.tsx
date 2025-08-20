"use client"

import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold text-white">ChatApp</div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-6 py-2 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Connect with
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            {" "}
            Everyone
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Experience seamless messaging with our modern chat platform. Connect with friends, family, and colleagues in
          real-time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-colors text-lg font-semibold"
          >
            Get Started Free
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
          >
            Sign In
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Messaging</h3>
            <p className="text-gray-400">Instant message delivery with read receipts and typing indicators.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Group Chats</h3>
            <p className="text-gray-400">Create groups and channels for team collaboration and community building.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Video & Voice Calls</h3>
            <p className="text-gray-400">High-quality voice and video calls with screen sharing capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
