import { EventsService } from './events.service';
import { Event } from './interfaces/event.interface';
import { CreateUpdateEventDto } from './interfaces/create-update-events-dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(): Event[];
    findById(id: string): Event;
    create(createUpdateEventDto: CreateUpdateEventDto): Event;
    update(id: string, createUpdateEventDto: CreateUpdateEventDto): Event;
    delete(id: string): void;
}
