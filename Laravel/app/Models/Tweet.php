<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'text'
    ];

    protected $table = "tweets";
}
