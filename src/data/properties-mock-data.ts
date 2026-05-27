export type Tstatus = | "Available" | "Occupied" | "Reserved";

interface PropertiesType  {
    description: string;
    city: string;
    address: string;
    loyer: number;
    caution: number;
    status: Tstatus;
    owner: string;
    manager: string;
    rooms: number;
    image: string;
}

const properties: PropertiesType[] = [
    {
        description: "Appartement de luxe Ankerana - Antananarivo",
        city: "Ankerana",
        address: "Lot 001 - Ankerana Tana",
        loyer: 1500000,
        caution: 0,
        status: "Available",
        owner: "Jean De Dieu",
        manager: "Marc D.",
        rooms: 4,
        image: ""
    },
    {
        description: "Maison à petit chambre avec terrasse",
        city: "Ambohibao",
        address: "Lot 021 - Ambohibao ",
        loyer: 350000,
        caution: 100000,
        status: "Reserved",
        owner: "Jim Leclerc",
        manager: "Julie M.",
        rooms: 4,
        image: ""
    },
    {
        description: "Maison de luxe Ankorondrano",
        city: "Ankorondrano",
        address: "Lot 005 - Ankorondrano",
        loyer: 500000,
        caution: 300000,
        status: "Occupied",
        owner: "Lita kely",
        manager: "Marc D.",
        rooms: 4,
        image: ""
    },
]

export default properties;