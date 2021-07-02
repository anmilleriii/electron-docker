module.exports = {
    parallel: false,
    pluginOptions: {
        electronBuilder: {
            preload: 'src/preload.js',
            nodeIntegration: true
        }
    }
}