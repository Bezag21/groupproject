import {Injectable} from '@nestjs/common';
import { Event } from './interfaces/event.interface';
import { CreateEventDto } from './interfaces/create-update-events-dto';
import { UpdateEventDto } from './interfaces/create-update-events-dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EventsService {
private events: Event[] = [];
findAll(): Event[] {
    return this.events;}

findById(id: string): Event {
return this.events.find(Event => Event.id === id);
}

create(createEventDto: CreateEventDto): Event {
    const event= {id: uuidv4(),...createEventDto,};
    this.events.push(event);
    return event;
}

update(id: string, updateEventDto: UpdateEventDto): Event {
	const eventIndex = this.events.findIndex(Event => Event.id === id);
    const event = { id: id,...updateEventDto, };
       
        this.events[eventIndex] = event;
        
        return event;
    }

deleteevent(id: string): void {
        this.events = this.events.filter(Event => Event.id === id) ;
        }
       
}
                 