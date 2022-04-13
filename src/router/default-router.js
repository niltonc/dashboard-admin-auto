import React from 'react'
import Index from '../views/dashboard/index'
import {Switch,Route} from 'react-router-dom'
// user
import UserProfile from '../views/dashboard/app/user-profile';
import UserAdd from '../views/dashboard/app/user-add';
import UserList from '../views/dashboard/app/user-list';
import userProfileEdit from '../views/dashboard/app/user-privacy-setting';
// widget
import Widgetbasic from '../views/dashboard/widget/widgetbasic';
// Form
import FormElement from '../views/dashboard/from/form-element';
import FormValidation from '../views/dashboard/from/form-validation';
import FormWizard from '../views/dashboard/from/form-wizard';
// table
import BootstrapTable from '../views/dashboard/table/bootstrap-table';

//extra
import PrivacyPolicy from '../views/dashboard/extra/privacy-policy';
import TermsofService from '../views/dashboard/extra/terms-of-service';

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";

//admin
import Admin from '../views/dashboard/admin/admin';

const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
                <Switch>
                    <Route path="/dashboard" exact component={Index} />
                    {/* user */}
                    <Route path="/dashboard/app/user-profile"     exact component={UserProfile} />
                    <Route path="/dashboard/app/user-add"         exact component={UserAdd}/>
                    <Route path="/dashboard/app/user-list"        exact component={UserList}/>
                    <Route path="/dashboard/app/user-privacy-setting" exact component={userProfileEdit}/>
                     {/* widget */}
                     <Route path="/dashboard/widget/widgetbasic"   exact component={Widgetbasic}/>
                     {/* From */}
                     <Route path="/dashboard/form/form-element"    exact component={FormElement}/>
                     <Route path="/dashboard/form/form-validation" exact component={FormValidation}/>
                     <Route path="/dashboard/form/form-wizard"     exact component={FormWizard}/>
                     {/* table */}
                     <Route path="/dashboard/table/bootstrap-table" exact component={BootstrapTable}/>
                     {/* extra */}
                     <Route path="/dashboard/extra/privacy-policy" exact component={PrivacyPolicy}/>
                     <Route path="/dashboard/extra/terms-of-service" exact component={TermsofService}/>
                     {/*admin*/}
                     <Route path="/dashboard/admin/admin" exact component={Admin}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
