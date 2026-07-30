import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={`group inline-flex items-center justify-center rounded-xl border border-(--border-color) bg-(--blur-bg-color) text-(--text-color) backdrop-blur-sm transition-all duration-300 hover:bg-(--hover-bg-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 cursor-pointer ${compact ? "h-10 w-10" : "p-4"}`}
    >
      {theme === "dark" ? (
        <Sun className="transition-transform duration-500 group-hover:rotate-180" size={compact ? 19 : 24} />
      ) : (
        <Moon className="transition-transform duration-500 group-hover:rotate-12" size={compact ? 19 : 24} />
      )}
    </button>
  );
};

export default ThemeToggle;
