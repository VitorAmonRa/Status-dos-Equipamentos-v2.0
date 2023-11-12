import React from 'react';
import Navbar from '../../Components/Navbar';
import GlobalStyles from '../../GlobalStyles/GlobalStyles'
import './style.scss'

const AdminPage: React.FC = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <main>
        <article className='article-um'>
          <header>
            <div>
              
            </div>
          </header>
        </article>
        <article className='article-dois'>
          
        </article>
        <article className='article-tres'>
          
        </article>
      </main>
    </>
  );
}

export default AdminPage;