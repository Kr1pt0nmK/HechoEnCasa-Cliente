<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventary; // Usa el modelo Inventary
use App\Models\Unity; // Usa el modelo Unity
class InventaryController extends Controller
{
    // Método para mostrar la vista principal con todos los ingredientes
    public function index() {
        $ingredientes = Inventary::all(); // Carga todos los ingredientes
        $unidades = Unity::all(); // Carga todas las unidades```php
        return view('Inventary.inventary', compact('ingredientes','unidades')); // Renderiza la vista principal
    }

    // Método para agregar un nuevo ingrediente
    public function store(Request $request) {
        // Validar los campos requeridos
        $request->validate([
            'nombre' => 'required|string|max:255',
            'unidad_total' => 'required|string|max:10',
            'stock' => 'required|integer|min:0',
        ]);
    
        // Crear el registro (los valores estáticos se rellenan en el modelo)
        Inventary::create([
            'nombre' => $request->input('nombre'),
            'unidad_total' => $request->input('unidad_total'),
            'stock' => $request->input('stock'),
        ]);
    
        // Redirigir con un mensaje de éxito
        return redirect()->back()->with('success', 'Ingrediente añadido correctamente.');
    }
    
    
    

    // Método para actualizar un ingrediente existente
    public function updateStock(Request $request, $id_ing)
    {
        // Validar que la cantidad sea válida
        $request->validate([
            'cantidad' => 'required|integer|min:1',
        ]);
    
        // Buscar el ingrediente y actualizar su stock
        $ingrediente = Inventary::findOrFail($id_ing);
        $nuevoStock = $ingrediente->stock + $request->input('cantidad');
    
        // Validar que el stock no exceda el máximo permitido
        if ($nuevoStock > $ingrediente->cantidad_total) {
            return redirect()->back()->withErrors(['error' => 'El stock no puede exceder el máximo permitido.']);
        }
    
        $ingrediente->stock = $nuevoStock;
        $ingrediente->save();
    
        return redirect()->back()->with('success', 'Stock actualizado correctamente.');
    }
    
    // Método para eliminar un ingrediente
    public function destroy($id_ing) {
        // Encuentra el ingrediente usando la clave primaria personalizada
        $ingrediente = Inventary::findOrFail($id_ing);
        $ingrediente->delete();
    
        // Redirige con un mensaje de éxito
        return redirect()->route('ingredientes.index')->with('success', 'Ingrediente eliminado correctamente.');
    }
    
    // Método para obtener un ingrediente de forma dinámica (opcional, para AJAX)
    public function getIngrediente(Inventary $inventary) {
        return response()->json($inventary); // Devuelve el registro en formato JSON
    }
}
