const createReactClass = function(methods) {
  return (props) => {
    if (!props) {
      props = {}
    }

    let componentTemplate = methods.render();
    for (const prop in props) {
      componentTemplate = componentTemplate.replace(`{props.${prop}}`, props[prop]);
    }
    return componentTemplate;
  }
}

module.exports = createReactClass;
