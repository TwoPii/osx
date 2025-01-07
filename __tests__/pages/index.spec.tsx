import Home from '@/pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('renders index page', () => {
    const { getByText } = render(<Home />);
    const helloWorldElement = getByText('Hello, world!');

    expect(helloWorldElement).toBeInTheDocument();
});
