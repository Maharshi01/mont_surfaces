import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SampleAction from '../../../redux/actions/sample';
import CartComponent from "../component";

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

export const Cart = connect(mapStateToProps, mapDispatchToProps)(
    CartComponent
);