const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'BUTTON',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'D:\\code\\project\\react-azhu-component\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Azhu Btn',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\code\\project\\react-azhu-component',
          templates:
            'D:\\code\\project\\react-azhu-component\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\code\\project\\react-azhu-component\\.docz',
          cache: 'D:\\code\\project\\react-azhu-component\\.docz\\.cache',
          app: 'D:\\code\\project\\react-azhu-component\\.docz\\app',
          appPackageJson:
            'D:\\code\\project\\react-azhu-component\\package.json',
          gatsbyConfig:
            'D:\\code\\project\\react-azhu-component\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\code\\project\\react-azhu-component\\gatsby-browser.js',
          gatsbyNode: 'D:\\code\\project\\react-azhu-component\\gatsby-node.js',
          gatsbySSR: 'D:\\code\\project\\react-azhu-component\\gatsby-ssr.js',
          importsJs:
            'D:\\code\\project\\react-azhu-component\\.docz\\app\\imports.js',
          rootJs:
            'D:\\code\\project\\react-azhu-component\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\code\\project\\react-azhu-component\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\code\\project\\react-azhu-component\\.docz\\app\\index.html',
          db: 'D:\\code\\project\\react-azhu-component\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
