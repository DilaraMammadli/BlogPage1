
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './Article.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
import { Navigation } from 'swiper/modules';

function Article() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController(); 
    fetch("http://localhost:3131/cards" , {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => setData(a));
      return () => {
        controller.abort();
      };
  }, []);

  return (
    <main>

      <section className='mainsec__header'>
        <div className="container">
          <div className='whitebox__sec'>
            <h1>Məqalə</h1>
            <p>Mebel/Dizayn</p>
          </div>
        </div>
      </section>
      <section className="swiper__secmain">
        <h1>Dizayn</h1>
      <Swiper 
      // slidesPerView={1}
      spaceBetween={80}
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper swiper__sec">
        <SwiperSlide>
          <div className="bigswiper__sec">
            <div className="swiperimage__sec">
              <img src="./collection1.png" alt="" />
            </div>
            <div className="swipertext__sec">
              <h1>Yataq otağı dəstləri</h1>
              <p>Siz dünyanın hər yerində ola bilərsiniz, ancaq sizin üçün tamamilə fərdi olan və tamamilə öz üslubunuzda olmaq istədiyiniz tək yer yataq otağınızdır. Yataq otaqları müxtəlif üslubda ola bilər və üslub da yataq otağınızı necə dizayn edəcəyinizi müəyyən edən yerin iqlim şəraitindən asılıdır.</p>
              <button>Davamı</button>
              <p>"Əsl vizual və fiziki rahatlıq hər otaq üçün vacibdir"</p>
              <h4>Mark Hampton</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bigswiper__sec">
         <div className="swipertext__sec extra__sec">
             <h3>Qonaq otağı dəstləri</h3>
              <p>Qonaq otağı aksessuarlarının seçilməsinin açarı onların hamısının bir-biri ilə uyğunlaşmasının lazım olduğunu başa düşməkdir. Onları tək-tək seçə bilməzsiniz.Onları kolleksiya kimi düşünün.</p>
              <button>Davamı</button>
              <p>"Ev Gesamtkunstwerk kimi olmalıdır. Hər şey bir-biri ilə uyğunlaşmalıdır və düşünülmüş olmalıdır”.</p>
              <h4>Alyssa Kapito</h4>
            </div>
            <div className="swiperimage__sec">
              <img src="./collection3.png" alt="" />
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bigswiper__sec">
            <div className="swiperimage__sec">
              <img src="./bc2.jpeg" alt="" />
            </div>
            <div className="swipertext__sec">
              <h1>Yumşaq dəstlər</h1>
              <p>Yumşaq dəst almaq, eviniz üçün edə biləcəyiniz ən vacib investisiyalardan biridir. Qonaq otağında bu, istirahət etmək, oxumaq, yemək, əylənmək, televizora baxmaq və hətta yatmaq üçün bir parçadır, buna görə də gələcək illər üçün davam edəcək birinə sərmayə qoymağımızın mənası var.</p>
              <button>Davamı</button>
              <p>"Divanınız istirahət məkanınızı müəyyən edəcək böyük bir parçadır"</p>
              <h4>Brittney Morgan</h4>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      </section>
      <section className="products">
        <div className="container"> 
        <h2>Məqalələr</h2> 
          <div className="products__list">
          {data.map((a)=>(
            <div className="product"  key={a.id}>
              <div className="product__image">
                <img
                  src={a.image}
                  alt=""
                />
                <div className='minicard__onimage'>
                  {a.category}
                </div>
              </div>
              <h1>{a.header.slice(0, 50)}...</h1>
              <div className='foot-notesec'>
                <p>15 mart 2023</p>
                <Link to={`/blog/${a.id}`}><i className="fa-solid fa-chevron-right"></i></Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Article;
