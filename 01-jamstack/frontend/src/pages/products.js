import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const productsPage = ({ data }) => {
    const products = data.allStrapiProduct.nodes;
    console.log("products :", products);
    return (
        <Layout pageTitle="Produits disponibles">
        <div className='productCardWrapper'>
            {products.map((product) => (
            <div key={product.id} className='productCard'>
                <img src={product.imgURL} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Prix : {product.price} €</p>
            </div>
            ))}
        </div>
        </Layout>
    )
}

export default productsPage

export const query = graphql`
  query {
    allStrapiProduct {
      nodes {
        id
        title
        imgURL
        description
        price
        slug
      }
    }
  }
`