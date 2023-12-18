import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

interface CountupCardProps {
    title: string;
    description: string;
    start: number;
    end: number;
}

export default function CountupCard({ title, description, start, end }: CountupCardProps) {
    return (
        <Card>
            <StyledCountUp start={start} end={end} />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    );
}

const StyledCountUp = styled(CountUp)`
    font-size: 3rem; // adjust as needed
    color: blue; // adjust as needed
`;

const Card = styled.div`
    display: flex;
    padding: 2.5rem;
    background: rgb(var(--cardBackground));
    box-shadow: var(--shadow-md);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    border-radius: 0.6rem;
    color: rgb(var(--text));
    font-size: 1.6rem;

    & > *:not(:first-child) {
        margin-top: 1rem;
    }
`;

const Title = styled.div`
    font-weight: bold;
`;

const Description = styled.div`
    opacity: 0.6;
`;