import axios, { AxiosPromise } from "axios";
import { tableData } from "../interface/tableData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fecthData = async (): AxiosPromise<tableData[]> => {
  const response = axios.get(API_URL + "/tablem");
  return response;
};
export function useTableData() {
  const query = useQuery({
    queryFn: fecthData,
    queryKey: ["table-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
