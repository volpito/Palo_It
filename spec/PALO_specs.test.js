import React from "react"
import {render, fireEvent} from "@testing-library/react"
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import sinon from 'sinon'
import Fetch from '../app/javascript/components/Exo3/Fetch';

describe('first and easies test of all', () => {
  it("check if it renders at all", () => {
    const { queryByTitle } = render(<HelloWorld greeting={'Hello !'}/>);
    const hello = queryByTitle('helloTitle');
      expect(hello).toBeTruthy();
  });
});

describe('try to render a prop', () => {
  it("check if the prop renders", () => {
    const { queryByTitle } = render(<HelloWorld greeting={'Hello !'}/>);
    const hello = queryByTitle('helloTitle');
      expect(hello.innerHTML).toBe('Hello !');
  });
});