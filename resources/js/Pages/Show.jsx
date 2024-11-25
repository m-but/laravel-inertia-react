import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

function Show({ post }) {
  const { delete: destroy } = useForm();

  // State untuk menampilkan popup konfirmasi
  const [showConfirm, setShowConfirm] = useState(false);

  // Fungsi untuk menampilkan popup konfirmasi
  const confirmDelete = () => {
    setShowConfirm(true);
  };

  // Fungsi untuk membatalkan penghapusan
  const cancelDelete = () => {
    setShowConfirm(false);
  };

  function submit(e) {
    e.preventDefault();
    destroy(`/posts/${post.id}`);
  }

  return (
    <>
      <div className="p-4 border-b">
        <div className="text-sm text-slate-600">
          <span>Posted on: </span>
          <span>{new Date(post.created_at).toLocaleTimeString()}</span>
        </div>
        <p className="font-medium">{post.body}</p>
        <div className="flex items-center justify-end gap-2">
          {/* Tombol untuk memicu popup konfirmasi */}
          <button
            onClick={confirmDelete}
            className="px-4 py-1 text-sm text-white bg-red-500 rounded-md"
          >
            Delete
          </button>
          <Link
            href={`/posts/${post.id}/edit`}
            className="px-4 py-1 text-sm text-white bg-green-500 rounded-md"
          >
            Edit
          </Link>
        </div>
      </div>

      {/* Popup konfirmasi */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="p-6 bg-white rounded-md shadow-md w-96">
            <h3 className="text-lg font-semibold">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-end gap-4 mt-4">
              {/* Tombol batal */}
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-sm bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              {/* Tombol konfirmasi */}
              <button
                onClick={submit}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded-md"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Show;
