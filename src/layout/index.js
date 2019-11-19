import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.oneOf([
            'container',
            'container-sm',
            'container-md',
            'container-lg',
            'container-xl',
            'container-fluid'
        ])
    };

    static defaultProps = {
        children: '',
        className: '',
        size: 'container'
    }

    render() {
        const {children, className, size} = this.props;
        return <div className={classnames(size, className)}>{children}</div>;
    }
}
