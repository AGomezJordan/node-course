"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const heroe = (0, hero_service_1.findHeroeById)(2);
console.log(heroe?.name ?? 'No hero found');
