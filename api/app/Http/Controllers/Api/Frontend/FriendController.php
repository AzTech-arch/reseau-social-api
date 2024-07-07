<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Models\Friend;
use Illuminate\Http\Request;
use App\Models\FriendRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class FriendController extends Controller
{
    public function sendRequest(Request $request)
    {
        $request->validate([
            'receiver_id' => 'required|exists:users,id'
        ]);

        $friendRequest = FriendRequest::create([
            'sender_id' => Auth::id(),
            'receiver_id' => $request->receiver_id,
            'status' => 'pending',
        ]);

        return response()->json($friendRequest, 201);
    }

    public function acceptRequest($id)
    {
        $friendRequest = FriendRequest::where('receiver_id', Auth::id())->where('id', $id)->firstOrFail();
        $friendRequest->status = 'accepted';
        $friendRequest->save();

        Friend::create(['user_id' => $friendRequest->sender_id, 'friend_id' => $friendRequest->receiver_id]);
        Friend::create(['user_id' => $friendRequest->receiver_id, 'friend_id' => $friendRequest->sender_id]);

        return response()->json(['message' => 'Friend request accepted']);
    }

    public function rejectRequest($id)
    {
        $friendRequest = FriendRequest::where('receiver_id', Auth::id())->where('id', $id)->firstOrFail();
        $friendRequest->status = 'rejected';
        $friendRequest->save();

        return response()->json(['message' => 'Friend request rejected']);
    }

    public function removeFriend($id)
    {
        Friend::where(function ($query) use ($id) {
            $query->where('user_id', Auth::id())->where('friend_id', $id);
        })->orWhere(function ($query) use ($id) {
            $query->where('user_id', $id)->where('friend_id', Auth::id());
        })->delete();

        return response()->json(['message' => 'Friend removed']);
    }
}