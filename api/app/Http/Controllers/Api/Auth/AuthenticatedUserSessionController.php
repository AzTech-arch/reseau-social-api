<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Api\Auth\AuthenticatedUserSessionRequest;

class AuthenticatedUserSessionController extends Controller
{
    public function store(AuthenticatedUserSessionRequest $request)
    {
        // Valider la requête et récupérer les données
        $credentials = $request->validated();

        // Authentifier l'utilisateur
        if (Auth::attempt($credentials)) {

            // Générer un token d'authentification
            $user = Auth::user();

            // Créer un token d'authentification pour l'utilisateur
            $token = $user->createToken('auth_token')->plainTextToken;

            // Retourner le token et l'utilisateur authentifié 201: Created
            return response()->json([
                'message' => 'User authenticated successfully',
                'user' => [
                    'id' => $user->id,
                    'last_name' => $user->last_name,
                    'first_name' => $user->first_name,
                    'email' => $user->email,
                    'image' => $user->image,

                ],
                'token' => $token,
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
}
