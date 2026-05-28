export type TUserStatus = "PENDING" | "ACTIVE" | "SUSPENDED";

export type TUserRole = "ADMIN" | "MANAGER" | "OWNER" | "TENANT";


interface IUsers {
    id: string;
    email: string;
    username: string;
    role: TUserRole;
    status: TUserStatus;
    image: string;
}

const usersData: IUsers[] = [
    {
		id: "ba04cb2f-3303-4ae5-8da2-859304eb1d2e",
		email: "admin@letspace.com",
		username: "admin",
		role: "ADMIN",
		status: "SUSPENDED",
		image: null
	},
	{
		id: "bf2829fa-0c1b-4e1f-a9d5-d32efb03f9cf",
		email: "user1@gmail.com",
		username: "users",
		role: "ADMIN",
		status: "ACTIVE",
		image: null
	},
	{
		id: "75c40f61-ff42-4cd3-b2c2-592a8eb031d6",
		email: "user2@gmail.com",
		username: "users2",
		role: "TENANT",
		status: "PENDING",
		image: null
	},
	{
		id: "e4d02507-efa1-4b18-a37d-948ded58031d",
		email: "user3@gmail.com",
		username: "users3",
		role: "MANAGER",
		status: "PENDING",
		image: null
	},
	{
		id: "c1d673d9-5e70-4831-8e8b-7919cfbc4450",
		email: "user4@gmail.com",
		username: "users4",
		role: "OWNER",
		status: "PENDING",
		image: null
	},
]

export default  usersData;