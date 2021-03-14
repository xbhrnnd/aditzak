import React from 'react';
import Container from 'react-bootstrap/Container';
import { hasierakoAditzak } from 'core/constants/aditzak.constants';

const Hasiera: React.FC = () => {
  const ausazkoZenbakia = (max:number) => {
    let min = 0;
    return Math.floor(Math.random() * (max - min) + min);
  };

  const posizioa: number = ausazkoZenbakia(hasierakoAditzak.length);
  const hasierakoAditza: string = hasierakoAditzak[posizioa].aditza;
  const hasierakoTestua: string = hasierakoAditzak[posizioa].testua;

  return (
    <Container>
      <div>
        <h1 className='h1-hasiera'>{hasierakoAditza}</h1>
        <h2 className='h2-hasiera'>{hasierakoTestua}</h2>
      </div>
      <div>
        <img className='hasiera-irudia' src='assets/composition-14.svg' alt='Atzeko irudia' />
      </div>
    </Container>
  );
};

export default Hasiera;
