import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الجوال مطلوب";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "رقم الجوال غير صحيح";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", formData);

      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const latitude = "25.2048";
  const longitude = "55.2708";

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 rounded-4xl overflow-hidden w-full max-w-7xl mx-auto bg-myDark-2">
      <div className="col-span-1 lg:col-span-5 min-h-[500px] bg-white order-2 lg:order-1">
        {" "}
        <MapContainer
          center={[latitude, longitude]}
          zoom={15}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[latitude, longitude]} icon={markerIcon}>
            <Popup>موقعنا هنا</Popup>
          </Marker>
        </MapContainer>
      </div>

      <form
        onSubmit={handleSubmit}
        className="col-span-1 lg:col-span-7 p-4 lg:p-10 space-y-4 order-1 lg:order-2 content-center"
      >
        <hgroup className="space-y-2">
          <p className="text-myGold text-sm">تواصل معنا</p>

          <h2 className="text-xl capitalize">
            فريقنا جاهز للإجابة على استفساراتك وتقديم الدعم الذي تحتاجه لتحقيق
            رؤيتك بكل احترافية.
          </h2>
        </hgroup>

        <div>
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="الإسم كاملا *"
              value={formData.name}
              onChange={handleChange}
              className={`bg-myDark text-white w-full p-2 rounded-lg outline-none border-none pr-8 ${
                errors.name
                  ? "ring-red-700 ring-2"
                  : "ring-myGold ring-1 focus-within:ring-2"
              }`}
            />
            <CiUser className="absolute right-2 top-1/2 -translate-y-1/2 text-myGold text-lg" />
          </div>
          {errors.name && (
            <p className="text-red-700 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div dir="ltr">
          <div
            className={`rounded-lg ${
              errors.phone ? "ring-red-700 ring-2" : "ring-myGold ring-1"
            }`}
          >
            <PhoneInput
              country={"ae"} // الإمارات افتراضي (غيرها لو حابب)
              value={formData.phone}
              placeholder="* رقم الجوال"
              onChange={(phone) => {
                setFormData((prev) => ({
                  ...prev,
                  phone,
                }));

                if (errors.phone) {
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }
              }}
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="!w-full"
              inputClass="!w-full !bg-myDark !text-white !border-none !rounded-lg !pr-12 !h-[42px]"
              buttonClass="!bg-myDark !border-none hover:bg-myDark-2!"
              dropdownClass="!bg-myDark !text-gray-500"
            />
          </div>

          {errors.phone && (
            <p className="text-red-700 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* <div>
          <div className="relative">
            <input
              type="text"
              name="phone"
              placeholder="رقم الجوال *"
              value={formData.phone}
              onChange={handleChange}
              className={`bg-myDark text-white w-full p-2 rounded-lg outline-none border-none pr-8 ${
                errors.phone
                  ? "ring-red-700 ring-2"
                  : "ring-myGold ring-1 focus-within:ring-2"
              }`}
            />
            <HiMiniDevicePhoneMobile className="absolute right-2 top-1/2 -translate-y-1/2 text-myGold text-lg" />
          </div>
          {errors.phone && (
            <p className="text-red-700 text-sm mt-1">{errors.phone}</p>
          )}
        </div> */}

        <div>
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="البريد الإلكترونى *"
              value={formData.email}
              onChange={handleChange}
              className={`bg-myDark text-white w-full p-2 rounded-lg outline-none border-none pr-8 ${
                errors.email
                  ? "ring-red-700 ring-2"
                  : "ring-myGold ring-1 focus-within:ring-2"
              }`}
            />
            <HiOutlineMail className="absolute right-2 top-1/2 -translate-y-1/2 text-myGold text-lg" />
          </div>
          {errors.email && (
            <p className="text-red-700 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="رسالتك *"
            value={formData.message}
            onChange={handleChange}
            className={`bg-myDark text-white w-full p-2 rounded-lg outline-none border-none min-h-26 ${
              errors.message
                ? "ring-red-700 ring-2"
                : "ring-myGold ring-1 focus-within:ring-2"
            }`}
          ></textarea>
          {errors.email && (
            <p className="text-red-700 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <button className="mainBtn">
          إرسال الرسالة
          <GoArrowLeft />
        </button>
      </form>
    </section>
  );
};

export default ContactUsSection;
