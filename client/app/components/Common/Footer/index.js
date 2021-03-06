/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLink1 = [
    { id: 0, name: 'Merchents', to: '/contact' },
    { id: 1, name: 'Online Stores', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];
  const infoLink2 = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Sell With Us', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Account Details</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Orders</Link>
      </li>
    </ul>
  );

  const footerLinks1 = infoLink1.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));
  const footerLinks2 = infoLink2.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Services</h2>
            </div>
            <div className='block-content'>
              <ul>{footerLinks1}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Quick Links</h2>
            </div>
            <div className='block-content'>
              <ul>{footerLinks2}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Newsletter</h2>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <span>?? {new Date().getFullYear()} SK Stores</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
          <li>
            <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
