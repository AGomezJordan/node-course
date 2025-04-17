import { ServerApp } from './server-app';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

describe('ServerApp', () => {
  const options = {
    base: 5,
    limit: 10,
    showTable: false,
    name: 'test-name',
    destination: 'test-destination',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should create ServerApp instance', () => {
    const serverApp = new ServerApp();
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe('function')
  });

  test('Should run ServerApp with options', () => {
    const logSpy = jest.spyOn(console, 'log');
    const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

    ServerApp.run(options);

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith('Server is running...');
    expect(logSpy).toHaveBeenLastCalledWith('File created successfully');

    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      fileDestination: options.destination,
      fileName: options.name,
    });
  });

  test('Should run with custom values mocked', () => {

    const createMock = jest.fn().mockReturnValue('1 x 1 = 2');
    const saveFileMock = jest.fn().mockReturnValue(true);
    const logMock = jest.fn();
    const logErrorMock = jest.fn();

    global.console.log = logMock;
    global.console.error = logErrorMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledWith('Server is running...');
    expect(createMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: '1 x 1 = 2',
      fileDestination: options.destination,
      fileName: options.name,
    });
    expect(logMock).toHaveBeenCalledWith('File created successfully');
    expect(logErrorMock).not.toHaveBeenCalled();

  });
});