<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendario</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            display: flex;
            height: 100vh;
        }
        .sidebar {
            width: 20%;
            background-color: #f9f6f1;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }
        .sidebar .menu-item {
            display: flex;
            align-items: center;
            padding: 10px 0;
            cursor: pointer;
            font-size: 16px;
        }
        .sidebar .menu-item:hover {
            color: #a5a5a5;
        }
        .sidebar .menu-icon {
            margin-right: 10px;
        }
        .main {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .search-bar {
            display: flex;
            padding: 10px;
            align-items: center;
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
        .content {
            display: flex;
            flex-grow: 1;
            padding: 20px;
        }
        .tasks {
            width: 30%;
            overflow-y: auto;
            margin-right: 20px;
        }
        .task {
            background: #f8f8ff;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .calendar {
            flex-grow: 1;
        }
        .calendar .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .calendar-view {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 10px;
        }
        .day {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: #dff0d8;
            cursor: pointer;
        }
        .day.red {
            background-color: #f2dede;
        }
        .day.yellow {
            background-color: #fcf8e3;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="menu-item">
            <span class="menu-icon">🏠</span> Inicio
        </div>
        <div class="menu-item">
            <span class="menu-icon">📅</span> Calendario
        </div>
        <div class="menu-item">
            <span class="menu-icon">📜</span> Recetas
        </div>
        <div class="menu-item">
            <span class="menu-icon">📦</span> Inventario
        </div>
        <div class="menu-item">
            <span class="menu-icon">🎁</span> Emergentes
        </div>
    </div>
    <div class="main">
        <div class="search-bar">
            <input type="text" placeholder="Busca los folios aquí...">
            <button>🔍</button>
        </div>
        <div class="content">
            <div class="tasks">
                <div class="task">
                    <strong>Juan</strong><br>
                    Pay de plátano<br>
                    <small>16 - Nov - 2024</small>
                </div>
                <div class="task">
                    <strong>Miguel</strong><br>
                    Flan napolitano<br>
                    <small>18 - Nov - 2024</small>
                </div>
                <div class="task">
                    <strong>Pedro</strong><br>
                    Donut cake<br>
                    <small>18 - Nov - 2024</small>
                </div>
                <div class="task">
                    <strong>Carlos</strong><br>
                    Smore cookies<br>
                    <small>21 - Nov - 2024</small>
                </div>
            </div>
            <div class="calendar">
                <div class="header">
                    <button>◀</button>
                    <h2>June 2024</h2>
                    <button>▶</button>
                </div>
                <div class="calendar-view">
                    <div class="day red">2</div>
                    <div class="day yellow">3</div>
                    <div class="day">4</div>
                    <div class="day">5</div>
                    <div class="day">6</div>
                    <div class="day">7</div>
                    <div class="day">8</div>
                    <div class="day">9</div>
                    <div class="day">10</div>
                    <div class="day">11</div>
                    <div class="day">12</div>
                    <div class="day">13</div>
                    <div class="day">14</div>
                    <div class="day">15</div>
                    <div class="day">16</div>
                    <div class="day">17</div>
                    <div class="day">18</div>
                    <div class="day">19</div>
                    <div class="day">20</div>
                    <div class="day">21</div>
                    <div class="day">22</div>
                    <div class="day">23</div>
                    <div class="day">24</div>
                    <div class="day">25</div>
                    <div class="day">26</div>
                    <div class="day">27</div>
                    <div class="day">28</div>
                    <div class="day">29</div>
                    <div class="day">30</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
