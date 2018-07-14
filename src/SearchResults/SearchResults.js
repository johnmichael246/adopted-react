import React from 'react'
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    ControlLabel,
    HelpBlock,
    Col,
    Row
} from 'react-bootstrap'
import SearchForm from './../SearchForms/MainSearchForm'
import SearchItem from './../Pet'

export default class SearchResults extends React.Component {
    render() {
        const { pets } = this.props
        let petsPresent = pets.length > 0 ? (
            pets.map(pet => <SearchItem petInfo={pet} key={pet.id}/>)
            ) : (
            <div>
                <p>search page with results</p>
            </div>
        )
        return (
            <div>
            {/* <Row> */}
                <SearchForm
                inline={true}
                handlePetfinderRequest={this.props.handlePetfinderRequest}/>
                {petsPresent}
            {/* </Row>   */}
            </div>          
        )
    }
}