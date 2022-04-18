import React from 'react'
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Pagination from "./components/Pagination";
import HeroTable from './components/HeroTable';

function App() {

  // api üyeliği ile verilen public key ve private key'den oluşturulan hash
  const hash = '88d10a5a24ea797dd05d5103ca22a94c';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetch = async () => {
    const ssData = sessionStorage.getItem(`page-${currentPage}`);
    let data;

    //session storage'dan o sayfa adında gelen veri kontrol edildi varsa bu veri data'ya yazıldı yoksa axios ile veri çekildi ve session storage'e yazıldı.
    if (ssData != null) {
      const json = JSON.parse(ssData) ;
      data = json;
    }
    else{
    const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6fc2d005ff2338e7833c49790755ed4c&hash=${hash}&offset=${20 * currentPage - 20}`);

    sessionStorage.setItem(`page-${currentPage}`, JSON.stringify(result.data.data));

    data = result.data.data;
    
    }

    setItems(data.results);
    setTotalPage(Math.floor(data.total/20))
    setLoading(false);
  }

  //currentPage her değiştiğinde fetch fonksiyonu çalıştırıldı.
  useEffect(() => {
    fetch();
  }, [currentPage]);

  return (
    <div className="App">

      <Header />
      
      {
        //loading durumu kullanıcıya bildirildi.
        loading && <div className="loading">Be patient :) Heroes are coming</div> 
      }
    
      <HeroTable items={items} ></HeroTable>
      
      {
        !loading && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
      }

    </div>
  );
}

export default App;
