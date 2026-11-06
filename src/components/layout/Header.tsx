type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header
      className="
        bg-blue-600
        text-white
        h-16
        px-4
        flex
        items-center
      "
    >
      <button onClick={onMenuClick} className="text-2xl mr-4">
        ☰
      </button>

      <h1 className="font-bold">EventHub</h1>
    </header>
  );
}
