import { type ReactNode } from "react";

type Background = "white" | "off-white";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: Background;
  as?: "section" | "div";
}

const bgClasses: Record<Background, string> = {
  white: "bg-white",
  "off-white": "bg-off-white",
};

export function Section({
  id,
  children,
  className = "",
  bg = "white",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`${bgClasses[bg]} px-5 py-20 md:py-28 lg:py-36 ${className}`}
    >
      <div className="mx-auto max-w-5xl w-full">{children}</div>
    </Tag>
  );
}
