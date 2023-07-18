import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './bigCard.css'; // Import the CSS file for the component
import db from '../data.js';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


//{ name: "Dog", tag: "dog", substitle: "Labrador", url: "www.google.com", text: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem", image: "https://cdn.wallpapersafari.com/59/60/SBwHrV.jpg"},

const BigCard = (props) => {
    console.log('at big card');
    const { index } = props;
    console.log(index);
    const data = db.getByIndex(index);
    console.log(data);
    const { name, tag, url, featuredProducts, description } = data;


    const [redirect, setRedirect] = useState('');
    if (redirect) {
        return <Redirect to={redirect} />
    }
  return (
    <div className="big-card">
        <div className="firstSection">
            <a className="big-card-link" target='_blank' href={url}>
            {url}
            </a>
            <div className="big-card-content">
                <Flippy flipOnHover={true} flipDirection="horizontal" style={{ height: '300px', margin: '20px' }}>
                    <FrontSide style={{ backgroundColor: '#41669d', padding: '0px'}} >
                        <img src={featuredProducts[0].img}/>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#175852', padding: '0px'}}>
                        <div style={{
                                backgroundImage: `url(${featuredProducts[0].img})`,
                                backgroundSize: 'cover',
                            }} className='grayout'>
                            <h3
 
                            >{featuredProducts[0].name}</h3>
                            <p>{featuredProducts[0].description}</p>
                        </div>
                    </BackSide>
                </Flippy>
                <Flippy flipOnHover={true} flipDirection="horizontal" style={{ height: '350px', margin: '20px'  }}>
                    <FrontSide style={{ backgroundColor: '#41669d', padding: '0px'}} >
                        <img src={featuredProducts[0].img}/>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#fff', padding: '0px'}}>
                        <div style={{
                                // backgroundImage: `url(${featuredProducts[0].img})`,
                                // backgroundSize: 'cover',
                            }} className='grayout'>
                            <h3
 
                            >{featuredProducts[0].name}</h3>
                            <p>{featuredProducts[0].description}</p>
                        </div>
                    </BackSide>
                </Flippy>
                <Flippy flipOnHover={true} flipDirection="horizontal" style={{ height: '300px', margin: '20px'  }}>
                    <FrontSide style={{ backgroundColor: '#41669d', padding: '0px'}} >
                        <img src={featuredProducts[0].img}/>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#175852', padding: '0px'}}>
                        <div style={{
                                backgroundImage: `url(${featuredProducts[0].img})`,
                                backgroundSize: 'cover',
                            }} className='grayout'>
                            <h3
 
                            >{featuredProducts[0].name}</h3>
                            <p>{featuredProducts[0].description}</p>
                        </div>
                    </BackSide>
                </Flippy>
            </div>
        </div>
        <div className='bigBottom'>
            <div className='bigBtmText'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className='socialsBig'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9999 22.7251C33.0508 24.3229 32.8431 25.9185 32.3849 27.4501C31.507 30.1649 29.1965 32.1693 26.3849 32.6551C24.6076 32.9639 22.8021 33.0796 20.9999 33.0001C18.4049 33.0001 15.8249 33.0001 13.2449 33.0001C11.647 33.0521 10.0512 32.8444 8.51987 32.3851C5.80111 31.509 3.79138 29.1989 3.29987 26.3851C3.06141 25.0186 2.9609 23.6317 2.99987 22.2451C2.99987 19.2451 2.99987 16.2451 2.99987 13.2451C2.95355 11.6552 3.17151 10.0686 3.64487 8.5501C4.5139 5.82943 6.82875 3.82129 9.64487 3.3451C11.4141 3.05374 13.2079 2.93818 14.9999 3.0001C16.0049 3.0001 17.0099 3.0001 17.9999 3.0001C20.0399 3.0001 22.0949 3.0001 24.1349 3.0001C26.0373 3.01981 27.8929 3.59315 29.4749 4.6501C31.2561 5.91263 32.4346 7.85683 32.7299 10.0201C32.9504 11.6704 33.0407 13.3356 32.9999 15.0001C32.9999 17.5351 32.9999 20.1301 32.9999 22.7251ZM29.9999 10.3801C29.7209 8.19573 28.079 6.43308 25.9199 6.0001C24.5594 5.75318 23.177 5.64762 21.7949 5.6851C19.2749 5.6851 16.7399 5.6851 14.2049 5.6851C12.9231 5.67726 11.6431 5.78267 10.3799 6.0001C8.36416 6.25164 6.69648 7.68868 6.14987 9.6451C5.83013 10.9039 5.69372 12.2023 5.74487 13.5001C5.74487 15.5401 5.74487 17.5801 5.74487 19.6201C5.70217 21.4776 5.7723 23.3361 5.95487 25.1851C6.05845 27.5427 7.75272 29.5276 10.0649 30.0001C11.4349 30.2501 12.8281 30.3507 14.2199 30.3001C16.7399 30.3001 19.2399 30.3001 21.7199 30.3001C23.0212 30.3161 24.3214 30.2156 25.6049 30.0001C27.2734 29.7821 28.727 28.755 29.4899 27.2551C29.9407 26.2653 30.1808 25.1926 30.1949 24.1051C30.3149 22.0651 30.2999 20.0101 30.2849 17.9701C30.2849 16.7101 30.2849 15.4501 30.2849 14.1901C30.2787 12.915 30.1835 11.6419 29.9999 10.3801ZM17.9999 25.6951C14.8733 25.6949 12.0564 23.8065 10.8686 20.9144C9.68066 18.0223 10.357 14.6992 12.5807 12.5014C14.8044 10.3036 18.1353 9.66637 21.0133 10.8881C23.8912 12.1099 25.7464 14.9488 25.7099 18.0751C25.6769 22.3049 22.2298 25.7117 17.9999 25.6951ZM26.0099 11.8051C25.0109 11.7969 24.203 10.9891 24.1949 9.9901C24.2031 8.99356 25.0133 8.19006 26.0099 8.1901C26.4911 8.18159 26.9547 8.37108 27.2922 8.71423C27.6297 9.05739 27.8114 9.52408 27.7949 10.0051C27.7949 10.9934 26.9981 11.7969 26.0099 11.8051ZM17.9999 13.0051C15.2412 13.0051 13.0049 15.2414 13.0049 18.0001C13.0049 20.7588 15.2412 22.9951 17.9999 22.9951C20.7585 22.9951 22.9949 20.7588 22.9949 18.0001C22.9866 15.2449 20.7551 13.0133 17.9999 13.0051Z" fill="#111111"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3.00004C10.1619 2.98786 3.63583 9.01245 3.02265 16.8266C2.40947 24.6407 7.91591 31.6095 15.66 32.82V22.32H11.85V18H15.66V14.7C15.4902 13.1386 16.0245 11.5827 17.1175 10.4548C18.2106 9.32697 19.749 8.74429 21.315 8.86504C22.4404 8.87973 23.5632 8.97498 24.675 9.15004V12.84H22.785C22.1331 12.7561 21.4783 12.9715 21.0035 13.4259C20.5286 13.8803 20.2848 14.5251 20.34 15.18V18H24.51L23.835 22.335H20.34V32.835C28.131 31.6717 33.6947 24.6799 33.0788 16.8267C32.4629 8.97338 25.8771 2.93453 18 3.00004Z" fill="#111111"/>
                    </svg>
                </div>
                <p>{tag}</p>
            </div>
        </div>
    </div>
  );
};

export default BigCard;
