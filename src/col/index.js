import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.string,
        className: PropTypes.string,
        lg: PropTypes.string,
        md: PropTypes.string,
        sm: PropTypes.string,
        xl: PropTypes.string,
        xs: PropTypes.string,
    };

    static defaultProps = {
        children: '',
        className: '',
        lg: '',
        md: '',
        sm: '',
        xl: '',
        xs: '',
    };

    render() {
        const {children, className, lg, md, sm, xl, xs} = this.props;

        let _lg, _md, _sm, _xl, _xs;
        _lg = lg ? `col-lg-${lg}` : '';
        _md = md ? `col-md-${md}` : '';
        _sm = sm ? `col-sm-${sm}` : '';
        _xl = xl ? `col-xl-${xl}` : '';
        _xs = xs ? `col-${xs}` : '';
        _lg = lg === true ? 'col-lg' : _lg;
        _md = md === true ? 'col-md' : _md;
        _sm = sm === true ? 'col-sm' : _sm;
        _xl = xl === true ? 'col-xl' : _xl;
        _xs = xs === true ? 'col' : _xs;

        const defaultClass = !lg && !md && !sm && !xl && !xs && 'col';

        return <div className={classnames(defaultClass, className, _lg, _md, _sm, _xl, _xs)}>{children}</div>;
    }
}
