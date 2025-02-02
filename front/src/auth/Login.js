import { useState } from "react";
import { useRouter } from "next/router";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const dummyUser = {
    email: "testuser@example.com",
    password: "TestPassword123!",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem("isLoggedIn", "true"); // ログイン状態を保存
      setIsLoggedIn(true);
      router.push("/home");
    } else {
      alert("メールアドレスまたはパスワードが違います");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-6">ログイン</h2>
      <form onSubmit={handleLogin} className="w-80 flex flex-col gap-4">
        <div>
          <label className="block text-sm mb-1">メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="パスワード"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          ログイン
        </button>
      </form>
    </div>
  );
};

export default Login;