import api from "./api";

export const getHome = async () => {
  const { data } = await api.get("/home");
  return data?.data || [];
};

export const getSliders = async () => {
  const { data } = await api.get("/sliders");
  return data?.data || [];
};

export const getFaqs = async () => {
  const { data } = await api.get("/faqs");
  return data?.data || [];
}

export const getTestimonials = async () => {
  const { data } = await api.get("/testimonials");
  return data?.data || [];
}
