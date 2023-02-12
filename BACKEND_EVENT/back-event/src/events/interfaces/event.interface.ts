import { ApiProperty } from '@nestjs/swagger';

export class Event{
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    name: string;

}


