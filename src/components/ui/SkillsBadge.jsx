const SkillsBadge = ({ icon: Icon, title, color }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border hover:scale-105 transition-transform duration-200 cursor-pointer">
      <Icon
        className={`text-lg ${color} hover:drop-shadow-[0_0_6px_currentColor] transition`}
      />
      <span className="text-sm font-medium text-text">{title}</span>
    </div>
  );
};

export { SkillsBadge };
