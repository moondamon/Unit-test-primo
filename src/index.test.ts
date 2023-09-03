import { SortManager } from "./sort-manager";

describe("SortManager", () => {
  const sortManager = new SortManager();

  it("Input array ที่มีจำนวนค่าใน List เท่ากับ 1 ฟังก์ชัน merge ควรคืนค่าอาเรย์ที่ถูกต้อง", () => {
    const collection1 = [1];
    const collection2 = [2];
    const expectedMergedArray = [1, 2];

    const mergedArray = sortManager.merge(collection1, collection2);

    expect(mergedArray).toEqual(expectedMergedArray);
  });

  it("Input array ที่มีจำนวนค่าใน List ไม่เท่ากัน ฟังก์ชัน merge ควรคืนค่าอาเรย์ที่ถูกต้อง", () => {
    const collection1 = [1, 5, 8, 12];
    const collection2 = [2, 3, 4, 10, 11];
    const expectedMergedArray = [1, 2, 3, 4, 5, 8, 10, 11, 12];

    const mergedArray = sortManager.merge(collection1, collection2);

    expect(mergedArray).toEqual(expectedMergedArray);
  });

  it("Input array โดยมี List ว่าง 1 ตัว ฟังก์ชัน merge ควรคืนค่าอาเรย์ที่ถูกต้อง", () => {
    const collection1 = [1, 5, 8, 12];
    const expectedMergedArray = [1, 5, 8, 12];

    const mergedArray = sortManager.merge(collection1, []);

    expect(mergedArray).toEqual(expectedMergedArray);
  });

  it("Input array โดยมีเป็น List ว่าง ทั้งคู่ ฟังก์ชัน merge ควรคืนค่าอาเรย์ที่ว่างเปล่า", () => {
    const mergedArray = sortManager.merge([], []);

    expect(mergedArray).toEqual([]);
  });

  it("Input array โดยค่าที่ Input เข้าไป ไม่ได้ทำการเรียงมาให้ ควรส่งคืนอาร์เรย์ว่างและข้อความแสดงข้อผิดพลาด", () => {
    const collection1 = [1, 9, 2, 12];
    const collection2 = [3, 4, 5, 10];
    const consoleSpy = jest.spyOn(console, "error");
    const mergedArray = sortManager.merge(collection1, collection2);

    expect(consoleSpy).toHaveBeenCalledWith("Array is not sorted");
    expect(mergedArray).toEqual([]);
  });

  it("Input array โดยมีค่าติดลบ ควรคืนค่าอาเรย์ที่ถูกต้อง", () => {
    const collection1 = [1, 2, 9, 12];
    const collection2 = [-2, -1, 5, 10];
    const expectedMergedArray = [-2, -1, 1, 2, 5, 9, 10, 12];

    const mergedArray = sortManager.merge(collection1, collection2);

    expect(mergedArray).toEqual(expectedMergedArray);
  });

  it("Input array โดยมีค่าเป็นทศนิยม ควรคืนค่าอาเรย์ที่ถูกต้อง", () => {
    const collection1 = [0, 2, 4, 10];
    const collection2 = [0.1, 0.5, 6, 7];
    const expectedMergedArray = [0, 0.1, 0.5, 2, 4, 6, 7, 10];

    const mergedArray = sortManager.merge(collection1, collection2);

    expect(mergedArray).toEqual(expectedMergedArray);
  });
});
