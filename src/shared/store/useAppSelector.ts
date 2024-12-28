import {useSelector} from "react-redux";
import { RootState as AppRootState } from "@../../app/store";

export type RootState = AppRootState

export const useAppSelector = useSelector.withTypes<RootState>()
