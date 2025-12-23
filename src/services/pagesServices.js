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
  return data || [];
};

export const getWebServicesDetailsPage = async (id) => {
  const { data } = await api.get(`/webservices/${id}`);
  return data?.data || [];
};

export const getBlogs = async () => {
  const { data } = await api.get("/blogs");
  return data || [];
};

export const getBlogDetailsPage = async (id) => {
  const { data } = await api.get(`/blogs/${id}`);
  return data?.data || [];
};

export const getContactPage = async () => {
  const { data } = await api.get("/contact-settings");
  return data?.data || [];
};
