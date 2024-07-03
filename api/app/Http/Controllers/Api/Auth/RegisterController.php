<?php

namespace App\Http\Controllers\Api\Auth;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Api\Auth\RegisterRequest;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        // Valider les données de la requête
        $validatedData = $request->validated();

        // Ajouter le hachage du mot de passe
        $validatedData['password'] = Hash::make($validatedData['password']);

        try {
            // Créer un nouvel utilisateur
            $user = User::create($validatedData);

            // Retourner la réponse de l'utilisateur créé avec un code de statut 201 : Created
            return response()->json([
                'message' => 'User successfully registered.',
                'user' => $user
            ], 201);
            
        } catch (Exception $error) {
            // Enregistre l'erreur dans le log
            Log::error('Error registering user: ', ['error' => $error->getMessage()]);

            // Retourner une réponse d'erreur avec un code de statut 500 : Internal Server Error
            return response()->json([
                'message' => 'An error occurred while registering the user. Please try again later.'
            ], 500);
        }
    }
}
