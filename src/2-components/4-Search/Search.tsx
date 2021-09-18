import React, {useCallback, useState} from 'react';
import s from '../../4-app/App.module.scss'
import {useDispatch} from "react-redux";
import SuperButton from "../../common/c1-SuperButton/SuperButton";

type SearchPropsType = {
    onSearchSend: any
}
const Search: React.FC<SearchPropsType> = ({onSearchSend}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={s.search}>
            <input value={value}
                   onChange={inputHandler}
            />
            <SuperButton onClick={() => {
                onSearchSend(value)
            }}>Filter</SuperButton>
        </div>
    )
}
export default Search;