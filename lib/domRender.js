function render(element, parentDom) {
  if (typeof(element) === "string") {
    parentDom.append(document.createTextNode(element));
    return;
  }
  const type = element.type;
  const props = element.props;
  const children = element.children;

  if (typeof(type) === "function") {
    render(type(props), parentDom);
  } else {
    const elemDom = document.createElement(type);

    if (props) {
      for (const prop in props) {
        elemDom[prop] = props[prop];
      }
    }
    if (children) {
      for (const child of children) {
        render(child, elemDom);
      }
    }
    parentDom.appendChild(elemDom);
  }
}
const ReactDOM = {render};
