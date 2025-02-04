import { useState } from "react";
export default function HistoryComponent({ history, setHistory }) {
    const [deleted, setDeletedEntry] = useState(null);
    const [deletedIndex, setDeletedIndex] = useState(null);
    const [undoTimeout, setUndoTimeout] = useState(null);

    const handleDelete = (indexToDelete) => {
        const entry = history[indexToDelete];

        setDeletedEntry(entry);
        setDeletedIndex(indexToDelete);

        const updatedHistory = history.filter((_, index) => index !== indexToDelete);
        setHistory(updatedHistory);

        const timeout = setTimeout(() => {
            setDeletedEntry(null);
            setDeletedIndex(null);
        }, 5000);

        setUndoTimeout(timeout);
    };

    const handleUndo = () => {
        if (deleted !== null && deletedIndex !== null) {
            const updatedHistory = [...history];
            updatedHistory.splice(deletedIndex, 0, deleted);
            setHistory(updatedHistory);

            setDeletedEntry(null);
            setDeletedIndex(null);

            clearTimeout(undoTimeout);
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="bg-blue-200 w-full text-center py-4 rounded-t-xl shadow-md">
                <h1 className="text-3xl font-bold text-gray-800">Mood Records</h1>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {history.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                        {history.map((entry, index) => (
                            <div key={index} className="flex justify-between items-center bg-white shadow-lg rounded-xl p-4 border border-gray-300">
                                <div className="flex flex-col items-start">
                                    <p className="text-2xl mt-2">Mood: <span className="italic">{entry.mood}</span></p>
                                    <p className="text-lg font-semibold text-gray-700">
                                        📅 {entry.date} 🕒 {entry.time}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-red-500 hover:text-red-700 text-xl"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-lg text-center mt-6">No records yet.</p>
                )}
                {deleted && (
                    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4">
                        <p className="text-lg">Entry deleted</p>
                        <button onClick={handleUndo} className="text-blue-400 hover:text-blue-300 font-bold">
                            Undo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
