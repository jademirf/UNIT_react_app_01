import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../../components/Header'
import FooterMenu from '../../components/FooterMenu'

import './style.css'

const Home = () => {

  return (
    <div className="App">
      <Header listTitle={'Estudos'}/>
      <main>
        <header>
          <h2>Bem vindo,</h2>
          <p>Para iniciar basta realizar o <Link to="/login">login</Link></p>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Per aumento de cachacis, eu reclamis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!</p>
        </header>
      </main>
      <FooterMenu />
    </div>
  );
}

export default Home;
