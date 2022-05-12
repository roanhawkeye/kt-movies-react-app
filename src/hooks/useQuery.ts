import { useLocation } from 'react-router-dom';

export type UseQueryResult = URLSearchParams;

export const useQuery = (): UseQueryResult => new URLSearchParams(useLocation().search);
