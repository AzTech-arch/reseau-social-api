<?php

namespace App\Http\Controllers\Api\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function updateUserImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Récupérer l'utilisateur authentifié
        $user = $request->user();

        // Stocker l'image dans le dossier public
        $imagePath = $request->file('image')->store('profile_images', 'public');

        // Mettre à jour le chemin de l'image dans la base de données
        $user->image = $imagePath;

        // Sauvegarder les modifications
        $user->save();

        return response()->json([
            'message' => 'Image updated successfully',
            'user' => $user,
        ]);
    }

    public function updateCoverImage(Request $request)
    {
        $request->validate([
            'image_cover' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Récupérer l'utilisateur authentifié
        $user = $request->user();

        // Stocker l'image dans le dossier public
        $imagePath = $request->file('image_cover')->store('image_covers', 'public');

        // Mettre à jour le chemin de l'image dans la base de données
        $user->image_cover = $imagePath;

        // Sauvegarder les modifications
        $user->save();

        return response()->json([
            'message' => 'Cover image updated successfully',
            'user' => $user,
        ]);
    }
}