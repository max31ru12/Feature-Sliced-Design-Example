import {useDispatch} from "react-redux";
import { AppDispatch as AppAppDispatch } from "@../../app/store";


type AppDispatch = AppAppDispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
