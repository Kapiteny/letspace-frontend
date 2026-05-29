import type { ILeases } from "./leases";

export type RentStatus = "PENDING" | "PAIED" | "PARTIAL" | "LATE"

export interface IRentDue {
    id: string;
    lease: ILeases;
    month: string;
    amount_due_day: string;
    status: RentStatus;
    created_at: string;
    updated_at: string;
}