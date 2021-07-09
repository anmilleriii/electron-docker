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
                    // {
                    //   "from": "eepromStaging",
                    //   "to": "eepromStaging",
                    //   "filter": ["**/*"]
                    // },
                    // {
                    //     from: 'node_modules/json-server/public',
                    //     to: './Resources/public',
                    //     "filter": ["**/*"]
                    // }
                ],
                // preload: 'src/preload.js',
                // externals: ['adm-zip'],
                // asdf
                // extraFiles: ['public/db.json'],
                // extraFiles: ['db.json'],

                // Must copy public directory to /Resources/public since that is where json-server looks for it
                // extraFiles: [
                //     "db.json",
                //     {
                //         "from": "public/",
                //         "to": "public/",
                //         "filter": [
                //             "**/*"
                //         ]
                //     },
                // ],
                // files: [
                //     "**/*"
                //   ],
                //   extraFiles: [
                //     "db.json",
                //   ],

                // "extraFiles": ["db.json", "**/public/**/*"],
                // {from: '../app/', to: '.'}
                // "extraResources": ["/public/**/*"],

                // extraResources: [
                //     {
                //         "from": "public/",
                //         "to": "public/",
                //         "filter": [
                //             "**/*"
                //         ]
                //     },
                // {
                //   "from": "assets/",
                //   "to": "assets/",
                //   "filter": [
                //     "**/*"
                //   ]
                // },
                // {
                //   "from": "accounts/",
                //   "to": "accounts/",
                //   "filter": [
                //     "**/*"
                //   ]
                // }
                // ],
                // extraFiles: {
                //     from: 'public/',
                //     to: 'public/'
                // },
                // "linux": {
                //     "target": "AppImage",
                //     "category": "Utility"
                // }
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