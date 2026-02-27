import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex flex-col items-center justify-center dark:bg-[#0f172a] text-white">
        <h1 className="text-9xl font-extrabold text-black dark:text-white tracking-widest">
          404
        </h1>

        <div className="bg-blue-400 px-2 text-sm rounded rotate-12 ">
          Page Not Found
        </div>

        <p className="mt-5 text-xl text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="relative inline-block text-sm font-medium text-blue-400 group active:text-blue-600 focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-400 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Go Home
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
