import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  deliveryParam: {
    from: ``,
    to: `Москва`,
    currency: `USD`,
    rate: ``,
  },
  contactWithMe: false,
}

const deliverySlice = createSlice({
  name: `delivery`,
  initialState,
  reducers: {
    changeParam(state, action) {
      const { param, value } = action.payload
      state.deliveryParam[param] = value
    },
    changeContactWithMe(state) {
      state.contactWithMe = !state.contactWithMe
    }
  }
})


export const { 
  changeParam,
  changeContactWithMe,
  
} = deliverySlice.actions

export default deliverySlice.reducer