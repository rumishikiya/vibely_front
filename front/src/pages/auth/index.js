import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/login"); // ログインページへリダイレクト
  }, []);

  return <p>リダイレクト中...</p>;
}