import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import X from "../icons/X";

export const Share: FC<{
    url: string;
    className?: string;
}> = ({
    url,
    className,
}) => {

        return (
            <nav className={cn("border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]", className)}>
                <h2 className="text-[var(--text-primary)] label-01">Share on</h2>
                <ul className="flex gap-[var(--spacing-05)]">
                    <li>
                        <Link
                            target="_blank"
                            href={`https://www.facebook.com/share_channel/?type=reshare&link=${url}&app_id=966242223397117&source_surface=external_reshare&display&hashtag#`}
                            aria-label="Share on Facebook"
                        >
                            <Facebook />
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                            aria-label="Share on LinkedIn"
                        >
                            <LinkedIn />
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            href={`https://twitter.com/intent/tweet?url=${url}`}
                            aria-label="Share on X (Twitter)"
                        >
                            <X />
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }