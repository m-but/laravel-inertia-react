import { Link } from '@inertiajs/react'
import React from 'react'

function Home({posts}) {
  return (
    <>
        <div>
            {posts.data.map(post => (
                <div key={post.id} className='p-4 border-b'>
                    <div className='text-sm text-slate-600'>
                        <span>Posted on: </span>
                        <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                    </div>
                    <p className='font-medium'>{post.body}</p>
                </div>
            ))}
        </div>

        <div className="px-4 py-12">
            {posts.links.map(link =>
                link.url ? (
                    <Link key={link.label} href={link.url} dangerouslySetInnerHTML={{__html: link.label}} className={`p-1 mx-1 ${link.active ? 'text-blue-500 font-bold' : ''}`} />
                ) : (
                    <span key={link.label} dangerouslySetInnerHTML={{__html: link.label}} className={`p-1 mx-1 text-slate-300`}></span>
                )
            )}
        </div>
    </>
  )
}

export default Home
