<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventary;

class AlertController extends Controller
{
    public function index()
    {
        // Ingredientes completamente agotados
        $outOfStock = Inventary::where('stock', '<=', 5)->get();

        // Ingredientes a punto de agotarse
        $almostOut = Inventary::whereRaw('stock <= cantidad_total / 2')
            ->where('stock', '>', 5)
            ->get();

        // Retornar en formato JSON
        return response()->json([
            'outOfStock' => $outOfStock,
            'almostOut' => $almostOut
        ]);
    }
}
