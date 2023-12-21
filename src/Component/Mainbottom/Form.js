import React from "react";
import { Formik } from "formik";

const Form = ({ absolute }) => (
  <div className={`${absolute} flex justify-center items-center w-[449px] rounded-[8px] h-[380px] top-[40px] right-[20px] bg-[#4B4864]`}>
    
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            className="w-[377px] h-[326px] flex flex-col  bg-[#4B4864]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-white text-[26px] font-bold ">Ask a Question</h1>
            <p className="text-[#8E88C1]">The company's managers will be happy to answer your questions and calculate the cost of services</p>
            <input placeholder="Name" className="bg-[#646081] w-[377px] h-[42px] rounded-[8px] mb-[16px] pl-[20px] mt-[34px] "
              type="text"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <input className="bg-[#646081] w-[377px] h-[42px] rounded-[8px] mb-[16px] pl-[20px] "
              type="tel"
              name="tel"
              placeholder="Telephone number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input className="bg-[#646081] w-[377px] h-[42px] rounded-[8px] pl-[20px] mb-[16px]  "
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            
            {errors.password && touched.password && errors.password}
            <div className="flex justify-end"><button className="text-white w-[126px] h-[40px] bg-[#3F50E7] rounded-[8px]  " type="submit" disabled={isSubmitting}>
              Submit
            </button></div>
          </form>
        )}
      </Formik>
  </div>
);

export default Form;
