import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('Should render LoginPage', () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeDefined();
  });
});
