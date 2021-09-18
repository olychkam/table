import { format } from 'date-fns'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true,
        sticky: 'left'
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'firstName',
        sticky: 'left'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'lastName',
        sticky: 'left'
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
    },
    {
        Header: 'State',
        Footer: 'State',
        accessor: 'adress.state'
    },
]
