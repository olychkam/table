import React, {useState} from "react";
import s from "./Paginator.module.css";
import SuperButton from "../../common/c1-SuperButton/SuperButton";

type PaginatorType = {
    pages: number[], currentPage: any, onClickNext: any, onClickPrev: any
}
const Paginator: React.FC<PaginatorType> = (
    {
        pages, currentPage, onClickNext, onClickPrev,
        ...restProps
    }
) => {
    /* const pagesCount = Math.ceil(totalItemsCount / pageSize)
     const pages = []
     for (let i = 1; i <= pagesCount; i ++) {
         pages.push(i)
     }

     const portionsCount = Math.ceil(pagesCount / portionSize)
     const [portionNumber, setPortionNumber] = useState(1)
     const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
     const rightPortionNumber = portionNumber * portionSize;*/

    return (
        <div className={s.paginationContainer}>
            <nav aria-label="Page navigation example">
                <SuperButton onClick={() => {
                    onClickPrev()
                }}>Prev</SuperButton>
                {pages.map((p) => {
                    return (
                        <span key={p}
                              className={s.pageNumber + " " + (currentPage === p ? s.currentPage : "")}
                              onClick={(e) => {
                                  currentPage(p)
                              }}>{p}</span>
                    )
                })}
                <SuperButton onClick={() => {
                    onClickNext()
                }}>Next</SuperButton>
            </nav>
        </div>
    );
}

export default Paginator;
