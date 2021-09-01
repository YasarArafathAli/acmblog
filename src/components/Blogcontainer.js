import React from 'react';
import Postpreview from "./Postpreview";

const Blogcontainer = () => {
    return (
        <div>
        <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            
            <Postpreview 
            heading = "Man must explore, and this is exploration at its greatest"
            subtitle="Problems look mighty small from 150 miles up" 
            author = "Yasar Arafath" 
            date = "September 24, 2019" 

            />

            <Postpreview 
            heading = "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
            subtitle="" 
            author = "Yasar Arafath" 
            date = "September 24, 2019"     
            />
            
            <Postpreview 
            heading = "Science has not yet mastered prophecy"
            subtitle="We predict too much for the next year and yet far too little for the next ten." 
            author = "Yasar Arafath" 
            date = "September 24, 2019" />
            
            <Postpreview heading = "Failure is not an option" subtitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations." author = "Yasar Arafath" date = "September 24, 2019" />
            
            </div>
        </div>
      </div>
      </div>
    );
}



export default Blogcontainer;
