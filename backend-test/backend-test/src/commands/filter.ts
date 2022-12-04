import { DataItem } from "../../types";

const data = require("./../../data");

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



exports.filter = filter;