const createReactClass = require('./createReactClass');
test('it renders a plain HTML string to the page', () => {
  const Paragraph = createReactClass({
    render: function() {
      return `<p>Hello, World!</p>`;
    }
  });
  const paragraphComponent = Paragraph();
  expect(paragraphComponent).toBe(`<p>Hello, World!</p>`);
});
});

