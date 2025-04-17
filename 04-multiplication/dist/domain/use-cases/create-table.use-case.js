"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor(
    /**
     * DI - Dependency Injection
     */
    ) { }
    execute({ base, limit = 10 }) {
        let result = '';
        for (let x = 1; x <= limit; x++) {
            result += `${base} x ${x} = ${base * x}`;
            result += '\n';
        }
        return result;
    }
}
exports.CreateTable = CreateTable;
