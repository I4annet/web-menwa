import { useState, useEffect } from "react";
import { OrganizationMember } from "@/src/types/organization";
import { getOrganizationMembers } from "@/src/services/organization.service";

export function useOrganization() {
    const [members, setMembers] = useState<OrganizationMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getOrganizationMembers();
                setMembers(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Format the flat member list into a 3-level tree structure dynamically
    const getHierarchy = () => {
        if (members.length === 0) return null;

        // 1. Find Dansat (Komandan) as the root node (parent is null or empty)
        const dansat = members.find((m) => !m.parent) || members[0];
        if (!dansat) return null;

        // 2. Find Leaders (Bendum & Sekum) who report directly to Dansat
        const leaders = members.filter((m) => m.parent === dansat.id);

        // 3. Find Section / Kaur members reporting to each leader
        // Left branch: reports to Bendum (leaders[0])
        const sectionsLeft = leaders[0]
            ? members.filter((m) => m.parent === leaders[0].id)
            : [];

        // Right branch: reports to Sekum (leaders[1])
        const sectionsRight = leaders[1]
            ? members.filter((m) => m.parent === leaders[1].id)
            : [];

        return {
            dansat,
            leaders,
            sectionsLeft,
            sectionsRight,
        };
    };

    return {
        members,
        loading,
        error,
        hierarchy: getHierarchy(),
    };
}
