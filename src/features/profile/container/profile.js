import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SampleAction from '../../../redux/actions/sample';
import ProfileComponent from "../component";

//dummy methods
const mapStateToProps = state => {
    return { sample: state.sample.addCount }
};


const Actions = {
    ...SampleAction
};


const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(Actions, dispatch) }
}

export const Profile = connect(mapStateToProps, mapDispatchToProps)(
    ProfileComponent
);