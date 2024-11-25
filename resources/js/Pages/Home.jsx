import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

function Home({ posts }) {
  const { flash } = usePage().props;

  const [flashMsg, setFlashMsg] = useState(flash.message);
  const [flashScc, setFlashScc] = useState(flash.success);

  setTimeout(() => {
    setFlashMsg(null);
    setFlashScc(null);
  }, 2000);

  return (
    <>
      <Head title="Home" />
      <h1 className="title">All posts</h1>
      {flashMsg && (
        <div
          className={`absolute top-24 right-6 bg-rose-500 rounded-md shadow-lg text-sm text-white p-2`}
        >
          {flashMsg}
        </div>
      )}
      {flashScc && (
        <div
          className={`absolute top-24 right-6 bg-green-500 rounded-md shadow-lg text-sm text-white p-2`}
        >
          {flashScc}
        </div>
      )}
      <div>
        {posts.data.map((post) => (
          <div key={post.id} className="p-4 border-b">
            <div className="text-sm text-slate-600">
              <span>Posted on: </span>
              <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className="font-medium">{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500">
              See details...
            </Link>
          </div>
        ))}
      </div>

      <div className="px-4 py-12">
        {posts.links.map((link) =>
          link.url ? (
            <Link
              key={link.label}
              href={link.url}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className={`p-1 mx-1 ${
                link.active ? "text-blue-500 font-bold" : ""
              }`}
            />
          ) : (
            <span
              key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className={`p-1 mx-1 text-slate-300`}
            ></span>
          )
        )}
      </div>
    </>
  );
}

export default Home;
