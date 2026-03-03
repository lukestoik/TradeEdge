// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TradeEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TradeEdge/i);
    expect(titleElement).toBeInTheDocument();
});
