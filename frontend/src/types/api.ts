// src/types/api.ts
import { Facility } from './facility';

export interface SearchResponse {
  data: Facility[];
  error?: string;
}