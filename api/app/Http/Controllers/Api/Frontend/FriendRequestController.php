<?php

namespace App\Http\Controllers\Api\Frontend;

use Illuminate\Http\Request;
use App\Models\FriendRequest;
use App\Http\Controllers\Controller;

class FriendRequestController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'receiver_id' => 'required|exists:users,id',
        ]);

        $friendRequest = FriendRequest::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $request->receiver_id,
        ]);

        return response()->json($friendRequest, 201);
    }
}