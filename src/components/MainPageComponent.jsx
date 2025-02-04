import { useState } from 'react';
import HistoryComponent from './HistoryComponent';
import MoodBarGraph from './MoodBarGraph';
import NavBarComponent from './NavBarComponent';
import SelectorComponent from './SelectorComponent';

export default function MainPageComponent({ history, setHistory, addMoodEntry }) {
    const [active, setActive]=useState('history')
    return (
        <div className="h-screen flex flex-col">
            <NavBarComponent />

            <div className="flex flex-col sm:flex-row flex-grow">
                <div className="w-full sm:w-2/3 p-2 sm:p-4">
                    <SelectorComponent history={history} addMoodEntry={addMoodEntry} />
                </div>
                <div className="w-full sm:w-1/3 flex flex-col p-2 sm:p-4">
                    <div className="flex space-x-4 pb-2">
                        <button
                            className={`px-4 py-2 text-lg font-semibold ${
                                active === 'history' ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-600'
                            }`}
                            onClick={() => setActive('history')}
                        >
                            History
                        </button>
                        <button
                            className={`px-4 py-2 text-lg font-semibold ${
                                active === 'analytics' ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-600'
                            }`}
                            onClick={() => setActive('analytics')}
                        >
                            Analytics
                        </button>
                    </div>
                    

                    <div className="h-[65vh] mt-5 overflow-y-auto scrollbar-hide">
                        {active === 'history' ? (
                            <HistoryComponent history={history} setHistory={setHistory} />
                        ) : (
                            <MoodBarGraph history={history} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
