import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {

    constructor(private directionService: DirectionsService) {}

    @Get()
    getDirections(@Query('originId') origin: string, @Query('destinationId') destinationId: string) {
        return this.directionService.getDirections(origin, destinationId);
    }
}
