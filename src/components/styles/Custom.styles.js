import styled from "styled-components";
import Texts from "../Texts";
import Image from "../Image";

export const StyledText = styled(Texts)`
    h1 {
        margin-bottom: 2rem;
        font-size: 40px;
        font-weight: 900;
        color: ${props => props.theme.titleColor};
    }

    p {
        font-size: 22px;
        margin-bottom: 2rem;
        color: ${props => props.theme.desColor};
    }

    button {
        background-color: transparent;
        color: ${props => props.theme.buttonColor};
        font-weight: 700;
        border: 2px solid ${props => props.theme.buttonBorder};
        border-radius: 5px;
        padding: 15px;
        cursor: pointer;
        transition: ease 0.8s;

        :hover {
            background-color: ${props => props.theme.buttonHoverBackground};
            color: ${props => props.theme.buttonHoverColor};
        }
    }
`;

export const StyledImage = styled(Image)`
    display: flex;
    justify-content: center;
    & img {
        width: 100%;
    }
`;