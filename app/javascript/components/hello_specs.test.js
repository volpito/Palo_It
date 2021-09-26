import React from "react"
import {render} from "@testing-library/react"
import HelloWorld from './HelloWorld'

//is_truthy? test
describe('first and easies test of all', () => {
  it("check if it renders at all", () => {
    const { queryByTitle } = render(<HelloWorld greeting={'Hello !'}/>);
    const hello = queryByTitle('helloTitle');
      expect(hello).toBeTruthy();
  });
});
//prop renders? test
describe('try to render a prop', () => {
  it("check if the prop renders", () => {
    const { queryByTitle } = render(<HelloWorld greeting={'Hello !'}/>);
    const hello = queryByTitle('helloTitle');
      expect(hello.innerHTML).toBe('Hello !');
  });
});