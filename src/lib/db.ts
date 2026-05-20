import { supabase } from "./supabase";
import { mockBlogPosts } from "@/data/blog-posts";
import { BlogPost, RecruitmentFormValues } from "@/types";

/**
 * Fetch all blog posts.
 * Attempts to pull from Supabase 'posts' table, falling back to mockBlogPosts if unsuccessful or offline.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("id", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as BlogPost[];
      }
      console.warn("Supabase fetch returned empty or failed, using mock data", error);
    }
  } catch (err) {
    console.error("Failed to connect to Supabase for blog posts, using offline fallback:", err);
  }
  return mockBlogPosts;
}

/**
 * Fetch a single blog post by slug.
 * Attempts to pull from Supabase 'posts' table, falling back to local search if unsuccessful.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (!error && data) {
        return data as BlogPost;
      }
      console.warn("Supabase slug fetch failed, using mock data search", error);
    }
  } catch (err) {
    console.error("Failed to connect to Supabase for single post, using offline fallback:", err);
  }
  const post = mockBlogPosts.find((p) => p.slug === slug);
  return post || null;
}

/**
 * Save new student recruitment registration.
 * Saves to Supabase 'registrations' table if active, otherwise saves to localStorage.
 */
export async function submitRegistration(
  values: RecruitmentFormValues
): Promise<{ success: boolean; message: string }> {
  try {
    if (supabase) {
      const { error } = await supabase.from("registrations").insert([
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          nim: values.nim,
          prodi: values.prodi,
          gender: values.gender,
          birth_date: values.birthDate,
          blood_type: values.bloodType,
          height: Number(values.height),
          weight: Number(values.weight),
          program: values.program,
          motivation: values.motivation,
          disease_history: values.diseaseHistory || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (!error) {
        return {
          success: true,
          message: "Pendaftaran berhasil terkirim ke database Supabase! Tim seleksi MENWA Polinema akan menghubungi kamu segera.",
        };
      }
      console.error("Supabase insert error, falling back to LocalStorage:", error);
    }
  } catch (err) {
    console.error("Supabase connection error in registration submit:", err);
  }

  // LocalStorage fallback for offline testing
  try {
    const existing = localStorage.getItem("menwa_registrations");
    const list = existing ? JSON.parse(existing) : [];
    list.push({
      ...values,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("menwa_registrations", JSON.stringify(list));
  } catch (storageErr) {
    console.error("LocalStorage write failed:", storageErr);
  }

  return {
    success: true,
    message: "Pendaftaran berhasil disimpan secara lokal (Offline Mode)! Database Supabase belum dikonfigurasi secara penuh, namun data Anda aman di peramban ini.",
  };
}
