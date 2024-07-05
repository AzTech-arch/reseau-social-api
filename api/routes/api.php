<?php

use App\Http\Controllers\Api\Auth\AuthenticatedSessionUserController;
use App\Http\Controllers\Api\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route protected
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthenticatedSessionUserController::class, 'destroy']);
});

// Route public 
Route::post('register', [RegisterController::class, 'store']);
Route::post('login', [AuthenticatedSessionUserController::class, 'store']);;
