'use client';

import { Button } from "@/components/ui/button";

export default function AskQuestionButton({
  size = "lg",
  className = "rounded-2xl bg-white text-gray-900 hover:bg-white/90",
  label = "Ask a Question",
}: {
  size?: "sm" | "lg";
  className?: string;
  label?: string;
}) {
  const email = "contact@engineeredtennis.com";
  const subject = "Free Trial Inquiry — from Promise page";
  const body = `Hi Brandon,

I'd like to book a free trial / ask a question. Here are my details:

Name:
Age:
Player level (beginner / intermediate / advanced / UTR/USTA rating):
What I'm looking for (goals):
Tennis background:

Thanks!`;

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <Button
      asChild
      size={size}
      className={className}
    >
      <a href={mailtoHref}>{label}</a>
    </Button>
  );
}
