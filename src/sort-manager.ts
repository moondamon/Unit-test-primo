export class SortManager {
  public isSort(setarray: number[]): boolean {
    for (let i = 0; i < setarray.length; i++) {
      if (i < setarray.length - 1) {
        if (setarray[i] > setarray[i + 1]) return false;
      }
    }
    return true;
  }

  public merge(collection_1: number[], collection_2: number[]): number[] {
    const mergedArr: number[] = [];
    let i = 0;
    let j = 0;

    try {
      if (this.isSort(collection_1) != true) {
        throw new Error("Array is not sorted");
      } else if (this.isSort(collection_2) != true) {
        throw new Error("Array is not sorted");
      }
    } catch (err) {
      console.error((err as Error).message);
      return [];
    }

    if (collection_1.length == 0) {
      return mergedArr.concat(collection_2);
    } else if (collection_2.length == 0) {
      return mergedArr.concat(collection_1);
    } else if (collection_1.length == 0 && collection_2.length == 0) {
      return mergedArr;
    }

    while (i < collection_1.length && j < collection_2.length) {
      if (collection_1[i] < collection_2[j]) {
        mergedArr.push(collection_1[i]);
        i++;
      } else {
        mergedArr.push(collection_2[j]);
        j++;
      }
    }

    mergedArr.push(...collection_1.slice(i));
    mergedArr.push(...collection_2.slice(j));

    return mergedArr;
  }
}
