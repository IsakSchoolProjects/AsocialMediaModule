<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoadTweetController extends Controller
{
    
    public function loadTweet()
    {
        $tweets = DB::SELECT(DB::raw("SELECT * FROM tweets"));

        return view('index')->with('tweets', $tweets);
    }

}
