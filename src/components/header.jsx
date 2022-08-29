import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import BodyContent from './BodyContent';

export const Header = ({ articles }) => {

  
  return (

    <div className='row' >

      <div className='col-12'>

        <OwlCarousel nav loop {...options} className="owl-carousel-category owl-theme">

          {articles.map((article, i) => (
            article.urlToImage &&
            <BodyContent

              className="item"
              boxClass='osahan-category-item'
              title={article.title}
              image={article.urlToImage}
              imageClass='img-fluid'
              imageAlt={article.title}
              description={article.description}
            />
          ))}

        </OwlCarousel>
      </div>
    </div>

  )
}

const options = {
  responsive: {
    400:{
     items: 1,
    },
    700: {
      items: 2,
    },
    1100: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
  loop: true,
  lazyLoad: true,
  autoplay: true,
  dots: false,
  autoplaySpeed: 800,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}
