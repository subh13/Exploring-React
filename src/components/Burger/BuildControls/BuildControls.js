import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
// console.log(controls)
// controls.map((index , arr , elem) => {
//     console.log(index);
//     console.log(arr);
//     console.log(elem);
// });
// controls.map(ctrl => {
//     console.log(ctrl);
// });
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>total price : <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map((ctrl) => {
                   return  <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabledCtrls={props.disabledInfo[ctrl.type]}/>
                })
            }
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchaseable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}
// class BuildControls extends Component {
//     render () {
//         return (
//             <div className={classes.BuildControls}>
//                 {
//                     controls.map((ctrl) => {
//                     return  <BuildControl 
//                         key={ctrl.label} 
//                         label={ctrl.label}
//                         added={this.props.ingredientAdded.bind(this, ctrl.type)}/>
//                     })
//                 }
//             </div>
//         );
//     }
// }
export default buildControls;