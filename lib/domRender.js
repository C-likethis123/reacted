function render(element, parentDom) {
  const type = element.type;
  const props = element.props;
  const children = element.children;

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
const ReactDOM = {render};
