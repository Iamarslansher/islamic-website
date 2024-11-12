// import React from "react";

// function IslamicIssues() {
//   return <div>ISLAMICISSUES</div>;
// }

// export default IslamicIssues;

import React from "react";

const issuesData = [
  {
    title: "Importance of Salah",
    solution:
      "Regular Salah fosters discipline, patience, and strengthens one's faith.",
    category: "Fiqh",
  },
  {
    title: "Etiquettes of Seeking Knowledge",
    solution:
      "Approach knowledge with humility, consistency, and a sincere intention for Allah.",
    category: "Spirituality",
  },
  {
    title: "Dealing with Anger",
    solution:
      "Follow the Sunnah of Prophet Muhammad (PBUH): seek refuge in Allah, change posture, and perform ablution.",
    category: "Character",
  },
  {
    title: "Charity in Islam",
    solution:
      "Give generously from your means, for charity is a means of purifying wealth and helping the needy.",
    category: "Fiqh",
  },
  // More issues can be added here
];

const IslamicIssues = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Islamic Issues & Solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issuesData.map((issue, index) => (
          <div
            key={index}
            className="card shadow-lg rounded-lg p-6 bg-white border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <h3 className="card-title text-2xl font-semibold mb-2 text-indigo-700">
              {issue.title}
            </h3>
            <p className="card-category text-sm text-gray-600 mb-4 font-semibold">
              {issue.category}
            </p>
            <p className="card-solution text-gray-700">{issue.solution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslamicIssues;
