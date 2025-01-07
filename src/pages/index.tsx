import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Title>Hello, world!</Title>
        </>
    );
}
