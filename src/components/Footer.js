import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/all";

const Footer = () => {
    return (
        <FooterWrapper>
            <p>Copyright © 2021 AnonymousAAArdvark</p>
            <Link href="https://github.com/AnonymousAAArdvark" target="_blank">
                <FaGithub />
            </Link>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
      position: relative;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: .5rem;
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
`;

const Link = styled.a`
    position: relative;
    top: .2rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.light};
    font-size: 2rem;
    
    &:hover {
        color: ${({ theme }) => theme.colors.lightHover};
    }
    
    &:active {
        color: ${({ theme }) => theme.colors.lightActive};
    }
`;

export default Footer;