import api from "./api";

export const getSettings = async () => {
  const { data } = await api.get("/settings/all");
  return data?.data || [];
};

export const sendContact = async (formData) => {
  const { data } = await api.post(`/send-contact`, formData);
  return data?.data || [];
};
