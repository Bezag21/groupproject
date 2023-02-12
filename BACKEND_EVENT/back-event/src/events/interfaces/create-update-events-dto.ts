
import { ApiProperty } from '@nestjs/swagger';

export class CreateUpdateEventDto{
    @ApiProperty()
    id:string;

    @ApiProperty()
    name: string;
}
export class UpdateEventDto{
    @ApiProperty()
    id:string;

    @ApiProperty()
    name: string;
}
export class CreateEventDto{
    @ApiProperty()
    id:string;

    @ApiProperty()
    name: string;
}