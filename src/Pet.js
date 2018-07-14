import React from 'react'
import {
    Col,
    Row,
    Image
} from 'react-bootstrap'
import './App.css'
 
const SearchItem = (props) => {
    const { petInfo } = props
    console.log(petInfo)
    return (
        <Col xs={6} s={4} md={3}>
        <Image src={petInfo.photos[0].link} alt='welcome' rounded responsive className='image-resize'/>
            <h1>{petInfo.name}</h1>
            <div>
                <span>{petInfo.gender}</span>
            </div>
        </Col>
    )
}

export default SearchItem
