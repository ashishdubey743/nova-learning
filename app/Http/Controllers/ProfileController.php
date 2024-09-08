<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:profiles',
            'username' => 'required|string|max:255|unique:profiles',
            'password' => 'required|string|min:8|confirmed',
        ]);

        Profile::create($request->all());

        return response()->json(['message' => 'Profile created successfully!']);
    }
}
