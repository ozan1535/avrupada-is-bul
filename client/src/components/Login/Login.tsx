"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Login({
  text1,
  text2,
  text3,
  text4,
  link,
  kindeMode,
}: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  link: string;
  kindeMode: string;
}) {
  const LinkComponent = kindeMode === "login" ? LoginLink : RegisterLink;

  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
            {text1}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            {text2}
          </p>
          <LinkComponent
            authUrlParams={{
              connection_id: process.env.NEXT_PUBLIC_GOOGLE_CONNECTION_ID!,
            }}
          >
            <button className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors mb-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 256 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>
              Google ile devam edin
            </button>
          </LinkComponent>

          <LinkComponent
            authUrlParams={{
              connection_id: process.env.NEXT_PUBLIC_FACEBOOK_CONNECTION_ID!,
            }}
          >
            <button className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors mb-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M25.638 48H2.649C1.186 48 0 46.814 0 45.351V2.649C0 1.186 1.186 0 2.649 0h42.702C46.814 0 48 1.186 48 2.649v42.702C48 46.814 46.814 48 45.351 48H33.119V29.412h6.239l0.934-7.244h-7.167v-4.625c0-2.097 0.583-3.526 3.591-3.526h3.836v-6.479c-0.663-0.089-2.94-0.286-5.589-0.286-5.531 0-9.318 3.376-9.318 9.576v5.342h-6.255v7.244h6.255V48z"
                  fill="#4460A0"
                />
              </svg>
              Facebook ile devam edin
            </button>
          </LinkComponent>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Ya da e-mail adresinizi girin
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              E-mail Adresi
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <LinkComponent
            authUrlParams={{
              connection_id: process.env.NEXT_PUBLIC_EMAIL_CONNECTION_ID!,
              login_hint: email,
            }}
          >
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Devam
            </button>
          </LinkComponent>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            {text3}{" "}
            <Link
              href={link}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              {text4}
            </Link>
          </p>
        </div>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
          Devam ederek politikalarımızı kabul etmiş olursunuz.
          <div>
            <Link
              href="/kullanim-sartlari"
              className="underline hover:text-gray-700 dark:hover:text-gray-300"
            >
              Kullanım Şartları
            </Link>{" "}
            ve{" "}
            <Link
              href="/gizlilik-politikasi"
              className="underline hover:text-gray-700 dark:hover:text-gray-300"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
