import Image from "next/image";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image className={cn("max-w-[100px]", className)} src={logo} alt="logo" />
  );
};

export default Logo;
