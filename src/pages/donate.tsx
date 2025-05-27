import React, { CSSProperties } from 'react';
import Background from "@/components/Background"
import house from "public/img/house.jpg"
import DonationBar from '@/components/DonationBar';

const Donate: React.FC = () => {
  const openExternalLink = () => {
    // Replace 'https://example.com' with the external link you want to open.
    window.open('https://paypal.me/levi2441', '_blank');
  };

  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={house} alt="House">
      <div className="aboutImageText"> DONATE </div>
      </Background>
      
      <div className="mainContent">
        <div className="header">
          <div className="header-text">
            <h1>Help Us Preserve the Heart of Our Brotherhood</h1>
            <p>
              Pi Delta Psi is proud to be the oldest MGFC fraternity house at Cornell University, 
              a home we&rsquo;ve cherished since 2003. For over two decades, 
              this house has stood as more than just four walls and a roof — it&rsquo;s
              been the foundation of our brotherhood. It&rsquo;s where hundreds of
              brothers have laughed, grown, struggled, and celebrated together. 
              This house has a lot of historical signifiance to our chapter and is a place  
              that we hold very close to our hearts.
            </p>
            <p>
              Today, our house is in <strong>urgent</strong> need of repair. From structural fixes to basic renovations, 
              we face some challenges that has become difficult to overcome alone. This house is 
              the heart of our chapter&rsquo;s culture, a space where young men come to 
              find purpose, support, and lifelong family.</p>
            <h2>
              We&rsquo;re not just trying to fix a building — we&rsquo;re trying to preserve a legacy
            </h2>
          </div>
        </div>

        <div className="hSection">
          <div className="leftColumn">
            {/* Manually adjust 'current' to current donation amount */}
            <DonationBar current={4782} goal={50000}
              checkpoints={[
                {
                  amount: 10000,
                  aboutText: 'something about helping bros with financial aid',
                },
                {
                  amount: 25000,
                  aboutText: 'something about painting new walls in the house',
                }
              ]}
            />
          </div>
          <div className="rightColumn-donate">
            <div className = "container">
              <h1> Interested in Donating?</h1>
              <p> What your money will go towards:</p>
              <ul>
                <li> Restoring our chapter house</li>
                <li> Help brothers on financial aid pay for National dues </li>
                <li> Allow us to host events for other Northeast chapters</li>
              </ul>
              <button className = "button" onClick={openExternalLink}>
                Donate
              </button>
              <p> If you want your money to go towards something specific,
                feel free to reach out to us directly via 
                <a href="mailto:president.kappa@pideltapsi.com" style={{ color: '#800000', textDecoration: 'underline', marginLeft: '0.25rem' }}>
                  president.kappa@pideltapsi.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ADD A LEADERBOARD SECTION HERE */}
              
      </div>

    </div>
  );
};

export default Donate;
