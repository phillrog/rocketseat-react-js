import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

    componentDidMount(){
        this.loadProducts();
    }

    render() {
        return <h1>Hello World</h1>;
    }

    loadProducts = async () => {
        const response = await api.get(`/products`);

        console.log(response.data.docs);
    }
}