import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {

    constructor(
        private confisService: ConfigService, 
        private googleMapsClient: GoogleMapsClient) {}

    async findPlace(text: string) {
        const { data } = await this.googleMapsClient.findPlaceFromText({
            params: {
                input: text,
                inputtype: PlaceInputType.textQuery,
                fields: [
                    'formatted_address',
                    'geometry',
                    'name',
                    'place_id'
                ],
                key: this.confisService.get('GOOGLE_MAPS_API_KEY'),
            }
        })

        return data;
    }    
}
