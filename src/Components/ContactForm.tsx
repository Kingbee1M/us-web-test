import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toast } from 'react-toastify';
import img from '../assets/svg/lightpinkwave.svg';
import { hrmsBaseUrl } from "../shared/baseUrl";

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const ContactFormSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z
  .string()
  .regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const ContactForm = () => {
  const validateWithZod = (values: ContactFormValues) => {
    try {
      ContactFormSchema.parse(values);
    } catch (err) {
      const errors: Partial<Record<keyof ContactFormValues, string>> = {};

      if (err instanceof z.ZodError) {
        err.issues.forEach((e) => {
          const key = e.path[0] as keyof ContactFormValues;
          errors[key] = e.message;
        });
      }

      return errors;
    }
    return {};
  };

  return (
    <div className='w-full relative flex justify-center' id='contact-form'>
      <Formik<ContactFormValues>
        validateOnMount
        initialValues={{
          fullName: "",
          email: "",
          phone: '',
          company: "",
          message: "",
        }}
        validate={validateWithZod}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          const res = await fetch(`${hrmsBaseUrl}/api/v1/uscontactus`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const data = await res.json().catch(() => null);

          if (!res.ok) {
            const message = data?.message || "";

            
            if (message.includes("registeredSubscriber")) {
              toast.error(
                "You have already filled the form with this email. You can't submit again."
              );
            } else {
              toast.error(message || "Failed to send message.");
            }

            return;
          }
          
          toast.success("Message sent successfully!");
          resetForm();

        } catch (err) {
          console.error(err);
          toast.error("Network error. Please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
      >
        {() => (
          <Form className="w-[90%] lg:w-3/5 my-28 pl-10 flex justify-center flex-col gap-4">
            <h1 className="text-4xl text-heading-color font-garamond font-bold">
              Contact Us
            </h1>

            <p className="text-lg font-montserrat text-text-color">
              Drop us a line! We are here to answer your questions 24/7
            </p>

            <div className="us-div xs:w-[90%]">
              <label htmlFor="fullName" className="us-label font-montserrat">Full Name</label>
              <Field type="text" id="fullName" name="fullName" placeholder="Full name" className="us-input font-montserrat" />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="us-div xs:w-[90%]">
              <label htmlFor="email" className="us-label font-montserrat">Email</label>
              <Field type="email" id="email" name="email" placeholder="You@company.com" className="us-input font-montserrat" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="us-div xs:w-[90%]">
              <label htmlFor="phone" className="us-label font-montserrat">Phone</label>
              <Field type="tel" id="phone" name="phone" onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const target = e.currentTarget;
                target.value = target.value.replace(/\D/g, "");
              }} inputMode="numeric" placeholder="0123456789" className="us-input font-montserrat" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="us-div xs:w-[90%]">
              <label htmlFor="company" className="us-label font-montserrat">Company</label>
              <Field type="text" id="company" name="company" placeholder="ABC" className="us-input font-montserrat" />
              <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="us-div xs:w-[90%]">
              <label htmlFor="message" className="us-label font-montserrat">Message</label>
              <Field as="textarea" id="message" name="message" placeholder="Leave us a message" rows={6} className="p-2 rounded-lg border border-[#D0D5DD] border-solid font-montserrat focus:outline-none focus:text-text-color text-text-color" />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className='w-[90%] sm:w-[70%] text-center bg-primary-orange hover:bg-hover-orange text-white py-2 px-4 text-base md:text-sm md:px-2 md:py-3 rounded-md'
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>

      <img src={img} alt="wave" className='w-full absolute bottom-0 ' />
    </div>
  );
};

export default ContactForm;
