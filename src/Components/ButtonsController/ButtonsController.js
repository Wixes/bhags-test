import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Atomar/Button/Button';

import './ButtonsController.css';

/**
 * Component controller for navigating ProgressBar
 */
const ButtonControllers = React.memo(({ items, step, dispatch }) => (
    <div className="button-controllers">
        <Button
            displayName="prev"
            disabled={step === 0}
            onClick={() => dispatch({ type: 'prev' })}
        />
        <Button
            displayName="next"
            disabled={step === items.length - 1}
            onClick={() => dispatch({ type: 'next' })}
        />
    </div>
));

ButtonControllers.propTypes = {
    /**
     * Array of items in ProgressBar. Needed to handle button's disable
     */
    items: PropTypes.arrayOf(PropTypes.shape({ displayName: PropTypes.string })),
    /**
     * Current ProgressBar step. Needed to handle button's disable
     */
    step: PropTypes.number,
    /**
     * Dispatch function with action
     */
    dispatch: PropTypes.func,
};

ButtonControllers.defaultProps = {
    items: [],
    step: 0,
    dispatch: () => {},
};

export default ButtonControllers;
