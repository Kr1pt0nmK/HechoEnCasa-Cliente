<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmergentController extends Controller
{
    public function index()
    {
        return view('Calendary.calendary');
    }
    
}
