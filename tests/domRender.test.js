/**
 * @jest-environment jsdom
 */
import ReactDOM from '../lib/domRender';

let rootNode;

beforeEach(() =>{
  rootNode = document.createElement("div");
  rootNode.id = "root";
});

test('it renders textnodes', () => {
  ReactDOM.render("Hello World!", rootNode);
  expect(rootNode.outerHTML).toBe(`<div id="root">Hello World!</div>`);
});

test('it renders elements from virtual DOM', () => {
  const vElem = {
    type: "div",
    children: "Hello",
  };
  ReactDOM.render(vElem, rootNode);
  expect(rootNode.outerHTML).toBe(`<div id="root"><div>Hello</div></div>`);
});
