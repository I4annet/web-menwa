import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ShieldCheck, Share2 } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/db";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-xl text-center py-32 px-6 space-y-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200/60 text-[#945f36] mx-auto">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Artikel Tidak Ditemukan</h2>
        <p className="text-sm text-slate-505 font-medium">Maaf, artikel yang Anda cari tidak tersedia atau telah dipindahkan ke folder arsip.</p>
        <Link href="/blog">
          <Button className="bg-[#945f36] text-white hover:bg-[#744520] uppercase tracking-widest text-xs">
            Kembali ke Blog
          </Button>
        </Link>
      </div>
    );
  }

  // Format markdown content basic lines
  const paragraphs = post.content.trim().split("\n\n");

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-8">
      
      {/* 1. Navigation Back anchor */}
      <div>
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#945f36] uppercase tracking-wider transition group">
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          Kembali ke Blog
        </Link>
      </div>

      {/* 2. Article Header info */}
      <article className="space-y-8">
        <div className="space-y-4">
          {/* Category Badge */}
          <span className="inline-block rounded-lg bg-amber-50 border border-amber-200/60 px-3 py-1 text-[10px] font-bold text-[#945f36] uppercase tracking-wider">
            {post.category}
          </span>
          
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            {post.title}
          </h1>
 
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#945f36]" />
              <span>Diterbitkan: {post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#945f36]" />
              <span>Estimasi: {post.readTime} Baca</span>
            </div>
          </div>
        </div>

        {/* 3. Widescreen Cover Image */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
        </div>

        {/* 4. Article Text Body */}
        <div className="prose max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
          {paragraphs.map((p, idx) => {
            const trimmed = p.trim();
            if (trimmed.startsWith("###")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-900 pt-4 pb-1">
                  {trimmed.replace("###", "").trim()}
                </h3>
              );
            }
            if (trimmed.startsWith("1.") || trimmed.startsWith("-")) {
              const items = trimmed.split("\n");
              return (
                <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-650 font-medium">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.replace(/^[0-9\-.\s]+/, "").replace(/\*\*/g, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{trimmed}</p>;
          })}
        </div>
      </article>

      {/* 5. Author Biography Card */}
      <section className="pt-8 border-t border-slate-100">
        <Card className="p-6 bg-white border border-slate-200/80 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-sm">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-16 w-16 rounded-2xl object-cover border border-slate-200 shrink-0"
          />
          <div className="space-y-2">
            <div>
              <p className="text-sm font-bold text-slate-900">{post.author.name}</p>
              <p className="text-[10px] text-[#945f36] font-bold uppercase tracking-wider">{post.author.role}</p>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed max-w-xl font-medium">
              Penulis merupakan anggota aktif Resimen Mahasiswa Politeknik Negeri Malang Satuan 811 yang berkomitmen tinggi mengawal kedisiplinan kampus dan membina kepemimpinan bela negara.
            </p>
          </div>
        </Card>
      </section>

    </div>
  );
}
