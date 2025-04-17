"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.args = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base',
})
    .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit',
})
    .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table',
})
    .option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name',
})
    .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'output',
    describe: 'File destination',
})
    .check((argv, options) => {
    if (argv.b < 0)
        throw 'Error: The base must be a positive number';
    return true;
})
    .parseSync();
