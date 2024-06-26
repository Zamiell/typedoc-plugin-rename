# typedoc-plugin-rename

## What is this?

This is a plugin for [TypeDoc](https://typedoc.org/) that grants the ability to rename things with the `@rename` JSDoc tag.

For example:

```ts
/**
 * This is a function that does wonderful things.
 * 
 * @rename bar
 */
function foo() {}
```

In the generated documentation, this function would now appear as "bar" instead of "foo".

This kind of thing is useful in situations where your internal variable names do not line up with the names that your end-users will actually import in their code.

## Install

With npm:

```sh
npm install typedoc-plugin-rename --save-dev
```

With yarn:

```sh
yarn add typedoc-plugin-rename --dev
```

## Usage

When executing TypeDoc (with e.g. `npx typedoc`), it will automatically load the plugin (unless you have the "plugin" field explicitly specified in your "typedoc.json" config file).

## Credits

This plugin was originally created by [Gerrit Birkeland](https://github.com/Gerrit0), the creator of TypeDoc.
