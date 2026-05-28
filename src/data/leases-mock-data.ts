import type { ILeases } from "../types";

const leases: ILeases[] = [
    {
		id: "a398a3c4-7040-42ce-9fae-28e0900ed0d8",
		tenant: {
			id: "75c40f61-ff42-4cd3-b2c2-592a8eb031d6",
			email: "user2@gmail.com",
			username: "users2",
			role: "TENANT",
			status: "PENDING",
			image: null
		},
		property: {
			id: "d5e7ca6b-879b-4f96-9526-962868ad785e",
			owner: {
				id: "c1d673d9-5e70-4831-8e8b-7919cfbc4450",
				email: "user4@gmail.com",
				username: "users4",
				role: "OWNER",
				status: "PENDING",
				image: null
			},
			manager: null,
			description: "",
			address: "tananarive 101",
			city: "tana",
			loyer: "500000.00",
			caution: null,
			devise: "MGA",
			status: "AVAILABLE",
			type: "HOUSE",
			rooms: 4,
			image: null,
			created_at: "2026-04-12T16:08:54.523553Z",
			updated_at: "2026-04-12T16:08:54.523746Z"
		},
		monthly_rent: "500000.00",
		payement_due_day: 6,
		start_date: "2026-04-20",
		end_date: null,
		created_at: "2026-04-12T16:23:04.149664Z",
		updated_at: "2026-04-12T16:23:04.149707Z"
	},
	{
		id: "86c55042-fb3e-4d6b-a58b-bfcc804b5bee",
		tenant: {
			id: "75c40f61-ff42-4cd3-b2c2-592a8eb031d6",
			email: "user2@gmail.com",
			username: "users2",
			role: "TENANT",
			status: "PENDING",
			image: null
		},
		property: {
			id: "d5e7ca6b-879b-4f96-9526-962868ad785e",
			owner: {
				id: "c1d673d9-5e70-4831-8e8b-7919cfbc4450",
				email: "user4@gmail.com",
				username: "users4",
				role: "OWNER",
				status: "PENDING",
				image: null
			},
			manager: null,
			description: "",
			address: "tananarive 101",
			city: "tana",
			loyer: "500000.00",
			caution: null,
			devise: "MGA",
			status: "AVAILABLE",
			type: "HOUSE",
			rooms: 4,
			image: null,
			created_at: "2026-04-12T16:08:54.523553Z",
			updated_at: "2026-04-12T16:08:54.523746Z"
		},
		monthly_rent: "500000.00",
		payement_due_day: 6,
		start_date: "2026-04-20",
		end_date: null,
		created_at: "2026-04-12T16:23:29.719952Z",
		updated_at: "2026-04-12T16:23:29.719970Z"
	}
]

export default leases;