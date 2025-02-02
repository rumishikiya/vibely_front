import React from "react";
import Link from "next/link";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-gray-900">
      {/* ヘッダー */}
      <div className="absolute top-4 left-4">
        <img src="/vibely-icon.png" alt="Vibely Logo" className="h-12 w-12" />
      </div>
      <div className="absolute top-4 right-4">
        {isLoggedIn ? (
          <button className="text-pink-700 hover:underline">ログアウト</button>
        ) : (
          <Link href="/auth/login">
            <span className="text-pink-700 hover:underline cursor-pointer">ログイン</span>
          </Link>
        )}
      </div>

      {/* メインコンテンツ */}
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-4">Welcome to VIBELY</h1>
      <p className="text-lg text-gray-700 mb-8">人気の動画や音楽を見つけましょう！</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* トレンド一覧 */}
        <Link href={isLoggedIn ? "/trends" : "/auth/login"}>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-pink-300 cursor-pointer hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-center text-pink-700">Trending</h2>
            <img src="/trending-illustration.png" alt="Trending" className="w-full h-40 object-contain mt-4" />
            <p className="text-center text-gray-700 mt-2">人気のプレイリストや動画に出会いましょう。</p>
          </div>
        </Link>

        {/* 検索ページ */}
        <Link href={isLoggedIn ? "/search" : "/auth/login"}>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-pink-300 cursor-pointer hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-center text-pink-700">Search</h2>
            <img src="/search-illustration.png" alt="Search" className="w-full h-40 object-contain mt-4" />
            <p className="text-center text-gray-700 mt-2">キーワードに沿って動画や音楽を検索しましょう。</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
