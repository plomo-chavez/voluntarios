<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CatalogosController extends Controller
{
    public function getTiposUsuarios(Request $request){
        $data = [
            [ 'nombre' => 'Administrador','id' => 1],
            [ 'nombre' => 'Recepcionista','id' => 2],
        ];
        $response = [
            'status' => false,
            'data' => $data,
            'message' => null
        ];
        return response()->json($response, 200);
    }
}
