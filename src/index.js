import ColorAdaptor from './ColorAdaptor';

const asyncParse = text => new Promise(resolve => {
  const colorAdaptor = new ColorAdaptor();
  text = colorAdaptor.convert(text);
  resolve(text);
});


// Read all files form `library` folder as plain text.
(ctx => {
  const keys   = ctx.keys();
  const values = keys.map(ctx);

  keys.forEach((key, i) => {
    const name = key.slice(2);

    // Get text content of a file. Webpack imports it as a module, and the
    // content itself exported as a default export of the module.
    const text = values[i].default;

    // Parse each file asynchronously and then render them to document body
    asyncParse(text).then(result => {
      const header = document.createElement('h3');
      header.innerHTML = name;

      const content = document.createElement('p');
      content.innerHTML = result;
      
      const elem = document.createElement('div');
      elem.appendChild(header);
      elem.appendChild(content);

      document.body.appendChild(elem);      
    });
  });

})(require.context('../library', true, /^.*\.txt$/));