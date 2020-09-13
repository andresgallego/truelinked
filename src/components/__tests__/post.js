import React from 'react';
import { render } from '@testing-library/react';

import Post from '../post';

function buildPost(overrides) {
  return {
    title: 'TEST_TITLE',
    body: 'TEST_BODY',
    ...overrides,
  };
}

describe('Posts', () => {
  test('post loads and renders the post information', () => {
    const title = 'Learn super cool things';
    const body = 'Always write tests';

    const post = buildPost({ title, body });

    const { getByText } = render(<Post post={post} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
  });
});
