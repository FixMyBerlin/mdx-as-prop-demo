import { graphql, HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { CmsTeaser } from '~/components/Teaser/CmsTeaser'
import Content from '../../content/home/teaser1.mdx'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <Content />

      <section className="flex gap-3">
        <CmsTeaser
          data={data.allMdx.nodes.find((e) => e?.frontmatter?.componentId === 'home/teaser1')}
        >
          <Content />
        </CmsTeaser>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <MetaTags title="Homepage" />

export const pageQuery = graphql`
  query IndexPage {
    allMdx {
      nodes {
        body
        frontmatter {
          componentId
          title
          href
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
