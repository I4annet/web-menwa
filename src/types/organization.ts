export interface OrganizationMember {
    id: string;
    name: string;
    role: string;
    prodi: string;
    image: string;
    parent: string | null;
    order: number;
}