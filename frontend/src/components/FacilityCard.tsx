// src/components/FacilityCard.tsx
import { Facility } from '@/types/facility';
import { Building, MapPin, Star, Calendar } from 'lucide-react';

interface FacilityCardProps {
    facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-semibold">{facility.name}</h3>
                        <p className="text-gray-600">{facility.type}</p>
                        {facility.photo && (
                            <img
                                src={facility.photo}
                                alt={facility.name}
                                className="w-20 h-20 rounded-full mt-2"
                            />
                        )}
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center">
                            <span className="text-lg font-bold text-blue-600">{facility.rating}</span>
                            <Star className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" />
                        </div>
                        <span className="text-sm text-gray-500">Rank: {facility.ranking}</span>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{facility.zone.join(', ')}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <Building className="w-4 h-4 mr-2" />
                        <span>{facility.branch.join(', ')}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{facility.totalAppointments.toLocaleString()} appointments</span>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-600">Specialties:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {facility.subCategory.map((category) => (
                            <span
                                key={category}
                                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                    <span className="text-sm text-gray-600">
                        Practice Area: {facility.areaOfPractice}
                    </span>
                </div>
            </div>
        </div>
    );
}