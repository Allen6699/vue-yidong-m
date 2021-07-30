/***
 * 使用 [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
 * 将 `px` 转为 `rem
 * PostCSS 配置文件
 * */
module.exports = {
  plugins: {
    // 配置使用 autoprefixer 插件
    // 作用：生成浏览器 CSS 样式规则前缀
    // VueCLI3.0 内部已经配置了 autoprefixer 插件
    // 所以又配置了一次，所以产生冲突了
    // autoprefixer: {
    // 配置要兼容到的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 配置使用 postcss-pxtorem 插件
    // 作用：把 px 转为 rem
    // vant里面的样式是按375px设计的   设计稿是750px设计的 所以需要分辨不同的根节点基数
    'postcss-pxtorem': {
      // rootValue: 37.5,    // 可以传 number类型 或  function
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
