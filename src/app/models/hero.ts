export class Hero {
    id?: number;
    name: string;
    url?: string;
    appearance?: {
        gender: string,
        race: string,
        height: [
            string,
            string
        ],
        weight: [
            string, 
            string
        ],
    };
    eyeColor: string;
    hairColor: string;   
}