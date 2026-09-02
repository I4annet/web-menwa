import { members, getMemberBySlug } from "@/data/members";
import type { Member } from "@/types";

/**
 * Placeholder service layer untuk data organisasi.
 * Saat ini membaca dari src/data/members.ts (static).
 * Ketika Firebase/Firestore diaktifkan, ganti implementasi di sini
 * tanpa mengubah komponen — collection name tetap "members" sesuai instruksi.
 */
export async function getAllMembers(): Promise<Member[]> {
  return members;
}

export async function getMember(slug: string): Promise<Member | undefined> {
  return getMemberBySlug(slug);
}
