import clsx from 'clsx'
import React from 'react'
import { linkStyle } from './Link'

type Props = {
  /** @desc: If no `to` given, `children` is used for `mailto:` */
  to?: string
  subject?: string
  className?: string
  children: React.ReactNode
}

export const MailLink: React.FC<Props> = ({ to, subject, className, children }) => {
  const url = new URL(`mailto:${to || children}`)
  if (subject) {
    url.searchParams.append('subject', subject)
  }

  return (
    <a href={url.href} className={clsx(linkStyle, className)}>
      {children}
    </a>
  )
}
