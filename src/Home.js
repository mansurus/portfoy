import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

export class Home extends Component
{
    static displayName = Home.name;

    render()
    {
        return (
            <div style={{ marginTop: '35vh' }}>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:"#4196e0" }}>Portföy bulunmamaktadır! </h2>
                <h4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Portföy eklemek için, Portföy Oluştur butonuna tıklayarak, portföy ekleme ekranına ulaşabilirsiniz.</h4>
                <Link to="/CreatePortfolio" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}><Button size="lg" style={{backgroundColor:"#4196e0"}}>Portföyü Oluştur</Button></Link>
            </div>
        );
    }

}