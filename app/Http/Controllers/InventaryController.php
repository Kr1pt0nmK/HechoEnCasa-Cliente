<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventary; // Modelo Inventary
use App\Models\Unity; // Modelo Unity

class InventaryController extends Controller
{
    // Método para mostrar la vista principal con todos los ingredientes y filtros
    public function index(Request $request)
    {
        // Obtener el filtro seleccionado
        $filter = $request->get('filter');

        // Construir la consulta base
        $query = Inventary::with('unidad');

        // Aplicar filtros según el valor seleccionado
        if ($filter === 'agotados') {
            $query->where('stock', 0); // Stock igual a 0
        } elseif ($filter === 'casi_agotados') {
            $query->where('stock', 5); // Stock igual a 5
        } elseif ($filter === 'gramos') {
            $query->whereHas('unidad', function ($q) {
                $q->where('id_unidad', 2); // uni_total igual a 2 (gramos)
            });
        } elseif ($filter === 'mililitros') {
            $query->whereHas('unidad', function ($q) {
                $q->where('id_unidad', 4); // uni_total igual a 4 (mililitros)
            });
        } elseif ($filter === 'piezas') {
            $query->whereHas('unidad', function ($q) {
                $q->where('id_unidad', 5); // uni_total igual a 5 (piezas)
            });
        }

        // Obtener los resultados
        $ingredientes = $query->get();

        // Obtener todas las unidades para el formulario
        $unidades = Unity::all();

        return view('Inventary.inventary', compact('ingredientes', 'unidades'));
    }

    // Método para agregar un nuevo ingrediente
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'id_unidad' => 'required|integer|exists:unidad_ingrediente,id_unidad',
            'stock' => 'required|integer|min:0',
        ]);
    
        Inventary::create([
            'nombre' => $request->input('nombre'),
            'id_unidad' => $request->input('id_unidad'),
            'uni_total' => $request->input('id_unidad'), // Asignar la unidad directamente
            'stock' => $request->input('stock'),
        ]);
    
        return redirect()->back()->with('success', 'Ingrediente añadido correctamente.');
    }
    

    // Método para actualizar el stock de un ingrediente existente
    public function updateStock(Request $request, $id_ing)
    {
        $request->validate([
            'cantidad' => 'required|integer',
        ]);

        $ingrediente = Inventary::findOrFail($id_ing);

        $nuevoStock = $ingrediente->stock + $request->cantidad;

        if ($nuevoStock < 0) {
            return response()->json(['success' => false, 'error' => 'El stock no puede ser menor a 0.'], 400);
        }

        if ($nuevoStock > $ingrediente->cantidad_total) {
            return response()->json(['success' => false, 'error' => 'El stock no puede exceder el máximo permitido.'], 400);
        }

        $ingrediente->stock = $nuevoStock;
        $ingrediente->save();

        return response()->json([
            'success' => true,
            'newStock' => $ingrediente->stock,
            'maxStock' => $ingrediente->cantidad_total
        ]);
    }

    // Método para eliminar un ingrediente
    public function destroy($id_ing)
    {
        $ingrediente = Inventary::findOrFail($id_ing);
        $ingrediente->delete();

        return redirect()->route('ingredientes.index')->with('success', 'Ingrediente eliminado correctamente.');
    }

    // Método para obtener un ingrediente de forma dinámica (opcional, para AJAX)
    public function getIngrediente(Inventary $inventary)
    {
        return response()->json($inventary);
    }
}
