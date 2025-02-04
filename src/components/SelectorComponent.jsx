import { useState } from "react";

export default function SelectorComponent({ addMoodEntry }) {
    const [item, setItem] = useState({ mood: "", emoji: "" });
    

    return (
        <div className="flex flex-col justify-center items-center p-5 flex-grow">
            <div className="formborder border-3 w-full sm:w-150 flex flex-col justify-items-center align-middle rounded-xl justify-center items-center p-5 flex-grow-0">
                <div className="w-full rounded-xl bg-blue-200 p-5">
                    <h1 className="text-3xl font-bold text-gray-800">Mood Entry</h1>
                </div>
                <form className="w-full p-4 flex flex-col justify-items-center items-center">
                    <label htmlFor="mood-entry" className="text-3xl text-gray-800 mb-2">
                        Your current mood
                    </label>
                    <select name="mood-entry" id="mood-entry"
                        className="border-3 p-3 text-center justify-items-center rounded-xl bg-white w-full sm:w-35 text-center text-start text-xl my-2" value={item}
                        onChange={(e) => setItem(e.target.value)} 
                    >
                        <option value="">--- Select ---</option>
                        <option value="Happy">😊 Happy</option>
                        <option value="Angry">😒 Angry</option>
                        <option value="Sad">😢 Sad</option>
                    </select>
                </form>
                <div className="flex w-full justify-end p-2">
                    <button type="button"
                        onClick={() => {
                            if (item) addMoodEntry(item);
                            setItem("");
                        }}
                        className="p-2 border-2 rounded-xl text-xl border-green-300 bg-green-100 mx-4"
                    >
                        <i className="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    );
}
