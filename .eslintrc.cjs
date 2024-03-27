module.export = {
  extends: ['tc-react'],
  parserOptions: {
    requireConfigFile: false,
  },
  settings: {
    react: {
      version: '999.999.999', // 因为使用的是react的规则，要把eslint的react规则禁用掉
    },
  },
  rule: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
