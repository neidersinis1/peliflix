import { useCallback, useState } from "react";
import { Input } from "@/components/input";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState('login')
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/nexflix.jpg')]">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img className="h-12" src="/images/logo.png" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === 'login' ? 'sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
                {variant === 'register' && (
              <Input
                id="name"
                onChange={(e: any) => setName(e.target.value)}
                label="Username"
                value={name}
              />
              )}
              <Input
                id="email"
                onChange={(e: any) => setEmail(e.target.value)}
                label="Email"
                type="email"
                value={email}
              />
              <Input
                id="password"
                onChange={(e: any) => setPassword(e.target.value)}
                label="Password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-sm w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign in'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'First time using netflix?' : 'Already have an account'}
              <span onClick={toggleVariant} className="text-white mt-1 hover:underline gap-3 cursor-pointer">
                
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
              `
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;