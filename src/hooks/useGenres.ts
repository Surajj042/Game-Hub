import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: genres,
  });

export default useGenres;
