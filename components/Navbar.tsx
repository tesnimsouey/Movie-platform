import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SearchBar from "@/components/SearchBar";
import LogoutButton from "@/components/LogoutButton";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="flex items-center justify-between gap-4 border-b border-zinc-800 bg-black px-6 py-4">
      <Link href="/" className="shrink-0 text-lg font-semibold text-white">
        🎬TesStream
      </Link>

      <SearchBar />

      <div className="flex shrink-0 items-center gap-3">
        {user ? (
          <>
            <Link href="/dashboard" className="text-sm text-zinc-300 hover:text-white">
              Dashboard
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login" className="text-sm text-zinc-300 hover:text-white">
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded bg-white px-3 py-1.5 text-sm font-medium text-black hover:bg-zinc-200"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}