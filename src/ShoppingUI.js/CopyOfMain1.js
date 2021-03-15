// Previous logic before re - writing the logic with disabling the buttons when modal is opened, adding removing items from cart functionality
// and renaming buttons.

import React, { useState } from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import {
    addTrouser,
    addShirts,
    addShoes,
    addAll,
    restQuantity
} from "./Actions";

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

    const fetch = useSelector((state) => state);
    const fetchTrouserQuantity = useSelector((state) => state.quantity1);
    const fetchShirtQuantity = useSelector((state) => state.quantity2);
    const fetchShoeQuantity = useSelector((state) => state.quantity3);
    const totalTrouserAmount = useSelector((state) => state.troures);
    const totalShirtAmount = useSelector((state) => state.shirtres);
    const totalShoeAmount = useSelector((state) => state.shoeres);
    const totalAmount = useSelector((state) => state.finalres);
    const dispatch = useDispatch();

    const handleTrousers = () => {
        if (fetch.quantity1 === 5) {
            setShowButtonTrouser(true);
        } else {
            dispatch(
                addTrouser({
                    trousers: panT,
                    quantity: 1,
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
                    quantity: 1,
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
                    quantity: 1,
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

    const handleClear = () => {
        dispatch(restQuantity());
        setShowButtonTrouser(false);
        setShowButtonShirt(false);
        setShowButtonShoe(false);
        setSymbol("");
    };

    return (
        <>
            <div className={showModal ? "backdrop" : ""}>
                <b> Select Currency here: </b>{" "}
                <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                    <option value="Click to select">Click to select</option>
                    <option value="₹">₹</option>
                    <option value="$">$</option>
                    <option value="£">£</option>
                    <option value="€">€</option>
                    <option value="د.إ">
                        د.إ
          </option>
                    <option value="C$">C$</option>
                </select>
                {showButtonTrouser ? (
                    <div>
                        <p>Sorry😅! No more Trousers available</p>
                    </div>
                ) : (
                    <div>
                        <h3>
                            Trouser(s) : AMOUNT( {panT} {symbol} ) x QUANTITY({" "}
                            {fetch.quantity1} ){" "}
                        </h3>
                        <button onClick={(e) => handleTrousers(e)}>Add to cart</button>
                    </div>
                )}
                {showButtonShirt ? (
                    <div>
                        <p>Sorry😅! No more Shirts available</p>
                    </div>
                ) : (
                    <div>
                        <h3>
                            Shirt(s) : AMOUNT( {shirT} {symbol} ) x QUANTITY({" "}
                            {fetch.quantity2} ){" "}
                        </h3>
                        <button onClick={(e) => handleShirts(e)}>Add to cart</button>
                    </div>
                )}
                {showButtonShoe ? (
                    <div>
                        <p>Sorry😅! No more Shoes available</p>
                    </div>
                ) : (
                    <div>
                        <h3>
                            Shoe(s) : AMOUNT( {shoE} {symbol} ) x QUANTITY( {fetch.quantity3}{" "}
              ){" "}
                        </h3>
                        <button onClick={(e) => handleShoes(e)}>Add to cart</button>
                    </div>
                )}
                <br />
                <br />
                <button onClick={() => setShowModal(true)}>Order Details</button>
                <br />
                <br />
                <button onClick={(e) => handleClear(e)}>Clear Cart</button>
                <br />
                <hr />
                <h1>
                    <u>BAG</u>
                </h1>
                <h3>
                    {" "}
          TOTAL AMOUNT : ( {fetch.finalres} {symbol} )
        </h3>
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
