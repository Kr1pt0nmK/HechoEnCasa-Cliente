<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            display: flex;
            height: 100vh;
        }

        .sidebar {
            width: 250px;
            background-color: #F8F6F0;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
        }

        .sidebar a {
            text-decoration: none;
            color: #333;
            font-size: 18px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .sidebar a.active {
            background-color: #F0E7CE;
            border-radius: 8px;
            padding: 10px;
        }

        .main {
            flex-grow: 1;
            background-color: #FFF;
            padding: 20px;
        }

        .header {
            background: linear-gradient(90deg, #FFF7C1, #FFEAB6);
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
        }

        .header h2 {
            margin: 0;
            font-size: 24px;
        }

        .header p {
            margin: 5px 0 0;
            font-size: 14px;
            color: #555;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .card {
            background: #F8F6F0;
            border-radius: 10px;
            text-align: center;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .card img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }

        .card h3 {
            margin: 0;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <a href="#" class="active">Inicio</a>
        <a href="#">Calendario</a>
        <a href="#">Recetas</a>
        <a href="#">Inventario</a>
        <a href="#">Emergentes</a>
    </div>
    <div class="main">
        <div class="header">
            <h2>Hola, Vicky</h2>
            <p>Jun 10, 2024 - 9:41 AM</p>
        </div>
        <div class="cards">
            <div class="card">
                <img src="calendar_icon.png" alt="Calendario">
                <h3>Calendario</h3>
            </div>
            <div class="card">
                <img src="recipes_icon.png" alt="Recetas">
                <h3>Recetas</h3>
            </div>
            <div class="card">
                <img src="inventory_icon.png" alt="Inventario">
                <h3>Inventario</h3>
            </div>
            <div class="card">
                <img src="emergency_icon.png" alt="Emergentes">
                <h3>Emergentes</h3>
            </div>
        </div>
    </div>
</body>
</html>
