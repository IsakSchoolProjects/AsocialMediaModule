<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Tweet;

class TweetController extends Controller
{
    public function index()
    {
        return Tweet::all();
    }

    public function show(Tweet $tweet)
    {
        return $tweet;
    }

    public function store(Request $request)
    {
        $tweet = Tweet::create($request->all());

        return response()->json($tweet, 201);
    }

    public function update(Request $request, Tweet $tweet)
    {
        $tweet->update($request->all());

        return response()->json($tweet, 200);
    }

    public function delete(Tweet $tweet)
    {
        $tweet->delete();

        return response()->json(null, 204);
    }
}
