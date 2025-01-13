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
        $request->validate([
            'cantidad' => 'required|integer',
        ]);
    
        $ingrediente = Inventary::findOrFail($id_ing);
    
        // Calcula el nuevo stock
        $nuevoStock = $ingrediente->stock + $request->cantidad;
    
        // Verifica los límites del stock
        if ($nuevoStock < 0) {
            return response()->json(['success' => false, 'error' => 'El stock no puede ser menor a 0.'], 400);
        }
    
        if ($nuevoStock > $ingrediente->cantidad_total) {
            return response()->json(['success' => false, 'error' => 'El stock no puede exceder el máximo permitido.'], 400);
        }
    
        // Actualiza el stock
        $ingrediente->stock = $nuevoStock;
        $ingrediente->save();
    
        return response()->json([
            'success' => true,
            'newStock' => $ingrediente->stock,
            'maxStock' => $ingrediente->cantidad_total
        ]);
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
