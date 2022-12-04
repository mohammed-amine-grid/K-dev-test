interface Person {
  name: string;
  animals: { name: string }[];
}

export interface DataItem {
  name: string;
  people: Person[];
}
