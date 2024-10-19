import { Card as UiCard } from "@/ui-kit/ui/card";

import type { ComponentProps } from "react";

interface CardProps extends ComponentProps<typeof UiCard> {
  children: React.ReactElement;
}

export const Card = ({ children }: CardProps) => {
  return <UiCard>{children}</UiCard>;
};
