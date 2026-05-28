import type { IUsers } from "./users";

export type Tstatus = | "AVAILABLE" | "OCCUPED" | "RESERVED";

export interface IProperties  {
    id:string;
    description: string;
    city: string;
    address: string;
    loyer: string;
    caution: string | null;
    status: Tstatus;
    owner: IUsers;
    manager: IUsers | null;
    rooms: number;
    image: string | null;
    devise: string;
    type: string;
    created_at: string;
    updated_at: string;
}