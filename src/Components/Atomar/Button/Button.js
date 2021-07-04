import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/**
 * Button components
 */
function Button({ displayName, disabled, onClick }) {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {displayName}
        </button>
    );
}

Button.propTypes = {
    /**
     * Displayed name
     */
    displayName: PropTypes.string,
    /**
     * Switcher to disable button
     */
    disabled: PropTypes.bool,
    /**
     * Button click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    displayName: '',
    disabled: false,
    onClick: () => {},
};

export default Button;
