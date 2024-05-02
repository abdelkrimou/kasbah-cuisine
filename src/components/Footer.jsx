import ContactForm from "./ContactForm";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";
import OpeningHours from "./OpeningHours";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black bg-secondary  bg-footer bg-cover bg-center bg-no-repeat px-2 py-20 text-secondary">
      <div className="absolute inset-0 bg-primary opacity-90 "></div>
      <div className="relative z-10 flex flex-col flex-wrap ">
        <div className="  m-auto flex flex-wrap justify-center gap-[100px]">
          <OpeningHours />
          <ContactForm />
          <ContactUs />
          <FollowUs />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
