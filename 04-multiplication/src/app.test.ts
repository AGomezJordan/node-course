import { ServerApp } from "./presentation/server-app";

describe('App', () => {
  test('should call ServerApp.run with values', async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;

    process.argv = [
      'node',
      'app.js',
      '--base=5',
      '--limit=10',
      '-s=true',
      '--name=John',
      '--destination=./output.txt'
    ];

    await import('./app');

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 5,
      limit: 10,
      showTable: true,
      name: 'John',
      destination: './output.txt'
    });
  });
})