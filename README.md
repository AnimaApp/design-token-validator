# Design Tokens Validator

Design tokens are becoming more commonplace as a tool to help provide a consistent way of managing design system attributes.

As the number of tools that include design token support increases, so does the importance of ensuring that your design tokens adhere to the [Design Tokens Standard](https://design-tokens.github.io/community-group/format/#introduction).

By having tokens that conform to this standard, you ensure that your tokens will be interoperable across a suite of different design system management platforms, like Anima.

With the _Design Tokens Validator_ you can check whether your design tokens adhere to this standard, and how you can improve your tokens to ensure that they do

## Getting Started

If you want to validate your tokens online, try out our free [Design Tokens Validator](https://animaapp.github.io/design-token-validator-site/).

If you want to run this locally then:

1. Install the package in your project:

```bash
npm i @animaapp/design-tokens-validator
```

2. Import `validate` into your file:

```javascript
import { validate } from "@animaapp/design-tokens-validator";
```

3. Pass through your design tokens as a JavaScript object

```javascript
const tokens = {
  brand: {
    $description: "Design tokens from our brand guidelines",
    color: {
      $description: "Our brand's primary color palette",
      "acid green": {
        $value: "#00ff66",
      },
      "hot pink": {
        $value: "#dd22cc",
      },
    },
  },
};

const errors = validate(tokens);
```

4. Print out your errors to the console:

```javascript
console.log(errors);
```

## Automate your entire design system workflow

This is just one of many tools created by Anima to help designers and developer improve their design system workflow.

Check out [Anima](https://preview-www.animaapp.com/lp/design-token-automation?_storyblok=320565875&_storyblok_c=page&_storyblok_tk%5Bspace_id%5D=89137&_storyblok_tk%5Btimestamp%5D=1686212010&_storyblok_tk%5Btoken%5D=19820a1b10c94f3101ac5faa21c9df0e045887b9&_storyblok_version&_storyblok_lang=default&_storyblok_release=0) if you'd like to:

- Convert styles to design tokens inside Figma
- Push generated tokens directly to GitHub
- Pull code updates back into Figma

## TODO

- [ ] Ensure no invalid properties exist in a $value

### Additional Features

- [ ] Handle resolution of local design token file
- [ ] Validate JSON file
- [ ] Handle external resolution of a design token file
- [ ] Include link to relevant location in the design system spec
- [ ] Add severity to messages (ERROR + WARN)
- [ ] Automatically fix common issues

### Improvements

- [ ] Don't return early when the validator finds an error, as we can spot many errors in one pass

### Future ideas

- [ ] Support as a VSCode extension
