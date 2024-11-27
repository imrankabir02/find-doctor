import { useState, useEffect } from 'react';

export default function SearchMessage() {
    const [message, setMessage] = useState('');
    const [isListening, setIsListening] = useState(false);

    // Function to display what was searched
    const displayMessage = (text: string) => {
        setMessage(text);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Search Query</h2>

                {/* Display recognized message */}
                {message && (
                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-600">You said:</p>
                            <p className="text-lg font-medium">{message}</p>
                        </div>
                    </div>
                )}

                {!message && (
                    <p className="text-gray-500">
                        Try saying "Find me the best doctor in Uttara Dhaka" or "ডাক্তার খুঁজে দাও উত্তরায়"
                    </p>
                )}
            </div>
        </div>
    );
}