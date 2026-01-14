import { HiOutlineTrophy } from "react-icons/hi2";

const Achievements = ({ dashed }) => (
  <section
    className={`${dashed ? "border-b border-dashed border-border pb-6" : ""}`}
    id="achievements"
  >
    <div className="flex items-center gap-3 mb-2">
      <HiOutlineTrophy className="text-primary text-2xl" />
      <h2 className="text-2xl font-bold text-text">Achievements</h2>
    </div>

    {/* Achievement Card */}
    <div className="bg-surface border border-border rounded-xl p-5 shadow-md">
      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-text">
        Best Innovator of the Year – 2025
      </h3>

      {/* Meta */}
      <div className="flex flex-wrap gap-2 text-xs md:text-sm mt-2">
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
          Western Refrigeration Pvt. Ltd., Valsad
        </span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-border">
          MES Team
        </span>
        <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-border">
          ₹21,000 Cash Award
        </span>
      </div>

      {/* Description */}
      <ul className="list-disc list-inside text-muted text-sm md:text-base leading-relaxed mt-4 space-y-2">
        <li>
          Key contributor as a member of the MES team to the{" "}
          <span className="font-medium text-text">
            “Best Innovator Award – 2025”
          </span>{" "}
          winning initiatives, working under MES Developer Vikash Kumar.
        </li>

        <li>
          Played a significant role in developing{" "}
          <span className="font-medium text-text">WRL Tool Report</span>, a
          scalable MERN + Microsoft SQL Server reporting platform that
          centralized MES and business data across Production, Quality,
          Dispatch, and Planning, reducing manual reporting effort by
          approximately <span className="font-medium text-text">60%</span>.
        </li>

        <li>
          Built the{" "}
          <span className="font-medium text-text">
            WRL Visitor Pass Management System
          </span>{" "}
          from scratch as a trainee — an MES-integrated, enterprise-grade
          solution featuring QR-based access control, real-time visitor
          tracking, A4 printable passes with optimized print CSS, and fully
          paperless security operations.
        </li>
      </ul>
    </div>
  </section>
);

export default Achievements;
