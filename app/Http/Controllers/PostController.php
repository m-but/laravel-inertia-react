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
}
