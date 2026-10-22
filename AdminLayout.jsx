
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Bell,
  GraduationCap,
} from "lucide-react";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="brand">
          <GraduationCap size={28} />
          <span>SkillBoard</span>
        </div>

        <p className="menu-label">MENU PRINCIPAL</p>

        <nav className="sidebar-nav">
          <NavLink to="/" end>
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/apprenants">
            <Users size={19} />
            <span>Apprenants</span>
          </NavLink>

          <NavLink to="/formations">
            <BookOpen size={19} />
            <span>Formations</span>
          </NavLink>
        </nav>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div>
            <strong>Espace administrateur</strong>
            <p>Gérez votre centre de formation</p>
          </div>

          <div className="admin-profile">
            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>

            <div className="avatar">AD</div>

            <div className="profile-text">
              <strong>Admin</strong>
              <span>Administrateur</span>
            </div>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
