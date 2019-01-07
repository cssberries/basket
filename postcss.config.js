const tailwindcss = require("tailwindcss");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const postcssMixins = require("postcss-mixins");
module.exports = {
    plugins: [
        postcssImport(),
        tailwindcss("./tailwind.js"),
        postcssNested(),
        postcssMixins()
    ]
}