import React from 'react'
import s from './AddData.module.css';

type AddDatePropsType = {
    partItem: any
}

export const AddData = (props: AddDatePropsType) => {
    const AdressCity = props.partItem && props.partItem.adress ? props.partItem.adress.city : null
    const streetAdress = props.partItem && props.partItem.adress ? props.partItem.adress.streetAddress : null
    const stateAdress = props.partItem && props.partItem.adress ? props.partItem.adress.state : null
    const Zip = props.partItem && props.partItem.adress ? props.partItem.adress.zip : null
    return (
        <div className={s.dataContainer}>
            <div>Profile Info:</div>
            <div>
                id: <b>{props.partItem.id}</b>
            </div>
            <div>
                firstName: <b>{props.partItem.firstName}</b>
            </div>
            <div>
                lastName: <b>{props.partItem.lastName}</b>
            </div>
            <div>
                email: <b>{props.partItem.email}</b>
            </div>
            <div>
                phone: <b>{props.partItem.phone}</b>
            </div>
            <div>
                adress: <b></b>
            </div>
            <div>
                city: <b>{AdressCity}</b>
            </div>
            <div>
                streetAddress: <b>{streetAdress}</b>
            </div>
            <div>
                state: <b>{stateAdress}</b>
            </div>
            <div>
                zip: <b>{Zip}</b>
            </div>
            <div>
                description: <b>{props.partItem.description}</b>
            </div>
        </div>
    )
}