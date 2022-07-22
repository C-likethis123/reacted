// Get an element by id
const domRoot = document.getElementById("root");

const element = <div id="container">
  <input type="text" value="foo" />
  <a href="/bar" />
  <span></span>
</div>;

ReactDOM.render(element, domRoot);
