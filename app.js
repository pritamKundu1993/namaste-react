const headings = React.createElement(
    'h1',
    { id: 'headings', xyz: 'abc' },
    'React from hello world'
);
console.log(headings);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headings);
