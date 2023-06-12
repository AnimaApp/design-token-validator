import { validateColor } from "./color.js";
import { validateDimension } from "./dimension.js";
import { validateStrokeStyle } from "./strokeStyle.js";
import { TokenValidator } from "./type.js";

const rule = {
  meta: {
    docs: {
      url: "https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/binding-positions.md",
    },
    messages: {
      noBindingTagName: "Bindings cannot be used in place of tag names.",
      noBindingAttributeName:
        "Bindings cannot be used in place of attribute names.",
      noBindingSelfClosingTag:
        "Bindings at the end of a self-closing tag must be" +
        " followed by a space or quoted",
      noBindingHTMLComment: "Bindings cannot be used inside HTML comments.",
    },
  },
};

export const validateBorder: TokenValidator<"border"> = (value, context) => {
  const { color, style, width } = value;

  const isValidColor = validateColor(color, context);

  if (!isValidColor) {
    return false;
  }

  const isValidStroke = validateStrokeStyle(style, context);

  if (!isValidStroke) {
    return false;
  }

  const isValidWidth = validateDimension(width, context);

  if (!isValidWidth) {
    return false;
  }

  return true;
};
