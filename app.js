import React from 'react';
import { createRoot } from 'react-dom/client';

const headings = React.createElement(
    'h1',
    { id: 'headings', xyz: 'abc' },
    'React from hello world🍷⛹️‍♂️'
);
console.log(headings);

const root = createRoot(document.getElementById('root'));
root.render(headings);
