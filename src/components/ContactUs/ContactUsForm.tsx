import { inputStyle, labelStyle, textareaStyles } from './constants';

const ContactUsForm = () => {
    return (
        <form className="flex flex-col gap-5">
        {/* Full Name */}
      <div className="relative">
        <input
          type="text"
          id="fullName"
          className={inputStyle}
          placeholder=" "
        />

        <label htmlFor="fullName" className={labelStyle}>
          Full Name
        </label>
      </div>

        {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          className={inputStyle}
          placeholder=" "
        />

        <label htmlFor="email" className={labelStyle}>
          Email
        </label>
      </div>

        {/* Phone Number */}
      <div className="relative">
        <input
          type="text"
          id="number"
          className={inputStyle}
          placeholder=" "
        />

        <label htmlFor="number" className={labelStyle}>
        Phone Number
        </label>
      </div>

        {/* Message */}
      <div className="">
        <textarea
        rows={7}
          id="message"
          className={textareaStyles}
          placeholder="Write your message..."
        />
      </div>

      <button className="text-white font-Roboto px-4 py-2 bg-primary-60 rounded-md font-medium hover:bg-primary-55 transition duration-300">
                Submit
            </button>
    </form>
    );
};

export default ContactUsForm;