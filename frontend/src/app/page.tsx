// src/app/page.tsx
'use client';

import { useFacilities } from '@/hooks/useFacilities';
import SearchBar from '@/components/SearchBar';
import FacilityCard from '@/components/FacilityCard';
import SearchMessage from '@/components/SearchMessage';

export default function Home() {
  const { facilities, isLoading, error, search } = useFacilities();

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Healthcare Facility Finder
        </h1>

        <SearchBar
          onSearch={search}
          isSearching={isLoading}  // Changed isLoading to isSearching to match the prop type
        />

        <SearchMessage/>

        {isLoading && (
          <div className="text-center mt-8">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center mt-8">{error}</div>
        )}

        {facilities.length > 0 && (
          <div className="mt-8 space-y-4">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        )}

        {!isLoading && !error && facilities.length === 0 && (
          <div className="text-center mt-8 text-gray-500">
            No facilities found. Try a different search term.
          </div>
        )}
      </div>
    </main>
  );
}