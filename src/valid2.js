import React from "react";
import { useFormik } from "formik";

const validation = (data) => {
  const errors = {};

  if (!data.Firstname) {
    errors.Firstname = "pleasr type name";
    if (!data.LastName) {
      errors.LastName = "please type some text";
    } else if (data.LastName.length > 20) {
      errors.LastName = "please type less thn 20";
    }
  }
  return errors;
};

const Employee = () => {
  const abc = useFormik({
    initialValues: {
      Firstname: "",
      LastName: "",
      Location: "",
    },
    validate: validation,
    onSubmit: (value) => {
      alert(JSON.stringify(value));
    },
  });

  return (
    <div>
      <form onSubmit={abc.handleSubmit}>
        <p>
          <label>Employee FirstName:</label>
          <input
            type="text"
            name="Firstname"
            id="FirstName"
            onChange={abc.handleChange}
            value={abc.values.Firstname}
            onBlur={abc.handleBlur}
          ></input>
          {abc.touched.Firstname && abc.errors.Firstname ? (
            <span style={{ color: "red" }}>{abc.errors.Firstname}</span>
          ) : null}
        </p>
        <p>
          <label>Employee LastName:</label>

          <input
            type="text"
            name="LastName"
            id="LastName"
            onChange={abc.handleChange}
            value={abc.values.LastName}
            onBlur={abc.handleBlur}
          ></input>
          {abc.touched.LastName && abc.errors.LastName ? (
            <span style={{ color: "blue" }}>{abc.errors.LastName}</span>
          ) : null}
        </p>

        <p>
          <label>
            {" "}
            Employee Location:
            <input
              type="text"
              name="Location"
              id="Location"
              value={abc.values.Location}
              onchange={abc.handleChange}
              onBlur={abc.handleBlur}
            ></input>
          </label>
        </p>
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default Employee;
