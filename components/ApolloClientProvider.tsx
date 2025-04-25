"use client";

import { createApolloClient } from '@/graphql';
import { ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
    const client = createApolloClient();
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}