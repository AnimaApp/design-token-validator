# Design Tokens Validator

Design tokens are becoming more commonplace as a tool to help provide a consistent way of managing design system attributes.

As the number of tools that include design token support increases, so does the importance of ensuring that your design tokens adhere to the [Design Tokens Standard](https://design-tokens.github.io/community-group/format/#introduction).

By having tokens that conform to this standard, you ensure that your tokens will be interoperable across a suite of different design system management platforms, like Anima.

## Getting Started

If you want to validate your tokens online, try out our free online tool: ...

If you want to run this locally then follow the installation instructions

## TODO

### Validation

- [ ] Validate JSON file
- [x] Base validation for every token
- [x] color validation
- [x] dimension validation
- [x] font family validation
- [x] font weight validation
- [ ] duration validation
- [ ] cubic bezier validation
- [ ] number validation
- [ ] stroke style validation
- [ ] border validation
- [ ] transition validation
- [ ] shadow validation
- [ ] gradient validation
- [ ] typography validtion
- [ ] group validation
- [ ] alias validation

### Features

- [ ] Handle resolution of local design token file
- [ ] Handle external resolution of a design token file
- [ ] Handle inline local design token file
- [ ] Include link to relevant location in the design system spec

### Improvements

- [ ] Move messages over to the messages object. Use string interpolation to add the useful information to the message

### Future ideas

- [ ] Support as a VSCode extension