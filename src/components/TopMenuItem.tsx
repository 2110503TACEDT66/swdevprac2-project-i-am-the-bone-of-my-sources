import Link from "next/link";

const TopMenuItem = ({ href, text, className }: { href: string, text: string, className?: string }) => {
  return (
    <Link href={href}>
      <div className={className ?? "hover:font-extrabold"}>{text}</div>
    </Link>
  );
};

export default TopMenuItem;