import React, { useState } from "react";
import HorizontalLine from "./HorizontalLine";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter the valid email address";
    }
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length == 0) {
      setFormStatus("Form submited successfully");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setFormErrors(errors);
      setFormStatus("");
    }
  };

  return (
    <div>
      <div className="mt-20 text-2xl font-semibold text-center xl:text-2xl">
        Contact me
        <HorizontalLine width="w-1/4" />
        <form
          className="justify-start pt-10 sm:justify-center "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:mx-auto sm:gap-10 sm:justify-center sm:items-center sm:flex">
            <label htmlFor="" className="text-lg opacity-90 sm:text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-2/3 p-2 mx-auto text-base border-4 rounded-lg sm:border-4 sm:rounded-lg sm:w-2/3 sm:mx-0 sm:p-2 sm:text-lg"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span>{formErrors.name}</span>}
          </div>

          <div className="flex flex-col gap-2 mt-6 sm:flex-row sm:mx-auto sm:gap-10 sm:justify-center sm:items-center sm:flex sm:pt-4">
            <label htmlFor="" className="text-lg opacity-90 sm:text-xl">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="w-2/3 p-2 mx-auto text-base border-4 rounded-lg sm:border-4 sm:rounded-lg sm:w-2/3 sm:mx-0 sm:text-lg"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>

          <div className="flex flex-col gap-2 mt-6 sm:flex-row sm:mx-auto sm:gap-10 sm:justify-center sm:items-center sm:flex sm:pt-4">
            <label className="text-lg opacity-90 sm:text-xl">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-2/3 p-2 mx-auto text-base border-4 rounded-lg sm:border-4 sm:rounded-lg sm:w-2/3 sm:mx-0 sm:text-lg"
              value={formData.subject}
              onChange={handleChange}
            />
            {formErrors.subject && <span>{formErrors.subject}</span>}
          </div>

          <div className="flex flex-col gap-2 mt-6 sm:flex-row sm:mx-auto sm:gap-10 sm:justify-center sm:items-center sm:flex sm:pt-4">
            <label htmlFor="" className="text-lg opacity-90 sm:text-xl">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              className="w-2/3 p-2 mx-auto text-base border-4 rounded-lg sm:border-4 sm:rounded-lg sm:w-2/3 sm:mx-0 sm:text-lg"
            />
            {formErrors.message && <span>{formErrors.message}</span>}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-4 mt-6"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {formStatus && <p>{formStatus}</p>}
      </div>
    </div>
  );
};

export default Contact;
