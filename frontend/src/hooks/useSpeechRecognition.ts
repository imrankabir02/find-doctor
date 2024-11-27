// src/hooks/useSpeechRecognition.ts
import { useState, useCallback, useEffect } from 'react';

export function useSpeechRecognition() {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    const startListening = useCallback(() => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }

        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setTranscript(transcript);
        };

        recognition.onerror = () => {
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
        setIsListening(true);
    }, []);

    const stopListening = useCallback(() => {
        setIsListening(false);
    }, []);

    return { isListening, transcript, startListening, stopListening };
}
