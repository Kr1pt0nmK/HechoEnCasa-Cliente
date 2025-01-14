@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Gestión de Ingredientes</h1>

    <!-- Filtros -->
    <div class="d-flex justify-content-between align-items-center mb-3">
        <form action="{{ route('ingredientes.index') }}" method="GET" class="d-flex">
            <select name="filter" class="form-select me-2" onchange="this.form.submit()">
                <option value="">Filtrar por...</option>
                <option value="agotados" {{ request('filter') == 'agotados' ? 'selected' : '' }}>Agotados</option>
                <option value="casi_agotados" {{ request('filter') == 'casi_agotados' ? 'selected' : '' }}>Casi Agotados</option>
                <option value="gramos" {{ request('filter') == 'gramos' ? 'selected' : '' }}>Gramos</option>
                <option value="mililitros" {{ request('filter') == 'mililitros' ? 'selected' : '' }}>Mililitros</option>
                <option value="piezas" {{ request('filter') == 'piezas' ? 'selected' : '' }}>Piezas</option>
            </select>
        </form>
        <a href="{{ route('ingredientes.index') }}" class="btn btn-secondary">Quitar Filtros</a>
    </div>

    <!-- Botón para añadir un nuevo ingrediente -->
    <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#addIngredientModal">
        Añadir Nuevo Ingrediente
    </button>

    <!-- Lista de Ingredientes -->
    <div class="row">
        @forelse($ingredientes as $ingrediente)
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
                    <p>Cantidad: {{ $ingrediente->stock }} {{ $ingrediente->unidad->abreviacion ?? 'Unidad no asignada' }}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalIngrediente{{ $ingrediente->id_ing }}">
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal para ver detalles y actualizar stock -->
        <div class="modal fade" id="modalIngrediente{{ $ingrediente->id_ing }}" tabindex="-1" aria-labelledby="modalLabel{{ $ingrediente->id_ing }}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel{{ $ingrediente->id_ing }}">{{ $ingrediente->nombre }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Disponible:</strong> <span id="stock-display-{{ $ingrediente->id_ing }}">{{ $ingrediente->stock }}</span> {{ $ingrediente->unidad->abreviacion ?? 'Unidad no asignada' }}</p>
                        <p><strong>Máximo:</strong> {{ $ingrediente->cantidad_total }} {{ $ingrediente->unidad->abreviacion ?? 'Unidad no asignada' }}</p>

                        <!-- Barra de progreso -->
                        <div class="progress">
                            <div 
                                class="progress-bar bg-success" 
                                role="progressbar" 
                                style="width: {{ ($ingrediente->stock / $ingrediente->cantidad_total) * 100 }}%" 
                                aria-valuenow="{{ $ingrediente->stock }}" 
                                aria-valuemin="0" 
                                aria-valuemax="{{ $ingrediente->cantidad_total }}">
                            </div>
                        </div>

                        <!-- Botones de incrementar/decrementar -->
                        <div class="input-group mt-3">
                            <button type="button" class="btn btn-danger" onclick="updateStock('{{ $ingrediente->id_ing }}', -getInputValue('{{ $ingrediente->id_ing }}'))">-</button>
                            <input type="number" id="cantidad-{{ $ingrediente->id_ing }}" value="100" class="form-control text-center" min="1">
                            <button type="button" class="btn btn-success" onclick="updateStock('{{ $ingrediente->id_ing }}', getInputValue('{{ $ingrediente->id_ing }}'))">+</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        @empty
        <div class="col-12">
            <div class="alert alert-warning text-center">
                No hay ingredientes que coincidan con el filtro seleccionado.
            </div>
        </div>
        @endforelse
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
                            <label for="id_unidad" class="form-label">Unidad</label>
                            <select class="form-select" id="id_unidad" name="id_unidad" required>
                                <option value="" disabled selected>Selecciona una unidad</option>
                                @foreach($unidades as $unidad)
                                    <option value="{{ $unidad->id_unidad }}">{{ $unidad->nombre_unidad }}</option>
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

<!-- JavaScript para manejar los botones "más" y "menos" -->
<script>
    function getInputValue(id) {
        const input = document.getElementById(`cantidad-${id}`);
        const value = parseInt(input.value, 10);
        return isNaN(value) ? 0 : value; // Asegurarse de que el valor sea un número válido
    }

    function updateStock(ingredienteId, cantidad) {
        fetch(`/ingredientes/${ingredienteId}/update-stock`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ cantidad: cantidad })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Actualizar el valor del stock en la interfaz
                document.getElementById(`stock-display-${ingredienteId}`).textContent = data.newStock;

                // Actualizar la barra de progreso
                const progressBar = document.querySelector(`#modalIngrediente${ingredienteId} .progress-bar`);
                progressBar.style.width = `${(data.newStock / data.maxStock) * 100}%`;
                progressBar.setAttribute('aria-valuenow', data.newStock);
            } else {
                alert(data.error || 'Ocurrió un error al actualizar el stock.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar actualizar el stock.');
        });
    }
</script>
@endsection
