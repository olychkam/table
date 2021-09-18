import * as React from 'react'
import {SortTable} from "../6-SortTable/SortTable";
import s from './SortState.module.css'
import SuperButton from "../../common/c1-SuperButton/SuperButton";

type SortStateProps = {
    sortBy: string
    onSelect: (obj: FilterItemType) => void
    onSearchSend: any
}

export type FilterItemType = {
    value: 'WI' | 'TN' | 'FL' | 'NE'

}

export type SortItemType = Array<FilterItemType>

export const SortState: React.FC<SortStateProps> = ({sortBy = 'WI', onSelect, onSearchSend}) => {

    const items: SortItemType = [
        {value: 'WI'},
        {value: 'TN'},
        {value: 'FL'},
        {value: 'NE'},
    ]

    const selected = items.find(obj => obj.value === sortBy)

    return (
        <div className={s.sort}>
            <SortTable
                items={items}
                onClick={onSelect}
                activeItem={selected && selected.value}
                onSearchSend={onSearchSend}
            >
                <div className={s.label}>
                    <SuperButton>Filter by state:</SuperButton>
                    {/*<span>{selected && selected.value}</span>*/}
                </div>
            </SortTable>
        </div>
    )
}