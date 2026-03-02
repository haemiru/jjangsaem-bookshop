export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "전자책", href: "/ebook" },
  { label: "블로그", href: "/blog" },
  { label: "소개", href: "/about" },
];
