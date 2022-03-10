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
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Deneme </h1>
                <h4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>deneme açıklama </h4>
                <Link to="/CreatePortfolio" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}><Button>Deneme Button</Button></Link>
            </div>
        );
    }

}