"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form } from "../ui/form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
    console.log(search);
  };

  return (
    <header className="sticky top-0 z-10 bg-[#1a1d29] border-b border-gray-800">
      <div className="container px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
        >
          next↣WATCH
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/movie" className="text-white font-medium">
            Movie
          </Link>
          <Link href="/series" className="text-gray-400 hover:text-white">
            Series
          </Link>
          <Link href="/anime" className="text-gray-400 hover:text-white">
            Anime
          </Link>
          <Link href="/tv-show" className="text-gray-400 hover:text-white">
            TV Show
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <form onSubmit={handleSubmit} className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search"
              className="w-64 pl-10 bg-gray-800 border-gray-700 text-sm rounded-full focus:ring-green-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="hidden"
              aria-hidden="true"
            ></button>
          </form>

          <Button size="icon" variant="ghost" className="md:hidden">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
