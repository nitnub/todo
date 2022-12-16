import React from 'react';
// import { render, screen } from '@testing-library/react';
import { getQueriesForElement } from '@testing-library/react';
import * as ReactDOM from 'react-dom'
import App from './App';

test('ToDo', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App />, root)
  const { getByText, getByLabelText } = getQueriesForElement(root);

 
  getByText('To-Dos')
  getByText('Add Todo', )
});

