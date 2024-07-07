<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Frontend\FriendController;
use App\Http\Controllers\Api\Frontend\DashboardController;
use App\Http\Controllers\Api\Auth\AuthenticatedUserSessionController;

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

Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('logout', [AuthenticatedUserSessionController::class, 'destroy']);
    // Dashboard routes
    Route::post('updateUserImage', [DashboardController::class, 'updateUserImage']);
    Route::post('updateCoverImage', [DashboardController::class, 'updateCoverImage']);
    // Friend routes
    Route::post('friend/request', [FriendController::class, 'sendRequest']);
    Route::post('friend/accept/{id}', [FriendController::class, 'acceptRequest']);
    Route::post('friend/reject/{id}', [FriendController::class, 'rejectRequest']);
    Route::delete('friend/remove/{id}', [FriendController::class, 'removeFriend']);
});

// Route public 
Route::post('register', [RegisterController::class, 'store']);
Route::post('login', [AuthenticatedUserSessionController::class, 'store']);