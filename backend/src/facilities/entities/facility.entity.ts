export class Facility {
    id: string
    type: string
    orgPracId: string
    username?: string
    name: string
    ranking: number
    photo?: string
    category: string
    subCategory: string[]
    rating: number
    totalAppointments: number
    zone: string[]
    branch: string[]
    areaOfPractice: string
    createdAt: Date
    updatedAt: Date
}