import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import {TestDatePicker} from "../story/index.stories";


describe('My DataTimePicker', () => {
    test('render component', () => {
        render(<TestDatePicker onChange={() => {}}/>);
        expect(screen.getByTestId('time-date-picker')).toBeInTheDocument();
    });
});