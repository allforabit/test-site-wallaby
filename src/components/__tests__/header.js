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
  const should = 'return the correct sum';

  assert({
    given: 'no arguments',
    should: 'return 0',
    actual: sum(),
    expected: 0,
  });

  assert({
    given: 'zero',
    should,
    actual: sum(2, 0),
    expected: 2,
  });

  assert({
    given: 'negative numbers',
    should,
    actual: sum(1, -4),
    expected: -7,
  });
});