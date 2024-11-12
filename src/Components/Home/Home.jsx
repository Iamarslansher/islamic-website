import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">القرآن الكريم</div>
          <div className="space-x-6">
            <Link className="hover:text-green-200">QURAN-AL-QAREM</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              Explore the Divine Words of The Holy Quran
            </h1>

            <p className="text-gray-600 text-lg">
              Embark on a spiritual journey through the teachings of Islam and
              discover the timeless wisdom of the Holy Quran. Learn, reflect,
              and grow in your faith.
            </p>

            {/* Quranic Verse Box */}
            <div className="bg-green-50 border-l-4 border-green-800 p-6 rounded-r-lg shadow-md">
              <p className="text-2xl font-bold text-green-800 mb-2 font-arabic">
                وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا
                لَعَلَّكُمْ تُرْحَمُونَ
              </p>
              <p className="text-lg text-gray-700 font-urdu mt-3">
                اور جب قرآن پڑھا جائے تو اسے غور سے سنو اور خاموش رہو تاکہ تم پر
                رحم کیا جائے
              </p>
              <p className="text-sm text-gray-600 mt-2">
                - Surah Al-A'raf, Verse 204
              </p>
            </div>

            <Link
              to="/dashboard"
              className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started →
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-800 rounded-full opacity-10 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3"
              alt="Holy Quran"
              className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">
            © 2024 Islamic Learning Platform. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-green-200">
              About
            </a>
            <a href="#" className="hover:text-green-200">
              Contact
            </a>
            <a href="#" className="hover:text-green-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
