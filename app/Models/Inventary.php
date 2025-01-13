<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventary extends Model
{
    use HasFactory;

    // Nombre de la tabla
    protected $table = 'ingrediente';

    // Campos permitidos para la asignación masiva
    protected $fillable = ['nombre', 'unidad_total', 'stock'];
    protected $primaryKey = 'id_ing';
    // Deshabilitar timestamps
    public $timestamps = false;

    // Establecer valores predeterminados al crear un registro
    protected static function booted()
    {
        static::creating(function ($model) {
            $model->cantidad_total = 30; // Valor estático
            $model->cantidad_min = 5;   // Valor estático
            $model->precio = 1;         // Valor estático
            $model->uni_total = 1;      // Valor estático
        });
    }
}
