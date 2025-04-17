import { SaveFile } from './save-file.use-case';
import fs from 'fs';

describe('SaveFileUseCase', () => {
  const options = {
    fileContent: 'Custom content',
    fileName: 'custom',
    fileDestination: 'output',
  }

  afterEach(() => {
    fs.rmSync('output', { recursive: true, force: true });
  });

  test('should save file with default values', () => {
    const saveFile = new SaveFile();
    const path = `${options.fileDestination}/${options.fileName}.txt`;
    const result = saveFile.execute(options);
    const fileExist = fs.existsSync(path);
    const fileContent = fs.readFileSync(path, 'utf-8');
    
    expect(result).toBe(true);
    expect(fileExist).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test('Should save file with custom values', () => {
    const saveFile = new SaveFile();
    const result = saveFile.execute(options);
    const fileContent = fs.readFileSync(`${options.fileDestination}/${options.fileName}.txt`, 'utf-8');

    expect(result).toBe(true);
    expect(fileContent).toBe(options.fileContent);

  });

  test('Should return false if the file is not created', () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => { throw new Error('Directory not created'); });

    const result = saveFile.execute(options);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test('Should return false if write file fail', () => {
    const saveFile = new SaveFile();
    const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => { throw new Error('Directory not created'); });

    const result = saveFile.execute(options);

    expect(result).toBe(false);

    writeFileSyncSpy.mockRestore();
  });
});