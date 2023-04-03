import { render, screen, cleanup } from '@testing-library/react';
import RandomJoke from './RandomJoke';

const fakeJoke = {
    icon_url: undefined,
    value: "Chuck Norris mocked joke"
}

afterEach(cleanup);

// beforeEach(() => {
//     fetch.mockClear();
// });

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() => 
        Promise.resolve({
            json: () => Promise.resolve(fakeJoke)
        })
    );
});

test('Show fetched joke', async () => {

    // global.fetch = jest.fn(() => 
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeJoke)
    //     })
    // );

    render(<RandomJoke />);

    const element = await screen.findByText(fakeJoke.value);

    expect(element).toBeInTheDocument;
});