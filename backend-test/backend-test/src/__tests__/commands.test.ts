const { filter } = require("../commands/filter");
const { count } = require("../commands/count");
const data = require("../../data");

describe("filter command", () => {
  test("returns parent objects by filtering nested property", () => {
    expect(filter(data, "ry")).toStrictEqual([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);
  });

  test("empty array after filtering are not returned", () => {
    expect(filter(data, "13")).toStrictEqual(undefined);
  });
});

describe("count command", () => {
  test("appends the number of children at each level to name", () => {
    expect(count(data)).toStrictEqual([
      {
        name: "Uzuzozne [2]",
        people: [
          {
            name: "Lillie Abbott [1]",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi [2]",
        people: [
          {
            name: "Anthony Bruno [1]",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
      {
        name: "Dillauti [16]",
        people: [
          {
            name: "Winifred Graham [6]",
            animals: [
              { name: "Anoa" },
              { name: "Duck" },
              { name: "Narwhal" },
              { name: "Badger" },
              { name: "Cobra" },
              { name: "Crow" },
            ],
          },
          {
            name: "Blanche Viciani [8]",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Antelope" },
              { name: "Echidna" },
              { name: "Crow" },
              { name: "Guinea Fowl" },
              { name: "Deer Mouse" },
            ],
          },
        ],
      },
    ]);
  });
});
