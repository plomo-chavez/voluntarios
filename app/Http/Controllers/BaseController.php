<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    public static function response($message = 'Tenemos un error'){
        return array(
            'result'    => false,
            'message'   => $message,
            'data'      => null,
        );
    }
}
