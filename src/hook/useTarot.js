import { useContext } from "react";
import { TarotContext } from "../context/provider";

export default function useTarot() {
    const tarotContext = useContext(TarotContext);
    
    return tarotContext;
}