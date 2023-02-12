"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsController = exports.eventsService = exports.eventsModule = void 0;
const common_1 = require("@nestjs/common");
const events_service_1 = require("./events.service");
const events_controller_1 = require("./events.controller");
let eventsModule = class eventsModule {
};
eventsModule = __decorate([
    (0, common_1.Module)({
        providers: [events_service_1.EventsService],
        controllers: [events_controller_1.EventsController],
    })
], eventsModule);
exports.eventsModule = eventsModule;
const common_2 = require("@nestjs/common");
let eventsService = class eventsService {
};
eventsService = __decorate([
    (0, common_2.Injectable)()
], eventsService);
exports.eventsService = eventsService;
const common_3 = require("@nestjs/common");
let eventsController = class eventsController {
};
eventsController = __decorate([
    (0, common_3.Controller)('events')
], eventsController);
exports.eventsController = eventsController;
//# sourceMappingURL=events.module.js.map