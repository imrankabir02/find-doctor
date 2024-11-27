import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';

@ApiTags('facilities')
@Controller('facilities')
export class FacilitiesController {
    constructor(private readonly facilitiesService: FacilitiesService) { }

    @Post()
    @ApiOperation({
        summary: 'Create new facility'
    })
    @ApiResponse({
        status: 201,
        description: 'Facility created successfully.'
    })
    create(@Body() createFacilityDto: CreateFacilityDto) {
        return this.facilitiesService.create(createFacilityDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all facilities or search' })
    @ApiResponse({ status: 200, description: 'Return facilities.' })
    findAll(@Query('search') search?: string) {
        if (search) {
            return this.facilitiesService.search(search);
        }
        return this.facilitiesService.findAll();
    }
}