import React from 'react';
// import { render, screen } from '@testing-library/react';
import * as ReactDOM from 'react-dom'
import App from './App';

test('ToDo', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App />, root)

  expect(root.querySelector('h1').textContent).toBe('To-Dos')
  expect(root.querySelector('input').placeholder).toBe('Add To-Do...')
  
});

