<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController; 
use App\Http\Controllers\InventaryController;
use App\Http\Controllers\EmergentController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CalendaryController;

// Ruta para la página de inicio
Route::get('/', [HomeController::class, 'index']);

// Ruta para el calendario
Route::get('/calendario', [CalendaryController::class, 'index']);

// Ruta para las recetas
Route::get('/recetas', [RecipeController::class, 'index']);

// Ruta para el inventario

Route::get('/ingredientes', [InventaryController::class, 'index'])->name('ingredientes.index');
Route::patch('/ingredientes/{id_ing}/update-stock', [InventaryController::class, 'updateStock'])->name('ingredientes.updateStock');
Route::delete('/ingredientes/{id_ing}', [InventaryController::class, 'destroy'])->name('ingredientes.destroy');
Route::get('/ingredientes/{inventary}', [InventaryController::class, 'getIngrediente'])->name('ingredientes.get');
Route::post('/ingredientes', [InventaryController::class, 'store'])->name('ingredientes.store');

// Ruta para emergentes
Route::get('/emergentes', [EmergentController::class, 'index']);

//Ruta para alert
Route::get('/alerts', [AlertController::class, 'index'])->name('alerts.index');
