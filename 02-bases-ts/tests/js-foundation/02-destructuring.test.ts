import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destruncturing.ts', () => {
  test('charecters should contains Flash, Superman', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  test('First charecter should contains Flash and second Superman', () => {
    const [flash, superman] = characters;
    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  });
});