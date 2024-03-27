import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';
import YorumEkle from './YorumEkle';
import App from '../../App';

const Yorumlar = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar, gonderiId, yeniYorumEkle} = props;

  return (
    <div>
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
      {yorumlar.map(yorum =>(
         <Yorum yorum={yorum}/>
         ))}
         <YorumEkle 
         yeniYorumEkle ={yeniYorumEkle}
         gonderiId={gonderiId}
        />
    </div>
  );
};  

export default Yorumlar;
