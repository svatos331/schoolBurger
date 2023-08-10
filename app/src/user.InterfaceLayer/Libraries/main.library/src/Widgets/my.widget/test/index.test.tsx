import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import MyWidget from "../index";
import React from 'react';


describe('My widget', () => {
    test('render component', () => {
        render(<MyWidget text='sdfdsf'/>);
        expect(screen.getByTestId('my-widget')).toBeInTheDocument();
    });
});