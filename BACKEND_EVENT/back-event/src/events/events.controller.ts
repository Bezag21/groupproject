import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './interfaces/event.interface';
import { CreateUpdateEventDto } from './interfaces/create-update-events-dto';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@Controller('events')
@ApiTags('events')

export class EventsController {
constructor(private readonly eventsService: EventsService) {
}

@Get()
@ApiOkResponse({
    type: [Event],
    description: 'Retrieve all events',
    })
    
findAll(): Event[] {
return this.eventsService.findAll();}

@Get(':id')
@ApiOkResponse({
    type: Event,
    })
    
findById(@Param('id') id: string): Event {
return this.eventsService.findById(id);
}

@Post()
@ApiCreatedResponse({
    type: Event,
    })
    
create(@Body() createUpdateEventDto: CreateUpdateEventDto): Event {
return this.eventsService.create(createUpdateEventDto);
}

@Put(':id')
@ApiOkResponse({
    type: Event,
    })
    
update(@Param('id') id: string, @Body() createUpdateEventDto: CreateUpdateEventDto): Event {
return this.eventsService.update(id, createUpdateEventDto);
}

@Delete(':id')
@ApiNoContentResponse()
delete(@Param('id') id: string): void {
return this.eventsService.deleteevent(id);
}
}
