<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class LoadTweetController extends Controller
{
    
    public function loadTweet()
    {

        $data = DB::SELECT(DB::raw("SELECT * FROM `users`"));

        return view('index')->with('users', $data);
    }

}
