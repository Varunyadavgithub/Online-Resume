import { HiOutlineFolder } from "react-icons/hi";
import { projectsData } from "../utils/projects.js";
import { skillsData } from "../utils/skills.js";
import { SkillsBadge } from "../components/ui/SkillsBadge";
import { LuExpand } from "react-icons/lu";

const Projects = ({ dashed }) => (
  <section
    className={`${dashed ? "border-b border-dashed border-border pb-6" : ""}`}
    id="projects"
  >
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Side: Projects */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <HiOutlineFolder className="text-primary text-2xl" />

          <h2
            onClick={() =>
              window.open("https://github.com/Varunyadavgithub", "_blank")
            }
            className="group inline-flex items-center gap-2 text-2xl font-bold text-text cursor-pointer transition-all duration-300 hover:text-primary"
          >
            Projects
            {/* Expand Icon */}
            <span className="text-muted transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
              <LuExpand />
            </span>
          </h2>
        </div>

        {projectsData.map((project, index) => (
          <div key={index} className="space-y-2 mb-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-text">
              {project.title}
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-dashed border-border">
                {project.type}
              </span>
            </h3>

            <div className="flex flex-wrap gap-2 text-xs md:text-sm text-muted">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`${tech.bg} ${
                    tech.color
                  } px-2 py-0.5 rounded-full ${
                    tech.border ? "border border-border" : ""
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <ul className="list-disc list-inside text-muted text-sm md:text-base leading-relaxed mt-3 space-y-1">
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Side: Skill Cards */}
      <div className="md:w-1/3 flex flex-col gap-4">
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <div
            key={idx}
            className="bg-surface border border-border rounded-xl p-4 shadow-md"
          >
            <h3 className="font-semibold text-text mb-2">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <SkillsBadge
                  key={i}
                  icon={skill.icon}
                  title={skill.title}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
