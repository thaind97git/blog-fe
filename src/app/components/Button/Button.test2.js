import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './index';

afterEach(cleanup);

describe('This will test Button component', () => {
  test('renders message', () => {
    const { getByText } = render(
      <Button firstName="Alejandro" lastName="Roman" />,
    );

    expect(getByText('Click here'));
  });
});
