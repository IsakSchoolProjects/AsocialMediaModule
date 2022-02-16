<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;

class CommentsController extends Controller
{
    
    public function show($id)
    {
        $comment = Comment::where('id', $id)
               ->orderBy('created_at')
               ->get();
        return $comment;
    }
}
