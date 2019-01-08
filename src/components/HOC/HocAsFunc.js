import React, { Component } from 'react';
import { StyleRoot } from 'radium';
/**
 * Preferable way of HOC
 * Stateless Approach
 * @param {*} WrappedComponent 
 * @param {*} className 
 */
// const HocAsFunc = (WrappedComponent, className) => {
//     return (props) => (
//         <StyleRoot>
//             <div className={className}>
//                 <WrappedComponent {...props}/>
//             </div>
//         </StyleRoot>
//     );
// }
/**
 * Preferable way of HOC
 * Statefull Approach
 * @param {*} WrappedComponent 
 * @param {*} className 
 */
const HocAsFunc = (WrappedComponent, className) => {
    return class extends Component {
        render () {
            return (
                <StyleRoot>
                    <div className={className}>
                        <WrappedComponent {...this.props}/>
                    </div>
                </StyleRoot>
            );
        }
    }
}
export default HocAsFunc;