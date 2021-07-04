import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ProgressBar.css';

/**
 * Component for showing progress by steps
 */
const ProgressBar = React.memo(({ step, items, onClick }) => {
    return (
        <ul className="progress-bar">
            {items.map((item, idx) => (
                <li
                    key={idx}
                    id={item?.id}
                    className={classNames(
                        'progress-bar__item',
                        idx <= step ? 'progress-bar__item--isCompleted' : '',
                    )}
                >
                    <span className="progress-bar__title">{item.displayName}</span>
                    <button
                        className="progress-bar__button"
                        title={item.displayName}
                        onClick={() => onClick(item, idx)}
                    ></button>
                </li>
            ))}
            <ul
                className="progress-bar__completion"
                style={{ width: `calc(100% / ${items.length - 1} * ${step}` }}
            ></ul>
        </ul>
    );
});

ProgressBar.propTypes = {
    /**
     * Current step
     */
    step: PropTypes.number,
    /**
     * Array of items for component
     * @example [{displayName: 'firstStep'}, {displayName: 'secondStep'}, {displayName: 'thirdStep'}]
     */
    items: PropTypes.arrayOf(PropTypes.shape({ displayName: PropTypes.string })),
    /**
     * Function to handle click on points in component
     * @param {object} item - clicked item from items array
     * @param {number} idx - index of clicked element
     */
    onClick: PropTypes.func,
};

ProgressBar.defaultProps = {
    step: 0,
    items: [],
    onClick: () => {},
};

export default ProgressBar;
