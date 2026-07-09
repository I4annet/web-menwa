import {
    collection,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { OrganizationMember } from "../types/organization";

export async function getOrganizationMembers() {
    const q = query(
        collection(db, "members"),
        orderBy("order", "asc")
    );

    const snapshot = await getDocs(q);

    const members: OrganizationMember[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<OrganizationMember, "id">),
    }));

    return members;
}