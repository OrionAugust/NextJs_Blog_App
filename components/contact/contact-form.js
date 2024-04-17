import React, { useState } from "react";
import { Toaster,toast } from "react-hot-toast";
import styles from "../../styles/contact-form.module.css";

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredName, setEnteredName] = useState();
  const [enteredMessage, setEnteredMessage] = useState();
  async function sendMessage(event) {
    event.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(res.ok)
    {
        toast.success("Message sent")
    }

    if(!res.ok)
    {
        const data=await res.json();

        toast.error(data.message);
    }
  }

  return (
    <section className={styles.contact}>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button   onClick={sendMessage}>Send Message</button>
        </div>
      </form>
      <div>
        <Toaster/>
      </div>
    </section>
  );
}
