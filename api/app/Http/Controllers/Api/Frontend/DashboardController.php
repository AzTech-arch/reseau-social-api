<?php

namespace App\Http\Controllers\Api\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class DashboardController extends Controller
{
    public function updateUserImage(Request $request)
    {
        // Valider les données de la requête
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Récupérer l'utilisateur authentifié
        $user = Auth::user();

        // Supprimer l'ancienne image si elle existe
        if ($user->image) {
            Storage::delete($user->image);
        }

        // Enregistrer la nouvelle image
        $path = $request->file('image')->store('profile_images');

        // Mettre à jour le chemin de l'image de l'utilisateur
        $user->image = $path;
        $user->save();

        // Retourner une réponse de succès
        return response()->json([
            'message' => 'Photo de profil mise à jour avec succès',
            'image' => $path
        ], 200);
    }
}
