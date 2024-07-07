<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Api\Auth\RegisterRequest;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        // Valider les données de la requête
        $validated = $request->validated();

        // Hasher le mot de passe de l'utilisateur
        $validated['password'] = Hash::make($validated['password']);

        // Créer un nouvel utilisateur
        $user = User::create($validated);

        // Retourner une réponse de succès avec le jeton et les informations de l'utilisateur 201: Created
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
        ], 201);
    }
}