import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ToDoContainer from './ToDoContainer';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App header renderss correctly', () => {
  it('header text renders', () => {
    const header = document.getElementsByTagName('h1');

    act(() => {
      render(<ToDoContainer />, container);
    });

    expect(header.item(0).textContent).toBe('To-Dos');
  });
});
