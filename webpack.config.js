const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify'),
            process: require.resolve('process/browser')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser'
        }),
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
            const mod = resource.request.replace(/^node:/, '');
            switch (mod) {
                case 'fs':
                    resource.request = 'fs';
                    break;
                case 'buffer':
                    resource.request = 'buffer';
                    break;
                case 'stream':
                    resource.request = 'stream-browserify';
                    break;
                default:
                    throw new Error(`Module not found: ${mod}`);
            }
        })
    ]
};