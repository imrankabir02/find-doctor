import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateFacilityDto } from './dto/create-facility.dto';
import { Facility } from "./entities/facility.entity";

@Injectable()
export class FacilitiesService {
    constructor(private prisma: PrismaService) { }

    async create(createFacilityDto: CreateFacilityDto): Promise<Facility> {
        return this.prisma.facility.create({
            data: createFacilityDto
        })
    }

    async findAll(): Promise<Facility[]> {
        return this.prisma.facility.findMany();
    }

    async search(query: string): Promise<Facility[]> {
        return this.prisma.facility.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    },
                    {
                        subCategory: {
                            hasSome: [query]
                        }
                    },
                    {
                        zone: {
                            hasSome: [query]
                        }
                    }
                ]
            },
            orderBy: [
                {
                    ranking: 'desc'
                },
                {
                    rating: 'desc'
                }
            ]
        })
    }
}