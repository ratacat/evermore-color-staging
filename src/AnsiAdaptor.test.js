// Jest tests doesn't work due to the bug, when jest is not able to
// import a package namespaced with '#' which is used in the chalk.
// https://github.com/facebook/jest/issues/12309
//
// Error looks like:
//
//    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,
// jest){import ansiStyles from '#ansi-styles';
//       ^^^^^^
// SyntaxError: Cannot use import statement outside a module

// const AnsiAdaptor = require('./AnsiAdaptor.js');

describe('AnsiAdaptor', () => {
  it.todo('enable test when bug is fixed');

  // test('convert turns spans to ansi', () => {
  //   const adaptor = new AnsiAdaptor();
  //   const input   = `<span style="color:#ff0000">this is red</span>`;
  //   const output  = `\x1B[38;2;255;0;0mthis is red\x1B[39m`;
  //   expect(adaptor.convert(input)).toBe(output);
  // });

//   test('covert support nested tags', () => {
//     const adaptor = new AnsiAdaptor();
//     const input  = `white <green>green <blue>blue <yellow>yellow</yellow> blue</blue> <red>red</red> green</green> and white`;
//     const output = `white \x1B[38;2;0;128;0mgreen \x1B[39m\x1B[38;2;0;0;255mblue \x1B[39m\x1B[38;2;255;255;0myellow\x1B[39m\x1B[38;2;0;0;255m blue\x1B[39m\x1B[38;2;0;128;0m \x1B[39m\x1B[38;2;255;0;0mred\x1B[39m\x1B[38;2;0;128;0m green\x1B[39m and white`;
//     expect(adaptor.convert(input)).toBe(output);
//   });
});