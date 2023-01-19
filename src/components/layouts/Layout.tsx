import React from 'react'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-dark-gray relative flex h-full flex-col overflow-x-hidden">
      <nav className="h-10 w-full bg-gray-800 text-white">Navigation TODO</nav>
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-8">{children}</main>
    </div>
  )
}
