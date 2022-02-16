<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use app\Models\Comment;

class CommentsController extends Controller
{
    
    public function show(Comment $comment)
    {

        return $comment;
    }
}
