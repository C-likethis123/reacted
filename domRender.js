function render(element, parentDom) {
  const props = element.props;
  const type = element.type;
  const domElem = document.createElement(type);
  for (const prop in props) {
    if (prop.startsWith("on")) {
      const listener = prop.toLowerCase().substring(2);
      domElem.addEventListener(listener, props[prop]);
    } else if (prop !== "children") {
      domElem[prop] = props[prop];
    }
  }
  const children = props.children || [];
  for (const child of children) {
    render(child, domElem);
  }
  parentDom.append(domElem);
}
