const chalk = require("chalk");
const colourNameToHex = require("./colorNameToHex");
const ctx = new chalk.Instance({ level: 3 });
/**
 *  hexRegexSix = /\[#(([a-fA-F0-9]){6});?\b/
    hexRegexThree = /\[#(([a-fA-F0-9]){3})\;?\b/
 */

class ColorAdaptor {
  constructor() {
    this.simpleTagList = colors;
    this.simpleTagRegex = this.buildSimpleTagRegex(colors);
    this.colorTagRegex = /<(?:c|color)=['"](#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}|[aA-zZ]+?)['"]>(.+?)<\/(?:c|color)>/g;
    this.styRegex = /[\u001b](\[\d{1,2}m)/g;
    this.gradientRegex = /<(gradient|g)( colors)?="(.+?)"( scroll="(.+?)")?>(.+)<\/(gradient|g)>/gi;
  }

  convertToChalk(string) {
    const simple = this.convertSimpleTags(string);
    return string.replace(this.colorTagRegex, (match, p1, p2, offset, simple) => {
      return `{${p1} ${p2}}`;
    });
  }

  convert(string) {
    return this.convertColorTags(this.convertSimpleTags(string));
  }

  convertSimpleTags(string) {
    return string.replace(this.simpleTagRegex, (match, p1, p2, offset, string) => {
      return `<color value="${p1}">${p2}</color>`;
    });
  }

  convertColorTags(string) {
    return string.replace(this.colorTagRegex, (match, p1, p2, offset, string) => {
      return `<color value="${p1}">${p2}</color>`;
    });
  }

  buildSimpleTagRegex(colors) {
    const regex = new RegExp("<(" + colors.reduce((pv, cv, i, array) => pv + "|" + cv) + ")>(.+?)</\\1>", "g");
    return regex;
  }

  stripTags(string) {
    return string
      .replace(this.simpleTagRegex, "")
      .replace(this.colorTagRegex, "")
      .replace(this.styRegex, "")
      .replace(this.gradientRegex, "");
  }
}

module.exports = ColorAdaptor;

const colors = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
  "orange",
  "aliceblue",
  "antiquewhite",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "blanchedalmond",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "limegreen",
  "linen",
  "magenta",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "oldlace",
  "olivedrab",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "whitesmoke",
  "yellowgreen",
  "rebeccapurple",
];
