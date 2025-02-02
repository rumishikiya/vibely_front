import React, { useState } from "react";

const dummySpotifyResults = [
  {
    id: 1,
    title: "かがみ",
    artist: "FRUITS ZIPPER",
    duration: "04:29",
    color: "bg-pink-500",
  },
  {
    id: 2,
    title: "フルーツバスケット",
    artist: "FRUITS ZIPPER",
    duration: "04:29",
    color: "bg-pink-400",
  },
  {
    id: 3,
    title: "NEW KAWAII",
    artist: "FRUITS ZIPPER",
    duration: "04:33",
    color: "bg-pink-300",
  },
];

const dummyYouTubeResults = [
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
];

const SearchResults = () => {
  const [searchKeyword, setSearchKeyword] = useState("FRUITS ZIPPER");
  const [maxResults, setMaxResults] = useState(3);

  return (
    <div className="min-h-screen bg-pink-100 p-6 text-gray-900">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-6">
        <img
          src="/vibely-icon.png"
          alt="Vibely Logo"
          className="h-12 w-12"
        />
        <div className="text-right">
          <p className="font-semibold text-pink-700">Welcome, Rumi Shikiya!</p>
          <button className="text-pink-500 hover:underline">ログアウト</button>
        </div>
      </div>

      {/* 検索フォーム */}
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-700">Search Results</h1>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border-2 border-pink-300">
        <label className="block font-semibold text-pink-700">Search Keyword:</label>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="w-full p-2 border rounded-md mb-3 text-gray-900 border-pink-300"
        />
        <label className="block font-semibold text-pink-700">Max Results:</label>
        <input
          type="number"
          value={maxResults}
          onChange={(e) => setMaxResults(e.target.value)}
          className="w-full p-2 border rounded-md mb-3 text-gray-900 border-pink-300"
        />
        <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">Search</button>
      </div>

      {/* 音楽の検索結果 */}
      <h2 className="text-2xl font-semibold mt-6 text-pink-700">Music:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {dummySpotifyResults.slice(0, maxResults).map((song) => (
          <div
            key={song.id}
            className={`flex items-center p-4 rounded-lg shadow-md text-white ${song.color}`}
          >
            <div>
              <h3 className="font-semibold">{song.title}</h3>
              <p className="text-sm">{song.artist}</p>
              <p className="text-sm">{song.duration}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 動画の検索結果 */}
      <h2 className="text-2xl font-semibold mt-6 text-pink-700">Videos:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {dummyYouTubeResults.slice(0, maxResults).map((video) => (
          <div key={video.id} className="bg-white p-4 rounded-lg shadow-md border-2 border-pink-300">
            <h3 className="font-semibold mb-2 text-pink-700">{video.title}</h3>
            <iframe
              className="w-full aspect-video rounded-lg border border-pink-300"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
