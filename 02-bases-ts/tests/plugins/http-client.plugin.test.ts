import { httpClient } from "../../src/plugins";

describe("httpClient plugin", () => {
  test('http client plugin get should be a string', async () => {
    const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean), 
    });
  });

  test('http client plugin post should throw an error', async () => {
    try {
      await httpClient.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('Not implemented'));
    }
  });

  test('http client plugin put should throw an error', async () => {
    try {
      await httpClient.put('https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('Not implemented'));
    }
  });

  test('http client plugin delete should throw an error', async () => {
    try {
      await httpClient.delete('https://jsonplaceholder.typicode.com/posts/1');
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('Not implemented'));
    }
  });
});