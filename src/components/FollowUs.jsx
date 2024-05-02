function FollowUs() {
  return (
    <div>
      <h2 className="mb-4 font-primary text-2xl capitalize">follow us</h2>
      <div className="flex gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary transition-all duration-300 hover:bg-twitter hover:text-black"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary transition-all duration-300 hover:bg-facebook hover:text-white"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com"
          className=" flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary text-lg transition-all duration-300 hover:bg-instagram hover:text-amber-100"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.tiktok.com"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary transition-all  duration-300 hover:bg-tiktok hover:text-pink-800"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </div>
  );
}

export default FollowUs;
