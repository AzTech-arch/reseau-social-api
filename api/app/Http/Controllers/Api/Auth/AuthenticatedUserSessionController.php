<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Api\Auth\AuthenticatedUserSessionRequest;

class AuthenticatedUserSessionController extends Controller
{
    public function store(AuthenticatedUserSessionRequest $request)
    {
        // Valider la requête et récupérer les données
        $credentials = $request->validated();

        // Trouver l'utilisateur par email
        $user = User::where('email', $credentials['email'])->first();

        // Vérifier le mot de passe
        if ($user && Hash::check($credentials['password'], $user->password)) {

            // Créer un token d'authentification pour l'utilisateur
            $token = $user->createToken('auth_token')->plainTextToken;

            // Retourner le token et l'utilisateur authentifié
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

        // Credentials invalides
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
}