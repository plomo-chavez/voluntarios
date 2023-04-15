<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CatalogosController extends Controller
{
    public function getTiposUsuarios(Request $request){
        $data = [
            [ 'name' => 'Administrador',],
            [ 'name' => 'Recepcionista',],
        ];
        $response = [
            'status' => false,
            'data' => $data,
            'message' => null
        ];
        return response()->json($response, 200);
    }
}
