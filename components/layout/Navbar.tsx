import { SiteHeader } from "./SiteHeader";

type NavbarProps = {
  onMenuToggle?: () => void;
  menuOpen?: boolean;
};

export function Navbar({ onMenuToggle, menuOpen }: NavbarProps) {
  return <SiteHeader variant="docs" onMenuToggle={onMenuToggle} menuOpen={menuOpen} />;
}
