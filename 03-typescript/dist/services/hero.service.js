"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroeById = void 0;
const heroes_1 = require("../data/heroes");
const findHeroeById = (id) => {
    return heroes_1.heroes.find((hero) => hero.id === id);
};
exports.findHeroeById = findHeroeById;
