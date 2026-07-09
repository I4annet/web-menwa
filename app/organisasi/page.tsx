import { getOrganizationMembers } from "@/./src/services/organization.service";

export default async function OrganisasiPage() {
    const members = await getOrganizationMembers();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                Struktur Organisasi
            </h1>

            {members.map((member: any) => (
                <div
                    key={member.id}
                    className="border p-4 rounded-lg mb-4"
                >
                    <h2 className="font-bold">{member.name}</h2>
                    <p>{member.role}</p>
                    <p>{member.prodi}</p>
                </div>
            ))}
        </div>
    );
}