import { Chalk } from "chalk";

const chalk = new Chalk({ level: 3 });

export class AnsiAdaptor {
  convert(string) {
    // Store converted text.
    let result = '';
  
    // Since the color modification is defined in that start of the tag
    // but it should be applied to the whole string including nested tags
    // (basically the previous style should be stored), array is used to
    // store this modifications. They will be added when according tag is
    // reached, and applied when a termination tag is reached.
    const tags = new Array();
    
    // Since it is possible that tags could go one after another in text
    // or in the parent tag, position of the scanned string should be stored.
    let scanned = 0; 
  
    while (true) {
      // Find the tag start.
      const tagStart = string.indexOf('<', scanned);
  
      // No more tags in the string, write down what is left and over.
      if (tagStart < 0) {
        result += string.slice(scanned);
        break;
      }
  
      // Tag is in the string, get the tag text.
      const tagEnd = string.indexOf('>', tagStart);
      const tag = string.slice(tagStart, tagEnd + 1);
  
      // On termination tag.
      if (tag === '</span>') {
        // Get stored modificator and apply to scanned text.
        const mod = tags.pop();
        result += mod(string.slice(scanned, tagStart));
      }
  
      // On color tag.
      if (tag.slice(0,19) === '<span style="color:') {
        // Define the modification.
        const color = tag.slice(19, tag.indexOf("\"", 19));
        const mod = chalk.hex(color);
  
        // Add scanned text with parent color if exists.
        result += tags.length > 0 
          ? tags[tags.length - 1](string.slice(scanned, tagStart))
          : string.slice(scanned, tagStart);
  
        // Save the parsed mod to be used when terminator is reached.
        tags.push(mod);
      }
  
      // Update a position to be able to continue.
      scanned = tagEnd + 1;
    }
  
    return result;
  };
};