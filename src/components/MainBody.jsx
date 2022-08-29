import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel3';
const urls = ['https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500'];

const options = {
  responsive: {
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
    1200: {
      items: 6,
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

const options2 = {
  responsive: {

    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
  loop: true,
  lazyLoad: true,
  autoplay: true,
  dots: false,
  autoplaySpeed: 800,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: false,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}
const options3 = {
  responsive: {

    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
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

const MainBody = ({ articles }) => {
  const [curIdx, setCurrentIdx] = useState(0);
  const articles2 = articles.reverse();

  return (
    <div className="row">

      <div className='col-12 mx-auto'>
        <div className='col-12 col-md-8'>
          <OwlCarousel  {...options2} >
            {articles.map((article, i) => (
              <img key={i} style={{ height: '60vh' }} src={article.urlToImage} />
            ))}
          </OwlCarousel>

          <div className='col'>
            <OwlCarousel {...options} className="owl-carousel-category owl-theme">
              {articles.map((article, i) => (
                <img key={i} src={article.urlToImage} style={{ width: '12rem', height: '12rem', objectFit: 'cover' }} />
              ))}
            </OwlCarousel>
          </div>
        </div>
        <div className='col-12 col-md-4'>
          <div className='col-12 mx-auto'>
            <div className="nav nav-pills mb-3 d-flex justify-content-between">
              <ul className="m-0 nav nav-fill nav-justified nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', padding: '.7rem 2rem' }} className="active nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"> TRENDY </button>
                </li>
                <li className="nav-item" role="presentation"> <button style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', padding: '.7rem 2rem' }} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">  LATEST </button>
                </li>

                <li className="nav-item" role="presentation"> <button style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', padding: '.7rem 2rem' }} className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false"> POPULAR </button> </li>

              </ul>
              <div className="border-grey bg-white p-3 tab-content col-12"> <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div style={{ maxHeight: '75vh', overflow: 'scroll', }} className='row scroll-none'>
                  {articles.map((article, i) => (
                    <ArticleCard url={article.urlToImage} date={article.publishedAt} category={article.author ? article.author : "Category"} title={article.title} />
                  ))}
                </div>

              </div>

                <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <div style={{ maxHeight: '70vh', overflow: 'scroll', }} className='row scroll-none'>
                  {articles.map((article, i) => (
                    <ArticleCard url={article.urlToImage} date={article.publishedAt} category={article.author ? article.author : "Category"} title={article.title} />
                  ))}
                </div>
                </div>
                <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> <div style={{ maxHeight: '70vh', overflow: 'scroll', }} className='row scroll-none'>
                  {articles.map((article, i) => (
                    <ArticleCard url={article.urlToImage} date={article.publishedAt} category={article.author ? article.author : "Category"} title={article.title} />
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div className='col-12 mx-auto'>
        <strong style={{ fontSize: '3rem', color: '#000' }} > Feature News</strong>
        <div style={{ color: '#000' }} className='col-12 mx-auto'>
          <OwlCarousel {...options3} className="owl-carousel-category owl-theme">
            {articles2.map((article, i) => (
              <FeatureNewsCard url={article.urlToImage} date={article.publishedAt} category={article.author ? article.author : "Category"} title={article.title} description={article.description} />
            ))}
          </OwlCarousel>
        </div>
      </div>


    </div>

  )
}

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

const ArticleCard = ({ url, category, date, title }) => {
  const d = new Date(date)
  console.log(new Date(date));
  const dateToDisplay = months[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear();
  return (
    <div className='row d-flex border-bottom mt-2 py-4'>
      <div className='col-4'>

        <img src={url} style={{ width: '10rem', height: 'auto' }} />
      </div>
      <div className='col-8'>

        <div className='row d-flex'>
          <div className='col' style={{ color: '#0000FF', }} >{category} </div>
          <div className='col'> {dateToDisplay}</div>
        </div>
        <p style={{ maxLines: '3' }}>{title}</p>
      </div>
    </div>
  )
}
const FeatureNewsCard = ({ url, category, date, title, description }) => {
  const d = new Date(date)
  console.log({ url, category, date, title });
  const dateToDisplay = months[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear();
  return (
    <div className="container-o">
      <img className='feature-news-img' src={url} alt="Snow" style={{ height: '32rem', width: '26rem', objectFit: 'cover' }} />
      <div className='col-8 bottom-left-o'>

        <div className='row d-flex'>
          <div className='col' style={{ color: '#FFFFFF', }} >{category} / {dateToDisplay}</div>
        </div>
        <div>
          {description ? description.slice(0, 30) : ""}
        </div>

      </div>
    </div>
  )
}

export default MainBody