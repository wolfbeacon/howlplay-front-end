import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import GroupNavbarItem from "./GroupNavbarItem";
import {toggleModal} from "../../redux/actions/ModalActions";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import NavbarJoinGame from "./NavbarJoinGame";

const DashboardNavbar = ({groups, quizzes, expanded, toggleModal}) => <div id={`dashboard-navbar`} className={(expanded) ? "dashboard-nav-expanded" : "dashboard-nav-collapsed"} >
    <div id={"dashboard-navbar-items"}>
        <GroupNavbarItem id={"user"} />
    </div>
    <div id={"dashboard-navbar-controller"}>
        <NavbarJoinGame />
        <div onClick={() =>toggleModal()} id={"dashboard-navbar-addquiz"}>
          <h4>New Quiz</h4>
          <FontAwesomeIcon className={"dashboard-navbar-addicon"} icon={faPlus}/>
        </div>
    </div>
</div>;

const mapStateToProps = (state) => ({
    expanded: state.dashboardNavbar.expanded,
    groups: state.dashboardNavbar.groups,
    quizzes: state.quiz.quizzes
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleModal
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (DashboardNavbar);
