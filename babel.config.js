module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 配置vant组件库 babel-plugin-import插件 自动按需引入组件
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
