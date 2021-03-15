import React, { useState } from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import {
    addTrouser,
    addShirts,
    addShoes,
    addAll,
    restQuantity,
    deleteTrouser,
    deleteShirt,
    deleteShoe
} from "../Actions/Actions";

function Application() {
    const [showButtonTrouser, setShowButtonTrouser] = useState(false);
    const [showButtonShirt, setShowButtonShirt] = useState(false);
    const [showButtonShoe, setShowButtonShoe] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState("");
    const [symbol, setSymbol] = useState("");

    const panT = 500;
    const shirT = 1000;
    const shoE = 700;

    const val1 = 1;
    const val2 = 2;
    const val3 = 3;

    const fetch = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleTrousers = () => {
        if (fetch.quantity1 === 5) {
            setShowButtonTrouser(true);
        } else {
            dispatch(
                addTrouser({
                    trousers: panT,
                    quantity1: 1,
                    troures: fetch.troures
                })
            );
            dispatch(
                addAll({
                    finalres: fetch.finalres
                })
            );
            setSymbol(selected);
        }
    };

    const handleShirts = () => {
        if (fetch.quantity2 === 5) {
            setShowButtonShirt(true);
        } else {
            dispatch(
                addShirts({
                    shirts: shirT,
                    quantity2: 1,
                    shirtres: fetch.shirtres
                })
            );
            dispatch(
                addAll({
                    finalres: fetch.finalres
                })
            );
            setSymbol(selected);
        }
    };

    const handleShoes = () => {
        if (fetch.quantity3 === 5) {
            setShowButtonShoe(true);
        } else {
            dispatch(
                addShoes({
                    shoes: shoE,
                    quantity3: 1,
                    shoeres: fetch.shoeres
                })
            );
            dispatch(
                addAll({
                    finalres: fetch.finalres
                })
            );
            setSymbol(selected);
        }
    };

    const handleDelete = (val) => {
        if (fetch.finalres === 0) {
            alert("nothing to delete!");
        }
        else {
            if (val === val1) {
                dispatch(addTrouser({
                    // quantity1: 0
                    finalres: fetch.finalres,
                }))
                if (fetch.quantity1 === 0) {
                    alert("nothing to delete!");
                }
                else {
                    dispatch(deleteTrouser(
                        {
                            quantity1: fetch.quantity1,
                            troures: 1
                        }
                    ))
                }
            }
            if (val === val2) {
                dispatch(addShirts(
                    {
                        // quantity2: 0
                        finalres: fetch.finalres
                    }
                ))
                if (fetch.quantity2 === 0) {
                    alert("nothing to delete!");
                }
                else {
                    dispatch(deleteShirt(
                        {
                            quantity2: fetch.quantity2,
                            shirtres: 1
                        }
                    ))
                }
            }
            if (val === val3) {
                dispatch(addShoes(
                    {
                        // quantity3: 0
                        finalres: fetch.finalres
                    }
                ))
                if (fetch.quantity3 === 0) {
                    alert("nothing to delete!");
                }
                else {
                    dispatch(deleteShoe(
                        {
                            quantity3: fetch.quantity3,
                            shoeres: 1
                        }
                    ))
                }
            }
        }
    }

    const handleClear = () => {
        if (fetch.finalres === 0) {
            alert("Hello there! The cart is empty and nothing's there to remove!");
        }
        dispatch(restQuantity());
        setShowButtonTrouser(false);
        setShowButtonShirt(false);
        setShowButtonShoe(false);
        setSymbol("");
    };

    return (
        <>
            <div className={showModal ? "backdrop" : ""}>
                <h1 style={{ fontSize: "45px" }} >CARt fulL</h1> <br />
                <b className="font-style" > Select Currency here: </b>{" "}
                <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                    <option className="font-style" value="Click to select">Click to select</option>
                    <option className="font-style" value="₹">₹</option>
                    <option className="font-style" value="$">$</option>
                    <option className="font-style" value="£">£</option>
                    <option className="font-style" value="€">€</option>
                    <option className="font-style" value="د.إ"
                    >د.إ</option>
                    <option value="C$">C$</option>
                </select><br /><br />
                {showButtonTrouser ? (
                    <div>
                        <p className="font-style" >Sorry😅! No more Trousers available</p>
                    </div>
                ) : (
                    <div>
                        <h3 className="heading-h3" >
                            Trouser(s) : AMOUNT( {panT} {symbol} ) x QUANTITY({" "}
                            {fetch.quantity1} ){" "}
                        </h3>
                        {showModal ? (
                            <div>
                                <button className="buttons" disabled onClick={(e) => handleTrousers(e)}>
                                    Add Trouser(s) to cart
              </button>
                                <button className="buttons" disabled onClick={() => handleDelete(val1)}>Remove Trouser(s) from Cart</button>
                            </div>
                        ) : (
                            <div>
                                <button className="buttons" onClick={(e) => handleTrousers(e)}>Add Trouser(s) to cart</button>
                                <button className="buttons" onClick={() => handleDelete(val1)}>Remove Trouser(s) from Cart</button>
                            </div>
                        )}
                        {/* <button onClick={(e) => handleTrousers(e)}>Add to cart</button> */}
                    </div>
                )}
                <br /><br />
                {showButtonShirt ? (
                    <div>
                        <p className="font-style" >Sorry😅! No more Shirts available</p>
                    </div>
                ) : (
                    <div>
                        <h3 className="heading-h3" >
                            Shirt(s) : AMOUNT( {shirT} {symbol} ) x QUANTITY({" "}
                            {fetch.quantity2} ){" "}
                        </h3>
                        {showModal ? (
                            <div>
                                <button className="buttons" disabled onClick={(e) => handleShirts(e)}>
                                    Add Shirt(s) to cart
              </button>
                                <button className="buttons" disabled onClick={() => handleDelete(val2)}>Remove Shirt(s) from Cart</button>
                            </div>
                        ) : (
                            <div>
                                <button className="buttons" onClick={(e) => handleShirts(e)}>Add Shirt(s) to cart</button>
                                <button className="buttons" onClick={() => handleDelete(val2)}>Remove Shirt(s) from Cart</button>
                            </div>
                        )}
                        {/* <button onClick={(e) => handleShirts(e)}>Add to cart</button> */}
                    </div>
                )}
                <br /><br />
                {showButtonShoe ? (
                    <div>
                        <p className="font-style" >Sorry😅! No more Shoes available</p>
                    </div>
                ) : (
                    <div>
                        <h3 className="heading-h3" >
                            Shoe(s) : AMOUNT( {shoE} {symbol} ) x QUANTITY( {fetch.quantity3}{" "}
              ){" "}
                        </h3>
                        {showModal ? (
                            <div>
                                <button className="buttons" disabled onClick={(e) => handleShoes(e)}>
                                    Add Shoe(s) to cart
              </button>
                                <button className="buttons" disabled onClick={() => handleDelete(val3)}>Remove Shoe(s) from Cart</button>
                            </div>
                        ) : (
                            <div>
                                <button className="buttons" onClick={(e) => handleShoes(e)}>Add Shoe(s) to cart</button>
                                <button className="buttons" onClick={() => handleDelete(val3)}>Remove Shoe(s) from Cart</button>
                            </div>
                        )}
                        {/* <button onClick={(e) => handleShoes(e)}>Add to cart</button> */}
                    </div>
                )}
                <br />
                <br />
                {showModal ? (
                    <button className="buttons" dispatch onClick={() => setShowModal(false)}>
                        Order Details
                    </button>
                ) : (
                    <button className="buttons" onClick={() => setShowModal(true)}>Order Details</button>
                )}
                {/* <button onClick={() => setShowModal(true)}>Order Details</button> */}
                <br />
                <br />
                {showModal ? (
                    <button className="buttons" disabled onClick={(e) => handleClear(e)}>
                        Clear Cart
                    </button>
                ) : (
                    <button className="buttons" onClick={(e) => handleClear(e)}>Clear Cart</button>
                )}
                {/* <button onClick={(e) => handleClear(e)}>Clear Cart</button> */}
                <br /><br />
                <hr />
                <h1 className="base-heading" >
                    <u>BAG</u>
                </h1>
                <h1 className="base-heading" >
                    {" "}
          TOTAL AMOUNT : ( {fetch.finalres} {symbol} )
          <p> {fetch.remove} </p>
                </h1>
                <div style={{ minHeight: "20vh" }} />
            </div>
            {showModal ? (
                <Modal
                    fetchTrouserQuantity={fetch.quantity1}
                    fetchShirtQuantity={fetch.quantity2}
                    fetchShoeQuantity={fetch.quantity3}
                    totalTrouserAmount={fetch.troures}
                    totalShirtAmount={fetch.shirtres}
                    totalShoeAmount={fetch.shoeres}
                    totalAmount={fetch.finalres}
                    setShowModal={setShowModal}
                    symbol={symbol}
                />
            ) : null}
        </>
    );
}

export default Application;

