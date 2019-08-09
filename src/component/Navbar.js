import React from 'react';

function Navbar(){
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="\Navbar"></a>
  <div><img src="/images/rick.png" alt=""></img>
  <div class="topnav">
  <form action="POST">
      <input type="text" placeholder="Episode or character or Location" name="Search By" />
      <div class="input-group-append"><button class="btn btn-light serach-btn" type="button">Search By </button></div>
    </form>
  </div><br />
   <div className="show" method="POST"> 
  <a href="#Location">Locations</a><br /><br />
  <a href="#Character">Characters</a><br /><br />
  <a href="#Episode">Episodes</a>
  </div>
  </div>
</nav>    
);
}
export default Navbar;