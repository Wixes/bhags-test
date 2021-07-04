import React from 'react';
import { FormContext } from '../../Context/FormContext';
import ButtonControllers from '../ButtonsController/ButtonsController';
import ProgressBar from '../Atomar/ProgressBar/ProgressBar';

import './Form.css';

/**
 * Top-level Form component. Consist of logic to control progress bar
 */
export default function Form() {
    const {
        state: { step, items },
        dispatch,
    } = React.useContext(FormContext);

    const handleClick = (item = {}, idx) => {
        if (idx === step) return;
        return idx > step ? dispatch({ type: 'next' }) : dispatch({ type: 'prev' });
    };

    return items.length < 2 || items.length > 5 ? (
        <span className="form__error">
            Progress bar should contain 2-5 steps, but you have {items.length}!
        </span>
    ) : (
        <div className="form">
            <ProgressBar step={step} items={items} onClick={handleClick} />
            <ButtonControllers step={step} items={items} dispatch={dispatch} />
        </div>
    );
}
