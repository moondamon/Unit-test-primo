import { SortManager } from "./sort-manager";

const sortManager = new SortManager();

const mergedArray = sortManager.merge([0, 2, 4, 10], [0.1, 0.5, 6, 7]);

console.log(mergedArray);
