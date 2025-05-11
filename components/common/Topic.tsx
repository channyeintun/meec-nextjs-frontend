import { FC, PropsWithChildren } from "react"

export const Topic: FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <span className="label-01 px-[var(--spacing-03)] py-[var(--spacing-02)] text-[var(--tag-color-gray)] bg-[var(--tag-background-gray)] rounded-[40px] hover:bg-[var(--tag-hover-gray)]">
            {children}
        </span>
    )
}