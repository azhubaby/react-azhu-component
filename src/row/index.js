import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        children: '',
        className: '',
    };

    render() {
        const {children, className, ...otherProps} = this.props;
        return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div className={classnames('row', className)} {...otherProps}>
                {children}
            </div>
        );
    }
}
