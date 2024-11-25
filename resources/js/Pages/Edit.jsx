import { Head, useForm } from "@inertiajs/react";

function Edit({ post }) {
  const { data, setData, put, processing, errors } = useForm({
    body: post.body,
  });

  function submit(e) {
    e.preventDefault();
    put(`/posts/${post.id}`);
  }

  return (
    <div>
      <Head title="Edit" />
      <h1 className="title">Edit post</h1>

      <div className="w-1/2 mx-auto">
        <form onSubmit={submit}>
          <textarea
            value={data.body}
            onChange={(e) => setData("body", e.target.value)}
            rows={10}
            className={errors.body && `!ring-red-500`}
          ></textarea>

          {errors.body && <p className="mt-2 error">{errors.body}</p>}

          <button
            className="mt-4 primary-btn"
            type="submit"
            disabled={processing}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
