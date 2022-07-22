import React from '../dist/react';
import ReactDOM from '../dist/domRender';

// Get an element by id
const domRoot = document.getElementById("root");

const Test = (props) => <div>{props.title}</div>;

const element = <div id="container">
  <input type="text" value="foo" />
  <Test title="Hello World"></Test>
  <a href="/bar" />
  <span></span>
</div>;

ReactDOM.render(element, domRoot);
