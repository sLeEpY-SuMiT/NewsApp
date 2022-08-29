import react from 'react';


export const Navigation = (props) => {
  return (
    <nav className='navbar navbar-default '>
      <div style={{ borderBottom: '1px dotted',paddingRight:'1rem' }} className='col-12 d-flex justify-content-between align-items-center py-1'>
        <div  style={{ backgroundColor: '#dc3545', color: 'white', }}>
          <button className='btn btn-bg-danger text-light' > Trending</button>
        </div>
        <div style={{ display: 'inline-block' }}>
          <p className='m-0'>Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now </p>
        </div>
        <div style={{ display: 'inline-block' }}>
          <span className='px-2' ><i class="fa fa-angle-left" aria-hidden="true"></i></span>
          <span className='px-2' ><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </div>
        <div style={{ display: 'inline-block' }}>
          <p className='m-0'>Thursday, March 26, 2020   </p>
        </div>
        <div style={{ display: 'inline-block', fontSize: '17px' }}>
          <i class="fa fa-facebook" aria-hidden="true"></i><span>&nbsp;&nbsp;</span>
          <i class="fa fa-twitter" aria-hidden="true"></i><span>&nbsp;&nbsp;</span>
          <i class="fa fa-youtube-play" aria-hidden="true"></i><span>&nbsp;&nbsp;</span>
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>

      </div>

      <div className='row mx-auto'>
        <div className='col-4 p-2'>
          <img style={{ width: '100%', height: 'auto' }} src="../img/newsprk.png" alt="" />
        </div>

        <div className='col-8 p-2'>
          <img className='mx-auto' style={{ width: '100%', height: 'auto' }} src="../img/ad-1.png" alt="" />
        </div>
      </div>

      <div className='col-12 d-flex'>
        <ul className='col-7 d-flex'>
          <li>
            <div className="dropdown">
              <button className="dropbtn" >Home
                {/* <i className="fa fa-caret-down"></i> */}
              </button>
              <div className="dropdown-content">
                <a href="#">Home 1</a>
                <a href="#">Home 2</a>
                <a href="#">Home 3</a>

              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn" >Pages
                {/* <i className="fa fa-caret-down"></i> */}
              </button>
              <div className="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">Archive</a>
                <a href="#">Contact</a>
                <a href="#">404</a>

              </div>
            </div>
          </li>
          <li>

            <div className="dropdown">
              <button className="dropbtn" >Posts
                {/* <i className="fa fa-caret-down"></i> */}
              </button>
              <div className="dropdown-content">
                <a href="#">General Posts</a>
                <a href="#">Video Posts</a>
                <a href="#">Audio Posts</a>

              </div>
            </div>


          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn" >Categories
                {/* <i className="fa fa-caret-down"></i> */}
              </button>
              <div className="dropdown-content">
                <a href="#">Bussiness</a>
                <a href="#">Entertainment</a>
                <a href="#">Features</a>
                <a href="#">Sports</a>
                <a href="#">Trending</a>
                <a href="#">Technology</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn" >World
                {/* <i className="fa fa-caret-down"></i> */}
              </button>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn" >Sports
                {/* <i className="fa fa-caret-down"></i> */}
              </button>
            </div>
          </li>

          <li>
            <div className="dropdown">
              <button className="dropbtn" >Contact
                {/* <i className="fa fa-caret-down"></i> */}
              </button>
            </div>
          </li>

        </ul>
        <div className='col-5'>

          <div style={{ textAlign: 'center', display: 'inline-block' }}>
            <a href="#"><i class="fa fa-search" style={{ fontSize: '20px', padding: '14px' }}></i></a>
            <a href="#"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
          </div>
          <span style={{ borderLeft: '1px solid grey', padding: '6px' }}>&nbsp;&nbsp;</span>

          <span>
            <select style={{ border: '0px solid white', fontSize: '18px' }}>
              <option data-display="English">English</option>
              <option value="1">Bangla</option>
              <option value="2">Hindi</option>
              <option value="3">option</option>
              <option value="4">Potato</option>
            </select>
          </span>

          <span style={{ borderRight: '1px solid grey', padding: '6px' }}>&nbsp;</span>
          <span >&nbsp;&nbsp;<img src="https://quomodosoft.com/html/newsprk/assets/images/temperature-icon.svg" alt="" />&nbsp;&nbsp;&nbsp;</span>
          <div style={{ display: 'inline-block' }}><h3 >13 <sup>0<sub>C</sub></sup></h3></div>
          <span style={{ fontSize: '18px' }}>&nbsp;&nbsp;San Francisco</span>






        </div>
      </div>
    </nav>
  )
}
