import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type SortByType = 'WI' | 'TN' | 'FL'|'NE'

const initialState = {
   sortBy: 'WI' as SortByType
}

export type FiltersInitialState = typeof initialState;

export const slice = createSlice({
   name: 'filters',
   initialState: initialState,
   reducers: {
      setSortBy(state, action: PayloadAction<{name: SortByType}>) {
         state.sortBy = action.payload.name
      }
   }
})

export const filtersReducer = slice.reducer
export const {setSortBy} = slice.actions
