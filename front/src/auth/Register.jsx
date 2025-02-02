import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("登録情報:", { name, email, password, confirmPassword });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-6">新規登録</h2>
      <form onSubmit={handleRegister} className="w-80 flex flex-col gap-4">
        <div>
          <label className="block text-sm mb-1">名前</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="名前"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="メールアドレス"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="パスワード"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">パスワード確認</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="パスワード確認"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white mt-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          新規登録
        </button>
      </form>
      <p className="mt-4 text-sm">
        すでにアカウントをお持ちですか？{" "}
        <Link href="/auth/login">
          <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
            ログイン
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Register;