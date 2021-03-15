import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Modal(props) {
    const {
        fetchTrouserQuantity,
        fetchShirtQuantity,
        fetchShoeQuantity,
        totalTrouserAmount,
        totalShirtAmount,
        totalShoeAmount,
        totalAmount,
        setShowModal,
        symbol
    } = props;

    const handleClose = () => {
        setShowModal(false);
        toast.success(
            "Your order had been placed! and will be at your doorstep soon. Thank you for shopping with us😊. Have great day!",
            { autoClose: 5000 }
        );
    };

    return (
        <div className="modal">
            <h1 style={{ fontFamily: 'Sansita Swashed' }} >Order Details</h1>
            <h4 className="heading-h4" >
                {" "}
        You purchased ( {fetchTrouserQuantity} ) Trouser(s) costing you ({" "}
                {totalTrouserAmount} {symbol} ),{" "}
            </h4>
            <h4 className="heading-h4" >
                {" "}
        You purchased ( {fetchShirtQuantity} ) Shirt(s) costing you ({" "}
                {totalShirtAmount} {symbol} ),{" "}
            </h4>
            <h4 className="heading-h4" >
                {" "}
        You purchased ( {fetchShoeQuantity} ) Shoe(s) costing you ({" "}
                {totalShoeAmount} {symbol} ).{" "}
            </h4>
            <h4 className="heading-h4" >
                {" "}
        Your Total amount is ( {totalAmount} {symbol} ){" "}
            </h4>
            <button onClick={(e) => handleClose(e)}>Buy and Checkout</button>
            <button onClick={() => setShowModal(false)}>Cancel Order?</button>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Modal;
