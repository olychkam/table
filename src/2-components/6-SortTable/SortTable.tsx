import * as React from 'react'
import classNames from 'classnames'
import {FilterItemType} from '../5-SortState/SortState';
import s from '../5-SortState/SortState.module.css'
import {useState} from "react";

type PopupMenuType = {
    items: Array<FilterItemType>
    onClick: (obj: FilterItemType) => void
    children: React.HTMLAttributes<HTMLSpanElement>
    activeItem?: 'WI' | 'TN' | 'FL' | 'NE',
    onSearchSend:any
}

export const SortTable: React.FC<PopupMenuType> = ({children, items, onClick, activeItem}) => {

    let [visiblePopup, setVisiblePopup] = React.useState(false)
    const [value, setValue] = useState<string>('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const sortRef = React.useRef<HTMLDivElement>(null)

    const clickOutsideCallback = React.useCallback(e => {
        // const path = e.path || (e.composedPath && e.composedPath())
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }, [])

    const handleOutsideClick = (item: FilterItemType) => {
        if (onClick) {
            onClick(item)
        }
        setVisiblePopup(false)
    }

    React.useEffect(() => {
        document.querySelector('body')!.addEventListener('click', clickOutsideCallback)
        return () => document.querySelector('body')!.removeEventListener('click', clickOutsideCallback)
    }, [clickOutsideCallback])


    const mappedSortType = items && items.map((item: FilterItemType, index: number) => (
        <li
            key={index}
            className={classNames({active: item.value === activeItem})}
            onClick={handleOutsideClick.bind(this, item)}>
            {item.value}
        </li>))

    return (
        <React.Fragment>
            <div ref={sortRef} onClick={() => {
                setVisiblePopup(!visiblePopup)
            }}>{children}</div>
            {visiblePopup && (
                <div className={s.popup}>
                    <ul>
                        {mappedSortType}
                    </ul>
                </div>
            )}
        </React.Fragment>
    )
}

