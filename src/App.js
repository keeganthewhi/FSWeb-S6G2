/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteveri from "./sahte-veri"
import gonderiler from "./bilesenler/Gonderiler/Gonderiler"
import Gonderi from "./bilesenler/Gonderiler/Gonderi";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import YorumEkle from "./bilesenler/Yorumlar/YorumEkle";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler, setGonderiler] = useState(sahteveri)
  const [searchText, setsearchText] = useState("")


  const gonderiyiBegen = (gonderiID) => {

    const newGonderiler = gonderiler.map((gonderi) =>{
      if (gonderi.id === gonderiID) {
        if (gonderi.liked) {
          gonderi.likes--
          gonderi.liked = false
          
        }else{
          gonderi.likes ++ 
          gonderi.liked =true
        }
        
      }
      return gonderi
    });
    setGonderiler(newGonderiler) 
  };
  


  const yeniYorumEkle = (gonderId, yeniYorum) => {
    const newGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderId) {
        gonderi.comments.push({
          id: Math.round(Math.random() * 99999),
          username: "fsweb",
          text: yeniYorum,
        })
      }
      return gonderi

    });
  
    setGonderiler(newGonderiler);
  }




 

return (
    <div className="App">

      <AramaCubugu searchText= {searchText} setsearchText={setsearchText}/>

      <Gonderiler gonderiler={gonderiler.filter(post => post.username.toLowerCase().includes(searchText))} 
      gonderiyiBegen = {gonderiyiBegen}
      yeniYorumEkle={yeniYorumEkle}
      
      />

      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
      
    </div>
   ) ;


}
export default App

