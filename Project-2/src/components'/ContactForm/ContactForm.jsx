import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'

import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactForm() {

  const [data,setData] = useState({name:"Snaket", email:"Email.com",review:"Nice"})

  const handleCall = ()=>{
    console.log('Call Support')
  }
  const chatHandle =()=>{
    console.log("Chat support")
  }
  const formSubmit = (event)=>{
    event.preventDefault()
    setData({...data,name:event.target[0].value,email:event.target[1].value,review:event.target[2].value})
  }
  return (

    <section className={styles.container}>
      <div className={styles.contactform}>
        <div className={styles.topButton}>
            <Button 
             onClick={chatHandle}
            text="Via Support Chat" icon={<MdMessage fontSize="24px"/>}/>
            <Button 
            onClick={handleCall}
            text="Via Call" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button isOutLine={true} text="Via Email Call" icon={<MdEmail fontSize="24px"/>}/>
        
        <form onSubmit={formSubmit}>
          <div className={styles.formController}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' />
          </div>
          <div className={styles.formController}>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' />
          </div>
          <div className={styles.formController}>
            <label htmlFor="text">Feedback</label>
            <textarea name="" rows="8"/>
          </div>
          <div style={{display:"flex",justifyContent:"end"}}>
            <Button  text="Submit" icon={<MdEmail fontSize="24px"/>}/>
          </div>
          <div className="Alldata">
            <h1>Name:{data.name}</h1>
            <h1>Email:{data.email}</h1>
            <h1>Review:{data.review}</h1>
          </div>
        </form>
      </div>

      <div className={styles.contactimage}>
        <img src="/images/contact.svg" alt="customer care images" />
      </div>
    </section>
  )
}

export default ContactForm
