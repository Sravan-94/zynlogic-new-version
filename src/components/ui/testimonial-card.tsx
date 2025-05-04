
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export type TestimonialAuthor = {
  name: string;
  handle?: string;
  avatar?: string;
};

export interface TestimonialCardProps {
  text: string;
  author: TestimonialAuthor;
  href?: string;
}

export function TestimonialCard({ text, author, href }: TestimonialCardProps) {
  const card = (
    <div className="glass-card flex h-full w-[300px] cursor-pointer flex-col justify-between p-6 transition-opacity md:w-[320px]">
      <p className="mb-4 text-left text-sm font-medium md:text-base">{text}</p>
      
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border border-border">
          {author.avatar ? (
            <AvatarImage src={author.avatar} alt={author.name} />
          ) : (
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col items-start">
          <p className="text-left text-sm font-semibold">{author.name}</p>
          {author.handle && (
            <p className="text-left text-sm text-muted-foreground">{author.handle}</p>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href}>
        {card}
      </Link>
    );
  }

  return card;
}
