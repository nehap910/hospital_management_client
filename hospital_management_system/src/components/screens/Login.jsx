import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main class="relative mx-12 w-full max-w-md px-1 pt-10 pb-8 min-h-screen flex items-center justify-center">
      <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Log In</div>

        <div class="w-full transform border-b-2 border-black bg-transparent text-lg duration-300 focus-within:border-gray-500">
          <input
            type="text"
            placeholder="Email or Username"
            class="w-full border-none bg-transparent outline-none placeholder:italic placeholder:text-gray-700 focus:outline-none"
          />
        </div>

        <div class="w-full transform border-b-2 border-black bg-transparent text-lg duration-300 focus-within:border-gray-500">
          <input
            type="password"
            placeholder="Password"
            class="w-full border-none bg-transparent outline-none placeholder:italic placeholder:text-gray-700 focus:outline-none"
          />
        </div>

        <button class="transform rounded-sm bg-blue-800 py-2 font-bold duration-300 hover:bg-blue-700 text-white">
          LOG IN
        </button>

        <a
          href="#"
          class="transform text-center font-semibold text-gray-600 duration-300 hover:text-gray-300"
        >
          FORGOT PASSWORD?
        </a>

        <p class="text-center text-lg">
          No account?
          <a
            href="#"
            class="font-medium text-blue-900 underline-offset-4 hover:underline"
          >
            Create One
          </a>
        </p>
      </section>
    </main>
  );
}

export default Login;
