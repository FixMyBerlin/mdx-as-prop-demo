import clsx from 'clsx'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export type LinkProps = {
  to: string
  className?: string
  newWindow?: boolean
  button?: boolean
  external?: boolean
  children: React.ReactNode
}

export const linkStyle = 'underline-offset-4 hover:underline text-rsv-blau'
export const buttonStyle =
  'inline-flex items-center justify-center rounded-md py-2 px-4 text-sm border border-rsv-pink bg-white hover:bg-rsv-pink hover:text-white hover:no-underline'

export const Link: React.FC<LinkProps> = ({
  to,
  className,
  newWindow = false,
  external = false,
  button,
  children,
}) => {
  if (newWindow || external) {
    return (
      <a
        href={to}
        className={clsx(button ? buttonStyle : linkStyle, className)}
        {...(newWindow && { target: '_blank' })}
        {...((newWindow || external) && { rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={to} className={clsx(button ? buttonStyle : linkStyle, className)}>
      {children}
    </GatsbyLink>
  )
}
