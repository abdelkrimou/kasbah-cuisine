function ContactUs() {
  return (
    <div className="mb-6">
      <h2 className="mb-4 ml-2 font-primary text-2xl capitalize">contacts</h2>
      <ul className="font-text2 text-lg">
        <li>
          Email :
          <a
            href="mailto:chicrestaurant@yahoo.com"
            className="ml-2 font-text text-base hover:underline"
          >
            kasbahcuisine@yahoo.com
          </a>
        </li>
        <li>
          Phone :
          <a
            href="tel:+212678353690"
            className="ml-2 font-text text-base hover:underline"
          >
            +212678353690
          </a>
        </li>
        <li>
          Fax :
          <a
            href="tel:+212540438989"
            className="ml-2 font-text text-base hover:underline"
          >
            +212540438989
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
