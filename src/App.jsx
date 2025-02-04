import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBarComponent from './components/NavBarComponent'
import './App.css'
import MainPageComponent from './components/MainPageComponent'

function App() {
    const [history, setHistory] = useState(() => {
        const localData = localStorage.getItem("history");
        return localData ? JSON.parse(localData) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
    }, [history]);

    function addMoodEntry(mood) {
        if (!mood || mood === "--Select--") {
            alert("Please select a mood!");
            return;
        }
        console.log(mood)
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        const newEntry = {
            date: formattedDate,
            time: formattedTime,
            mood: mood,
        };
        setHistory((prevHistory) => [...prevHistory, newEntry]);
    };

    return (
        <MainPageComponent history={history} setHistory={setHistory} addMoodEntry={addMoodEntry}></MainPageComponent>
    )
}

export default App;
