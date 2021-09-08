import React from 'react';
import styled from 'styled-components';
import Icon from '../../UI/Icon';
import { social } from './../Social';

const Article = styled.article`
  max-width: 22%;
`;

const Title = styled.h4`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

const Subtitle = styled.h5`
  line-height: 1.5;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
`;

const Contacts = styled.div`
  & ul {
    font-size: 0.8rem;
    margin-top: 1.2rem;
    padding-left: 0;
  }

  & li {
    list-style: none;
    font-weight: bold;
  }

  & span {
    font-weight: normal;
  }
`;
const SocialLinks = styled.div`
  margin-top: 1rem;
  & a {
    padding-right: 0.4rem;
  }
  & a:hover {
    color: white;
  }
`;

const Stores = styled.div`
  max-width: 180px;
  & h5 {
    margin-bottom: 0.2rem;
  }

  & span {
    font-size: 0.8rem;
  }
`;

const ShippingCol = ({ article: { title, text, subtitle, contacts, stores, times } }) => {
  return (
    <Article>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {text && <Text>{text}</Text>}
      {contacts && (
        <Contacts>
          {
            <>
              <ul>
                <li>
                  Phone: <span>{contacts.phone}</span>{' '}
                </li>
                <li>
                  Fax: <span>{contacts.Fax}</span>
                </li>
                <li>
                  Email: <span>{contacts.Email}</span>
                </li>
              </ul>
              <SocialLinks>
                {social.map((s) => (
                  <a key={s.link} target='_blank' rel='noreferrer' href={s.link}>
                    <Icon icon={s.icon} />
                  </a>
                ))}
              </SocialLinks>
            </>
          }
        </Contacts>
      )}
      {stores && (
        <Stores>
          {stores.map((store, index) => (
            <div key={index}>
              <Subtitle>{store.shopTitle}</Subtitle>
              <Text>{store.address}</Text>
            </div>
          ))}
          <span>
            <strong>Timing:</strong> {times}
          </span>
        </Stores>
      )}
    </Article>
  );
};

export default ShippingCol;
