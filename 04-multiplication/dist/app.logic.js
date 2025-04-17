"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const args_plugin_1 = require("./config/plugins/args.plugin");
const { b: base, l: limit, s: showTable } = args_plugin_1.args;
let result = '';
(() => {
    createMultiplicationTable();
    if (showTable)
        showMultiplicationTable();
    saveMultiplicationTable();
})();
function createMultiplicationTable() {
    result += '=========================\n';
    result += `\tTabla del ${base}`;
    result += '\n=========================';
    result += '\n\n';
    for (let x = 1; x <= limit; x++) {
        result += `${base} x ${x} = ${base * x}`;
        result += '\n';
    }
}
function showMultiplicationTable() {
    console.log(result);
}
function saveMultiplicationTable() {
    const dir = '../output/';
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir, { recursive: true });
    }
    const fileName = `tabla-${base}.txt`;
    fs_1.default.writeFileSync(`${dir}${fileName}`, result);
}
