<?php

namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Models\User;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    public function getUsuarios(Request $request){
        $response = BaseController::response();
        $payload = $request->all();
        // var_dump($payload);
        // $users = User::where('age', '>', 18)
        //      ->orderBy('name', 'asc')
        //      ->get();
        $users = User::all();
        $response['result']    = true;
        $response['data']      = $users;
        $response['message']      =  'User Logged In Successfully';
        return response()->json($response, 200);
    }
    public function listarUsuarios(Request $request){
        $response = BaseController::response();
        $payload = $request->all();
        // var_dump($payload);
        // $users = User::where('age', '>', 18)
        //      ->orderBy('name', 'asc')
        //      ->get();
        $users = User::with('tipoUsuario')->get();
        $response['result']    = true;
        $response['data']      = $users;
        $response['message']      =  'User Logged In Successfully';
        return response()->json($response, 200);
    }
}
