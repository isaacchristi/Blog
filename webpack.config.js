var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
	entry: DIST_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename : "bundle.js",
		publicPath: "/app"
	},
	modules: {
		test: /\.js?/, 
		loaders:[
			'babel-loader',
			prsets['react','stage-2','env']
		],
		test: /\.(png|jpg|jpeg|gif)(\?.*)?$/,
        loaders: [
          'file',
          'image-webpack?' + JSON.stringify({
            bypassOnDebug:true,
            progressive: true,
            optimizationLevel: 7,
            interlaced: true,
            pngquant: {
              quality: "65-90",
              speed: 4
            },
            svgo: {
              removeUnknownsAndDefaults: false,
              cleanupIDs: false
            }
          })
        ]
	}
}

module.exports = config;