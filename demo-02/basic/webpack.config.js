module.exports = {
    entry: "./index.js",
    output: {
        filename: "./build/bundle.js"
    },
    // module: {
    //     rules: [
    //       { test: /\.txt$/, use: 'raw-loader' }
    //     ]
    //   },
    module:{
        rules:[{
            test: /\.js$/,
            use: "babel-loader"
        }]
    }
};