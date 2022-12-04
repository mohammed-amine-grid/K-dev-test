import { DataItem } from "../types";
import type { Arguments, CommandBuilder } from "yargs";
const data = require("./../../data");

type Options = {
  pattern: string;
};

function filter  (people: Array<DataItem>, pattern: string) {
    let filteredArr: DataItem[] = [];
  people.forEach((dataItem) => {
    if (
      dataItem.people.some((person) =>
        person.animals.some((animal) => animal.name.includes(pattern))
      )
    )
      filteredArr.push(dataItem);
  });
  if (filteredArr.length) return filteredArr;
};


export const command: string = "filter <pattern>";

export const desc: string = "Filter data.js with <pattern>";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.positional("pattern", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { pattern } = argv;
  const output = `${JSON.stringify(filter(data, pattern))}`;
  process.stdout.write(output);
  process.exit(0);
};

exports.filter = filter;