import React from "react"
import {render, fireEvent} from "@testing-library/react"
import City from '../app/javascript/components/Exo1/City';
import AddButton from '../app/javascript/components/Exo4/AddButton';

describe('first and easies test of all', () => {
  it("check if it renders at all", () => {
    const { queryByTitle } = render(<City city={'Paris'}/>);
    const helloCity = queryByTitle('cityTitle');
      expect(helloCity).toBeTruthy();
  });
});

describe('the AddButton redirect function', () => {
  const { queryByTitle } = render(<AddButton/>);
  const btn = queryByTitle('addUrlBtn');
  const firstUrl = '/'
  const nextUrl = '/products/new'

  global.window = Object.create(window);
  const defineUrl = (url) => {
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
      },
      writable: true,
    });
  };
  
  it('should sent the original page to the new page`s url', async () => {
    defineUrl(firstUrl);
    expect(global.window.location.href).toEqual(firstUrl)
    fireEvent.click(btn)
    expect(global.window.location.href).toEqual(nextUrl)
  })
})