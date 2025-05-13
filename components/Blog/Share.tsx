import { Link } from "@/i18n/navigation";
import { FC } from "react";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import X from "../icons/X";
import { cn } from "@/lib/utils";

export const Share: FC<{
    url: string;
    className?: string;
}> = ({
    url,
    className,
}) => {

        return (
            <div className={cn("border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]", className)}>
                <span className="text-[var(--text-primary)] label-01">Share on</span>
                <div className="flex gap-[var(--spacing-05)]">
                    <Link target="_blank" href={`https://www.facebook.com/share_channel/?type=reshare&link=${url}&app_id=966242223397117&source_surface=external_reshare&display&hashtag#`}><Facebook /></Link>
                    <Link target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}><LinkedIn /></Link>
                    <Link target="_blank" href={`https://twitter.com/intent/tweet?url=${url}`}><X /></Link>
                </div>
            </div>
        )
    }