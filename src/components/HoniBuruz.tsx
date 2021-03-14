import React from 'react';

const HoniBuruz: React.FC = () => {
  return (
    <>
      {/*       <Breadcrumb>
        <Breadcrumb.Item>
          <Link to='/'>Hasiera</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Honi buruz</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className='h1-class'>
        <div className='h1-honi-buruz'>
          <h1>Honi buruz</h1>
        </div>
      </div>
      
      <div className='aditzak'>
        <div className='div-aditzak'>
        <div>
        <p>Honi buruzko informazioa laster.</p>
      </div>
      <div>
        <p>Ilustrazioak: https://icons8.com.</p>
      </div>
        </div>
      </div>
    </>
  );
};

export default HoniBuruz;
