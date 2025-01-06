"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getImageUrl } from "@/utils/contentful";
import { ContentfulImage } from "@/app/lib/types/contentful";

interface UserAvatarProps {
  src?: ContentfulImage | null;
  name?: string;
  className?: string;
}

export function UserAvatar({ src, name = "", className = "h-8 w-8" }: UserAvatarProps) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  const avatarUrl = src ? getImageUrl(src.fields.file.url) : undefined;

  return (
    <Avatar className={className}>
      <AvatarImage src={avatarUrl} alt={name || "User"} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}