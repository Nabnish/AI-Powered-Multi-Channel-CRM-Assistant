
import { NavLink } from "react-router-dom";
import {
  Users,
  Sparkles,
  Activity,
  Calendar,
  Clock,
  Search,
  User,
} from "lucide-react";

const navItems = [
  { to: "/clients", label: "Contacts", icon: Users },
  { to: "/ai", label: "AI", icon: Sparkles },
  { to: "/activity", label: "Activity", icon: Activity },
  { to: "/meetings", label: "Meetings", icon: Calendar },
  { to: "/scheduling", label: "Scheduling", icon: Clock },
  { to: "/search", label: "Search", icon: Search },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-60 shrink-0 bg-[#0d0d0f] text-gray-300 flex flex-col border-r border-white/5">
      <div className="px-5 py-5 text-lg font-semibold text-white">
        cmr<span className="text-indigo-400">.</span>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-white/5">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white"
        >
          <User size={16} />
          Profile
        </NavLink>
      </div>
    </aside>
  );
}