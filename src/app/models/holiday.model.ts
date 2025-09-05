export interface IHoliday {
    id: number;
    date: Date;
    title: string;
    description: string;
    imageUrl?: string;
}

export interface IHolidayDto {
    Id: number;
    Date: string; // ISO string from backend
    Name: string;
    Description: string;
}