/**
 * Created by sj on 2017/9/9.
 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomeLayout from '../HomeLayout';
import DashboardOne from '../DashboardOne';
import DashboardTwo from '../DashboardTwo';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class Dashboard extends PureComponent {
  onJump = (url) => {
    this.props.history.push(`${this.props.match.path}/${url}`);
  }
  render() {
    return (
      <div>
        <AppWrapper>
          <div onClick={() => this.onJump('two')}>Jump two</div>
          <div onClick={() => this.onJump('one')}>Jump one</div>
          <HomeLayout>
            <Switch>
              <Route exact path={`${this.props.match.path}/one`} component={DashboardOne} />
              <Route path={`${this.props.match.path}/two`} component={DashboardTwo} />
            </Switch>
          </HomeLayout>
        </AppWrapper>
      </div>
    );
  }
}

Dashboard.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default Dashboard;
