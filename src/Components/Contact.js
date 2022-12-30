
import '../index.css'
import React, {useRef, useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import Modal from '../Pages/Layouts/Contact_modal/Modal.jsx';



const Contact = () => {
      //Email server
      const form = useRef();

      const submitEmail = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        e.target.reset();
        setIsSubmit(true);
      };

      //Modal
      const [openModal, setOpenModal] = useState(false);

      //Contact Values
      const initialValues = {
        fullName: '',
        email: '',
        project: '',
      };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
        };

    //Form Validation
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        emailjs.sendForm(
          'service_yuwkn88',
          'template_4dsemuz',
          form.current,
          'SZ6JqU7U9W8hUWaci'
        )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setOpenModal(true);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullName) {
          errors.fullName = "Name is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.project) {
          errors.project = "Message is required";
        } else if (values.project.length < 4) {
          errors.project = "Message must be more than 4 characters";
        }
        return errors;
      };


      return (
        <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
       <div className="Success">Message Delivered</div>
     ) : (
       <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
     )}

          <div className="form" >
             <form
                ref={form}
                noValidate
                onSubmit={submitEmail}
                className="contact_form m-4">

                <div className="names">
                  <div className="contact_form-div flex flex-col mt-4">
                    <label className="text-sm font-bold leading-8">Full Name:</label>
                      <input
                        type="text"
                        name="fullName"
                        id="full_name"
                        value={formValues.fullName}
                        onChange={handleChange}
                        placeholder="Kindly enter your full name"
                        className="border-2 rounded-full m-2 p-3 hover:border-cyan-600 focus:border-cyan-500"
                        />
                        </div>
                </div>
                <p style={{ color: 'red', fontSize: '14px'}}>{formErrors.fullName}</p>

                <div className="contact_form-div flex flex-col">
                    <label className="text-sm font-bold leading-8">Email:</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="yourname@email.com"
                        className="border-2 rounded-full m-2 p-3 hover:border-cyan-600"
                        />
              </div>
              <p style={{ color: 'red', fontSize: '14px'}}>{formErrors.email}</p>

               <div className="contact_form-div flex flex-col">
                  <label className="text-sm font-bold leading-8">Project:</label>
                     <textarea
                        name="project"
                        id="project"
                        rows="10" cols="20"
                        value={formValues.project}
                        onChange={handleChange}
                        className="border-2 rounded-3xl m-2 p-4 hover:border-cyan-600"
                        placeholder="Send a message and I'll reply you as soon as possible..."
                        />
                  </div>
                  <p style={{ color: 'red', fontSize: '14px'}}>{formErrors.project}</p>

                  <div>

                  <button
                    type="submit"
                    id="btn__submit"
                    className="m-2 btn_2"
                    value= {isSubmit}
                    >
                    Send message
                  </button>
                  </div>
                  <Modal open={openModal} onClose={() => setOpenModal(false)} />

          </form>
          </div>
     </div>
    )
  }
export default Contact;
