import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
@Module({
    providers: [EventsService],
    controllers: [EventsController],})
    
export class eventsModule {}
import { Injectable } from '@nestjs/common';

@Injectable()
export class eventsService {}

import { Controller } from '@nestjs/common';

@Controller('events')
export class eventsController {}
