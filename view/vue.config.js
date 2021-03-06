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

                // Mac is only dev
                // "mac": {
                //     "target": [
                //         "dmg",
                //         "zip"
                //     ],
                //     "category": "public.app-category.developer-tools",
                //     "hardenedRuntime": true,
                //     // "entitlements": "dist_electron/entitlements.mac.plist",
                //     // "entitlementsInherit": "dist_electron/entitlements.mac.plist"
                // },
                publish: ['github']
                // export GH_TOKEN=TOKEN-GOES-HERE
                // export GH_TOKEN=
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