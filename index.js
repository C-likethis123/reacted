// Get an element by id
const domRoot = document.getElementById("root");
const element = {
  type: "div",
  props: {
    id: "container",
    onMouseOver: () => console.log("test"),
    children: [
      { type: "input", props: { value: "foo", type: "text" } },
      { type: "a", props: { href: "/bar" } },
      { type: "span", props: {} }
    ]
  }
};

render(element, domRoot);
