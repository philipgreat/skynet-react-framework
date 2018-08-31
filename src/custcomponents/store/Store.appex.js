import StoreBizApp from '../../bizcomponents/store/Store.app';
import BookCreateForm from './Store.createbookform';
import BookLentForm from './Store.lentbookform';
import BookReturnForm from './Store.returnbookform';
import BookLaunchForm from './Store.launchbookform';
import BookDeactiveForm from './Store.deactivebookform';
import StockTakingForm from './Store.stocktakingform';

import React from 'react';
import { connect } from 'dva';

import styles from './Store.appex.less';

import About from '../about/About';

class StoreBizAppEx extends React.PureComponent {
  extraRoutesFunc = () => {
    console.log('BookCreateForm?', typeof BookCreateForm);
    console.log('About?', typeof About);
    console.log('About?', About);

    return [
      { path: '/store/:id/bookCreateForm', component: BookCreateForm },
      { path: '/store/:id/bookLentForm', component: BookLentForm },
      { path: '/store/:id/bookReturnForm', component: BookReturnForm },
      { path: '/store/:id/bookLaunchForm', component: BookLaunchForm },
      { path: '/store/:id/bookDeactiveForm', component: BookDeactiveForm },
      { path: '/store/:id/stockTakingForm', component: StockTakingForm },
      
      
  ];

  };
  render() {
    // const { collapsed, fetchingNotices,loading } = this.props
    //console.log("this.extraRoutesFunc------------",this.extraRoutesFunc());
    return <StoreBizApp extraRoutesFunc={this.extraRoutesFunc} {...this.props} />;
  }
}

export default connect(state => ({
  customized: 'yes',
}))(StoreBizAppEx);