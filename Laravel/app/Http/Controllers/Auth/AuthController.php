<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Session;
use Hash;

class AuthController extends Controller
{
    
    public function index()
    {
        return view('auth.login');
    }


    public function registration()
    {
        return view('auth.registration');
    }


    public function postLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
   
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended('dashboard')
                        ->withSuccess('You have Successfully loggedin');
        }
        // redirectar men till den menade sidan, alltså main
        return redirect('index')->withSuccess('error you wrote wrong email and password');
    }

    public function postRegistration(Request $request)
    {
    
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $data = $request->all();

        User::create([
            "name"=> $data["name"],
            "email"=> $data["email"],
            "password"=> Hash::make($data["password"]),
        ]);

        return redirect('dashboard')->withSuccess('you logged in!');
    }

    public function logout() {
        Session::flush();
        Auth::logout();
  
        return Redirect('index');
    }
}
