const runCommand = async (customArgs: string[]) => {
  process.argv = [...process.argv, ...customArgs];
  const { args } = await import('./args.plugin');
  return args;
};

describe('args', () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = [...originalArgv];
    jest.resetModules();
  });

  test('Should return default values', async () => {
    const args = await runCommand(['-b', '5']);
    expect(args).toEqual(expect.objectContaining({
      b: 5,
      l: 10,
      s: false,
      n: 'table',
      d: 'output',
    }));
  });

  test('Shuld return configuration with custom values', async () => {
    const args = await runCommand(['-b', '8', '-l', '20', '-s', '-n', 'my-table', '-d', 'my-folder']);
    expect(args).toEqual(expect.objectContaining({
      b: 8,
      l: 20,
      s: true,
      n: 'my-table',
      d: 'my-folder',
    }));
  });
});