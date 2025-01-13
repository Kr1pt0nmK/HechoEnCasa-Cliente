<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalendaryController extends Controller
{
    public function index()
    {
        return view('Calendary.calendary');
    }
    
}
