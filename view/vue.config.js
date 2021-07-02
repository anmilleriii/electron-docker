module.exports = {
    parallel: false,
    pluginOptions: {
        electronBuilder: {
            preload: 'src/preload.js',
            nodeIntegration: true
        }

    },
    devServer: {
        proxy: {
            '^/api': {
                // Different for docker/local?
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    }
}