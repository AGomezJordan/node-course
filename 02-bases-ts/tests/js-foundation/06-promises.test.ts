import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
  test('getPokemonById should return a poken', async () => {
    const pokemonId = 1;
    const pokemon = await getPokemonById(pokemonId);
    expect(pokemon).toBe('bulbasaur');
  });

  test('should return a errror if the pokemon does not exist', async () => {
    const pokemonId = 9999999999999;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id: ${ pokemonId }`);
    }
  });
});