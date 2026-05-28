import type { IUsers } from "./users";
import type { IProperties } from "./properties";

export interface ILeases {
    id: string;
    tenant: IUsers;
    property: IProperties;
    monthly_rent: string;
    payement_due_day: number;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string
}