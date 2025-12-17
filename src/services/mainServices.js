import api from "./api";

export const getSettings = async () => {
  const { data } = await api.get("/all-settings");
  return data?.data || [];
};
