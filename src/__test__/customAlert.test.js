import React from 'react';
import { render } from '@testing-library/react';
import CustomAlert from '../components/CustomAlert';

describe('Custom Alert component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<CustomAlert />);
    expect(getByTestId('custom-alert')).toHaveTextContent(
      'Something went wrong. Please check again.'
    );
  });
});
