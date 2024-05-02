import { useState } from "react";

function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  function handleSent(e) {
    e.preventDefault();
    setIsSent("loading");
    setTimeout(() => {
      setIsSent(true);
    }, 1000);
  }

  if (isSent === true) {
    return (
      <div className=" flex min-w-[300px] items-center justify-center text-center font-text2 text-lg">
        Thank you for your message. It has been sent successfully. If you need
        immediate assistance, please call our support hotline.
      </div>
    );
  }
  return (
    <div className=" min-w-[350px] px-2">
      <h2 className="mb-4 font-primary text-2xl capitalize">contact us</h2>
      <form className=" flex flex-col gap-2" onSubmit={handleSent}>
        <input
          id="name"
          type="text"
          required
          className="  border-b border-black bg-transparent px-4 py-2 font-primary text-2xl placeholder:font-primary placeholder:text-xl placeholder:text-black focus:outline-none"
          placeholder="Name"
        />

        <input
          id="email"
          type="email"
          required
          placeholder="Email"
          className="  border-b border-black bg-transparent px-4 py-2 font-primary text-2xl placeholder:font-primary placeholder:text-xl placeholder:text-black focus:outline-none"
        />

        <textarea
          id="message"
          placeholder="Message"
          type="text"
          required
          className="mb-6  border-b border-black bg-transparent px-4 py-2 font-primary text-2xl placeholder:font-primary placeholder:text-xl placeholder:text-black focus:outline-none"
        />
        <button className="border border-secondary py-2 font-button uppercase transition-all duration-300 hover:bg-primary hover:text-black ">
          {isSent === "loading" ? "sending ..." : "send"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
