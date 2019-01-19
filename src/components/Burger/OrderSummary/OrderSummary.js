import React from 'react';
import MyAux from '../../../hoc/MyAux';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
    });
    return (
        <MyAux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>total price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </MyAux>
    );
}
export default orderSummary;