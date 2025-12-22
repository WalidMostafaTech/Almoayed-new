import api from "./api";

export const getAboutUsPage = async () => {
  const { data } = await api.get("/aboutus");
  return data?.data || [];
};

export const getPartnersPage = async () => {
  const { data } = await api.get("/partners");
  return data?.data || [];
};

export const getWebServicesPage = async () => {
  const { data } = await api.get("/webservices");
  return data|| [];
};


