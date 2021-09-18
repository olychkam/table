import {tableAPI} from "../1-api/api";

const SET_MESSAGE = "SET_MESSAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

export type AdressType = {
    streetAddress: string,
    city: string,
    state: string,
    zip: number
}
export type TableType = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    adress: AdressType,
    description: string

}
type PacksStateType = {
    message: Array<TableType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}
const defaultState: PacksStateType = {
    message: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
}


export default function messageReducer(state = defaultState, action: any) {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: [...action.message]
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        default:
            return state
    }
}

export const setMessage = (message: any) => ({type: SET_MESSAGE, message})
export let setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage

    } as const
}
export let setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}



export const getNotesListTC = () => async (dispatch: any) => {
    try {
        const res = await tableAPI.getMessage()
        // @ts-ignore

        dispatch(setData(res.data));
    } catch (error) {
        console.log('failed', 'Some error occurred')
    }
}

