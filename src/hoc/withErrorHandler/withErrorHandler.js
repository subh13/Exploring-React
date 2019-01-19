import React, { Component } from 'react';
import MyAux from '../MyAux';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({
                    error: null
                });
                return request;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res , err => {
                this.setState({
                    error: err
                })
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        }
        render () {
            return (
                <MyAux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} /> {/** ...props because when a lower order component will passed to it we do not wanna loose the props state */}
                </MyAux>
            );
        }
    }
}
export default withErrorHandler;