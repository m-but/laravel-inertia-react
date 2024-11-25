import { Link } from '@inertiajs/react'
import React from 'react'

function Layout({children}) {
  return (
    <>
        <header>
            <nav>
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/posts/create" className="nav-link">Create</Link>
            </nav>
        </header>

        <main>{children}</main>
    </>
  )
}

export default Layout
