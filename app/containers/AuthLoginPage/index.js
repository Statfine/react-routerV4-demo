/**
 * Created by sj on 2017/9/9.
 */
import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocale } from '../LanguageProvider/selectors';
import { changeLocale } from '../LanguageProvider/actions';

class AuthPage extends PureComponent {
  render() {
    return (
      <div>
        <div>AuthPage</div>
        <div onClick={() => this.props.history.push('/')}>/(页面跳转)</div>
        <div onClick={() => this.props.history.push('/features')}>features(页面跳转)</div>
        <div onClick={() => this.props.history.push('/dashboard')}>dashboard(页面跳转)</div>
        <div onClick={() => this.props.history.push('/dashboard/one')}>dashboardOne(页面跳转)</div>
        <div onClick={() => this.props.history.push('/dashboard/two')}>dashboardTwoe(页面跳转)</div>
        <div onClick={() => this.props.onChangeLocale('de')}>{this.props.locale}(语言修改，调用action)</div>
      </div>
    );
  }
}

AuthPage.propTypes = {
  history: PropTypes.object,
  locale: PropTypes.string,
  onChangeLocale: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeLocale: (val) => dispatch(changeLocale(val)),
  };
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(AuthPage);
