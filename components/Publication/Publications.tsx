'use client';

import { GET_PUBLICATIONS_RELAY_STYLE } from "@/graphql/queries/publications";
import { PublicationsConnectionData } from "@/types/publication";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { Publication } from "../common/Publication";

const LIMIT = 6;

export const Publications = () => {

    const searchParams = useSearchParams();
    const authorSlugs = searchParams.getAll("author").filter(Boolean);

    const { data, loading, fetchMore } = useQuery<PublicationsConnectionData>(GET_PUBLICATIONS_RELAY_STYLE, {
        variables: {
            pagination: {
                start: 0,
                limit: LIMIT,
            },
            filters: {
                authors: authorSlugs?.length > 0 ? { slug: { in: authorSlugs } } : null,
            }
        },
    });

    const page = data?.publications_connection?.pageInfo?.page ?? 0;
    const pageCount = data?.publications_connection?.pageInfo?.pageCount ?? 0;

    const loadMore = () => {
        const currentLength = data?.publications_connection?.nodes?.length;
        fetchMore({
            variables: {
                pagination: {
                    start: currentLength,
                    limit: LIMIT
                }
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousResult;

                return {
                    publications_connection: {
                        nodes: [
                            ...previousResult.publications_connection.nodes,
                            ...fetchMoreResult.publications_connection.nodes
                        ],
                        pageInfo: fetchMoreResult.publications_connection.pageInfo
                    }
                };
            }
        });
    }

    return (
        loading ? <p>Loading...</p> : (
            <div className="flex flex-col gap-[var(--spacing-08)] items-center">
                <section
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    role="list"
                    aria-label="Publications"
                >
                    {
                        data?.publications_connection?.nodes?.map(publication => (
                            <Publication
                                aria-role="listitem"
                                key={publication.slug}
                                publication={publication}
                                className="max-sm:border-b sm:border-b sm:border-e first:border-t sm:nth-[2]:border-t lg:nth-[3]:border-t sm:first:border-s sm:max-lg:nth-of-type-[2n+1]:border-s lg:nth-of-type-[3n+1]:border-s border-[var(--border-strong-01)] box-border"
                            />
                        ))
                    }
                </section>
                {page !== 0 && page < pageCount && <button onClick={loadMore} className="body-02 text-[var(--text-on-color)] bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] py-[13px] ps-[16px] pe-[64px]">Load more</button>}
            </div>
        )
    )
}