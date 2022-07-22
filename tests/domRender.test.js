/**
 * @jest-environment jsdom
 */
import ReactDOM from '../lib/domRender';
test('it renders textnodes', () => {
  const rootNode = document.createElement("div");
  rootNode.id = "root";
  ReactDOM.render("Hello World!", rootNode);
  expect(rootNode.outerHTML).toBe(`<div id="root">Hello World!</div>`);
});
