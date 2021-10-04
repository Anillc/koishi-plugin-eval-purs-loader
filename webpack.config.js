const path = require('path')

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './require/index.js',
    output: {
        filename: 'require.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'require',
        libraryTarget: 'commonjs',
    },
}