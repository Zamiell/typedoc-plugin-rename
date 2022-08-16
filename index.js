// This plugin was created by Gerrit, the creator of TypeDoc.

// typedoc --plugin ./plugins/rename.js
const td = require("typedoc");

exports.load = function (app) {
    app.converter.on(td.Converter.EVENT_CREATE_DECLARATION, onDeclaration);
};

/**
 * @param {td.Context} _context
 * @param {td.Reflection} reflection
 */
function onDeclaration(_context, reflection) {
    const rename = reflection.comment?.getTag("@rename");
    if (rename) {
        reflection.name = td.Comment.combineDisplayParts(rename.content).trim();
        reflection.comment.removeTags("@rename");
    }
}
