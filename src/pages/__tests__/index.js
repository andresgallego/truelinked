import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

import { useApi } from '../../hooks/useApi';

jest.mock('../../hooks/useApi');

afterEach(() => {
  jest.resetAllMocks();
});

function buildPost(overrides) {
  return [
    {
      title: 'TEST_TITLE',
      body: 'TEST_BODY',
      ...overrides,
    },
  ];
}

describe('Posts', () => {
  test('Calls API and renders view according to response', async () => {
    const userId = 1;
    const id = 2;
    const title = 'Learn super cool things';
    const posts = buildPost({ userId, id, title });

    useApi.mockReturnValue({ data: null });
    render(<Home />);
    expect(screen.getByLabelText('loading')).toBeInTheDocument();
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText('Reload')).not.toBeInTheDocument();

    useApi.mockReturnValue({ data: posts });
    render(<Home />);
    expect(useApi).toHaveBeenCalledWith('/posts');
    expect(useApi).toHaveBeenCalledTimes(2);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.queryByText('Reload')).not.toBeInTheDocument();

    useApi.mockReturnValue({ status: 'error' });
    render(<Home />);
    expect(screen.getByText('Reload')).toBeInTheDocument();
  });
});
