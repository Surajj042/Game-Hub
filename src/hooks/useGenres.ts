import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClinet = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClinet.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
