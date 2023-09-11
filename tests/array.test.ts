import { describe, it } from "node:test";
import { deepMap } from "../src";
import assert from "node:assert";
import { isEqual } from "lodash";

interface Lists {
  listOne: string[];
  listTwo: string[];
  listThree: any[];
}

const lists: Lists = {
  listOne: ["One", "Two"],
  listTwo: ["Three", "Four"],
  listThree: [() => "Five", 6, "Eight", { nine: 9 }, Symbol("ten"), true],
};

interface SuperList {
  simpleList: string[];
  allLists: any[];
}

const { output } = deepMap<Lists, SuperList>({
  input: lists,
  map: {
    listOne: "simpleList",
    listTwo: "allLists",
    listThree: "allLists",
  },
});

describe("Array mapping", () => {
  it("Maps list (one-to-one)", () => {
    assert.ok(isEqual(output?.simpleList, lists.listOne));
  });
  it("Maps list (many-to-one) (merging)", () => {
    assert.ok(
      isEqual(output?.allLists, [...lists.listTwo, ...lists.listThree])
    );
  });
});
