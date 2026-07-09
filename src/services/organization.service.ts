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

    console.log("Jumlah data", snapshot.size);

    const members: OrganizationMember[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<OrganizationMember, "id">),
    }));

    console.log(members)
    return members;
}