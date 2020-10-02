import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'

import appReducer from '../slice/app/appSlice'
import deliveryReducer from '../slice/delivery/deliverySlice'

export const rootReducer = combineReducers({
    app: appReducer,
    delivery: deliveryReducer,
    form: formReducer,
})