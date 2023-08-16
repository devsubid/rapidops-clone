const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100/50">
      <div className="wrapper container-custom-xs flex flex-col gap-6 py-24">
        <h2 className="font-semibold text-2xl">CONTACT ME</h2>
        <ul className="flex gap-8 whitespace-nowrap">
          <li>
            <span className="font-semibold">Phone: </span>
            <span>+91 8902175210</span>
          </li>
          <li>
            <span className="font-semibold">Email: </span>
            <span>itsmesubid@gmail.com</span>
          </li>
        </ul>
        <div className="address">Kolkata, India</div>
      </div>
      <div className="copyright bg-black">
        <p className="container-custom-xs text-white/40 py-5 text-sm">
          Copyright © 2023 - 2023 All Rights Reserved By{" "}
          <a href="https://devsubid.vercel.com/" className="text-white/80">
            SUBID DAS
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
