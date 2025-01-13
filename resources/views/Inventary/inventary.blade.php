@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Gestión de Ingredientes</h1>

    <!-- Botón para añadir un nuevo ingrediente -->
    <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#addIngredientModal">
        Añadir Nuevo Ingrediente
    </button>

    <!-- Lista de Ingredientes -->
    <div class="row">
        @foreach($ingredientes as $ingrediente)
        <div class="col-md-4">
            <div class="card position-relative">
                <div class="card-body">
                    <!-- Botón "x" para eliminar -->
                    <form action="{{ route('ingredientes.destroy', $ingrediente->id_ing) }}" method="POST" class="position-absolute top-0 end-0 mt-2 me-2">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-danger" title="Eliminar" onclick="return confirm('¿Estás seguro de eliminar este ingrediente?')">
                            &times;
                        </button>
                    </form>

                    <!-- Detalles del ingrediente -->
                    <h5>{{ $ingrediente->nombre }}</h5>
                    <p>Cantidad: {{ $ingrediente->stock }} {{ $ingrediente->unidad_total }}</p>
                    <!-- Botón para abrir el modal -->
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalIngrediente{{ $ingrediente->id_ing }}">
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>

        <!-- Ventana emergente para cada ingrediente -->
        <div class="modal fade" id="modalIngrediente{{ $ingrediente->id_ing }}" tabindex="-1" aria-labelledby="modalLabel{{ $ingrediente->id_ing }}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="{{ route('ingredientes.updateStock', $ingrediente->id_ing) }}" method="POST">
                        @csrf
                        @method('PATCH')
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabel{{ $ingrediente->id_ing }}">{{ $ingrediente->nombre }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Disponible:</strong> {{ $ingrediente->stock }} {{ $ingrediente->unidad_total }}</p>
                            <p><strong>Máximo:</strong> {{ $ingrediente->cantidad_total }} {{ $ingrediente->unidad_total }}</p>

                            <!-- Campo para modificar el stock -->
                            <div class="input-group mt-3">
                                <button type="button" class="btn btn-danger" onclick="decreaseStock({{ $ingrediente->id_ing }})">-</button>
                                <input type="number" id="stock{{ $ingrediente->id_ing }}" name="stock" class="form-control text-center" value="1" min="1">
                                <button type="button" class="btn btn-success" onclick="increaseStock({{ $ingrediente->id_ing }})">+</button>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Actualizar Stock</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <!-- Modal para añadir un nuevo ingrediente -->
    <div class="modal fade" id="addIngredientModal" tabindex="-1" aria-labelledby="addIngredientLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="{{ route('ingredientes.store') }}" method="POST">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id="addIngredientLabel">Añadir Nuevo Ingrediente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Nombre -->
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre del Ingrediente</label>
                            <input type="text" class="form-control" id="nombre" name="nombre" required>
                        </div>

                        <!-- Cantidad disponible (stock) -->
                        <div class="mb-3">
                            <label for="stock" class="form-label">Cantidad Disponible</label>
                            <input type="number" class="form-control" id="stock" name="stock" required>
                        </div>

                        <!-- Unidad -->
                        <div class="mb-3">
                            <label for="unidad_total" class="form-label">Unidad</label>
                            <select class="form-select" id="unidad_total" name="unidad_total" required>
                                <option value="" disabled selected>Selecciona una unidad</option>
                                @foreach($unidades as $unidad)
                                    <option value="{{ $unidad->abreviacion }}">{{ $unidad->nombre_unidad }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Guardar</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    function increaseStock(id) {
        const input = document.getElementById(`cantidad${id}`);
        input.value = parseInt(input.value) + 1;
    }

    function decreaseStock(id) {
        const input = document.getElementById(`cantidad${id}`);
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1;
        }
    }
</script>
@endsection
