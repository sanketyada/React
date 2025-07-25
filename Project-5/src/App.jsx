import React, { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import Contactcard from "./components/Contactcard";
import Model from "./components/Model";
import AddandUpdate from "./components/AddandUpdate";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "Contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(contactLists);
        setContacts(contactLists);
      } catch (error) {}
    };
    getContacts();
  }, []);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4 ">
        <Navbar />
        <div className="flex gap-2 ">
          <div className="flex relative items-center flex-grow">
            <FaSearch className="text-white text-2xl absolute left-2 " />
            <input
              type="text"
              className="flex-grow h-10 bg-transparent border
           border-white rounded-md text-white pl-10"
            />
          </div>
          <IoAddCircle
            onClick={onOpen}
            className="text-white text-5xl cursor-pointer"
          />
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.map((contact) => (
            <Contactcard contact={contact} />
          ))}
        </div>
      </div>
      <AddandUpdate isOpen={isOpen} onClose={onClose}/>
          </>
  );
}

export default App;
