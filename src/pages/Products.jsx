import React from 'react'

import Table from '../components/table/Table'

import productsList from '../assets/JsonData/productsList.json'

const productItems = [
    '',
    'name',
    'quantidade',
    'medida',
    'preço',
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.quantidade}</td>
        <td>{item.medida}</td>
        <td>{item.preco}</td>
    </tr>
)
const Products = () => {
    return (
        <div>
        <h2 className="page-header">
            Produtos
        </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <Table
                            limit='10'
                            headData={productItems}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={productsList}
                            renderBody={(item, index) => renderBody(item, index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Products
