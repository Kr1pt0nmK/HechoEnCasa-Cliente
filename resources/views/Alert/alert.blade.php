<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Mi Aplicación')</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        .notification-global {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1050;
            max-width: 300px;
        }

        .notification-item {
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div id="app">
        @include('layouts.navbar') <!-- Tu barra de navegación -->
        @yield('content')
    </div>

    <!-- Contenedor de notificaciones global -->
    <div class="notification-global" id="global-notification-container"></div>

    <!-- Scripts -->
    @yield('scripts')

    <script>
        // Función para cargar notificaciones globales
        function loadGlobalNotifications() {
            fetch('/alerts')
                .then(response => response.json())
                .then(data => {
                    const container = document.getElementById('global-notification-container');
                    container.innerHTML = ''; // Limpiar notificaciones previas

                    // Mostrar notificaciones de agotados
                    if (data.outOfStock.length > 0) {
                        data.outOfStock.forEach(item => {
                            const notification = `
                                <div class="alert alert-danger notification-item">
                                    <strong>${item.nombre}</strong> ¡Completamente agotado!
                                </div>`;
                            container.innerHTML += notification;
                        });
                    }

                    // Mostrar notificaciones de casi agotados
                    if (data.almostOut.length > 0) {
                        data.almostOut.forEach(item => {
                            const notification = `
                                <div class="alert alert-warning notification-item">
                                    <strong>${item.nombre}</strong> ¡A punto de agotarse!
                                </div>`;
                            container.innerHTML += notification;
                        });
                    }

                    if (data.outOfStock.length === 0 && data.almostOut.length === 0) {
                        container.innerHTML = `
                            <div class="alert alert-success notification-item">
                                Todo está en niveles adecuados.
                            </div>`;
                    }
                })
                .catch(error => console.error('Error al cargar notificaciones:', error));
        }

        // Cargar notificaciones al iniciar
        document.addEventListener('DOMContentLoaded', loadGlobalNotifications);
    </script>
</body>
</html>
