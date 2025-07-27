import React from "react";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddandUpdate from "./AddandUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { toast, ToastContainer } from "react-toastify";




const Contactcard = ({ contact }) => {

  const {onOpen,onClose,isOpen} = useDisclouse();



  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact Deleted")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="p-2 bg-yellow-200 flex justify-between items-center rounded-lg"
      >
        <div className="flex gap-2  ">
          <HiOutlineUserCircle className="text-orange-300 text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl cursor-pointer">
          <RiEditCircleLine onClick={onOpen} />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange "
          />
        </div>
      </div>
      <AddandUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    
    </>
  );
}

export default Contactcard;
