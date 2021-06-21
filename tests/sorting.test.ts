import {strict as assert} from "assert"
import {describe, it} from "mocha"
import {sortByKey, reverseSortByKey} from "../src/index.js"

describe("sort", function () {
  it("should sort by single key", function() {
    const data = [{a: 1, b: 2}, {a: 3, b: 1}, {a: 2, b: 3}]
    const output = data.sort(sortByKey(i => i.a))
    assert.deepEqual(output, [{a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 1}])
  })
  it("should sort by single key, keeping equals in order", function() {
    const data = [{a: 1, b: 2}, {a: 2, b: 3}, {a: 1, b: 1}]
    const output = data.sort(sortByKey(i => i.a))
    assert.deepEqual(output, [{a: 1, b: 2}, {a: 1, b: 1}, {a: 2, b: 3}])
  })
  it("should sort by multiple keys", function() {
    const data = [{a: 2, b: 2}, {a: 1, b: 2}, {a: 1, b: 1}]
    const output = data.sort(sortByKey(i => i.a, i => i.b))
    assert.deepEqual(output, [{a: 1, b: 1}, {a: 1, b: 2}, {a: 2, b: 2}])
  })
})

describe("reverse sort", function () {
  it("should sort by single key", function() {
    const data = [{a: 1, b: 2}, {a: 3, b: 1}, {a: 2, b: 3}]
    const output = data.sort(reverseSortByKey(i => i.a))
    assert.deepEqual(output, [{a: 3, b: 1}, {a: 2, b: 3}, {a: 1, b: 2}])
  })
  it("should sort by single key, keeping equals in order", function() {
    const data = [{a: 1, b: 2}, {a: 2, b: 3}, {a: 1, b: 1}]
    const output = data.sort(reverseSortByKey(i => i.a))
    assert.deepEqual(output, [{a: 2, b: 3}, {a: 1, b: 2}, {a: 1, b: 1}])
  })
  it("should sort by multiple keys", function() {
    const data = [{a: 2, b: 2}, {a: 1, b: 2}, {a: 1, b: 1}]
    const output = data.sort(reverseSortByKey(i => i.a, i => i.b))
    assert.deepEqual(output, [{a: 2, b: 2}, {a: 1, b: 2}, {a: 1, b: 1}])
  })
})
