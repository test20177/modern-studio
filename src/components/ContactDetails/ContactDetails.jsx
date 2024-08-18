import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { ContactDetailsWrapper } from './ContactDetails.styles';

const contactData = {
  anna: {
    name: 'Anna Żarczyńska',
    email: 'anna@biuronieruchomo.pl',
    phone: '951753963',
  },
  amanda: {
    name: 'Amanda Grabowska',
    email: 'amanda@biuronieruchomo.pl',
    phone: '158853654',
  },
  marta: {
    name: 'Marta Kucharczyk',
    email: 'marta@biuronieruchomo.pl',
    phone: '789456123',
  },
  kamila: {
    name: 'Kamila Urbaniak',
    email: 'kamila@biuronieruchomo.pl',
    phone: '965125458',
  },
  patrycja: {
    name: 'Patrycja Biernaczyk',
    email: 'patrycja@biuronieruchomo.pl',
    phone: '456741852',
  },
};

export const ContactDetails = ({ contact = 'anna' }) => {

  const data = useStaticQuery(graphql`
    query {
      anna: file(relativePath: { regex: "/zespol\/1_ania.jpg/" }) {
        publicURL
      },
      amanda: file(relativePath: { regex: "/zespol\/2_amelia.jpg/" }) {
        publicURL
      },
      kamila: file(relativePath: { regex: "/zespol\/3_aneta.jpg/" }) {
        publicURL
      },
      marta: file(relativePath: { regex: "/zespol\/4_kamila.jpg/" }) {
        publicURL
      },
      patrycja: file(relativePath: { regex: "/zespol\/4_patrycja.jpg/" }) {
        publicURL
      },
    }
  `);

  return (
    <ContactDetailsWrapper>
      <img src={data[contact].publicURL} alt="" />
      <div>
        <p>Kontakt:</p>
        <p>{contactData[contact].name}</p>
        <p>{contactData[contact].email}</p>
        <p>{contactData[contact].phone}</p>
      </div>
    </ContactDetailsWrapper>
  )
};

ContactDetails.propTypes = {
  contact: PropTypes.oneOf(['anna', 'amanda', 'kamila', 'patrycja', 'marta']).isRequired,
}