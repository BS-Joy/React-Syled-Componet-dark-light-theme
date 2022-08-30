import React from 'react';
import { themeContext } from './context/ThemeContext';

const Button = ({ buttonText }) => {
    const myContext = React.useContext(themeContext)
    return <button type='button' onClick={myContext.changeTheme}>{buttonText}</button>
}

export default Button;
