import React, { Component } from 'react'
import {  FormGroup, Input} from 'reactstrap';
import { RiDragMove2Fill } from 'react-icons/ri';
import {   BsPlus,BsSquareFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import './index.css'

export  class AddItem extends Component {
  render() {
    return (
        <div class="flex-container">
          
        <RiDragMove2Fill size="2em" class="icons-align"/> <FormGroup class="item" style={{width:'10%'}} >
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>            
            </Input>
          </FormGroup>
          <FormGroup class="item" style={{width:'7%'}}>
            <Input type="text" name="text" id="exampleText" placeholder="text" />
          </FormGroup>
          <FormGroup class="item" style={{width:'7%'}}>
            <Input type="text" name="text2" id="exampleText2" placeholder="text" />
          </FormGroup>
          <FormGroup class="item" style={{width:'40%'}}>
            <Input type="text" name="text3" id="exampleText3" placeholder="text" />
          </FormGroup>
          <MdOutlineClose class='icons-align' size='2em' color='red' />
          <BsPlus class='icons-align' size='2em' color='green' />
        </div>
    )
  }
}
