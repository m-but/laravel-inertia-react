<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->paginate(8);

        return inertia("Home", [
            'posts' => $posts
        ]);
    }

    public function create()
    {
        return inertia("Create");
    }

    public function store(Request $request)
    {
        $validated_data = $request->validate([
            "body" => "required"
        ]);

        Post::create($validated_data);

        return redirect("/");
    }

    public function show(Post $post)
    {
        return inertia("Show", [
            "post" => $post
        ]);
    }

    public function edit(Post $post)
    {
        return inertia("Edit", [
            "post" => $post
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $validated_data = $request->validate([
            "body" => "required"
        ]);

        $post->update($validated_data);

        return redirect("/")->with("success", "The post was updated.");
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect("/")->with("message", "The post was deleted!");
    }
}
