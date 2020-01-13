const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
const pxtoviewport = require("postcss-px-to-viewport-opt")
// const cssnext = require("postcss-cssnext")
const tsImportPluginFactory = require('ts-import-plugin')


module.exports = {
    productionSourceMap: false,
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    configureWebpack: config=>{
        // if (env === 'production') {
        //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        //     config.plugins.push(compress)
        // }
        // config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
       //tsImportPluginFactory按需引入vant还有vant的less，还要npm install less和less-loader
       //引入后就和原来一样了
        config.module.rules.push(  
             {
                test: /\.(jsx|tsx|js|ts)$/,
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  getCustomTransformers: () => ({
                    before: [ tsImportPluginFactory( {
                        libraryName: 'vant',
                        libraryDirectory: 'es',
                        style: name => `${name}/style/less` // 配置vant主题文件
                      })]
                  }),
                  compilerOptions: {
                    module: 'es2015'
                  }
                },
                exclude: /node_modules/
              })
            
             
            
        
        
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/Api'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@utils', resolve('src/utils'))
            .set('@store', resolve('src/store'))
       
            
    },
    css: {
        loaderOptions: {
            // css: {
            //     // options here will be passed to style-loader
            //     extract: true
            // },

            postcss: {
                plugins: [
                    pxtoviewport({
                        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
                        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
                        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                        mediaQuery: false, // 允许在媒体查询中转换`px`
                        exclude: /(\/|\\)(node_modules)(\/|\\)/
                       
                    }),
                   
                    
                ]
            }
        }
    },
}