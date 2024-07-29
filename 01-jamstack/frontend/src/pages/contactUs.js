import * as React from 'react'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const contactUsPage = ({ data }) => {
    function handleSubmit(event) {
        document.getElementById('commentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const commentData = Object.fromEntries(formData.entries());
          
            fetch('http://localhost:1337/api/comment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(commentData),
            })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              // Rediriger vers une page de succès ou simplement fermer le formulaire
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          });
    }

    return (
        <Layout pageTitle="Contact">
            <form id="commentForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Votre nom" required></input>
                <textarea placeholder="Votre avis ici..." required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </Layout>
    )
}

export default contactUsPage