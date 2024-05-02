function OpeningHours() {
  return (
    <div className="min-w-[300px]">
      <h2 className="mb-8  text-center font-primary text-2xl capitalize">
        opening hours
      </h2>
      <ul className="divide-y-4 divide-transparent font-text2 text-xl">
        <li className="flex items-center justify-center gap-6 ">
          <span className="inline-block w-1/2  text-right">Monday</span>{" "}
          <span className="inline-block w-1/2 text-left text-base">closed</span>
        </li>
        <li className="flex items-center justify-center gap-6 ">
          <span className="inline-block w-1/2 text-right">Tuesday</span>{" "}
          <span className="inline-block w-1/2 text-left text-base">
            11:00 to 21:00
          </span>
        </li>
        <li className="flex items-center justify-center gap-6 ">
          <span className="inline-block w-1/2 text-right">Wednesday</span>{" "}
          <span className="inline-block w-1/2 text-left text-base">
            11:00 to 21:00
          </span>
        </li>
        <li className="flex items-center justify-center gap-6 ">
          <span className="inline-block w-1/2 text-right">Thursday</span>{" "}
          <span className="inline-block w-1/2 text-left text-base">
            11:00 to 21:00
          </span>
        </li>
        <li className="flex items-center justify-center gap-6 ">
          <span className="inline-block w-1/2 text-right">Friday</span>{" "}
          <span className="inline-block w-1/2 text-left text-base">
            11:00 to 21:00
          </span>
        </li>
        <li className="flex items-center justify-center gap-6 ">
          <span className="inline-block w-1/2 text-right">Saturday</span>{" "}
          <span className="inline-block w-1/2 text-left text-base">
            11:00 to 00:00
          </span>
        </li>
        <li className="flex items-center justify-center gap-6 ">
          <span className="inline-block w-1/2 text-right">Sunday</span>{" "}
          <span className="inline-block w-1/2 text-left text-base">
            11:00 to 00:00
          </span>
        </li>
      </ul>
    </div>
  );
}

export default OpeningHours;
