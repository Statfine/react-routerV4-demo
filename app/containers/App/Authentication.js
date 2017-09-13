import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAuth, selectAuthRequesting } from './selectors';

export default function Authentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps() {
      this.checkAuth();
    }

    checkAuth = () => {
      if (this.props.auth === '') {
        this.props.history.push('/login');
      }
    };

    render() {
      const { auth, authRequesting } = this.props;

      return (
        <div>
          {auth !== '' && !authRequesting ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    auth: PropTypes.string,
    history: PropTypes.object,
    authRequesting: PropTypes.bool,
  };

  const mapStateToProps = createStructuredSelector({
    auth: selectAuth(),
    authRequesting: selectAuthRequesting(),
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
