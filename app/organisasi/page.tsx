import React from "react";
import { getOrganizationMembers } from "@/src/services/organization.service";
import OrganisasiTree from "@/components/organisasi/OrganisasiTree";

export default async function OrganisasiPage() {
    // Fetch members on the server side from Firebase Firestore
    const members = await getOrganizationMembers();

    return (
        <div className="min-h-screen bg-[#fcfbf9] text-stone-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative background shadows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/[0.02] rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title Section */}
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-[#caa472] text-[10px]">★</span>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1d1d]">
                            Struktur Organisasi
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide text-stone-900">
                        Satmenwa 874 Polinema
                    </h1>
                    <p className="mt-3 text-xs sm:text-sm text-stone-500 max-w-xl mx-auto leading-relaxed">
                        Struktur organisasi Satuan Resimen Mahasiswa 874 Politeknik Negeri Malang periode kepengurusan 2024/2025.
                    </p>
                </div>

                {/* Dynamically Built Organizational Tree */}
                <OrganisasiTree members={members} />
            </div>
        </div>
    );
}