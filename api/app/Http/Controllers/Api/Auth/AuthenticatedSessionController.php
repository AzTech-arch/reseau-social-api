<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

use App\Http\Requests\Api\Auth\AuthenticatedSessionRequest;

class AuthenticatedSessionController extends Controller
{
    public function store(AuthenticatedSessionRequest $request)
    {
        // Valider les données de la requête
        $validatedData = $request->validated();

        // Tentative de connexion de l'utilisateur
        if (!Auth::attempt($validatedData)) {
            // Retourner une réponse d'erreur avec un code de statut 401 : Unauthorized
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        // Récupérer l'utilisateur authentifié
        $user = Auth::user();

        // Générer un jeton d'accès pour l'utilisateur
        $token = $user->createToken('auth_token')->plainTextToken;

        // Créer un cookie sécurisé avec le token
        $cookie = cookie('auth_token', $token, 60, null, null, false, true); // 60 minutes, HttpOnly

        // Retourner la réponse de l'utilisateur authentifié avec un code de statut 200 : OK
        return response()->json([
            'message' => 'User successfully authenticated.',
            'user' => $user
        ], 200)->withCookie($cookie);
    }
}
