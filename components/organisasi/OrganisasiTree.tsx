/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { OrganizationMember } from "@/src/types/organization";
import Image from "next/image";

// Helper to determine the avatar type from a member's role dynamically
function getAvatarTypeFromRole(role: string): "dansat" | "bendum" | "sekum" | "ops" | "diklat" {
    const r = role.toLowerCase();
    if (r.includes("komandan") || r.includes("dansat")) return "dansat";
    if (r.includes("bendahara") || r.includes("bendum")) return "bendum";
    if (r.includes("sekretaris") || r.includes("sekum")) return "sekum";
    if (r.includes("ops") || r.includes("operasional") || r.includes("ops")) return "ops";
    if (r.includes("diklat") || r.includes("pendidikan")) return "diklat";
    return "dansat"; // default fallbackk
}
function OrgCard({ member }: { member: OrganizationMember }) {
    return (
        <div className="group bg-white text-stone-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-[16px] border border-stone-200 shadow-md overflow-hidden w-[220px] sm:w-[240px] shrink-0 text-center flex flex-col border-t-4 border-[#7f1d1d]">
            {/* Photo area */}
            <div className="relative w-full h-64">
                <Image
                    src={member.image || "/logo-menwa.png"}
                    alt={member.name}
                    fill
                    className="object-cover"
                />
            </div>
            {/* Info area */}
            <div className="pt-4 pb-5 px-3 flex flex-col items-center justify-center flex-1">
                <h4 className="text-stone-900 font-extrabold text-sm sm:text-base tracking-wide leading-tight">
                    {member.name}
                </h4>
                <span className="text-[#7f1d1d] font-bold text-xs sm:text-sm tracking-wide mt-1.5 leading-snug">
                    {member.role}
                </span>
                <span className="text-stone-500 text-[10px] sm:text-xs font-semibold tracking-wide mt-1">
                    {member.prodi}
                </span>
            </div>
        </div>
    );
}

// The core Tree component mapping hierarchical relationships dynamically
interface OrganisasiTreeProps {
    members: OrganizationMember[];
}

export default function OrganisasiTree({ members }: OrganisasiTreeProps) {
    if (!members || members.length === 0) {
        return (
            <div className="text-center py-12 text-stone-500 font-medium">
                Belum ada data anggota struktur organisasi.
            </div>
        );
    }

    // 1. Find Dansat (Komandan) as root (no parent specified or lowest parent order)
    const dansat = members.find((m) => !m.parent) || members[0];

    // 2. Find Leaders reporting to Dansat (usually Bendum & Sekum)
    const leaders = members.filter((m) => m.parent === dansat.id);

    // 3. Find Sections reporting to each leader
    // Left branch: reports to first leader (e.g. Bendum)
    const sectionsLeft = leaders[0]
        ? members.filter((m) => m.parent === leaders[0].id)
        : [];

    // Right branch: reports to second leader (e.g. Sekum)
    const sectionsRight = leaders[1]
        ? members.filter((m) => m.parent === leaders[1].id)
        : [];

    return (
        <div className="w-full">
            {/* Desktop Hierarchical Org Tree (Shown on large screens) */}
            <div className="hidden lg:flex flex-col items-center justify-center py-8">

                {/* Level 1: Commander */}
                <div className="flex flex-col items-center">
                    <OrgCard member={dansat} />
                    {/* Trunk line down from Dansat */}
                    {leaders.length > 0 && <div className="w-0.5 h-16 bg-[#7f1d1d]"></div>}
                </div>

                {/* Level 2 & 3 Row Container */}
                {leaders.length > 0 && (
                    <div className="relative flex justify-center gap-32">

                        {/* Horizontal line spanning bridge for Level 2 */}
                        <div className="absolute top-0 left-[calc(25%+4px)] right-[calc(25%+4px)] h-0.5 bg-[#7f1d1d]"></div>

                        {/* Left Branch (reports to leaders[0]) */}
                        <div className="flex flex-col items-center">
                            {/* Vertical line from bridge to Leader Card */}
                            <div className="w-0.5 h-8 bg-[#7f1d1d]"></div>
                            <OrgCard member={leaders[0]} />

                            {/* Line straight down to Left Section child if exists */}
                            {sectionsLeft.length > 0 && (
                                <>
                                    <div className="w-0.5 h-12 bg-[#7f1d1d]"></div>
                                    <div className="relative flex justify-center">
                                        {/* Bridge for multiple left section kids */}
                                        {sectionsLeft.length > 1 && (
                                            <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-[#7f1d1d]"></div>
                                        )}
                                        <div className="flex gap-12">
                                            {sectionsLeft.map((child) => (
                                                <div key={child.id} className="flex flex-col items-center">
                                                    {sectionsLeft.length > 1 && <div className="w-0.5 h-6 bg-[#7f1d1d]"></div>}
                                                    <OrgCard member={child} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Center trunk line continuation down between Level 2 cards to meet Level 3 sections */}
                        {(sectionsLeft.length > 0 || sectionsRight.length > 0) && (
                            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#7f1d1d]"></div>
                        )}

                        {/* Right Branch (reports to leaders[1]) */}
                        <div className="flex flex-col items-center">
                            {/* Vertical line from bridge to Leader Card */}
                            <div className="w-0.5 h-8 bg-[#7f1d1d]"></div>
                            <OrgCard member={leaders[1]} />

                            {/* Line straight down to Right Section child if exists */}
                            {sectionsRight.length > 0 && (
                                <>
                                    <div className="w-0.5 h-12 bg-[#7f1d1d]"></div>
                                    <div className="relative flex justify-center">
                                        {/* Bridge for multiple right section kids */}
                                        {sectionsRight.length > 1 && (
                                            <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-[#7f1d1d]"></div>
                                        )}
                                        <div className="flex gap-12">
                                            {sectionsRight.map((child) => (
                                                <div key={child.id} className="flex flex-col items-center">
                                                    {sectionsRight.length > 1 && <div className="w-0.5 h-6 bg-[#7f1d1d]"></div>}
                                                    <OrgCard member={child} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                )}
            </div>

            {/* Mobile/Tablet Hierarchy View (Shown on screens < 1024px) */}
            <div className="lg:hidden flex flex-col items-center gap-6 px-4">

                {/* Level 1: Commander */}
                <div className="flex flex-col items-center w-full">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#7f1d1d] mb-2 bg-[#7f1d1d]/5 px-3 py-1 rounded-full border border-[#7f1d1d]/10">
                        Komandan Satuan
                    </div>
                    <OrgCard member={dansat} />
                    {leaders.length > 0 && <div className="w-0.5 h-8 bg-[#7f1d1d]"></div>}
                </div>

                {/* Level 2: Command Staff */}
                {leaders.length > 0 && (
                    <div className="flex flex-col items-center w-full gap-4 relative">
                        {/* Connecting lines for mobile visual guide */}
                        <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-[#7f1d1d]/20"></div>

                        <div className="text-[10px] uppercase font-bold tracking-widest text-[#7f1d1d] mb-1 bg-[#7f1d1d]/5 px-3 py-1 rounded-full border border-[#7f1d1d]/10 self-start ml-2 relative z-10">
                            Staf Pimpinan Satuan
                        </div>

                        {leaders.map((leader) => (
                            <div key={leader.id} className="flex items-center gap-3 w-full pl-6 relative z-10">
                                <div className="absolute left-[6px] top-1/2 -translate-y-1/2 w-4 h-0.5 bg-[#7f1d1d]/30"></div>
                                <OrgCard member={leader} />
                            </div>
                        ))}

                        {(sectionsLeft.length > 0 || sectionsRight.length > 0) && (
                            <div className="w-0.5 h-8 bg-[#7f1d1d] self-center"></div>
                        )}
                    </div>
                )}

                {/* Level 3: Section Staff (Kaur) */}
                {(sectionsLeft.length > 0 || sectionsRight.length > 0) && (
                    <div className="flex flex-col items-center w-full gap-4 relative">
                        {/* Connecting lines for mobile visual guide */}
                        <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-[#7f1d1d]/20"></div>

                        <div className="text-[10px] uppercase font-bold tracking-widest text-[#7f1d1d] mb-1 bg-[#7f1d1d]/5 px-3 py-1 rounded-full border border-[#7f1d1d]/10 self-start ml-2 relative z-10">
                            Staf Pelaksana (KAUR)
                        </div>

                        {/* Render all sections */}
                        {[...sectionsLeft, ...sectionsRight].map((child) => (
                            <div key={child.id} className="flex items-center gap-3 w-full pl-6 relative z-10">
                                <div className="absolute left-[6px] top-1/2 -translate-y-1/2 w-4 h-0.5 bg-[#7f1d1d]/30"></div>
                                <OrgCard member={child} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}