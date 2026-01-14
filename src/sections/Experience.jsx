import { HiOutlineBriefcase } from "react-icons/hi";
import { experienceData } from "../utils/JobExperience.js";

const Experience = ({ dashed }) => (
  <section
    className={`${dashed ? "border-b border-dashed border-border pb-6" : ""}`}
    id="experience"
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
      {/* Left Side: Experience */}
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <HiOutlineBriefcase className="text-primary text-2xl" />
          <h2 className="text-2xl font-bold text-text">Experience</h2>
        </div>

        <div className="flex flex-col gap-2">
          {experienceData.map((exp, index) => (
            <div key={index} className="space-y-1">
              {/* Company Row */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col items-start justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-20 h-20 object-contain rounded-md bg-surface p-1"
                  />

                  <h3 className="text-base md:text-lg font-semibold text-text">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                  <span className="font-semibold text-primary">{exp.role}</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {exp.duration}
                  </span>

                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-border">
                    {exp.location}
                  </span>

                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-border">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc list-inside text-sm md:text-base text-muted leading-relaxed space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Experience Summary */}
      <div className="md:w-1/3">
        <div className="bg-surface border border-border rounded-xl p-5 shadow-md">
          <h3 className="text-lg font-semibold text-text mb-4">
            Experience Highlights
          </h3>

          {[
            { label: "Full-Stack Development", value: 90 },
            { label: "Backend & APIs", value: 85 },
            { label: "Authentication & Security", value: 80 },
            { label: "Dashboards & Reporting", value: 85 },
            { label: "Deployment & Scaling", value: 65 },
            { label: "Industrial Real-Time Systems", value: 75 },
          ].map((item, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-xs text-muted mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full h-2 bg-border rounded-full">
                <div
                  className="h-2 bg-primary rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
