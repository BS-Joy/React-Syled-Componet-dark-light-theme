import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700;900&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --background: #18191A;
        --halka: #272A2E;
        --singnature: #66BD6D;
        --second-signature: #6CC1FA;
        --third: #CCCCCC;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background-color: ${props => props.theme.pageBackground};
    }
`;

export default GlobalStyle