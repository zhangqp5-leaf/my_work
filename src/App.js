import React, {Fragment} from 'react';
import {
    Layout,
} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Header from './page/Commen/Header';
import Main from './page/Main/index';

import styles from './App.module.less';

const {Content} = Layout;

const App = () => {
    return (
        <div className={styles.App}>
            <Header />
            <Content className={styles.content}>
                <Router>
                    <Switch>
                        {/* <Route path="/love-yin-bao/main/">
                            <Main />
                        </Route>
                        <Route path="/love-yin-bao/treehole/">
                            <TreeHole />
                        </Route> */}
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
                </Router>
            </Content>
        </div>
    );
}

export default App;
