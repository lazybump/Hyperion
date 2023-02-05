const Footer = () => {
  return (
    <div>
      <div className="p-10 border-y">
        <h2 className="mb-6">Get more information</h2>
        <p className="mb-5">
          We're ready to help with any questions you may have about our
          Bootcamps and Mentor Support.
        </p>
        <div className="space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
          <button className="px-5 py-2 rounded-md block">Book a call</button>
          <button className="px-5 py-2 rounded-md">Join an info session</button>
        </div>
      </div>

      <div className="p-10 space-y-4">
        <h2>Upgrade to the Full Bootcamp</h2>
        <p>Our next cohort starts 3 January 2018.</p>
        <button className="px-5 py-2 rounded-md">Reserve your spot</button>
      </div>
    </div>
  );
};

export default Footer;
