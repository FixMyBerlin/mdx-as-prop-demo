import { MDXProvider } from '@mdx-js/react'
import clsx from 'clsx'
import React from 'react'
import { Link } from '../links/Link'

type Props = {
  markdown?: string | null
  className?: string
}

const MdxH1 = (props: any) => (
  <p className="text-base">
    <strong {...props} />
  </p>
)
const MdxH2 = (props: any) => (
  <p className="text-sm">
    <strong {...props} />
  </p>
)
const MdxH3 = (props: any) => (
  <p className="text-sm">
    <strong {...props} />
  </p>
)
// eslint-disable-next-line react/destructuring-assignment
const MdxAnchor = (props: any) => <Link blank to={props.href} {...props} />

const components = {
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  a: MdxAnchor,
}

export const Markdown: React.FC<Props> = ({ markdown, className }) => {
  if (!markdown) return null

  return (
    <div className={clsx('prose', className)}>
      <MDXProvider components={components}>{markdown}</MDXProvider>
    </div>
  )
}
