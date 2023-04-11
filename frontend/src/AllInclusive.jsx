import './allInclusive.css';
import '../src/Components/CountrySelector';
import CountrySelector from '../src/Components/CountrySelector';

function AllInclusive() {
  
  return  (
    <div className="jss0">
      <header>
        <div className="jss1 jss2" >
          <div className='jss19'>
            <div  className='jss21'>
              <a>
                <img src="../src/assets/images/food-delivery.png" alt="delivery_name"></img>
              </a>
            </div>
            <div className="jss17">
              <div className='jss941 jss942'>
                <div className='jss944'>
                  <p>
                    <span>Delivery</span>
                    <span> - </span>
                    <span> ASAP </span>
                  </p>
                  <div className='jss947'>
                    <div className='jss948'>
                      <p>2118-3779 SexSmith Rd Ruan zhe yuan da jibabababababababa</p>
                    </div>
                    <div className='jss949'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div className='jss16' >
            <div className='searchBar'>
              <div className='searchBarInside'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
                <input autoComplete='off' id='header-search' type='text' placeholder='Search Cusines, Restaurants, or Items' className='searchInput'></input>
                </div>
            </div>
            <div className='searchFilter'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
              </svg>
              <span>Sort</span>
            </div>
          </div>
          <div className='jss23'>
            <button type='button'>
              <span>
                <div className='c5122'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
              </span>
            </button>
            <div className='jss4195'>
              <button type='button'>
                <span>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className='jss20'>Log In</div>
                </span>
              </button>
              <a href="/register">
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow'>
                  <span>Sign Up</span>
                </button>
              </a>
            </div>
          </div>
        </div>

      </header>
      <main>
        <div className='kswwJX'>
          <div className='kswwJXD'>
            <div className='jss974'>
              <div className='c51363'>
                <div className='kswwJAQ'>
                  <div className='kswwJAA'>
                    <div className='kswwJER'>
                      <a>
                        <div className="flowSponsor"></div>
                      </a>
                    </div>
                    <div className='kswwJER'>
                      <a>
                        <div className="flowSponsor"></div>
                      </a>
                    </div>
                    <div className='kswwJER'>
                      <a>
                        <div className="flowSponsor"></div>
                      </a>
                    </div>
                    <div className='kswwJER'>
                      <a>
                        <div className="flowSponsor"></div>
                      </a>
                    </div>
                  </div>
                </div>
                  <button className='jss1604 jss1605'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 jss1611">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button className='jss1606 jss1604'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 jss1612">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div className='kswwQW'> 
          <div className='kswwQE'>
            <ul>
              <li>
                <a>
                  <div className='kswwIB kss9011'></div>
                  <p>Express Lane</p>
                </a>
              </li>
              <li>
                <a>
                  <div className='kswwIB kss9012'></div>
                  <p>Express Lane</p>
                </a>
              </li>
              <li>
                <a>
                  <div className='kswwIB kss9013'></div>
                  <p>Express Lane</p>
                </a>
              </li>
              <li>
                <a>
                  <div className='kswwIB kss9014'></div>
                  <p>Express Lane</p>
                </a>
              </li>
              <li>
                <a>
                  <div className='kswwIB kss9015'></div>
                  <p>Express Lane</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='kswwtt'>
          <div className='main3001'>Cuisines</div>
          <button>
            <div className='main3002'>View All</div>
          </button>
        </div>
        <div  className='ksww'> 
          <div className='ksww4001'> 
            <button className='ksww4000left ksww4000'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <ul>
              <li>
                <div className='ksww4011'></div>
                <p>Sandwiches & Subs</p>
              </li>
              <li>
                <div className='ksww4012'></div>
                <p>Burgers & Chips</p>
              </li>
              <li>
                <div className='ksww4013'></div>
                <p>Chinese</p>
              </li>
              <li>
                <div className='ksww4014'></div>
                <p>Coffee & Tea</p>
              </li>
              <li>
                <div className='ksww4015'></div>
                <p>Desserts</p>
              </li>
              <li>
                <div className='ksww4016'></div>
                <p>Pizza</p>
              </li>
            </ul>
            <button className='ksww4000right ksww4000'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className='kswwtt'>
          <div className='ksww3101'>
            <div className='main3001'>Local Goods</div>
            <button>
              <div className='main3002'>View All</div>
            </button>
          </div>
          <div className='ksww3102'>
            <h6>Independant places you will love near you</h6>
          </div>
          <div className='ksww3103'>
            <ul>
              <li>
                <a>
                  <div className='ksww31031'>
                    <div className='ksww310311'>
                      <div className='ksww310311q'>
                      <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                      </div>
                      <img src='./src/assets/images/restaurant-bbq_chicken_richmond.jpg' alt='restaurant-name'></img>
                    </div>
                    <div className='ksww31032'>
                      <div className='ksww310321'>bbq Chicken Richmond Alexandra</div>
                      <div className='ksww310322'>
                        <div>
                          <div className='ksww310322-1'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          33 mins • $2.49 Delivery Fee</div>
                        </div>
                        <div className='ksww310322-1'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>

                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className='ksww31031'>
                    <div className='ksww310311'>
                      <div className='ksww310311q'>
                      <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                      </div>
                      <img src='./src/assets/images/restaurant-lu_charcoal_grill.jpg' alt='restaurant-name'></img>
                    </div>
                    <div className='ksww31032'>
                      <div className='ksww310321'>Lu Charcoal Grill</div>
                      <div className='ksww310322'>
                        <div>
                          <div className='ksww310322-1'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            31 mins • $2.59 Delivery Fee</div>
                          </div>
                        <div className='ksww310322-1'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.6 Delivery Fee Over $20
                        </div>

                      </div>
                    </div>

                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className='ksww31031'>
                    <div className='ksww310311'>
                      <div className='ksww310311q'>
                      <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                      </div>
                      <img src='./src/assets/images/restaurant-rib_&_chicken.jpg' alt='restaurant-name'></img>
                    </div>
                    <div className='ksww31032'>
                      <div className='ksww310321'>Rib & Chicken</div>
                      <div className='ksww310322'>
                        <div>
                          <div className='ksww310322-1'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            33 mins • $2.49 Delivery Fee</div>
                          </div>
                        <div className='ksww310322-1'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>

                      </div>
                    </div>

                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className='ksww31031'>
                    <div className='ksww310311'>
                      <div className='ksww310311q'>
                      <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                      </div>
                      <img src='./src/assets/images/restaurant-shameless_bun.jpg' alt='restaurant-name'></img>
                    </div>
                    <div className='ksww31032'>
                      <div className='ksww310321'>Shameless Buns</div>
                      <div className='ksww310322'>
                        <div>
                          <div className='ksww310322-1'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            33 mins • $2.49 Delivery Fee</div>
                          </div>
                        <div className='ksww310322-1'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>

                      </div>
                    </div>

                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className='ksww31031'>
                    <div className='ksww310311'>
                      <div className='ksww310311q'>
                      <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                      </div>
                      <img src='./src/assets/images/restaurant-meetrice_noodle.jpg' alt='restaurant-name'></img>
                    </div>
                    <div className='ksww31032'>
                      <div className='ksww310321'>Meetrice Noodle</div>
                      <div className='ksww310322'>
                        <div>
                          <div className='ksww310322-1'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            33 mins • $2.49 Delivery Fee</div>
                          </div>
                        <div className='ksww310322-1'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>

                      </div>
                    </div>

                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className='ksww31031'>
                    <div className='ksww310311'>
                      <div className='ksww310311q'>
                      <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                      </div>
                      <img src='./src/assets/images/restaurant-pokeaye.jpg' alt='restaurant-name'></img>
                    </div>
                    <div className='ksww31032'>
                      <div className='ksww310321'>Pokeaye</div>
                      <div className='ksww310322'>
                        <div>
                          <div className='ksww310322-1'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            33 mins • $2.49 Delivery Fee</div>
                          </div>
                        <div className='ksww310322-1'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>

                      </div>
                    </div>

                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className='ksww31031'>
                    <div className='ksww310311'>
                      <div className='ksww310311q'>
                      <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                      </div>
                      <img src='./src/assets/images/restaurant-freshslice.jpg' alt='restaurant-name'></img>
                    </div>
                    <div className='ksww31032'>
                      <div className='ksww310321'>Freshslice</div>
                      <div className='ksww310322'>
                        <div>
                          <div className='ksww310322-1'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            33 mins • $2.49 Delivery Fee</div>
                          </div>
                        <div className='ksww310322-1'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>

                      </div>
                    </div>

                  </div>
                </a>
              </li>
            </ul>
            <button className='ksww3103l ksww4000'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className='ksww3103r ksww4000'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className='ksww'>
          <div className='ksww1'>Restaurants Near You</div>
          <div className='ksww2'>
            <ul>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className='ksww21 boxb'>
                  <a>
                    <div className='ksww211'>
                      <div className='kswv2111'>
                        <img src='./src/assets/images/restaurant-afuri.jpg' alt='restaurant-pic'></img>
                      </div>
                      <div className='kswv2112'>
                        <div className='kswv21121 boxb'>
                          <img src='./src/assets/images/logo-bbq_chicken_richmond.jpg' alt='logo-name'></img>
                        </div>
                        <div className='kswv21122'>Afuri Ramen  + Dumpling</div>
                      </div>
                      <div className='kswv2113'></div>
                      <div className='kswv2114'>
                        <div className='kswv21141 kswv21140'>
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          33 mins • $2.49 Delivery Fee
                        </div>
                        <div className='kswv21142 kswv21140'>
                          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
                          </svg>
                          9.1 Delivery Fee Over $20
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <div className='foot01'>
          <div className='foot0001'>
            <div className='foot0011'>
              <div className='foot0111'>
                <ul>
                  <li>
                    <a>About US</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                  <li>
                    <a>Gift Cards</a>
                  </li>
                  <li>
                    <a>Rewards</a>
                  </li>
                  <li>
                    <a>Skip Express Lane</a>
                  </li>
                  <li>
                    <a>Browse by City</a>
                  </li>
                  <li>
                    <a>Partners</a>
                  </li>
                  <li>
                    <a>Browse A Courier</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Media & Community</a>
                  </li>
                  <li>
                    <a>Partner Success Guide</a>
                  </li>                
                  <li>
                    <a>Food Wiki</a>
                  </li>
                </ul>
              </div>
              <div className='foot0112'>
                <div className='foot1111'>
                  <button>
                    <span>Invite Friends, Get $5</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6.5 h-5">
                      <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className='foot1112'>
                  <div className='foot2112'>
                    <div className='foot3111'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                    <div className='foot3111'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </div>
                    <div className='foot3111'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div className='foot3111'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='foot0021'>
              <ul>
                <li>
                  <a>Terms Of Services</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Skip Social Code</a>
                </li>
                <li>
                  <a>Accessibility Policy</a>
                </li>
                <li>
                  <a>Account Security</a>
                </li>
                <li>
                  <a>Coronavirus Updates</a>
                </li>
                <li>
                  <a>Rewards Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='foot32'>
            <div className='foot302'>
              <div className='foot3221'>
                <CountrySelector />
              </div>
              <div className='foot3223'>
                Copyright © 2023 YumYum!
              </div>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default AllInclusive;
