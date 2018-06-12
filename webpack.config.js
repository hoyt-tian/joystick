const path = require('path')
const html = require('html-webpack-plugin')
const process = require('process')

const config = {}

if (process.env.NODE_ENV !== 'production') {
    Object.assign(config, {
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        entry: {
          'index': './src/index.js',
          'example': './examples/index.js',
        },
        module: {
          rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader' // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader' // translates CSS into CommonJS
                        }
                    ],
                    
                },
                {
                    test: /\.less$/,
                    use: [{
                      loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                      loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                      loader: 'less-loader', options: { javascriptEnabled: true } 
                    }]
                  },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'examples')],
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0'],
                    }
                }
            ]
        },
        plugins: [
          new html({
            inject: true,
            title: 'Example',
            template: 'examples/index.ejs',
            filename: 'index.html',
            chunks: ['example']
        })
        ],
        devServer: {
            host: "0.0.0.0", //本机的局域网ip
            open: true //是否运行成功后直接打开页面
        }
    })
} else {
    const MinifyPlugin = require("babel-minify-webpack-plugin")
    Object.assign(config, {
        output: {
            path: path.resolve(__dirname, 'lib'),
            filename: '[name].js',
            library: 'Joystick',
        },
        entry: {
          'index': './src/index.js',
        },
        module: {
          rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader' // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader' // translates CSS into CommonJS
                        }
                    ],
                    
                },
                {
                    test: /\.less$/,
                    use: [{
                      loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                      loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                      loader: 'less-loader', options: { javascriptEnabled: true } 
                    }]
                  },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'examples')],
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0'],
                    }
                }
            ]
        },
        plugins: [
            new MinifyPlugin()
        ],
    })
}

module.exports = config