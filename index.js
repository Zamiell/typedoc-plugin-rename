const typedoc = require("typedoc");

const JSDOC_TAG_FOR_RENAME = "@rename";

exports.load = function (application) {
  application.converter.on(typedoc.Converter.EVENT_CREATE_DECLARATION, onDeclaration);

  application.on(typedoc.Application.EVENT_BOOTSTRAP_END, () => {
    const modifiers = application.options.getValue("modifierTags");
    if (!modifiers.includes(JSDOC_TAG_FOR_RENAME)) {
      application.options.setValue("modifierTags", [...modifiers, JSDOC_TAG_FOR_RENAME]);
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
    reflection.name = typedoc.Comment.combineDisplayParts(rename.content).trim();
    reflection.comment.removeTags(JSDOC_TAG_FOR_RENAME);
  }
}
