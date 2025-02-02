import React from "react";

const trends = [
  {
    id: 1,
    title: "【MV】FRUITS ZIPPER「かがみ」",
    videoUrl: "https://www.youtube.com/embed/IU3AvcU4mjs",
  },
  {
    id: 2,
    title: "【MV】FRUITS ZIPPER「フルーツバスケット」",
    videoUrl: "https://www.youtube.com/embed/bRRPqGRguKo",
  },
  {
    id: 3,
    title: "【MV】FRUITS ZIPPER「NEW KAWAII」",
    videoUrl: "https://www.youtube.com/embed/7Am9TCA3WrA",
  },
  {
    id: 4,
    title: "キス・ミー・パティシエChoreography Video",
    videoUrl: "https://www.youtube.com/embed/JqO-ANgYD70",
  },
];

const Trends = () => {
  return (
    <div className="min-h-screen bg-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-pink-600">🎀 トレンド一覧 🎀</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trends.map((trend) => (
          <div key={trend.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-4 border-pink-300">
            <h2 className="text-lg font-semibold mb-2 text-pink-700 text-center"> {trend.title} </h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full rounded-lg border border-pink-400"
                src={trend.videoUrl}
                title={trend.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
