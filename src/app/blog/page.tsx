"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock, Search, BookOpen, User, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/lib/db";
import { BlogPost } from "@/types";

const categories = ["Semua", "Kegiatan", "Opini", "Panduan", "Berita"];

export default function BlogListing() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Semua" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-16">
      
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-slate-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#C5A880] uppercase">
          Blogger & Berita
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl heading-gradient">
          Kabar & Wawasan Satuan
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Ikuti dokumentasi kegiatan resmi, artikel opini wawasan kebangsaan, serta panduan pertolongan pertama dan bertahan hidup hasil tulisan prajurit Menwa Polinema.
        </p>
      </section>

      {/* 2. Controls (Categories & Search) */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition duration-300 border cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-red-950/60 border-red-900 text-[#C5A880] shadow-inner"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/40 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* 3. Dynamic content panel */}
      {loading ? (
        <div className="text-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-[#C5A880] mx-auto" />
          <p className="mt-4 text-xs text-slate-500">Memuat artikel terbaru...</p>
        </div>
      ) : filteredPosts.length > 0 ? (
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Featured Spotlight Card */}
          {featuredPost && selectedCategory === "Semua" && searchQuery === "" && (
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <Card variant="gold-border" className="p-0 overflow-hidden bg-slate-900/20 hover:border-[#C5A880]/40 transition duration-300">
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[300px] overflow-hidden bg-slate-950">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:hidden" />
                  </div>
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="rounded-lg bg-red-950/80 border border-red-900/60 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                        UTAMA • {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <Clock className="h-3.5 w-3.5" />
                        <span>{featuredPost.readTime} Baca</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-[#C5A880] transition leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="h-10 w-10 rounded-full object-cover border border-slate-700"
                      />
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-[10px] text-slate-500 leading-tight">
                          {featuredPost.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )}

          {/* Regular Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(selectedCategory !== "Semua" || searchQuery !== "" ? filteredPosts : regularPosts).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col">
                <Card className="flex flex-col h-full p-0 overflow-hidden border-slate-800 bg-slate-900/10 hover:border-[#C5A880]/30 transition duration-300 hover:-translate-y-1">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-lg bg-red-950/80 border border-red-900/60 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#C5A880] transition leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-8 w-8 rounded-full object-cover border border-slate-700"
                      />
                      <div>
                        <p className="text-[11px] font-bold text-white leading-tight">
                          {post.author.name}
                        </p>
                        <p className="text-[9px] text-slate-500 leading-tight">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

        </div>
      ) : (
        <div className="text-center py-20 rounded-3xl bg-slate-900/10 border border-slate-800/80 max-w-xl mx-auto space-y-2">
          <ShieldAlert className="h-8 w-8 text-slate-500 mx-auto" />
          <h3 className="text-sm font-bold text-white">Artikel tidak ditemukan</h3>
          <p className="text-xs text-slate-500">Coba gunakan kata kunci pencarian atau kategori filter lainnya.</p>
        </div>
      )}

    </div>
  );
}
