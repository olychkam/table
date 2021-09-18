import React, {useCallback, useEffect, useState} from 'react';
import s from './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {TableType} from "../3-redux/data-reducer";
import '../2-components/1-Table/Table.css';
import {Table} from '../2-components/1-Table/Table';
import {AddData} from "../2-components/3-AddDate/AddData";
import Paginator from "../2-components/2-Paginator/Paginator";


function App() {
    const dispatch = useDispatch()
    const [data, setData] = useState<TableType[]>([])
    const [directionSort, setDirectionSort] = useState<boolean>(true)
    const [partItem, setPartItem] = useState<any>('')

    const maxCountPage = 13
    const [totalCountRaw, setTotalCountRaw] = useState<number>(0)
    const [totalCountPage, setTotalCountPage] = useState<number>(0)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [currentPageNumber, setCurrentPageNumber] = useState<any>(null)
    const [searchText, setSearchText] = useState<string>('')

    const baseUrl = `https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`
    useEffect(() => {
        axios(baseUrl)
            .then((res) => {
                setData(res.data)
                setIsLoaded(true)
            })
    }, [setData])
    const getFilteredData = () => {
        if (!searchText) {
            return data
        }
        return data.filter(el => {
            return el['firstName'].toLowerCase().includes(searchText.toLowerCase())
        })
    }
    const filteredData = getFilteredData()

    const lastBlockRow = currentPageNumber * maxCountPage
    const firstBlockRow = lastBlockRow - maxCountPage + 1
    const currentBlockRows = filteredData.slice(firstBlockRow, lastBlockRow)

    const currentPage = (pg: number) => {
        setCurrentPageNumber(pg)
        console.log(currentPageNumber)
    }
    useEffect(() => {
        if (!isLoaded) {
            return
        }
        setTotalCountRaw(filteredData.length)
        const getTotalCountPage = Math.ceil(totalCountRaw / maxCountPage)
        setTotalCountPage(getTotalCountPage)
        console.log(totalCountRaw)
        console.log(getTotalCountPage)
        currentPage(1)
    }, [isLoaded, setTotalCountRaw, filteredData.length, totalCountRaw])
    let pages = []
    for (let i = 1; i <= totalCountPage; i++) {
        pages.push(i)
    }
    const detailRow = (row: any) => {
        setPartItem(row)
    }
    const sortData = (field: any) => {
        const copy = data.concat()
        let sortData;
        if (directionSort) {
            sortData = copy.sort((a, b) => {
                    // @ts-ignore
                    return a[field] > b[field] ? 1 : -1
                }
            )
        } else {
            // @ts-ignore
            sortData = copy.reverse((a, b) => {
                    // @ts-ignore
                    return a[field] > b[field] ? 1 : -1
                }
            )
        }

        setData(sortData)
        setDirectionSort(!directionSort)

    }
    const onClickNextHandler = () => {
        if (currentPageNumber > totalCountPage - 1) {
            return
        }
        setCurrentPageNumber(currentPageNumber + 1)
    }
    const onClickPrevHandler = () => {
        if (currentPageNumber < 2) {
            return
        }
        setCurrentPageNumber(currentPageNumber - 1)
    }
    const onSearchSend = (text: string) => {
        setSearchText(text)
        console.log(text)
    }
    // @ts-ignore
    return (
        <div className={s.app}>
            <h1 className={s.name}>NOTES</h1>
            <Table data={currentBlockRows}
                   sortData={sortData}
                   directionSort={directionSort}
                   detailRow={detailRow}
                   onSearchSend={onSearchSend}/>
            <Paginator pages={pages}
                       currentPage={currentPage}
                       onClickNext={onClickNextHandler}
                       onClickPrev={onClickPrevHandler}/>
            {partItem ? <AddData partItem={partItem}/> : null}
        </div>
    );
}

export default App;
