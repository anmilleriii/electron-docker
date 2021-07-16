module.exports = {
    parallel: false,
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            externals: ['json-server'],
            builderOptions: {
                "appId": "view",
                "productName": "view",
                files: [
                    "**/*"
                ],
                extraResources: [
                    "src/db.json",
                ],
                "linux": {
                    "target": "AppImage",
                    "category": "Utility"
                },
                publish: ['github']
                // export GH_TOKEN=TOKEN-GOES-HERE
                // npm run electron:build -- -p always
            }
        }
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    }
}