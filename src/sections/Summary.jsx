import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Summary = ({ dashed }) => (
  <section
    className={`${dashed ? "border-b border-dashed border-border pb-6" : ""}`}
    id="summary"
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
      {/* Left: Name + Role + Summary */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-text mb-2">
          Varun Yadav{" | "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-pink-500 to-yellow-400 text-xl font-medium block md:inline">
            MES Developer Trainee
          </span>
        </h2>

        <p className="text-muted text-sm md:text-base leading-relaxed">
          MES Developer | Industrial Automation & Real-Time Systems | Learning
          Cybersecurity & Web Pentesting | Driven by Innovation & Real-World
          Impact
        </p>
      </div>

      {/* Right: Contact Info */}
      <div className="w-1/4 flex flex-col gap-3 text-sm text-muted">
        {/* Email */}
        <div className="flex items-center gap-2">
          <HiOutlineMail className="text-red-500 text-lg" />
          <span>thecodehunter101@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="text-green-500 text-lg" />
          <span>+91 9106547391</span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/thecyberdevvarun/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-600 hover:text-blue-400 transition text-lg" />
          </a>

          <a
            href="https://x.com/varun_yadav01/"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="text-black  hover:text-gray-600 transition text-lg" />
          </a>

          <a
            href="https://github.com/Varunyadavgithub/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-gray-800 hover:text-gray-500 transition text-lg" />
          </a>

          <a
            href="https://leetcode.com/its_varunyadav01/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode className="text-yellow-500 hover:text-yellow-400 transition text-lg" />
          </a>

          <a
            href="https://tryhackme.com/p/th3c0d3hunt3r101/"
            target="_blank"
            rel="noreferrer"
          >
            <SiTryhackme className="text-red-600 hover:text-red-400 transition text-lg" />
          </a>

          <a
            href="https://instagram.com/thecyberdev"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-pink-500 hover:text-pink-400 transition text-lg" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Summary;
