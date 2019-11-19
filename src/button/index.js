/* eslint-disable react/no-unknown-property */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
// import "./index.scss";

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf([
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            'link',
        ]),
        tag: PropTypes.oneOf(['button', 'link', 'input', 'submit', 'reset']),
        outline: PropTypes.oneOf([true, false]),
        size: PropTypes.oneOf(['lg', 'sm']),
        block: PropTypes.oneOf([true, false]),
        active: PropTypes.oneOf([true, false]),
        disabled: PropTypes.oneOf([true, false]),
    };

    static defaultProps = {
        type: 'primary',
        tag: 'button',
        outline: false,
        size: 'lg',
        block: false,
        active: false,
        disabled: false,
    };

    render() {
        const {type, tag, outline, size, block, active, disabled, children, onClick} = this.props;
        const _classType = `btn-${type}`;
        const _classOutline = outline ? `btn-outline-${type}` : '';
        const _classSize = `btn-${size}`;
        const _classBlock = block ? `btn-${block}` : '';
        const _classActive = active ? 'active' : '';
        const _isOutline = _classOutline || _classType;

        const _class = `btn ${_isOutline} ${_classSize} ${_classBlock} ${_classActive}`;

        switch (tag) {
            case 'button':
                return (
                    <button type="button" className={_class} onClick={onClick} disabled={disabled}>
                        {children}
                    </button>
                );
            case 'link':
                return (
                    <a className={_class} href="#" role="button" aria-pressed={active}>
                        {children}
                    </a>
                );
            case 'input':
                return <input className={_class} type="button" value={children} />;
            case 'submit':
                return <input className={_class} type="submit" value={children} />;
            case 'reset':
                return <input className={_class} type="reset" value={children} />;
            default:
                return (
                    <button type="button" className={_class} onClick={onClick} disabled={disabled}>
                        {children}
                    </button>
                );
        }
    }
}
