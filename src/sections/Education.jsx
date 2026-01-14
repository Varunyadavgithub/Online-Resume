import { HiOutlineAcademicCap } from "react-icons/hi";

const Education = ({ dashed }) => (
  <section
    className={`${dashed ? "border-b border-dashed border-border pb-6" : ""}`}
    id="education"
  >
    <div className="flex flex-col md:flex-row gap-2">
      {/* Left Side: Education */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <HiOutlineAcademicCap className="text-primary text-2xl" />
          <h2 className="text-2xl font-bold text-text">Education</h2>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold text-text tracking-tight">
            Parul University, Vadodara
          </h3>

          <p className="text-sm md:text-base text-muted font-medium">
            BCA in Cyber Security & Forensics
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 border border-border">
              CGPA: 8.1 / 10
            </span>

            <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-border">
              2022 – 2025
            </span>

            <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-500 border border-border">
              Gujarat, India
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Optional Highlight Card */}
      <div className="md:w-1/3">
        <div className="bg-surface border border-border rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-text mb-2">Academic Focus</h3>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>Cyber Security & Digital Forensics</li>
            <li>Programming & Data Structures</li>
            <li>Web Technologies & Databases</li>
            <li>System & Network Fundamentals</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
