"use client"
import { useState } from "react";
import { barlow } from "./fonts";
import CTAButton from "./components/CTAButton";
import { FiEye,FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // Simulate login process
    console.log('Logging in with', { email, password });

    setEmail('');
    setPassword('');

    router.push('/dashboard');
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-white to-[#AFA3FF]">
      <div className="bg-white p-14 rounded-2xl border-[1px] border-bordeer-color flex flex-col gap-6">
        <h1 className={`text-5xl font-semibold ` + barlow.className}>Welcome to <span className="text-dark-blue">Workflo</span>!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {error && <p style={{ color: 'red' }}>{error}</p>}


          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-inp-gray py-4 px-3 rounded-lg bg-opacity-60"
          />


          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-inp-gray py-4 px-3 rounded-lg bg-opacity-60"
            />
            {
              showPassword ? 
              <FiEyeOff className="absolute top-5 right-6 text-gray-500 cursor-pointer" onClick={()=>setShowPassword(false)}/> 
              : 
              <FiEye className="absolute top-5 right-6 text-gray-500 cursor-pointer" onClick={()=>setShowPassword(true)}/>
            }
          </div>

          <CTAButton  typeBtn="submit" children="Login" onClick={()=>console.log("LOGIN FORM SUBMITTED")}/>
        </form>
        <p className="text-center font-normal">Don’t have an account? Create a <button className="text-dark-blue font-medium" onClick={()=>router.push("/signup")}>new account</button></p>
      </div>

    </main>
  );
}
