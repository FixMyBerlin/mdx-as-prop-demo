/* eslint-disable react/no-danger */
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Markdown } from '../Markdown'

type Props = {
  data: Queries.IndexPageQuery['allMdx']['nodes'][number] | undefined
  children: React.ReactNode
}

export const CmsTeaser: React.FC<Props> = ({ data, children }) => {
  if (!data || !data.body || !data.frontmatter || !data.frontmatter?.href) return null
  const {
    frontmatter: { componentId, title, image },
  } = data

  const gatsbyImage =
    image?.childImageSharp?.gatsbyImageData && getImage(image?.childImageSharp?.gatsbyImageData)

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg" data-cmd-id={componentId}>
      <div className="flex-shrink-0">
        {gatsbyImage && (
          <GatsbyImage image={gatsbyImage} className="h-48 w-full object-cover" alt="" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="mt-2 text-xl font-semibold text-gray-900">{title}</p>

          <hr className="my-10" />
          <h2 className="text-xl font-semibold">
            Render <code>children</code> which are the component{' '}
            <code>import Content from ../../content/home/teaser1.mdx</code>
          </h2>
          <p className="mt-3 text-base text-gray-500">{children}</p>

          <hr className="my-10" />
          <h2 className="text-xl font-semibold">
            Render <code>data.body</code> given by GraphQL
          </h2>
          <p className="mt-3 text-base text-gray-500">{data.body}</p>
          <h2 className="mt-3 text-xl">
            Render <code>data.body</code> given by GraphQL with <code>dangerouslySetInnerHTML</code>
          </h2>
          <p
            className="mt-3 text-base text-gray-500"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
          <h2 className="mt-3 text-xl">
            Render <code>data.body</code> given by GraphQL with <code>JSON.stringify</code>
          </h2>
          <pre className="mt-3 text-base text-gray-500">{JSON.stringify(data.body)}</pre>

          <hr className="my-10" />
          <h2 className="text-xl font-semibold">
            Render <code>data.body</code> given by GraphQL, piped through <code>MDXProvider</code>
          </h2>
          <p className="mt-3 text-base text-gray-500">
            <Markdown markdown={data.body} />
          </p>
        </div>
      </div>
    </div>
  )
}
