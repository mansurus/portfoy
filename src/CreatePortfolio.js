import React, { Component } from "react";
import {  FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

import './index.css'

export class CreatePortfolio extends Component {  

  render() {
    return (
      <div style={{ marginTop: "20vh" }}>
          <div className="header">
            <p>This is some content in sticky footer</p>
        </div>
          <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Deneme ddd{" "}
        </h1>
        <h4
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          Deneme Type{" "}
        </h4>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Staff
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Customer
            </Label>
          </FormGroup>          
        </FormGroup>
          <FormGroup style={{width:'30%'}} >
          <Label for="exampleSelect">Bir Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        
        <FormGroup style={{width:'30%'}}>
          <Label for="exampleEmail">Proje</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>

        <FormGroup style={{width:'30%'}} >
          <Label for="selectx">Bir başka select</Label>
          <Input type="select" name="selectBaska" id="selectx">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <div className="footer">
            <div style={{ display: 'flex', justifyContent: 'right' }}><Button>Deneme Button<Link to="/createPortfolio"></Link></Button></div>
            
        </div>
      </div>
    );
  }
}
