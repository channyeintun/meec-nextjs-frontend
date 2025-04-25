import { PropsWithChildren } from "react"
import News from "../icons/News"
import Insight from "../icons/Insight"
import Podcast from "../icons/Podcast"
import CaseStudy from "../icons/CaseStudy"

export const Category = ({ name }: { name: string }) => {
    switch (name) {
        case "News":
            return <NewsCategory>{name}</NewsCategory>
        case "Insight":
            return <InsightCategory>{name}</InsightCategory>
        case "Podcast":
            return <PodcastCategory>{name}</PodcastCategory>
        case "Case study":
            return <CaseStudyCategory>{name}</CaseStudyCategory>
        default:
            return null
    }
}

const NewsCategory = ({ children }: PropsWithChildren) => {
    return (
        <p className="label-01 text-[var(--tag-color-red)] flex items-center gap-[var(--spacing-02)]">
            <News />
            <span>{children}</span>
        </p>
    )
}

const InsightCategory = ({ children }: PropsWithChildren) => {
    return (
        <p className="label-01 text-[var(--tag-color-green)] flex items-center gap-[var(--spacing-02)]">
            <Insight />
            <span>{children}</span>
        </p>
    )
}

const PodcastCategory = ({ children }: PropsWithChildren) => {
    return (
        <p className="label-01 text-[var(--tag-color-purple)] flex items-center gap-[var(--spacing-02)]">
            <Podcast />
            <span>{children}</span>
        </p>
    )
}

const CaseStudyCategory = ({ children }: PropsWithChildren) => {
    return (
        <p className="label-01 text-[var(--tag-color-blue)] flex items-center gap-[var(--spacing-02)]">
            <CaseStudy />
            <span>{children}</span>
        </p>
    )
}