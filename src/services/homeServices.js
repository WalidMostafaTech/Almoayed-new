import api from "./api";

export const getSliders = async () => {
  const { data } = await api.get("/sliders");
  return data?.data || [];
};
