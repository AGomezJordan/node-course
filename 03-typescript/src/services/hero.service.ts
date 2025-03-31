import { heroes } from "../data/heroes";

export const findHeroeById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
}