const td = require("typedoc");

const JSDOC_TAG_FOR_RENAME = "@rename";

exports.load = function (app) {
  app.converter.on(td.Converter.EVENT_CREATE_DECLARATION, onDeclaration);

  app.on(Application.EVENT_BOOTSTRAP_END, () => {
    const modifiers = app.options.getValue("modifierTags");
    if (!modifiers.includes(JSDOC_TAG_FOR_RENAME)) {
      app.options.setValue("modifierTags", [...modifiers, JSDOC_TAG_FOR_RENAME]);
    }
  });
};

/**
 * @param {td.Context} _context
 * @param {td.Reflection} reflection
 */
function onDeclaration(_context, reflection) {
  const rename = reflection.comment?.getTag(JSDOC_TAG_FOR_RENAME);
  if (rename) {
    reflection.name = td.Comment.combineDisplayParts(rename.content).trim();
    reflection.comment.removeTags(JSDOC_TAG_FOR_RENAME);
  }
}
