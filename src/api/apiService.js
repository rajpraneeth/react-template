import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const API_BASE_URL = "https://dummy.restapiexample.com"; // Replace with your API base URL

const handleResponse = async (response) => {
  console.log("API Response: ", response);

  if (!response.ok) {
    const error = await response.json();
    console.error("API Error:", error);
    toast.error(error.message || "Something went wrong");
  }

  return response.json();
};

const useCustomQuery = (queryKey, endpoint) => {
  return useQuery(
    queryKey,
    async () => {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        mode: "no-cors", // remove this from production code
        headers: {
          "Content-Type": "application/json",
        },
      });
      return handleResponse(response);
    },
    { enabled: false }
  );
};

const useCustomMutation = (queryKey, endpoint) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data) => {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

const apiService = {
  useGet: (queryKey, endpoint) => useCustomQuery(queryKey, endpoint),
  usePost: (queryKey, endpoint) => useCustomMutation(queryKey, endpoint),
  useDelete: (queryKey, endpoint) => useCustomMutation(queryKey, endpoint),
};

export default apiService;
