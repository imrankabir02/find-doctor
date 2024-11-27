import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFacilityDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    orgPracId: string

    @ApiProperty({required: false})
    @IsString()
    @IsOptional()
    username?: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name : string

    @ApiProperty()
    @IsNumber()
    ranking: number

    @ApiProperty({required: false})
    @IsString()
    @IsOptional()
    photo?: string

    @ApiProperty()
    @IsString()
    category: string

    @ApiProperty()
    @IsArray()
    subCategory: string[]

    @ApiProperty()
    @IsNumber()
    rating: number

    @ApiProperty()
    @IsNumber()
    totalAppointments: number

    @ApiProperty()
    @IsArray()
    zone: string[]

    @ApiProperty()
    @IsArray()
    branch: string[]

    @ApiProperty()
    @IsString()
    areaOfPractice: string
}