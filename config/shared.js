const path = require('path');
const root = path.join(__dirname, '../');

const publicPath = './';
const distPath = path.join(root, '__dist/client');
const testPath = path.join(root, '__test');

module.exports = {distPath, publicPath, testPath};
