import Counter from "./counter.jsx";
import { shallow, configure } from 'enzyme';
import React from 'react';


describe("Counter", () => {
  it("starts with a counter of 0", () => {
    let container = shallow(<Counter />);
    let counterCount = container.state().count;
    expect(counterCount).toBe(0);
  });
});
