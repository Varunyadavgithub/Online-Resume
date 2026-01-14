import { HiOutlineUser } from "react-icons/hi";

const About = ({ dashed }) => (
  <section
    className={`${dashed ? "border-b border-dashed border-border pb-6" : ""}`}
    id="about"
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
      {/* Left Side: About Text */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <HiOutlineUser className="text-primary text-2xl" />
          <h2 className="text-2xl font-bold text-text">About</h2>
        </div>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          Hi, I am Varun Yadav 👋, a full-stack developer with a background in
          Cyber Security & Forensics.
          <br />
          I am passionate about understanding how software works in real-world
          environments and building applications that are practical, secure, and
          reliable 🔐💻.
          <br />
          Currently, I work as a MES Developer Trainee at Western Refrigeration
          Pvt. Ltd., contributing to day-to-day industrial operations, including
          production planning, quality systems, traceability, and automated
          reporting 🏭⚙️📊.
          <br />
          I am deeply interested in creating software solutions that make
          processes easier, safer, and more efficient 🌱. My aim is to
          continuously learn, explore system integration and cybersecurity, and
          apply this knowledge to build meaningful solutions 📘.
          <br />I enjoy collaborating with others, sharing ideas, and taking on
          challenges that drive real-world impact 🤝✨.
        </p>
      </div>

      {/* Right Side: Cards */}
      <div className="md:w-1/3 flex flex-col gap-4">
        {/* Key Highlights Card */}
        <div className="bg-surface border border-border rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-text mb-2">Key Highlights</h3>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>
              Builder mindset — design, break, fix, and harden applications
            </li>
            <li>
              Experience securing MERN & REST APIs against real-world attack
              vectors
            </li>
            <li>
              Bug hunting learner focusing on authentication, access control &
              logic flaws
            </li>
            <li>Developed internal tools with security-first architecture</li>
            <li>
              Comfortable switching between development and offensive security
              thinking
            </li>
            <li>
              Currently working as an MES Developer on manufacturing execution
              systems
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
