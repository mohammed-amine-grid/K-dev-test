"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const data = require("./../../data");
function filter(people, pattern) {
    let filteredArr = [];
    people.forEach((dataItem) => {
        if (dataItem.people.some((person) => person.animals.some((animal) => animal.name.includes(pattern))))
            filteredArr.push(dataItem);
    });
    if (filteredArr.length)
        return filteredArr;
}
;
exports.command = "filter <pattern>";
exports.desc = "Filter data.js with <pattern>";
const builder = (yargs) => yargs.positional("pattern", { type: "string", demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { pattern } = argv;
    const output = `${JSON.stringify(filter(data, pattern))}`;
    process.stdout.write(output);
    process.exit(0);
};
exports.handler = handler;
exports.filter = filter;
