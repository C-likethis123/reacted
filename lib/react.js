function createElement(type, props, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return {type, props, children};
}

module.exports = { createElement };
