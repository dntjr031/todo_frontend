declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    }
})
