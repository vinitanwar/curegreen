"use client";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import LoadingForm from "./LoadingForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import Captcha from "./Captcha";

export default function QuotePopup({ isOpen, setIsOpen, service }) {
  const router = useRouter();
  const [captchaToken, setCaptchaToken] = useState(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postCode: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.postCode.trim()) newErrors.postCode = "Post Code is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
 if (!captchaToken) {
      alert('Please complete the CAPTCHA');
      return;
    }
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      postCode: true,
      phone: true,
      message: true,
    });

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);

    const { name, email, postCode, phone, message } = formData;
    // const url = "https://sendingmail-2.onrender.com/sendmail";

    const url = "https://curegreenotp2.onrender.com/sendmail";

    try {
      const response = await axios.post(url, {
        S_name: name,

        S_email: email,
        post_code: postCode,
        S_phone: phone,
        message: message,
        S_services: service || "",

       userEmailsir: "infocuregreen@gmail.com"
          // userEmailsir: "jontypundir12@gmail.com",
      });

      setFormData({
        name: "",
        email: "",
        postCode: "",
        phone: "",
        message: "",
      });
      setErrors({});
      setTouched({});

      setIsOpen(false);

      router.push("/thank-you");
    } catch (error) {
      console.error("Network error:", error);
      router.push("/thank-you");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.prefetch("/thank-you");
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[99] flex items-center justify-center">
          <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative flex">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-[#57B648] text-xl font-bold"
            >
              <ImCross />
            </button>

            {/* Left Section */}
            <div className="w-1/2 hidden md:block">
              <img
                src="/images/popContact.webp"
                alt="Quote"
                className="w-full h-full object-center rounded-lg"
              />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 pl-0 md:pl-6">
              <div className="mb-6">
                <h6 className="uppercase text-[#3F83C0] font-semibold text-sm">
                  Enquire Now
                </h6>
                <h2 className="text-xl lg:text-2xl font-semibold text-[#57B648] mt-1">
                  We'll call to confirm after you submit.
                </h2>
              </div>

              <form onSubmit={formSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Name"
                      className={`w-full p-3 border ${
                        errors.name && touched.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } bg-gray-50 rounded-lg`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Email"
                      className={`w-full p-3 border ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } bg-gray-50 rounded-lg`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="postCode"
                      value={formData.postCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Post Code"
                      className={`w-full p-3 border ${
                        errors.postCode && touched.postCode
                          ? "border-red-500"
                          : "border-gray-300"
                      } bg-gray-50 rounded-lg`}
                    />
                    {errors.postCode && touched.postCode && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.postCode}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone No"
                      className={`w-full p-3 border ${
                        errors.phone && touched.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      } bg-gray-50 rounded-lg`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="4"
                  placeholder="Enter Message"
                  className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
                ></textarea>
<Captcha  setCaptchaToken={setCaptchaToken}/>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#3F83C0] group px-6 sm:px-8 py-3 text-white font-semibold text-xs sm:text-sm relative overflow-hidden inline-flex items-center rounded-lg"
                >
                  <span className="w-8 bg-[#0f2c49] group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
                  <span className="relative z-10">
                    {loading ? "Submitting your form..." : "Submit "}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
