# Design Tokens Validator

Design tokens are becoming more commonplace as a tool to help provide a consistent way of managing design system attributes.

As the number of tools that include design token support increases, so does the importance of ensuring that your design tokens adhere to the [Design Tokens Standard](https://design-tokens.github.io/community-group/format/#introduction).

By having tokens that conform to this standard, you ensure that your tokens will be interoperable across a suite of different design system management platforms, like Anima.

## Getting Started

If you want to validate your tokens online, try out our free online tool: ...

If you want to run this locally then follow the installation instructions

## Automate your entire design system workflow

<!-- Add details about how Anima can solve this for you -->

## TODO

### Additional Features

- [ ] Handle resolution of local design token file
- [ ] Validate JSON file
- [ ] Handle external resolution of a design token file
- [ ] Include link to relevant location in the design system spec
- [ ] Add severity to messages (ERROR + WARN)

### Improvements

- [ ] Move messages over to the messages object. Use string interpolation to add the useful information to the message
- [ ] Don't return early when the validator finds an error, as we can spot many errors in one pass

### Future ideas

- [ ] Support as a VSCode extension
