import { createSlice } from "@reduxjs/toolkit";
import getGreeting from "../api/greetings";

const initialState = {
    loading: false,
    error: null,
    message: ''
};

const reducers = {
    fetchStart(state) {
        state.loading = true;
        state.error = null;
        state.message = '';
    },
    fetchSuccess(state, action) {
        state.loading = false;
        state.message = action.payload;
    },
    fetchFail(state, action) {
        state.loading = false;
        state.error = action.payload;
    }
};

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: reducers
});

export const { fetchStart, fetchSuccess, fetchFail } = greetingSlice.actions;

export const fetchGreeting = () => async (dispatch) => {
    try {
        dispatch(fetchStart());
        const greeting = await getGreeting();
        dispatch(fetchSuccess(greeting.text));
    } catch (error) {
        dispatch(fetchFail(error.message));
    }
}

export default greetingSlice.reducer;