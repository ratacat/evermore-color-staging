const ColorAdaptor = require("./ColorAdaptor.js");

describe('ColorAdaptor', () => {
  test('stripTags', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<root>text<color> colored with <c="#000">black</c> <g="red,white,green">and gradient</g></color> is now plane</root>`;
    const output = `text colored with black and gradient is now plane`;
    expect(adaptor.stripTags(input)).toBe(output);
  });

  test('lengthOfColorChars', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<root>text<color> colored with <c="#000">black</c> <g="red,white,green">and gradient</g></color> is now plane</root>`;
    const output = `text colored with black and gradient is now plane`;
    expect(adaptor.lengthOfColorChars(input)).toBe(input.length - output.length);
  });

  test('convert turns color names to hex', () => {
    let input  = `
      <red>red</red>
      <green>green</green>
      <white>white</white>
      <pink>pink</pink>
      <yellow>yellow</yellow>
    `;

    let output = `
      <span style="color:#ff0000">red</span>
      <span style="color:#008000">green</span>
      <span style="color:#ffffff">white</span>
      <span style="color:#ffc0cb">pink</span>
      <span style="color:#ffff00">yellow</span>
    `;

    const adaptor = new ColorAdaptor();
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert with simple tags', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<dodgerblue>warrior</dodgerblue> of <yellow>light</yellow>`;
    const output = `<span style="color:#1e90ff">warrior</span> of <span style="color:#ffff00">light</span>`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert with short tags', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<c='gainsboro'>warrior</c> of <c='lavender'>darkness</c>`;
    const output = `<span style="color:#dcdcdc">warrior</span> of <span style="color:#e6e6fa">darkness</span>`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert with medium tags', () => {
    const adaptor = new ColorAdaptor();
    const input  = `An <color='#6e6e6e'>ominous obsidian</color> <color='violet'>spire</color> protects the cavern.`;
    const output = `An <span style="color:#6e6e6e">ominous obsidian</span> <span style="color:#ee82ee">spire</span> protects the cavern.`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert with full tags', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<color value="#35ca07">A Mossy Cavern</color>`;
    const output = `<span style="color:#35ca07">A Mossy Cavern</span>`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert gradients with short notation', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<g="red,#444,red">Blade of the Ebon Hand</g>`;
    const output = `<span style="background:linear-gradient(to right,#ff0000,#444,#ff0000)" class="text-gradient">Blade of the Ebon Hand</span>`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert gradients with medium notation', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<gradient="#444,red,#444">Static Blood Dagger</gradient>`;
    const output = `<span style="background:linear-gradient(to right,#444,#ff0000,#444)" class="text-gradient">Static Blood Dagger</span>`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert gradients with attributic notation', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<g colors="green,red,green" scroll="true">Blade of Christmas</g>`;
    const output = `<span style="background:linear-gradient(to right,#008000,#ff0000,#008000)" class="text-gradient text-gradient-animate">Blade of Christmas</span>`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert gradients with full notation', () => {
    const adaptor = new ColorAdaptor();
    const input  = `<gradient colors="magenta,green,magenta" scroll="true">Magical Talisman of the Forest</gradient>`;
    const output = `<span style="background:linear-gradient(to right,#ff00ff,#008000,#ff00ff)" class="text-gradient text-gradient-animate">Magical Talisman of the Forest</span>`;
    expect(adaptor.convert(input)).toBe(output);
  });

  test('convert process nested tags', () => {
    const input  = `<green>A small <c="#FFDAB9">house</c> is nestled in amongst the <color value="#808080">birch</color>`
      + `<g="blue,white,pink">trees</g>. It's roof line sags slightly beneath years of <c="chartreuse">moss</c>`
      + `trees and a small layer of soil. There are tulips growing under the shuttered window next to the door.</green>`

    const output  = `<span style="color:#008000">A small <span style="color:#FFDAB9">house</span>`
      + ` is nestled in amongst the <span style="color:#808080">birch</span>`
      + `<span style="background:linear-gradient(to right,#0000ff,#ffffff,#ffc0cb)" class="text-gradient">trees</span>.`
      + ` It's roof line sags slightly beneath years of <span style="color:#7fff00">moss</span>`
      + `trees and a small layer of soil. There are tulips growing under the shuttered window next to the door.</span>`
    
    const adaptor = new ColorAdaptor();
    expect(adaptor.convert(input)).toBe(output);
  });
});
