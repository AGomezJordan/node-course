import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory", () => {
  const getUUID = () => '1234';
  const getAge = () => 35;

  test('buildMakePerson should return function ', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe('function');
  });

  test('makePerson should return a person object', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const person = makePerson({ name: 'John', birthdate: '1990-01-01' });
    expect(person).toEqual({
      id: '1234',
      name: 'John',
      birthdate: '1990-01-01',
      age: 35,
    });
  }
  );
});