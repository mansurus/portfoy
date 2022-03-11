import React, { Component } from "react";
import {  FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from "react-router-dom";
import { FaBook } from 'react-icons/fa';
import { BsCircleFill, BsArrowRight } from 'react-icons/bs';


import './index.css'

export class CreatePortfolio extends Component {  

  render() {
    return (
      <div style={{ marginTop: "15vh" }}>
        
          <div className="header">
            <h4>Portföyünüzü oluşturun</h4>
            <p>1/2</p>
            <p></p>
        </div>
          <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Portföy Detayı
        </h1>
        <div style={{ marginLeft: "30vh", marginTop: "5vh" }}>
        <p
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          Portföy Tipi
        </p>
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <FaBook color="pink"/> Staff
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <BsCircleFill color="yellow"/> Customer
            </Label>
          </FormGroup>          
        </FormGroup>
          <FormGroup style={{width:'40%'}} >
          <Label for="exampleSelect">Diploma / Eğitim Adı</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option selected>Kredi Operasyonları Diploması</option>

          </Input>
        </FormGroup>
        
        <FormGroup style={{width:'40%'}}>
          <Label for="exampleText">Grup Adı</Label>
          <Input type="text" name="text" id="exampleText" placeholder="text" value={"Kredi Operasyonları Diploması"} />
        </FormGroup>
        <FormGroup style={{width:'40%'}}>
          <Label for="exampleText">Proje Konusu</Label>
          <Input type="text" name="text" id="exampleText" placeholder="" />
        </FormGroup>
        <FormGroup style={{width:'40%'}} >
          <Label for="selectx">Portföy Yöneticisi</Label>
          <Input type="select" name="selectBaska" id="selectx">
            <option value={"1"}>DİĞDEM DÖKMECİ</option>            
          </Input>
        </FormGroup>
        </div>
        <div className="footer-create">
            <div style={{ display: 'flex', justifyContent: 'right'  }}><Link to="/PortfolioDetail"><Button size="lg">Sonraki Adım <BsArrowRight /></Button></Link></div>
            
        </div>
        
      </div>
    );
  }
}
