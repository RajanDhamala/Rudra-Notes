"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { LogOut, Upload, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-10 bg-muted/80 flex items-center justify-center border-b border-border/20">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/80">
          Cultivating intelligence. Clinical transparency for scholars.
        </span>
      </div>

      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm"
            : "bg-background border-b border-transparent"
          }`}
      >
        <div className="container mx-auto flex h-[96px] items-center justify-between px-6 lg:px-12">
          {/* Logo Left */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-display font-medium tracking-tight text-foreground">
              Rudra.
            </span>
          </Link>

          {/* Nav Center */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/notes"
              className="text-sm font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Explore Notes
            </Link>
            {user?.role === "ADMIN" && (
              <Link
                href="/admin/upload"
                className="text-sm font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
              >
                Upload
              </Link>
            )}
          </div>

          {/* Actions Right */}
          <div className="hidden md:flex items-center gap-6">
            {loading ? (
              <div className="w-24 h-5 bg-muted animate-pulse rounded-sm" />
            ) : user ? (
              <div className="flex items-center gap-6">
                <span className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors cursor-default">
                  {user.fullname}
                </span>
                <button
                  className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  onClick={logout}
                  title="Logout"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Login
                </Link>
                <Link href="/register">
                  <Button
                    variant="ghost"
                    className="rounded-none bg-foreground text-background hover:bg-foreground/90 font-sans uppercase tracking-[0.1em] text-xs px-6 h-10 transition-all"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground hover:text-foreground/70 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-border/40 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col p-8 gap-8">
              <Link
                href="/notes"
                className="text-lg font-display text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Explore Notes
              </Link>
              {user?.role === "ADMIN" && (
                <Link
                  href="/admin/upload"
                  className="text-lg font-display text-foreground hover:text-muted-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Upload Notes
                </Link>
              )}

              <div className="w-full h-[1px] bg-border/40" />

              {user ? (
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="text-xl font-display text-foreground">
                      {user.fullname}
                    </div>
                    <div className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground mt-2">
                      {user.role}
                    </div>
                  </div>
                  <button
                    className="text-sm font-sans uppercase tracking-[0.1em] text-left text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-sans uppercase tracking-[0.1em] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-sans uppercase tracking-[0.1em] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
