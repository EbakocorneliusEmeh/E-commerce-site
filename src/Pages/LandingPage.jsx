// import React from "react";

// const LandingPage = () => {
//   return (
//     <div>
//       <h1>Welcome to the Landing Page</h1>
//       <div>
//         <select>
//           <option value="apple">Woman's Fashion</option>
//           <option value="banana">women</option>
//           <option value="orange">women</option>
//         </select>
//         <select>
//           <option value="apple">men's Fashion</option>
//           <option value="banana">men</option>
//           <option value="orange">men</option>
//         </select>
//         <select>
//           <option value="apple">Electronics</option>
//           <option value="banana"></option>
//           <option value="orange"></option>
//         </select>
//         <select>
//           <option value="apple">Home & Lifestyle</option>
//           <option value="banana">men</option>
//           <option value="orange">men</option>
//         </select>{" "}
//         <select>
//           <option value="apple">Medicine</option>
//           <option value="banana">men</option>
//           <option value="orange">men</option>
//         </select>{" "}
//         <select>
//           <option value="apple">Baby’s & Toys</option>
//           <option value="banana">men</option>
//           <option value="orange">men</option>
//         </select>{" "}
//         <select>
//           <option value="apple">Health & Beauty</option>
//           <option value="banana">men</option>
//           <option value="orange">men</option>
//         </select>
//       </div>
//       <div>
//         <div>
//           <img src="/public/imageismall.png" alt="" width="100px" />
//           <p>iphone 14 series</p>
//         </div>
//         <h2>Up to 10% off voucher</h2>
//         <button>shop Now</button>
//         <div>
//           <img src="/public/imageiphone.jpg" alt="" width="200px" />
//         </div>
//       </div>

//       <section>
//         <h2>Today’s Flash Sales</h2>

//         <div>
//           <p>Days: 03</p>
//           <p>Hours: 23</p>
//           <p>Minutes: 19</p>
//           <p>Seconds: 56</p>
//         </div>

//         <div>
//           {/* Product 1 */}
//           <div>
//             <p>-40%</p>
//             <img src="/public/malet.png" alt="" width="100" />
//             <h3>HAVIT HV-G92 Gamepad</h3>
//             <button>Add To Cart</button>
//             <p>
//               $120 <del>$160</del>
//             </p>
//             <p>(88)</p>
//           </div>

//           {/* Product 2 */}
//           <div>
//             <p>-35%</p>
//             <div>
//               <img src="/public/key.png" alt="" width="100" />
//             </div>
//             <h3>AK-900 Wired Keyboard</h3>
//             <button>Add To Cart</button>
//             <p>
//               $960 <del>$1160</del>
//             </p>
//             <p>(75)</p>
//           </div>

//           {/* Product 3 */}
//           <div>
//             <p>-30%</p>
//             <div>
//               <img src="/public/tv.png" alt="" width="100" />
//             </div>
//             <h3>IPS LCD Gaming Monitor</h3>
//             <button>Add To Cart</button>
//             <p>
//               $370 <del>$400</del>
//             </p>
//             <p>(99)</p>
//           </div>

//           {/* Product 4 */}
//           <div>
//             <p>-25%</p>
//             <div>
//               <img src="/public/sit.png" alt="" width="100" />
//             </div>
//             <h3>S-Series Comfort Chair</h3>
//             <button>Add To Cart</button>
//             <p>
//               $375 <del>$400</del>
//             </p>
//             <p>(99)</p>
//           </div>

//           {/* Product 5 */}
//           <div>
//             <p>-25%</p>
//             <div>
//               <img src="/public/sit.png" alt="" width="100" />
//             </div>
//             <h3>S-Series Comfort Chair</h3>
//             <button>Add To Cart</button>
//             <p>
//               $375 <del>$400</del>
//             </p>
//             <p>(99)</p>
//           </div>

//           {/* Product 6 */}
//           <div>
//             <p>-25%</p>
//             <div>
//               <img src="/public/tv.png" alt="" width="100" />
//             </div>
//             <h3>S-Series Comfort Chair</h3>
//             <button>Add To Cart</button>
//             <p>
//               $375 <del>$400</del>
//             </p>
//             <p>(99)</p>
//           </div>
//         </div>
//       </section>

//       <div>
//         <section className="categories-section">
//           <h2 className="categories-title">Categories</h2>
//           <p className="categories-subtitle">Browse By Category</p>
//           <div>
//             <img src="/public/download (1).png" alt="" />
//             <p>phone</p>
//           </div>
//           <div>
//             <img src="/public/computer.png" alt="" />
//             <p>computer</p>
//           </div>
//           <div>
//             <img src="/public/watch.png" alt="" />
//             <p>Smarthwatch</p>
//           </div>
//           <div>
//             <img src="/public/camera.png" alt="" />
//             <p>Camera</p>
//           </div>
//           <div>
//             <img src="/public/headphone.png" alt="" />
//             <p>Headphone</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//           </div>
//         </section>
//       </div>
//       <div>
//         <section className="best-selling-section">
//       <div className="">
//         <h2>This Month</h2>
//         <h3>Best Selling Products</h3>
//         <button className="view-all">View All</button>
//       </div>
//       <div>
//       <div>
//         <img src="/public/redcoat.png" alt="" width="130" />
//         <h2> The North coat</h2>
//         <p>$375 <del>$400</del></p>
//         <p>(99)</p>
//       </div>
//             <div>
//         <img src="/public/guccibag.png" alt="" width="150" />
//         <h2>Gucci duffle bag</h2>
//         <p>$375 <del>$400</del></p>
//         <p>(99)</p>
//       </div>
//             <div>
//         <img src="/public/cpu coler.png" alt="" width="150" />
//         <h2>RCB Liquid CPU cOOLER</h2>
//         <p>$375 <del>$400</del></p>
//         <p>(99)</p>
//       </div>
//         <div>
//         <img src="/public/wood.png" alt="" width="150" />
//         <h2>Small  Bookself</h2>
//         <p>$375 <del>$400</del></p>
//         <p>(99)</p>
//       </div>

//       </div>
//     </section>
//       </div>

//           <section className="categories-music-section">
//       <h2 className="section-title">Categories</h2>
//       <p className="section-subtitle">Enhance Your Music Experience</p>

//       <div className="countdown">
//         <div className="time-box">
//           <p className="time-number">23</p>
//           <p className="time-label">Hours</p>
//         </div>
//         <div className="time-box">
//           <p className="time-number">05</p>
//           <p className="time-label">Days</p>
//         </div>
//         <div className="time-box">
//           <p className="time-number">59</p>
//           <p className="time-label">Minutes</p>
//         </div>
//         <div className="time-box">
//           <p className="time-number">35</p>
//           <p className="time-label">Seconds</p>
//         </div>
//       </div>

//       <button className="buy-now-button">Buy Now!</button>
//     </section>

//     <div>
//         <section className="our-products-section">
//       <h2 className="products-title">Our Products</h2>
//       <p className="products-subtitle">Explore Our Products</p>

//       <div>
//         <div>

//         </div>
//       </div>
//      </section>
//     </div>

//     </div>
//   );
// };

// export default LandingPage;
