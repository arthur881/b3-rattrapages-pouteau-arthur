import * as React from 'react'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const contactUsPage = ({ data }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = event.target.elements.name.value;
        const comment = event.target.elements.comment.value;
        const date = new Date().toISOString();

        // Créer un objet avec les données du formulaire
        const commentData = { name, comment, date };

        try {
            const response = await fetch(process.env.STRAPI_API_URL+'/api/comment', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });

        console.log(response);
    } catch (error) {
        console.error(error);
    };

    }
    
    return (
        <Layout pageTitle="Contact">
            <h2>Laissez nous votre avis</h2>
            <form id="commentForm" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Votre nom" required></input>
                <textarea name="comment" placeholder="Votre avis ici..." required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </Layout>
    )
}

export default contactUsPage