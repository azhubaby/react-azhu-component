export const imports = {
  'doc/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-button" */ 'doc/button.mdx'
    ),
  'doc/icon.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-icon" */ 'doc/icon.mdx'
    ),
  'doc/layout.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-layout" */ 'doc/layout.mdx'
    ),
}
