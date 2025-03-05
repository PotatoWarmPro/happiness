獨立創建一項目

# `EditorConfig` 用于定义代码风格的文件格式

它可以帮助开发者在不同的编辑器和 IDE 之间保持一致的代码风格。通过在项目根目录下创建一个 .editorconfig 文件，开发者可以指定缩进风格、缩进大小、换行符、字符编码等格式化规则。这样，无论你在哪个编辑器上打开项目，都能自动应用这些规则，从而提高代码的一致性和可读性。许多流行的代码编辑器和 IDE，如 Visual Studio Code、Sublime Text 和 Atom，都支持 EditorConfig。

# yarn.lock 是 Yarn 包管理器的核心配置文件，主要作用有：

1.版本锁定

- 精确记录每个依赖库的具体版本号（如 lodash@4.17.21）
- 固定子依赖（依赖的依赖）的版本
- 覆盖 package.json 中的版本范围符号（如 ^ ~ >） 2.确定性安装
- 确保所有开发者和 CI 环境安装完全相同的依赖树
- 避免因语义化版本更新导致的不兼容问题
- 解决 "在我机器上是好的" 这类环境差异问题 3.依赖树快照
- 记录完整的依赖关系图谱
- 存储每个库的下载地址（registry URL）
- 保存依赖完整性校验码（hash 值） 4.协作规范
- 必须提交到版本控制系统（git）
- 禁止手动修改（由 Yarn 自动维护）
- 更新需通过 yarn add/upgrade 命令操作

# myvue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint 11113333阿斯顿发斯蒂芬
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
