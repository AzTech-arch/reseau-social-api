<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\AuthenticatedSessionUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionUserController extends Controller
{
    public function store(AuthenticatedSessionUserRequest $request)
    {
        // Valider les données de la requête
        $validated = $request->validated();

        // Authentifier l'utilisateur
        if (!Auth::attempt($validated)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }
        // Récupérer l'utilisateur authentifié
        $user = Auth::user();

        // Générer un jeton d'accès
        $token = $user->createToken('auth_token')->plainTextToken;

        // Stocker le jeton dans un cookie sécurisé
        $cookie = cookie('auth_token', $token, 60, null, null, false, true);

        // Retourner une réponse de succès avec le jeton et les informations de l'utilisateur 200: OK
        return response()->json([
            'message' => 'User authenticated successfully',
            'user' => $user,
        ], 200)->withCookie($cookie);
    }
}
