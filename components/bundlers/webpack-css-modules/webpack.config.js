const path = require('path');
const babelPresetEnv = require('@babel/preset-env');
const babelPresetReact = require('@babel/preset-react');
const babelPresetTypescript = require('@babel/preset-typescript');
const babelPluginModuleResolver = require('babel-plugin-module-resolver');

//indirect 
require('babel-loader');
require('@babel/core');
require('style-loader');
require('css-loader');
require('sass-loader');
require('less-loader');
require('node-sass');
require('json-loader');
require('url-loader');

const nodeExternals = require('webpack-node-externals');
const PACKAGE_TYPE = 'umd';

const configure = () => {
    return {
        output: {
            filename: '[name].js',
            libraryTarget: PACKAGE_TYPE,
        },
        module: { 
            rules: [{
                test: /.((ts|js)x?)$/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [babelPresetEnv, [babelPresetReact, { "pragma": "Taro.createElement" }], [babelPresetTypescript, { "jsxPragma": "Taro" }]],
                    plugins: [
                        [
                            babelPluginModuleResolver,
                            {
                                "root": [
                                    "."
                                ],
                                "alias": {
                                    "@tarojs/taro": "react",
                                    "@tarojs/components": "@kokoro/tarojs-react-components"
                                }
                            }
                        ]
                    ]
                }
            }, {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        import: true,
                        modules: true,
                    }
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        import: true,
                        modules: true,
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        import: true,
                        modules: true,
                    }
                }, {
                    loader: "less-loader" // compiles Sass to CSS
                }]
            },
            
    
            // "url" loader works just like "file" loader but it also embeds
            // assets smaller than specified size as data URLs to avoid requests.
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }]
        },

        externals: [ nodeExternals({
            importType: PACKAGE_TYPE
        }) ]
    };
}

export default configure;