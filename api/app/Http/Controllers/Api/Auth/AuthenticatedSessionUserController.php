<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\AuthenticatedSessionUserRequest;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionUserController extends Controller
{
    public function store(AuthenticatedSessionUserRequest $request)
    {
        $validated = $request->validated();

        if (!Auth::attempt($validated)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User authenticated successfully',
            'user' => [
                'id' => $user->id,
                'last_name' => $user->last_name,
                'first_name' => $user->first_name,
                'email' => $user->email,
            ],
            'token' => $token,
        ], 200);
    }

    public function destroy()
    {
        // Renvoie une réponse JSON avec un message de succès
        return response()->json([
            'message' => 'User logged out successfully',
        ], 200);
    }
}
