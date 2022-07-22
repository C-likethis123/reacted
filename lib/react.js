function createElement(type, props, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return {type, props, children};
}

const React = { createElement };
