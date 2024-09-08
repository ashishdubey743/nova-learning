<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return view('welcome');
});
Route::post('/profile-setup-tool', [ProfileController::class, 'store']);