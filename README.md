# typedoc-plugin-rename

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
