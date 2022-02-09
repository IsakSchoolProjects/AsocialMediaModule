<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tweet;

class CreateController extends Controller
{   
    public function index() {
        return view("createTweet");
    }
    public function CreateTweet(Request $request) {

        $request->validate([
            "name"=> "required",
            "text"=> "required"
        ]);

        $data = $request->all();

        Tweet::create([
            "name"=> $data["tweetName"],
            "text"=> $data["tweetText"],
            "user_id"=> $data["user_id"]
        ]);

        return redirect()->intended('index');
    }
}
