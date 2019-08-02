import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

const sum = (a = 0, b = 0) => a + b;

describe('sum()', () => {

  expect(sum(1,2)).toEqual(3);

});