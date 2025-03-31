import { findHeroeById } from "./services/hero.service";

const heroe = findHeroeById(2);

console.log(heroe?.name ?? 'No hero found')