import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// typed definitions for redux store hooks
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch; // typed definition for useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // typed definition for useSelector
