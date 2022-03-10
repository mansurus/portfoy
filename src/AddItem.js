import React, { Component } from 'react'
import {  FormGroup, Label, Input} from 'reactstrap';
import { RiDragMove2Fill } from 'react-icons/ri';
import {   BsPlus } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import './index.css'

export  class AddItem extends Component {
  render() {
    return (
        <div class="flex-container">
        <RiDragMove2Fill size="2em" class="item"/> <FormGroup class="item" style={{width:'10%'}} >
            <Label for="exampleSelect">Bir</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup class="item" style={{width:'7%'}}>
            <Label for="exampleText">iki</Label>
            <Input type="text" name="text" id="exampleText" placeholder="text" />
          </FormGroup>
          <FormGroup class="item" style={{width:'7%'}}>
            <Label for="exampleText2">Üç</Label>
            <Input type="text" name="text2" id="exampleText2" placeholder="text" />
          </FormGroup>
          <FormGroup class="item" style={{width:'40%'}}>
            <Label for="exampleText3">Dört</Label>
            <Input type="text" name="text3" id="exampleText3" placeholder="text" />
          </FormGroup>
          <MdOutlineClose class='redClose' size='2em' color='red' />
          <BsPlus class='greenPlus' size='2em' color='green' />
        </div>
    )
  }
}
