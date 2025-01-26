import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold", className)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
