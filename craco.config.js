const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    babel: {
        plugins: [
            ['import', {'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': true}, 'antd'],
            ['@babel/plugin-proposal-decorators', {'legacy': true}],
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#3676fe'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoLessPlugin,
            options: {
                modifyLessRule: function (lessRule, _context) {
                    lessRule.test = /\.(module)\.(less)$/;
                    lessRule.exclude = /node_modules/;

                    return lessRule;
                },
                cssLoaderOptions: {
                    modules: {localIdentName: '[local]_[hash:base64:5]'},
                },
            },
        },
    ],
    // devServer: {
    //     proxy: {
    //         '/api': { // 这个是你要替换的位置
    //             target: 'http://10.244.6.92:8088', // 这个是被替换的目标地址
    //             secure: true, // 接受对方是https的接口
    //             changeOrigin: true, // 是否需要跨域
    //             pathRewrite: {'^/api': ''},
    //         },
    //     },
    // },
};