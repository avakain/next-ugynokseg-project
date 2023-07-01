import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import signIn from "@/firebase/auth/signin";
import Button from "../components/button/Button";

export default function Login() {
  const [showChild, setShowChild] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    setShowChild(true);
  }, []);

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);

    if (error) {
      console.log(error);
    } else {
      router.push("/admin");
    }
  };

  if (!showChild) {
    return null;
  }

  return (
    <>
      <h1 className="text-xl mb-6">Bejelentkezés</h1>
      <form onSubmit={handleForm} className="form">
        <label htmlFor="email">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label htmlFor="password">
          <p>Jelszó</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="jelszó"
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <Button
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Bejelentkezés
        </Button>
      </form>
    </>
  );
}