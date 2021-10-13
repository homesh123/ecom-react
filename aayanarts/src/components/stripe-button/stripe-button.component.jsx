import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({price}) => {
    const priceForStrip = price * 100;
    const publishableKey = "pk_test_51Jk5AySGMR9ebgTV2bvyl6Ivpukqub8pa6OgxAAjyVKvI2Nhak9rYYmUkYYTsN3nqo3GtXlXSj7rLLq3Yz36cPvt00Q40JTydU";
    
    const onToken = token => {
        console.log(token);
        alert("Payment Successfull")
    }

    return(
        <StripeCheckout
        label="Pay Now"
        name="Test Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStrip}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}


export default StripCheckoutButton