// Browser development webpack config — mocks Electron APIs and Node built-ins
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    target: 'web',
    entry: `${__dirname}/src/renderer/main_d.ts`,
    output: {
      path: `${__dirname}/public/bundle/`,
      filename: "main.js"
    },
    module: {
        rules: [
          { test: /\.ts$/, use: 'ts-loader' },
          { test: /\.js$/, use: 'babel-loader' },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'electron': path.resolve(__dirname, 'src/renderer/electron-mock.ts'),
        },
        fallback: {
            'fs': false,
            'os': false,
            'path': false,
            'util': false,
        },
    },
    plugins: [
        // Provide browser-compatible stubs for Node modules used via require()
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        // Intercept require() calls for Node built-ins with browser stubs
        new webpack.NormalModuleReplacementPlugin(
            /^(fs|os|path|util)$/,
            (resource) => {
                const mod = resource.request;
                resource.request = path.resolve(__dirname, `src/renderer/node-stubs/${mod}.ts`);
            }
        ),
    ],
};
