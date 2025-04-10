import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {
  test('getAge should return the age of a person', () => {
    const birthdate = '1999-02-15';
    const age = getAge(birthdate);
    expect(typeof age).toBe('number');
  });

  test('getAge should return current age', () => {
    const birthdate = '1999-02-15';
    const age = getAge(birthdate);
    expect(age).toBe(new Date().getFullYear() - new Date(birthdate).getFullYear());
  });

  test('getAge should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2023);
    const birthdate = '2023-02-15';
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});