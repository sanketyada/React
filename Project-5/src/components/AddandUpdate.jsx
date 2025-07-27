import React from "react";
import Model from "./Model";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../config/firebase";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactschemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

function AddandUpdate({ isUpdate, isOpen, onClose, contact }) {
  const AddContact = async (data) => {
    try {
      const contactRef = collection(db, "Contacts");
      await addDoc(contactRef, data);

      onClose();
      toast.success("Contact Added");
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (data, id) => {
    try {
      const contactRef = doc(db, "Contacts", id);
      await updateDoc(contactRef, data);

      onClose();
      toast.success("Contact Updated");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactschemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(val) => {
            isUpdate ? UpdateContact(val, contact.id) : AddContact(val);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" />
              <div className="text-red-600 text-s ">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10" />
              <div className="text-red-600 text-s ">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="self-end bg-orange-500 px-3 py-1.5 border">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default AddandUpdate;
