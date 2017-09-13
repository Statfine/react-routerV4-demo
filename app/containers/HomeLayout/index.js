/**
 * Created by sj on 2017/9/9.
 */
import React, { PureComponent, PropTypes } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

class HomeLayout extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </div>
    );
  }
}

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
