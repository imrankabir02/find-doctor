// src/components/SearchBar.tsx
import { useState, useEffect } from 'react';
import { Mic, MicOff, Search } from 'lucide-react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    isSearching: boolean;
}

export default function SearchBar({ onSearch, isSearching }: SearchBarProps) {
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState<any>(null);
    const [spokenText, setSpokenText] = useState<string>(''); // Add this state

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US'; // You can change this to 'bn-BD' for Bangla

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                setSpokenText(`You said: "${transcript}"`); // Add this
                onSearch(transcript);
                setIsListening(false);
            };

            recognition.onerror = () => {
                setIsListening(false);
                setSpokenText('Error: Could not recognize speech');
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            setRecognition(recognition);
        }
    }, [onSearch]);

    const startListening = () => {
        if (recognition) {
            setSpokenText(''); // Clear previous text
            recognition.start();
            setIsListening(true);
        } else {
            alert('Speech recognition is not supported in this browser.');
        }
    };

    const stopListening = () => {
        if (recognition) {
            recognition.stop();
            setIsListening(false);
        }
    };

    const handleSearch = () => {
        if (input.trim()) {
            onSearch(input.trim());
            setSpokenText(`You typed: "${input.trim()}"`);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-4">
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Find doctors in Uttara, Dhaka..."
                    className="w-full p-4 pr-24 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                    <button
                        onClick={isListening ? stopListening : startListening}
                        className={`p-2 rounded-full ${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                            } text-white transition-colors`}
                        disabled={isSearching}
                    >
                        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                    <button
                        onClick={handleSearch}
                        disabled={!input.trim() || isSearching}
                        className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors disabled:opacity-50"
                    >
                        <Search size={20} />
                    </button>
                </div>
            </div>

            {/* Display spoken/typed text */}
            {spokenText && (
                <div className="text-center">
                    <p className="text-gray-700 bg-gray-100 p-3 rounded-lg">
                        {spokenText}
                    </p>
                </div>
            )}

            {isListening && (
                <div className="text-center">
                    <p className="text-blue-600">Listening...</p>
                </div>
            )}
        </div>
    );
}