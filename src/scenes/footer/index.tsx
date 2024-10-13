import EmailIcon from "@/assets/email.png";
import LinkedInIcon from "@/assets/linkedin.png";
import GitHubIcon from "@/assets/github.png";

const Footer = () => {
  return (
    <footer className="py-5 bg-pale-blue">
      <div className="mx-auto w-5/6">
        <h4 className="text-navy text-3xl text-center md:text-left">
          Contact Info
        </h4>
        {/* Flexbox for spacing */}
        <div className="flex justify-between my-5">
          <a
            href="mailto:rpark02@mit.edu"
            className="flex items-center text-3xl flex-1 justify-center md:justify-start"
          >
            <img src={EmailIcon} alt="Email" className="mr-2 w-8 h-8" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/rachel-p-5782bb206/"
            className="flex items-center text-3xl flex-1 justify-center md:justify-start"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="mr-2 w-8 h-8" />{" "}
            LinkedIn
          </a>
          <a
            href="https://github.com/rpark02"
            className="flex items-center text-3xl flex-1 justify-center md:justify-start"
          >
            <img src={GitHubIcon} alt="GitHub" className="mr-2 w-8 h-8" />{" "}
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
