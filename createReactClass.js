const createReactClass = function(methods) {
  return {
    render: methods.render,
  }
}

module.exports = createReactClass;
