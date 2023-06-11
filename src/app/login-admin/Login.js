'use client'
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import Button from "../components/button/Button";

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event) => {
    event.preventDefault()
    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error)
    }

    return router.push("/admin")
  }
  return (
    <div className="wrapper grid items-center rounded md:my-60">
      <div className="form-wrapper mt-40 p-8 flex flex-col  bg-white rounded-xl shadow-lg">
        <h1 className="text-xl mb-6">Bejelentkezés</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required type="email"
              name="email" id="email"
              placeholder="example@mail.com"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label htmlFor="password">
            <p>Jelszó</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required type="password"
              name="password" id="password"
              placeholder="jelszó"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"

            />
          </label>
          <Button
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">Bejelentkezés</Button>
        </form>
      </div>
    </div>);
}