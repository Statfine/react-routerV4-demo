/**
 * Created by sj on 2017/9/9.
 */
import React, { PureComponent } from 'react';

export default class DashboardOne extends PureComponent {

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>DashboardOne 这是第一个子页面</div>
    );
  }
}
