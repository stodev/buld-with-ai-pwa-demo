import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
    // Show success message or handle errors
  };

  return (
    <footer className="w-full overflow-hidden bg-[#204344] px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex min-h-[248px] w-full gap-[40px_200px] flex-wrap max-md:max-w-full">
        <div className="min-w-60 w-[500px] max-md:max-w-full">
          <div className="bg-[rgba(2,37,38,1)] w-56 max-w-full pt-[15px] pb-5 px-5 rounded-[3px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/395d17b89dfe4ee36f6f8c1b69fd123d289d42fb?placeholderIfAbsent=true"
              alt="Footer Logo"
              className="aspect-[4] object-contain w-full"
            />
          </div>
          <p className="text-white text-base font-normal mt-[26px] max-md:max-w-full">
            Subscribe to our newsletter for the latest features and updates.
          </p>
          <div className="w-full mt-[26px] max-md:max-w-full">
            <form onSubmit={handleSubmit} className="flex w-full gap-4 text-base flex-wrap max-md:max-w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Here"
                required
                className="self-stretch flex-1 shrink basis-6 border-b-[color:var(--Color-White,#FFF)] min-w-60 gap-2 text-white font-normal bg-[rgba(255,255,255,0.00)] py-2 border-b-2 border-solid max-md:max-w-full"
              />
              <button
                type="submit"
                className="text-white self-stretch border-[color:var(--Color-White,#FFF)] gap-2 font-medium whitespace-nowrap px-3 py-1.5 border-2 border-solid"
              >
                Join
              </button>
            </form>
            <p className="text-white text-xs font-normal mt-3 max-md:max-w-full">
              By subscribing, you consent to our Privacy Policy and updates from us.
            </p>
          </div>
        </div>
        <div className="flex min-w-60 gap-10 text-white flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="min-w-60 overflow-hidden flex-1 shrink basis-[0%]">
            <h3 className="text-white text-base font-semibold">
              Quick Links
            </h3>
            <nav className="w-full text-sm font-normal mt-4">
              <Link to="/about" className="text-white flex-1 shrink basis-[0%] w-full py-2 block">
                About Us
              </Link>
              <Link to="/contact" className="text-white flex-1 shrink basis-[0%] w-full py-2 block">
                Contact Us
              </Link>
              <Link to="/support" className="text-white flex-1 shrink basis-[0%] w-full whitespace-nowrap py-2 block">
                Support
              </Link>
              <Link to="/blog" className="text-white flex-1 shrink basis-[0%] w-full whitespace-nowrap py-2 block">
                Blog
              </Link>
              <Link to="/careers" className="text-white flex-1 shrink basis-[0%] w-full whitespace-nowrap py-2 block">
                Careers
              </Link>
            </nav>
          </div>
          <div className="min-w-60 flex-1 shrink basis-[0%]">
            <h3 className="text-white text-base font-semibold">
              Stay Updated
            </h3>
            <div className="w-full text-sm font-normal mt-4">
              <a href="#" className="flex w-full items-center gap-3 py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/9f358c373ac2d3f61f3f503f8bae60cff0ca78e3?placeholderIfAbsent=true"
                  alt="Facebook Icon"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
                <span className="text-white self-stretch my-auto">
                  Hackathon Facebook
                </span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 whitespace-nowrap py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/57003d11c4abff68ae2689a50e587ea9bda49c30?placeholderIfAbsent=true"
                  alt="Instagram Icon"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
                <span className="text-white self-stretch my-auto">
                  Instagram
                </span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 whitespace-nowrap py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/a8b24466984496efe3e4fff24e866993d746fb4d?placeholderIfAbsent=true"
                  alt="X Icon"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
                <span className="text-white self-stretch my-auto">
                  X
                </span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 whitespace-nowrap py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/94857c298576d8f41e0078478eac2165d7af0a46?placeholderIfAbsent=true"
                  alt="LinkedIn Icon"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
                <span className="text-white self-stretch my-auto">
                  LinkedIn
                </span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 py-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/f7dae7da79109df464059810a487c3ed56a5174b?placeholderIfAbsent=true"
                  alt="YouTube Icon"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
                <span className="text-white self-stretch my-auto">
                  You Tube
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-sm text-white font-normal mt-20 max-md:max-w-full max-md:mt-10">
        <div className="min-h-0.5 w-full bg-white border-white border-solid border-2 max-md:max-w-full" />
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mt-8 max-md:max-w-full">
          <div className="text-white">
            © 2025 Valsoft Corporation. All rights reserved.
          </div>
          <div className="flex min-w-60 gap-6 underline">
            <a href="#" className="text-white underline decoration-solid decoration-auto underline-offset-auto">
              Privacy Policy
            </a>
            <a href="#" className="text-white underline decoration-solid decoration-auto underline-offset-auto">
              Terms of Use
            </a>
            <a href="#" className="text-white underline decoration-solid decoration-auto underline-offset-auto">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
