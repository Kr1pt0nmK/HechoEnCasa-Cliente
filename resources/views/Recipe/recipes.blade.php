<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recetas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }
        .sidebar {
            width: 200px;
            background-color: #f9f6f1;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid #ddd;
        }
        .sidebar a {
            text-decoration: none;
            color: #333;
            padding: 10px 20px;
            margin: 10px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            box-sizing: border-box;
        }
        .sidebar a:hover {
            background-color: #e0e0e0;
            border-radius: 5px;
        }
        .sidebar .active {
            background-color: #ffd966;
            border-radius: 5px;
        }
        .main {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .search-bar {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            background-color: #f9f6f1;
            border-bottom: 1px solid #ddd;
        }
        .search-bar input {
            flex-grow: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .search-bar button {
            background: none;
            border: none;
            margin-left: 10px;
            cursor: pointer;
            font-size: 18px;
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
            overflow-y: auto;
        }
        .card {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
        }
        .card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }
        .card h3 {
            margin: 10px 0;
            font-size: 16px;
        }
        .card p {
            font-size: 14px;
            color: #555;
            margin: 0 0 10px;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <a href="#" class="active">🏠 Inicio</a>
        <a href="#">📅 Calendario</a>
        <a href="#">📖 Recetas</a>
        <a href="#">📦 Inventario</a>
        <a href="#">🎁 Emergentes</a>
    </div>
    <div class="main">
        <div class="search-bar">
            <input type="text" placeholder="Busca tus recetas aquí...">
            <button>🔍</button>
        </div>
        <div class="gallery">
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Pay de plátano">
                <h3>Pay de plátano</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Flan napolitano">
                <h3>Flan napolitano</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Donut cake">
                <h3>Donut cake</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Smore cookies">
                <h3>Smore cookies</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Brownies">
                <h3>Brownies</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Profiteroles">
                <h3>Profiteroles</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Birthday galleta">
                <h3>Birthday galleta</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Chispas cookies">
                <h3>Chispas cookies</h3>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200" alt="Mastachon">
                <h3>Mastachon</h3>
            </div>
        </div>
    </div>
</body>
</html>
