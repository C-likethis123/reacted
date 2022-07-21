function render(element, parentDom) {
  const domElem = document.createElement(element.type);
  const children = element.props.children || [];
  for (const child of children) {
    render(child, domElem);
  }
  parentDom.append(domElem);
}
