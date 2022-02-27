import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('Should render Login', () => {
    const { container } = render(<Login />);
    expect(container).toBeDefined();
  });
});
