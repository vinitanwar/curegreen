"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import Captcha from "./Captcha";


export default function ContactNewForm({ service = "" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [messagee,setMessage]=useState()
  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postCode: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error while typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name !== "message" && !value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
      }));
    }
  };

  const validateFields = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "message" && !value.trim()) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };








 

  const formSubmit = async (e) => {
    e.preventDefault();
   if (!captchaToken) {
      alert('Please complete the CAPTCHA');
      return;
    }
   
    const url = "https://curegreenotp2.onrender.com/sendmail";

    const isValid = validateFields();
    if (!isValid) return;

    setLoading(true);
    const { name, email, postCode, phone, message } = formData;

    try {
      const response = await axios.post(
        url,
        {
          S_name: name,
          S_email: email,
          post_code: postCode,
          S_phone: phone,
          message: message,
          S_services: service || "",
          // userEmailsir: "infocuregreen@gmail.com"
          userEmailsir: "jontypundir12@gmail.com",
        },
        { timeout: 8000 }
      );

      setErrors({});

      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
    router.prefetch("/thank-you");
  }, []);

  return (
    <section className="relative w-full bg-white px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 lg:mt-10 overflow-hidden contact-section">
      <img
        src="/images/contact/shape.webp"
        alt="Bg shape"
        className="w-full object-cover left-0 absolute h-full"
      />

      <div className="relative w-full flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2 z-10">
          <div className="mb-8">
            <h6 className="uppercase sub-title relative text-[#3F83C0] font-semibold text-base">
              Enquire Now
            </h6>
          </div>
          <form onSubmit={formSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } bg-gray-50`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-sm">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } bg-gray-50`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm">
                  Post Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="postCode"
                  value={formData.postCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${
                    errors.postCode ? "border-red-500" : "border-gray-300"
                  } bg-gray-50`}
                />
                {errors.postCode && (
                  <p className="text-red-500 text-xs mt-1">{errors.postCode}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-sm">
                  Phone No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } bg-gray-50`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 border border-gray-300 bg-gray-50"
              ></textarea>
            </div>
<Captcha  setCaptchaToken={setCaptchaToken}/>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#3F83C0] group uppercase px-6 sm:px-8 lg:px-12 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center min-h-[56px]"
            >
              <span className="w-8 bg-[#0f2c49] group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
              <span className="relative z-10">
                {loading ? "Submitting your form..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>

        {/* Right side visual */}
        <div className="w-full lg:w-1/2 flex justify-end items-end z-10">
          <div className="relative w-full">
            <img
              src="https://cooltech-next.vercel.app/_next/static/media/bg4.bec4b4e8.jpg"
              alt="Team"
              className="w-full h-auto shadow-lg"
            />
            <div className="absolute hidden md:block -bottom-[70px] left-0 bg-[#3F83C0] border-[20px] border-white text-white p-6 w-[250px] shadow-xl">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2h6v2a3 3 0 006 0V7a3 3 0 00-6 0v2H9V7a3 3 0 00-6 0v10a3 3 0 006 0z"
                  />
                </svg>
              </div>
              <h5 className="text-center text-lg font-semibold leading-relaxed">
                Our Dedicated Team Is Ready To Help You!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
