import React from 'react';
import styled from 'styled-components';
import ShippingCol from './ShippingCol';
import useStrapi from './../../../hooks/useStrapi';

const ShippingSection = styled.section`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  background-color: #cfcfcfc3;
  min-height: 200px;
`;

const Shipping = () => {
  const [ShippingArr] = useStrapi('canvas-shippings');

  return (
    <ShippingSection>
      {ShippingArr.map((article, index) => (
        <ShippingCol key={index} article={article} />
      ))}
    </ShippingSection>
  );
};

export default Shipping;
