import React from "react";
import styled from "styled-components";

const CVHeader = ({ personalInfo }) => {
    const { firstName, lastName, title } = personalInfo;

    return (
        <CVHeaderContainer>
            <h1>
                {firstName} {lastName}
            </h1>
            <p>{title}</p>
        </CVHeaderContainer>
    );
};

const CVHeaderContainer = styled.header`
    grid-column: span 2;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.light};
`;

export default CVHeader;