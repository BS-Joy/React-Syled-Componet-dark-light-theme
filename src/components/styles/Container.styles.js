import styled from "styled-components";
// import Texts from "../Texts";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    align-items: center;
    background-color: ${props => props.theme.cardBackground};
    width: 50vw;
    /* border: 2px solid var(--signature); */
    border-radius: 10px;
    padding: 3rem;
    box-shadow: 5px 5px 50px -6px ${props => props.theme.cardShadow};
`;

// export const TextsContainer = styled(Texts)`
//     & h1 {
//         margin-bottom: 2rem;
//         font-size: 40px;
//         font-weight: 900;
//         color: red;
//     }

//     & p {
//         font-size: 22px;
//         margin-bottom: 2rem;
//         color: var(--third);
//     }

//     & button {
//         background-color: transparent;
//         color: var(--singnature);
//         font-weight: 700;
//         border: 2px solid var(--singnature);
//         border-radius: 5px;
//         padding: 15px;
//         cursor: pointer;
//         transition: ease 0.8s;

//         & :hover {
//             background-color: var(--singnature);
//             color: var(--background);
//         }
//     }
// `;
