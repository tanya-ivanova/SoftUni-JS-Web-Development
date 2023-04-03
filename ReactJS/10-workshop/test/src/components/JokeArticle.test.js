import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import JokeArticle from './JokeArticle';


function wait(time) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });

    return promise;
}

afterEach(cleanup);

// test('Base test', async () => {
//     const value = 'Chuck Norris';
//     const container = document.createElement('div');
//     document.body.appendChild(container);
//     const root = ReactDOM.createRoot(container);
    
//     act(() => {
//         root.render(<JokeArticle text={value} />);
//     });
//     //await wait(200);

//     const actual = document.querySelector('.joke-text').textContent;
    
//     expect(value).toEqual(actual);
// });

test('Test using testing library', () => {
    const value = 'Chuck Norris';

    render(<JokeArticle text={value} />);

    expect(screen.getByText(value)).toBeInTheDocument();
});