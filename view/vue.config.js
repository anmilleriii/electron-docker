module.exports = {
    parallel: false,
    pluginOptions: {
        electronBuilder: {
            preload: 'src/preload.js',
            nodeIntegration: true,
            // asdf
            extraResources: ['src/db.json'],


            
            "appId": "remi.ffly",
            "productName": "REMI",
            "author": "Al Miller <albert.miller@fireflyautomatix.com & Ryan Aposhian <ryan.aposhian@fireflyautomatix.com>",
            "license": "_",
            "copyright": "FireFly Automatix, Inc.",
            "linux": {
              "target": "AppImage",
              "category": "Utility"
            }
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