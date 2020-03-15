import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders button', () => {
	const {getByRole} = render(<App />);
	const linkElement = getByRole('button');
	expect(linkElement).toBeInTheDocument(); 
});

it('renders button text', () => {
	const {getByRole} = render(<App />);
	const linkElement = getByRole('button');
	expect(linkElement).toHaveTextContent("Change word"); 
});

it('fires onClick when button clicked', () => {
	const {getByRole, getByLabelText} = render(<App />);
	const linkElement = getByRole('button');
	const textElement = getByLabelText('text');
	fireEvent.click(linkElement);
	expect(textElement).toHaveTextContent("koufax");
})

it('renders text', () => {
	const {getByLabelText} = render(<App />);
	const linkElement = getByLabelText('text');
	expect(linkElement).toHaveTextContent("bark"); 
});

it('text shows bark after two clicks', () => {
	const {getByRole, getByLabelText} = render(<App />);
	const linkElement = getByRole('button');
	const textElement = getByLabelText('text');
	fireEvent.click(linkElement);
	fireEvent.click(linkElement);
	expect(textElement).toHaveTextContent("bark");
})


