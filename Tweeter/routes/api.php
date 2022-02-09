<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Tweet;
use Illuminate\Support\Facades\Redis;

use App\Http\Controllers\TweetController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('tweets', [TweetController::class, 'index']);
Route::get('tweets/{tweet}', [TweetController::class, 'show']);

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('tweets', [TweetController::class, 'store']);
    Route::put('tweets/{tweet}', [TweetController::class, 'update']);
    Route::delete('tweets/{tweet}', [TweetController::class, 'delete']);
});

// Register a new User
Route::post('register', [RegisterController::class, 'register']);
// Login as a User
Route::post('login', [LoginController::class, 'login']);
// Logout a User
Route::post('logout', [LoginController::class, 'logout']);
