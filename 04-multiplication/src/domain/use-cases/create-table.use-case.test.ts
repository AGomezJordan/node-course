import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {
  it('should table with default values', () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 2 });
    const rows = table.split('\n');
    
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain('2 x 1 = 2');
    expect(table).toContain('2 x 10 = 20');
    expect(rows.length).toBe(10);
  });

  test('should table with custom limit', () => {
    const options = { base: 3, limit: 5 };

    const createTable = new CreateTable();
    const table = createTable.execute(options);
    const rows = table.split('\n');

    expect(table).toContain('3 x 1 = 3');
    expect(table).toContain('3 x 5 = 15');
    expect(table).not.toContain('3 x 6');
    expect(rows.length).toBe(options.limit);
  });
});