import { Link } from "@tanstack/react-router";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64
          bg-blue-600 text-white
          transform transition-transform duration-300
          z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 border-b border-blue-500">
          <h2 className="font-bold text-xl">EventHub</h2>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <Link to="/dashboard">Dashboard</Link>

          <Link to="/events">Eventos</Link>

          <Link to="/coupons">Cupons</Link>

          <Link to="/profile">Meu Perfil</Link>
        </nav>
      </aside>
    </>
  );
}
