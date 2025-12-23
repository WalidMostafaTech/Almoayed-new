import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendContact } from "../../services/mainServices";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ContactUsSection = () => {
  const { t } = useTranslation();
  const { setting } = useSelector((state) => state.setting);

  const [formData, setFormData] = useState({
    name: "",
    phone: "966",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("ContactUsSection.errors.name");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("ContactUsSection.errors.phoneRequired");
    } else if (formData.phone.replace(/\D/g, "").length < 11) {
      newErrors.phone = t("ContactUsSection.errors.phoneInvalid");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("ContactUsSection.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("ContactUsSection.errors.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("ContactUsSection.errors.message");
    }

    return newErrors;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: sendContact,
    onSuccess: () => {
      setFeedback({
        type: "success",
        message: t("ContactUsSection.feedback.success"),
      });

      setFormData({
        name: "",
        phone: "966",
        email: "",
        message: "",
      });

      setErrors({});
    },
    onError: () => {
      setFeedback({
        type: "error",
        message: t("ContactUsSection.feedback.error"),
      });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFeedback(null);
    mutate({
      ...formData,
      phone: `+${formData.phone}`,
    });
  };

  return (
    <section className="sectionPadding container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 rounded-4xl overflow-hidden w-full max-w-7xl mx-auto">
        {/* Map */}
        <div className="col-span-1 lg:col-span-5 min-h-[500px] bg-white order-2 lg:order-1 rounded-t-4xl lg:rounded-t-none overflow-hidden">
          {/* <iframe
            title="map"
            src="https://www.google.com/maps?q=25.2048,55.2708&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          /> */}

          <div dangerouslySetInnerHTML={{ __html: setting?.contact?.map }} />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="col-span-1 lg:col-span-7 p-6 lg:p-10 space-y-4 order-1 lg:order-2 content-center bg-myDark-2 rounded-b-4xl lg:rounded-b-none"
        >
          <hgroup className="space-y-2">
            <p className="text-myGold text-sm">{t("ContactUsSection.title")}</p>

            <h2 className="text-xl capitalize">
              {t("ContactUsSection.subtitle")}
            </h2>
          </hgroup>

          {/* Name */}
          <div>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder={t("ContactUsSection.placeholders.name")}
                value={formData.name}
                onChange={handleChange}
                className={`bg-myDark text-white w-full p-2 rounded-lg outline-none border-none pr-8 ${
                  errors.name
                    ? "ring-red-500 ring-2"
                    : "ring-myGold ring-1 focus-within:ring-2"
                }`}
              />
              <CiUser className="absolute right-2 top-1/2 -translate-y-1/2 text-myGold text-lg" />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-2">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div dir="ltr">
            <div
              className={`rounded-lg ${
                errors.phone ? "ring-red-500 ring-2" : "ring-myGold ring-1"
              }`}
            >
              <PhoneInput
                country={"sa"}
                value={formData.phone}
                placeholder={t("ContactUsSection.placeholders.phone")}
                onChange={(phone) => {
                  setFormData((prev) => ({ ...prev, phone }));
                  if (errors.phone)
                    setErrors((prev) => ({ ...prev, phone: "" }));
                }}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerClass="!w-full"
                inputClass="!w-full !bg-myDark !text-white !border-none !rounded-lg !pr-12 !h-[42px]"
                buttonClass="!bg-myDark !border-none hover:bg-myDark-2! rounded-l-lg!"
                dropdownClass="!bg-myDark !text-gray-500"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <input
                type="text"
                name="email"
                placeholder={t("ContactUsSection.placeholders.email")}
                value={formData.email}
                onChange={handleChange}
                className={`bg-myDark text-white w-full p-2 rounded-lg outline-none border-none pr-8 ${
                  errors.email
                    ? "ring-red-500 ring-2"
                    : "ring-myGold ring-1 focus-within:ring-2"
                }`}
              />
              <HiOutlineMail className="absolute right-2 top-1/2 -translate-y-1/2 text-myGold text-lg" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder={t("ContactUsSection.placeholders.message")}
              value={formData.message}
              onChange={handleChange}
              className={`bg-myDark text-white w-full p-2 rounded-lg outline-none border-none min-h-26 ${
                errors.message
                  ? "ring-red-500 ring-2"
                  : "ring-myGold ring-1 focus-within:ring-2"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button className="mainBtn w-full sm:w-auto" disabled={isPending}>
            {isPending
              ? t("ContactUsSection.buttons.sending")
              : t("ContactUsSection.buttons.send")}
            <GoArrowLeft className="ltr:rotate-180" />
          </button>

          {/* Feedback */}
          {feedback && (
            <div
              className={`p-3 rounded-lg text-sm text-center ${
                feedback.type === "success"
                  ? "bg-green-600/20 text-green-400 border border-green-600"
                  : "bg-red-600/20 text-red-400 border border-red-600"
              }`}
            >
              {feedback.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
