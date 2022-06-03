import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import {Logo} from '../images/Netflix';
import {ConnectButton , ChainSelector , Icon, TabList , Tab } from 'web3uikit';

import { NFTs } from '../helpers/library';

const Home = () => {

return(
  <>
  <div className="logo">
    <Logo />
  </div>
  <div className="connect">
  </div>
  <div className="connect">
    <Icon fill  ='#ffffff' svg="bell" />
    <ConnectButton />
  </div>
  <div className='topBanner'>
    <TabList defaultActiveKey={1} tabStyle='bulbUniion'>
    <Tab
        tabKey={1}
        tabName="My NFTs"
      >
        <div>
          Your NFTs
        </div>
        <div className='scene'>
          <img src="https://asset.akumudragonz.io/unrevealed/akumu_unrevealed.gif"  alt="loading..." className="sceneImg"></img>
        </div>
      </Tab>
      <Tab
        isDisabled
        tabKey={2}
        tabName="Collections"
      >
        <div>
          This is Card 2
        </div>
      </Tab>
      <Tab
        isDisabled
        tabKey={3}
        tabName="Swaps"
      >
        <div>
          This is Card 3
        </div>
      </Tab>
    </TabList>
  </div>
  <div className="container">
  {/* <NFTBalance
  address="0x951Eb8643E48A3B6d6d6AA7706B643AEE9B42f52"
  chain="eth"
/> */}
     <Link to="/player" className="link">Player Page</Link>
  </div>
  </>
)
}

export default Home;
