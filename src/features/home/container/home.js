import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SampleAction from '../../../redux/actions/sample';
import HomeComponent from "../component";

//dummy methods
const mapStateToProps = state => {
    return { sample: state.sample }
};


const Actions = {
    ...SampleAction
};


const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(Actions, dispatch) }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(
    HomeComponent
);