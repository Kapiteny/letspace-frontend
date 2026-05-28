export type TUserStatus = "PENDING" | "ACTIVE" | "SUSPENDED";

export type TUserRole = "ADMIN" | "MANAGER" | "OWNER" | "TENANT";


export interface IUsers {
    id: string;
    email: string;
    username: string;
    role: TUserRole;
    status: TUserStatus;
    image: string | null;
}
