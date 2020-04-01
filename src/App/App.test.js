import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { APICall, APIPost } from '../APICalls.js'
jest.mock('../APICalls.js');


describe('App', () => {
  it('when the App loads, we should see an idea', async () => {
    APICall.mockResolvedValueOnce([
      {id: 1, title: 'Sweaters for pugs', description: 'To keep them warm'},
      {id: 2, title: 'Film a romcom', description: 'But make it ghosts'},
      {id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'},
    ]);

    const { getByText, debug } = render(<App />);

    const ideaContainer = getByText('Ideas Component');

    const idea = await waitFor(() => getByText('Sweaters for pugs'));

    expect(ideaContainer).toBeInTheDocument();
    expect(idea).toBeInTheDocument();
  });

  it('when the App loads, we should see a message if there is no ideas', async () => {
    APICall.mockResolvedValueOnce([]);

    const { getByText } = render(<App />);

    const ideaContainer = getByText('Ideas Component');

    const backup = await waitFor(() => getByText('You Currntly Have No Ideas'));

    expect(ideaContainer).toBeInTheDocument();
    expect(backup).toBeInTheDocument();
  });

  it('when the App loads, we should be able to add ideas', async () => {
    APICall.mockResolvedValueOnce([
      {id: 1, title: 'Sweaters for pugs', description: 'To keep them warm'},
      {id: 2, title: 'Film a romcom', description: 'But make it ghosts'},
      {id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'},
    ]);
    APIPost.mockResolvedValueOnce({id: 1584585306565, title: 'Test', description: 'Passes'});
    Date.now = jest.fn().mockImplementation(() => 1584585306565);

    const { getByText, getByPlaceholderText } = render(<App />);

    const titleField = getByPlaceholderText('title')
    const descriptionField = getByPlaceholderText('description')
    const submitNewIdea = getByText('Submit!')

    fireEvent.change(titleField, { target: { value: 'Test' } })
    fireEvent.change(descriptionField, { target: { value: 'Passes' } })
    fireEvent.click(submitNewIdea)

    const backup = await waitFor(() => getByText('Test'));

    expect(backup).toBeInTheDocument();
  });
});
