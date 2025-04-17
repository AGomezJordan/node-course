export interface CreateTableUseCase {
  execute: ( options: CreateTableOptions) => string
}

export interface CreateTableOptions {
  base: number,
  limit?: number
}

export class CreateTable implements CreateTableUseCase {
  constructor(
    /**
     * DI - Dependency Injection
     */
  ) {}
  execute({ base, limit = 10}: CreateTableOptions) {
    let result = '';
    for (let x = 1; x <= limit; x++) {
      result += `${base} x ${x} = ${base * x}`;
      if (x < limit) result += '\n';
    }
    return result;
  }
}