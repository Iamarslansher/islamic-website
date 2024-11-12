import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Dashboard = () => {
  const [seklten, setSeklten] = useState(false);

  setTimeout(() => {
    setSeklten(true);
  }, 1000);

  return (
    <div className="flex flex-wrap justify-center">
      {seklten ? (
        <div className="bg-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Discover the Beauty of Islam
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Daily Quran Verses
                </h3>
                <p className="text-gray-600">
                  Receive daily verses from the Holy Quran with detailed
                  translations, tafsir, and practical applications for modern
                  life.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Prayer Times & Qibla
                </h3>
                <p className="text-gray-600">
                  Get accurate prayer times for your location, Qibla direction,
                  and helpful reminders for your daily spiritual practices.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🕌</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Islamic Studies
                </h3>
                <p className="text-gray-600">
                  Access comprehensive courses on Fiqh, Hadith, Seerah, and
                  Islamic history from qualified scholars and educators.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤲</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Dua Collection
                </h3>
                <p className="text-gray-600">
                  Explore an extensive collection of authentic duas for various
                  occasions, with audio recitations and memorization tools.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Community Connect
                </h3>
                <p className="text-gray-600">
                  Join discussion forums, attend virtual events, and connect
                  with fellow Muslims worldwide for support and knowledge
                  sharing.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Islamic Calendar
                </h3>
                <p className="text-gray-600">
                  Track Islamic dates, holidays, and important events with our
                  Hijri calendar, including Ramadan and Eid notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 justify-center align-middle">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={200} width={450} count={1} duration={3} />
          </SkeletonTheme>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={200} width={300} count={1} duration={3} />
          </SkeletonTheme>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={200} width={450} count={1} duration={3} />
          </SkeletonTheme>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
