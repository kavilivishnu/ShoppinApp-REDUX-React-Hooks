import { useSelector } from 'react-redux';


export let all = (trou, shi, sho, tror, shir, shor, finr) => {
    trou = useSelector((state) => state.quantity1);
    shi = useSelector((state) => state.quantity2);
    sho = useSelector((state) => state.quantity3);
    tror = useSelector((state) => state.troures);
    shir = useSelector((state) => state.shirtres);
    shor = useSelector((state) => state.shoeres);
    finr = useSelector((state) => state.finalres);
};