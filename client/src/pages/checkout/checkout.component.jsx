import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TestWarningContainer, TotalContainer } from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalValue }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: ${totalValue}</span>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </TestWarningContainer>

    <StripCheckoutButton price={totalValue} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
