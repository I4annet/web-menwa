import { activities, getActivityBySlug } from "@/data/activities";
import type { Activity } from "@/types";

/**
 * Placeholder service layer untuk data kegiatan.
 * Saat ini membaca dari src/data/activities.ts (static).
 * Collection name Firestore tetap "activities" jika nanti migrasi ke Firebase.
 */
export async function getAllActivities(): Promise<Activity[]> {
  return activities;
}

export async function getActivity(slug: string): Promise<Activity | undefined> {
  return getActivityBySlug(slug);
}
