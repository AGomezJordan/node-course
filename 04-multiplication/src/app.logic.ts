import fs from 'fs';
import { args } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = args;
let result: string = '';

(() => {
  createMultiplicationTable();
  if (showTable) showMultiplicationTable();
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
  const dir: string = '../output/';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const fileName: string = `tabla-${base}.txt`;
  fs.writeFileSync(`${dir}${fileName}`, result);
}