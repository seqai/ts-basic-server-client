const path = require('path');
const root = (__path) => path.join(__dirname, __path);

const entries = {
    polyfill: root('../src/client/polyfill'),
    vendor: root('../src/client/vendor'),
    main: root('../src/client/main')
};

module.exports = {path, root, entries};
