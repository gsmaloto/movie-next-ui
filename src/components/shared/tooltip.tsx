import {
  TooltipProvider,
  Tooltip as ShadcnTooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

export default function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    <TooltipProvider>
      <ShadcnTooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
}
