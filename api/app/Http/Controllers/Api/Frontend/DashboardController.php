<?php

namespace App\Http\Controllers\Api\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function updateUserImage(Request $request)
    {
        // Valiter les données de la requête
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Récupérer l'utilisateur connecté
        $user = Auth::user();

        // Enregistrer l'image dans le dossier public/images
        $path = $request->file('image')->store('profile_images');

        // Mettre à jour le champ image de l'utilisateur
        $user->image = $path;
        $user->save();

        return response()->json([
            'message' => 'Image mise à jour avec succès',
            'user' => $user
        ], 200);
    }
}
