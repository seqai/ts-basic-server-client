const development = require("./development");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { entry, output, devtool, resolve, module, plugins } = development;

module.exports = {
    entry,
    output,
    resolve,
    module,
    plugins: [
        ...plugins,
        new UglifyJSPlugin()
    ]
}