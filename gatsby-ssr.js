// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/#editing-html-and-body
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'de' })
}
