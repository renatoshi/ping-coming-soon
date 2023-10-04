import image from "./images/logo.svg";
import heroImage from "./images/illustration-dashboard.png";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [borderColor, setBorderColor] = useState("border-gray-200");
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleClick = () => {
    if (!email || !regex.test(email)) {
      setIsValidEmail(true);
      setBorderColor("border-red-500");
    } else {
      setIsValidEmail(false);
      setBorderColor("border-gray-300");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-6 text-center min-h-screen">
      <section className="flex flex-col items-center justify-center text-center">
        <img
          src={image}
          alt="image"
          className="pt-10 w-[55px] h-[55px] md:w-[55px] md:h-[55px]"
        />
        <h2 className="pt-8 text-xl text-Gray md:text-3xl">
          We are launching <span className="text-black font-bold">soon!</span>
        </h2>
        <p className="pt-3 md:text-xs text-xs md:text-black text-black font-semibold ">
          Subscribe and get notified
        </p>

        <label className="flex flex-col pt-6 gap-2.5 md:flex md:flex-row md:pt-5 w-full">
          <div className="flex flex-col md:block">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Your email address..."
              className={`${borderColor}
                  block border md:text-[11px] rounded-3xl w-[100%] px-24 p-3 pl-7 text-xs placeholder-slate-300 md:px-36 md:pl-7 md:pr-20 md:gap-1 md:min-w-fit md:p-2.5`}
            />
            <span
              className={`${
                isValidEmail
                  ? "text-red-600 md:pt-1 md:pr-48 md:text-[10px] text-xs mb-4"
                  : "hidden"
              }`}
            >
              Please provide a valid email address
            </span>
          </div>

          <div className="items-center">
            <button
              className="md:p-3 p-3 px-28  text-white bg-Blue  rounded-3xl font-bold text-xs md:text-xs hover:bg-CustomBlue md:px-10"
              onClick={handleClick}
            >
              Notify Me
            </button>
          </div>
        </label>
      </section>

      <section className="flex flex-col items-center justify-center text-center md:pt-6 md:gap-0">
        <div className="pb-14 flex flex-col items-center">
          <img
            src={heroImage}
            alt="hero"
            className="pt-5 pb-10 w-full md:w-[30%] md:pb-0"
          />
        </div>

        <div className="flex flex-row gap-4 pt-10 md:pt-1">
          <div className="text-Blue border border-slate-200 rounded-full p-2 md:p-1 hover:bg-Blue hover:text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-3 md:w-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </div>

          <div className="text-Blue border border-slate-200 rounded-full p-2 md:p-1 hover:bg-Blue hover:text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-3 md:w-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>

          <div className="text-Blue border border-slate-200 rounded-full p-2 md:p-1 hover:bg-Blue hover:text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-3 md:w-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
        </div>

        <p className="text-Gray text-xs pt-8">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </section>
    </main>
  );
}

export default App;
