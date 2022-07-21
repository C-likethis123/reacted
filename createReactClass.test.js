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

test('component changes according to props', () => {
  const Title = createReactClass({
    render: function() {
      return "<h1>{props.name}</h1>";
    }
  });

  const firstTitle = Title({
    name: "Hello, World!"
  });
  const secondTitle = Title({
    name: "Different Title"
  });
  expect(firstTitle).toBe("<h1>Hello, World!</h1>");
  expect(secondTitle).toBe("<h1>Different Title</h1>");
});

