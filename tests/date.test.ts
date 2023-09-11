import { describe, it } from "node:test";
import { deepMap } from "../dist";
import assert from "node:assert";
import { isEqual } from "lodash";

interface Period {
  start: Date;
  end: Date;
}

const period: Period = {
  start: new Date("2023-01-01"),
  end: new Date("2024-01-01"),
};

interface Deadline {
  date: Date;
}

const { output } = deepMap<Period, Deadline>({
  input: period,
  map: {
    end: "date",
  },
});

describe("Date mapping", () => {
  it("Maps date", () => {
    assert.ok(output?.date instanceof Date && isEqual(period.end, output.date));
  });
});
