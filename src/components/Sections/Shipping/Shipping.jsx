import React from 'react';
import styled from 'styled-components';
import ShippingCol from './ShippingCol';

const ShippingArr = [
  {
    title: 'Shipping worldwide',
    text: 'Shiping lorem ipsum Shiping lorem ipsum Shiping lorem ipsum Shiping lorem ipsum Shiping lorem ipsum',
  },
  {
    title: 'FREE RETURNS',
    subtitle: 'Within 30 days Guarantee',
    text: 'Synergistically repurpose ethical value and backend paradigms. Holisticly architect effective expertise for installed base e-markets.',
  },
  {
    title: 'CUSTOMER SERVICE',
    text: 'Odio sequi natus eveniet, dicta magni! Modi nihil quis quos at mollitia.',
    contacts: {
      phone: '(+0) 9876 543211',
      Fax: '(+0) 11 2222 3333',
      Email: 'noreply@canvas.com',
      icons: true,
    },
  },
  {
    title: 'OURS STORES',
    stores: [
      {
        shopTitle: 'Melbourne Store:',
        address: `795 Folsom Ave, Suite 600
      San Francisco, CA 94107`,
      },
      {
        shopTitle: 'Sydney Store:',
        address: `795 Folsom Ave, Suite 600
        San Francisco, CA 94107`,
      },
    ],
    times: 'Every day: 10am – 7pm',
  },
];

const ShippingSection = styled.section`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  background-color: #cfcfcfc3;
  min-height: 200px;
`;

const Shipping = () => {
  return (
    <ShippingSection>
      {ShippingArr.map((article) => (
        <ShippingCol article={article} />
      ))}
    </ShippingSection>
  );
};

export default Shipping;
