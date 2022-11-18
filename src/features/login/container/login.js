import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SampleAction from '../../../redux/actions/sample';
import LoginComponent from "../component";
import ForgotPasswordComponent from "../component/ForgotPassword";
import ResetPasswordComponent from "../component/ResetPassword";

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

export const Login = connect(mapStateToProps, mapDispatchToProps)(
    LoginComponent
);

export const ForgotPassword = connect(mapStateToProps, mapDispatchToProps)(
    ForgotPasswordComponent
);

export const ResetPassword = connect(mapStateToProps, mapDispatchToProps)(
    ResetPasswordComponent
);