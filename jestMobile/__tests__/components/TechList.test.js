import React from 'react';

import TechListApp from '../../src/components/TechListApp';

import {render, fireEvent} from '@testing-library/react-native';

describe('TechList', () => {
  it('should be able to add new tech', () => {
    const {getByText, getByTestId} = render(<TechListApp />);

    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByText('Add'));

    expect(getByText('Node.js')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
