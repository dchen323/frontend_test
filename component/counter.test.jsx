import Counter from "./counter";
import Foo from "./foo";
import { shallow, configure } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';


describe("Counter", () => {
  it("starts with a counter of 0", () => {
    let container = shallow(<Counter />);
    let counterCount = container.state().count;
    expect(counterCount).toBe(0);
  });

  it("renders 'count' foos", () => {
    let container = shallow(<Counter />);
    expect(container.find("Foo").length).toBe(0);

    container.find("button").simulate("click");

    expect(container.find("Foo").length).toBe(1);
  });

  it('matches the initial snapshot', () => {
    const component = renderer.create(<Counter/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
