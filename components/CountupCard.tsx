import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';

interface CountupCardProps {
    title: string;
    description: string;
    start: number;
    end: number;
    decimals?: number;
    prefix?: string;
}

export default function CountupCard({ title, description, start, end, prefix = '', decimals = 0 }: CountupCardProps) {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <Card>
            <VisibilitySensor
                partialVisibility
                onChange={(isVisible) => {
                    if (isVisible) {
                        setViewPortEntered(true);
                    }
                }}
            >
                <StyledCountUp 
                    start={viewPortEntered ? start : 0} 
                    end={viewPortEntered ? end : start} 
                    decimals={decimals} 
                    duration={3} 
                    prefix={prefix} 
                />
            </VisibilitySensor>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    );
}

const StyledCountUp = styled(CountUp)`
    font-size: 5rem; // adjust as needed
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