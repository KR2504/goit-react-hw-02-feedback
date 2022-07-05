import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/styles.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {
            options.map(el => {
                return (
                    <button
                        key={el}
                        type="button"
                        className={styles.button}
                        name={el}
                        onClick={e => onLeaveFeedback(e.target.name)}>{el}
                    </button>
                )
            })}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;