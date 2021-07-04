import React from 'react';
import PropTypes from 'prop-types';

/**
 * Initial store values
 */
const initialState = {
    step: 0,
    items: [
        {
            displayName: 'Design',
        },
        {
            displayName: 'Build',
        },
        {
            displayName: 'Launch',
        },
    ],
};

/**
 * Actions to control store
 */
const actions = new Map([
    ['next', (state, payload = null) => ({ ...state, step: state.step + 1 })],
    ['prev', (state, payload = null) => ({ ...state, step: state.step - 1 })],
]);

/**
 * Main reducer
 * @property {object} state - current state
 * @returns action from map with given props. If there is no action return state
 */
const reducer = (state, { type, payload }) => {
    const action = actions.get(type);
    return action ? action(state, payload) : state;
};

const FormContext = React.createContext(initialState);

/**
 * Form store HOC component
 * @returns a form provider for progress bar
 */
function FormContextProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
}

FormContextProvider.propTypes = {
    /**
     * React component
     */
    children: PropTypes.node,
};

FormContextProvider.defaultProps = {
    children: null,
};

export { FormContext };

export default FormContextProvider;
