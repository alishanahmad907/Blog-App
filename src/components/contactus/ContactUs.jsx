// 'use client'
// import React, { useState } from 'react';
// import styles from './contactus.module.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <h1 className={styles.heading}>Contact Us</h1>
//         <p className={styles.intro}>
//           If you have any questions, suggestions, or feedback, please fill out the form below and we will get back to you as soon as possible.
//         </p>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.formGroup}>
//             <label htmlFor="name" className={styles.label}>Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={styles.input}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="email" className={styles.label}>Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={styles.input}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="message" className={styles.label}>Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className={styles.textarea}
//               rows="5"
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className={styles.button}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
"use client"
import React, { useState } from 'react';
import styles from './contactus.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Thank you for contacting me! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'An error occurred while submitting the form.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while submitting the form.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Contact Me</h1>
        <p className={styles.intro}>
          If you have any questions, suggestions, or feedback, please fill out the form below and I will get back to you as soon as possible.
        </p>
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;