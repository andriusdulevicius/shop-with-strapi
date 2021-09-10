import React from 'react';
import MembersOnly from '../MembersOnly/MembersOnly';
import Layout from './../Layout/Layout';

const MembersOnlyPage = () => {
  return (
    <div>
      <Layout>
        <MembersOnly />
      </Layout>
    </div>
  );
};

export default MembersOnlyPage;
