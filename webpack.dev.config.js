const path = require("path"),
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    workboxPlugin = require('workbox-webpack-plugin') ,
    WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
    },
    module: {
        rules: [
         
            {
                test: /\.(png|jpg|ttf)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.svg$/,
                use: [
                    'svg-inline-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/env'
                            ],
                            plugins: [
                                'babel-plugin-transform-class-properties'
                            ]

                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]

        }),
        new HTMLWebpackPlugin({
            title: "sheba video player",
            meta: {
                author: "K.T Motshoana",
                applicationName: "sheba video",
                description: "webapp video player with built in keyboard control picture in picture mode autoplay and speed extension up to 5x speed",
                robots: "index,follow",
                googlebot: "index,follow",
                keywords:"sheba video player, K.T motshoana, free online video player"
                
            },
            favicon: path.resolve("src/icons/144x144.png")

        }),
        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
          }),
          new WebpackPwaManifest({
            "short_name": "sheba video player",
            "name": "sheba video",
            "description":"webapp video player with built in keyboard control picture in picture mode autoplay and speed extension up to 5x speed",
            "author": "K.T Motshoana",
            "lang": "en-US",
            "start_url": ".",
            "background_color": "#222",
            "theme_color" :"#006eff",
            "scope": "/",
            "display": "standalone",
            "icons": [
                {
                    "src": path.resolve("src/icons/144x144.png"),
                    "type": "image/png",
                    "sizes": "144x144",
                    "purpose": 'any'
                },
                {
                    "src": path.resolve("src/icons/192x192.png"),
                    "type": "image/png",
                    "sizes": "192x192",
                    "purpose": 'any'
                },
                {
                    "src" : path.resolve("src/icons/512x512.png"),
                    "type": "image/png",
                    "sizes": "512x512",
                    "purpose": 'any'
                }
            ]
           })
    ]
}