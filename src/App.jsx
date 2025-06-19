import Calendar from './Calendar';
import './index.css'; // Tailwind is imported here
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-yellow-200 transition-colors p-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-yellow-700 dark:text-yellow-400 text-center w-full">
              Dream Calendar..!❤️
            </h1>
            <div className="absolute right-4 top-4 flex gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full shadow border border-yellow-700 hover:text-white transition-colors"
              >
                ➕ Add Event
              </button>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="hidden"
                />
                <div className="w-10 h-5 bg-gray-300 dark:bg-yellow-800 rounded-full p-1 flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                      darkMode ? 'translate-x-5 bg-yellow-400' : 'translate-x-0 bg-white'
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>

          <Calendar />

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4 text-yellow-600 dark:text-yellow-300">Create New Event</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Event Title" className="w-full px-3 py-2 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700" />
                  <input type="date" className="w-full px-3 py-2 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700" />
                  <input type="time" className="w-full px-3 py-2 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700" />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                    >
                      Save Event
                    </button>
                    <div className="bg-yellow-500 text-white p-4 text-center">
  ✅ Tailwind is working if this is yellow!
</div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
