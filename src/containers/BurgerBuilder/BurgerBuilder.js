import React , {Component} from 'react';
import MyAux from '../../hoc/MyAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
    // salad: 10,
    // bacon: 20,
    // cheese: 30,
    // meat: 40
}
class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }
    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }
    purchaseContinueHandler = () => {
        alert('You Continue!!');
    }
    updatePurchaseState(updatedPrice) {
        // console.log(updatedPrice-4);
        let diff = (updatedPrice-4);
        if ( diff === 0 ) {
            // console.log('inside if ');
            this.setState({
                purchaseable: false
            });
        } else {
            // console.log('inside else');
            this.setState({
                purchaseable: true
            });
        }
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount; 
        // update the price 
        let oldPrice = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice;
        let updatedPrice = newPrice+oldPrice;
        // console.log(updatedPrice);
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        // console.log(this.state.totalPrice);
        this.updatePurchaseState(updatedPrice);
    }
    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] >= 1) {
            const oldCount = this.state.ingredients[type];
            const newCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            if (newCount >= 0) {
                updatedIngredients[type] = newCount;
            }
            // update the price 
            let oldPrice = INGREDIENT_PRICES[type];
            const newPrice = this.state.totalPrice;
            let updatedPrice = newPrice - oldPrice;
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedPrice >= 4 ? updatedPrice : 4
            });
            this.updatePurchaseState(updatedPrice >= 4 ? updatedPrice : 4);
        } else {
            alert('this item never be added try with something else!');
        }
    }
    // componentDidUpdate() {
    //     console.log(this.state.purchaseable);
    // }
    render() {
        const disabledInfoHandler = {
            ...this.state.ingredients
        }
        for(let key in disabledInfoHandler) {
            disabledInfoHandler[key] = disabledInfoHandler[key] <= 0 // everything returns as true so disabled true in child component
        }
        return (
            <MyAux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  purchaseCancelled={this.purchaseCancelHandler}
                                  purchaseContinued={this.purchaseContinueHandler}
                                  price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabledInfo = {disabledInfoHandler}
                    price={this.state.totalPrice} 
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>
            </MyAux>
        );
    }
}
export default BurgerBuilder;