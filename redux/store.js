import {configureStore} from '@reduxjs/toolkit';
import SheetSlice from './SheetSlice';

export default configureStore({
    reducer: {
        mySheet: SheetSlice,
    },
})