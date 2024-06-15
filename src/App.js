import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Tables from "./Pages/Tables";
import Charts from "./Pages/Charts";
import Calendar from "./Pages/Calendar";
import Kanban from "./Pages/Kanban";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeConfig = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
        },
      }),
    [theme]
  );
  const [tableData, setTableData] = useState([
    {
      name: "Frozen yoghurt",
      calories: 159,
      fat: 63.0,
      carbs: 24,
      protein: 41.0,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 19.0,
      carbs: 37,
      protein: 42.3,
    },
    { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 36.0 },
    { name: "Cupcake", calories: 205, fat: 13.7, carbs: 67, protein: 44.3 },
    { name: "Gingerbread", calories: 256, fat: 16.0, carbs: 49, protein: 23.9 },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "To Do" },
    { id: 2, title: "Task 2", status: "In Progress" },
    { id: 3, title: "Task 3", status: "Done" },
  ]);

  const addRow = (row) => {
    setTableData([...tableData, row]);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <div className="app">
        <Router>
          <Navbar />
          <Sidebar />
          <main className="content">
            <ThemeSwitcher toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Tables tableData={tableData} addRow={addRow} />} />  //Dashboard
              <Route
                path="/tables"
                element={<Tables tableData={tableData} addRow={addRow} />}
              />
              <Route
                path="/charts"
                element={<Charts tableData={tableData} />}
              />
              <Route path="/calendar" element={<Calendar />} />
              <Route
                path="/kanban"
                element={
                  <Kanban
                    tasks={tasks}
                    addTask={addTask}
                    updateTaskStatus={updateTaskStatus}
                  />
                }
              />
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
