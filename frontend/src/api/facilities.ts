// src/api/facilities.ts
import axios from 'axios';
import { Facility } from '@/types/facility';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function searchFacilities(query: string): Promise<{ data: Facility[] }> {
    try {
        const response = await axios.get(`${API_URL}/api/facilities/search`, {
            params: { query }
        });
        return { data: response.data };
    } catch (error) {
        console.error('Search error:', error);
        // Return mock data for now
        return {
            data: [
                {
                    id: '1',
                    type: 'Hospital',
                    orgPracId: 'ORG001',
                    name: 'Dr. Aminul Islam',
                    ranking: 5,
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
            ]
        };
    }
}