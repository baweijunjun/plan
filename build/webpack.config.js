const path = require('path');
const webpack = require('webpack');
module.exports={
    mode:'development',
    entry:{
        bundle:path.resolve(process.cwd(),'src/main.js')
    },
    output:{
        path:path.resolve(process.cwd(),'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.(css)$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[new webpack.HotModuleReplacementPlugin()],
    devServer:{
        port:8888,
        hot:true,
        historyApiFallback:true,
        open:true,
        quiet:true
    }
}