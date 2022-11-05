import React from 'react'
import {Helmet} from 'react-helmet-async'

function About(){
    return(
        <div>
              <Helmet>
        <title>About</title>
        <meta name='description' content='Learn more about us'/>
        <link rel="cononical" href="/about" />
      </Helmet>
            <div className="About__page">
                <h1>About The Project</h1>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos, temporibus voluptatibus facere atque vero deleniti dicta harum minima aperiam distinctio hic nulla eveniet! Ex architecto iste natus ipsa possimus illo quia adipisci, debitis fugit ipsum hic eligendi fuga pariatur, aliquam dolorem nulla a odio error voluptates veniam similique deserunt.</div>
            </div>

        </div>
    )
}

export default About;