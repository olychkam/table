import React, {useEffect, useState} from 'react';
import './Table.css';
import {TableType} from "../../3-redux/data-reducer";
import {Up} from "../../0-assets/svg/Up";
import {ArrowUp} from '../../0-assets/svg/ArrowUp';
import Search from "../4-Search/Search";
import {FilterItemType, SortState} from "../5-SortState/SortState";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../3-redux/store";
import {setSortBy} from "../../3-redux/filters-reducer";


type TablePropsType = {
    data: TableType[]
    sortData: (field: any) => void,
    directionSort: boolean,
    detailRow: any,
    onSearchSend: any
}
export const Table = (props: TablePropsType) => {
    const filtersSelectors = (state: AppRootStateType) => state.filters
    const [fieldData, setFieldData] = useState('')
    const filters = useSelector(filtersSelectors)
    const dispatch = useDispatch()
    const Arrow = () => {
        return (
            props.directionSort ? <Up/> : <ArrowUp/>
        )
    }
    const fieldSortData = (field: any) => {
        props.sortData(field)
        setFieldData(field)
    }
    const selectSort = React.useCallback((filterObj: FilterItemType) => setSortBy(
        {name: filterObj.value})
        , [dispatch])

    return (<div>
            <Search onSearchSend={props.onSearchSend}/>
            <SortState onSearchSend={props.onSearchSend} sortBy={filters.sortBy}
                       onSelect={selectSort}/>
            <table>
                <thead>
                <th onClick={() => {
                    fieldSortData('id')
                }}>id{fieldData === 'id' ? <Arrow/> : null}</th>
                <th onClick={() => {
                    fieldSortData('firstName')
                }}>firstName{fieldData === 'firstName' ? <Arrow/> : null}</th>
                <th onClick={() => {
                    fieldSortData('lastName')
                }}>lastName{fieldData === 'lastName' ? <Arrow/> : null}</th>
                <th onClick={() => {
                    fieldSortData('email')
                }}>email{fieldData === 'email' ? <Arrow/> : null}</th>
                <th onClick={() => {
                    fieldSortData('phone')
                }}>phone{fieldData === 'phone' ? <Arrow/> : null}</th>
                <th onClick={() => {
                    fieldSortData('adress')
                }}>adress{fieldData === 'adress' ? <Arrow/> : null}</th>
                </thead>
                <tbody>
                {
                    props.data.map(item => (
                        <tr key={item.id} onClick={() => {
                            props.detailRow(item)
                        }}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.adress.state}</td>
                        </tr>
                    ))}
                <td>id</td>
                <td>firstName</td>
                <td>lastName</td>
                <td>email</td>
                <td>phone</td>
                <td>adress</td>
                </tbody>
            </table>
        </div>
    )
}