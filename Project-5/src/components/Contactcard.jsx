import React from 'react'
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
function Contactcard({contact}) {
  return (
          <div key={contact.id} className="p-2 bg-yellow-200 flex justify-between items-center rounded-lg">
            <div className="flex gap-2  ">
              <HiOutlineUserCircle className="text-orange-300 text-4xl" />
              <div className="">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-3xl">
              <RiEditCircleLine />
              <IoMdTrash className="text-orange" />
            </div>
          </div>
  )
}

export default Contactcard
