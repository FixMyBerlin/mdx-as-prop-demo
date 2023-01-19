import clsx from 'clsx'
import React from 'react'
import { linkStyle } from './Link'

type Props = {
  /** @desc: If no `to` given, `children` is used for `tel:` */
  to?: string
  className?: string
  children: React.ReactNode
}

export const TelLink: React.FC<Props> = ({ to, className, children }) => {
  return (
    <a href={`tel:${to || children}`} className={clsx(linkStyle, className)}>
      {children}
    </a>
  )
}
