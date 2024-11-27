// src/hooks/useFacilities.ts
import { useState } from 'react';
import { Facility } from '@/types/facility';
import { searchFacilities } from '@/api/facilities';

export function useFacilities() {
    const [facilities, setFacilities] = useState<Facility[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const search = async (query: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await searchFacilities(query);
            // if (response.error) {
            //     setError(response.error);
            // } else {
                setFacilities(response.data);
            // }
        } catch (err) {
            setError('Failed to search facilities');
        } finally {
            setIsLoading(false);
        }
    };

    return { facilities, isLoading, error, search };
}
