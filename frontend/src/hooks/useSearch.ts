// src/hooks/useSearch.ts
import { useState, useCallback } from 'react';
import { searchKeywords } from '@/utils/searchKeywords';
import { Facility } from '@/types/facility';

export function useSearch() {
    const [results, setResults] = useState<Facility[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const normalizeText = (text: string): string => {
        return text.toLowerCase().trim();
    };

    const matchesKeyword = (text: string, keywordSet: string[]): boolean => {
        const normalizedText = normalizeText(text);
        return keywordSet.some(keyword => normalizedText.includes(normalizeText(keyword)));
    };

    const processSearch = useCallback(async (query: string) => {
        setIsSearching(true);
        try {
            const normalizedQuery = normalizeText(query);

            // Check if query contains doctor-related terms
            const isDoctorQuery = matchesKeyword(normalizedQuery, [
                ...searchKeywords.doctor.english,
                ...searchKeywords.doctor.bangla
            ]);

            // Check if query contains location terms
            const isLocationQuery = matchesKeyword(normalizedQuery, [
                ...searchKeywords.location.english,
                ...searchKeywords.location.bangla
            ]);

            if (isDoctorQuery || isLocationQuery) {
                // Example response data (replace with actual API call)
                // Inside useSearch.ts
                const mockData: Facility[] = [
                    {
                        id: '1',
                        type: 'Hospital',
                        orgPracId: 'ORG001',
                        name: 'Dr. Aminul Islam',
                        ranking: 5,
                        photo: '/doctor-photo.jpg',
                        category: 'Healthcare',
                        subCategory: ['Cardiology', 'Internal Medicine'],
                        rating: 4.8,
                        totalAppointments: 1500,
                        zone: ['Uttara', 'Dhaka North'],
                        branch: ['Sector 10', 'Sector 4'],
                        areaOfPractice: 'local'
                    },
                    {
                        id: '2',
                        type: 'Clinic',
                        orgPracId: 'ORG002',
                        name: 'Dr. Farida Rahman',
                        ranking: 4,
                        category: 'Healthcare',
                        subCategory: ['General Medicine', 'Diabetes'],
                        rating: 4.7,
                        totalAppointments: 1200,
                        zone: ['Uttara', 'Dhaka North'],
                        branch: ['Sector 4'],
                        areaOfPractice: 'local'
                    }
                ];

                setResults(mockData);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error('Search error:', error);
            setResults([]);
        } finally {
            setIsSearching(false);
        }
    }, []);

    return { results, isSearching, processSearch };
}