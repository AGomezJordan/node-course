import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('Tests with callbacks', () => { 

  test('getUserById should return a user', (done) => { 
    const userId = 1;
    getUserById(userId, (err, user) => {
      expect(err).toBeUndefined;
      expect(user).toEqual({
        id: userId,
        name: 'John Doe'
      });
      done();
    });
  });

  test('getUserById should return an error if user does not exist', (done) => { 
    const userId = 3;
    getUserById(userId, (err, user) => {
      expect(err).toBe(`User not found with id ${userId}`);
      expect(user).toBeUndefined();
      done();
    });
  });

});