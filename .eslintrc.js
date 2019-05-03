module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    /*    "space-before-function-paren": [1, "always"], //函数定义时括号前面要不要有空格
    semi: [2, "always"] //语句强制分号结尾 */
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
