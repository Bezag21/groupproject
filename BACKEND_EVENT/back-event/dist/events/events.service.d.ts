import { Event } from './interfaces/event.interface';
import { CreateEventDto } from './interfaces/create-update-events-dto';
import { UpdateEventDto } from './interfaces/create-update-events-dto';
export declare class EventsService {
    private events;
    findAll(): Event[];
    findById(id: string): Event;
    create(createEventDto: CreateEventDto): Event;
    update(id: string, updateEventDto: UpdateEventDto): Event;
    deleteevent(id: string): void;
}
