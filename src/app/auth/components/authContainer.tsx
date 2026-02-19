"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SignIn from "./signIn";
import SignUp from "./signUp";

export default function AuthContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mode, setMode] = useState<"SignIn" | "SignUp">("SignIn");

  useEffect(() => {
    const urlMode = searchParams.get("mode");
    if (urlMode === "SignUp") {
      setMode("SignUp");
    } else {
      setMode("SignIn");
    }
  }, [searchParams]);

  const updateMode = (newMode: "SignIn" | "SignUp") => {
    setMode(newMode);
    router.push(`?mode=${newMode}`, { scroll: false });
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
      {mode === "SignIn" ? (
        <>
          <SignIn />
          <p className="mt-4 text-sm text-center">
            Don’t have an account?{" "}
            <button
              onClick={() => updateMode("SignUp")}
              className="text-blue-600 underline"
            >
              Create account
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUp />
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <button
              onClick={() => updateMode("SignIn")}
              className="text-blue-600 underline"
            >
              Sign in
            </button>
          </p>
        </>
      )}
    </div>
  );
}
