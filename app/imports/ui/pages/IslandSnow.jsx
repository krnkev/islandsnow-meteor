import React from 'react';
import TopMenu from '../components/TopMenu';
import IslandSnowLogo from '../components/IslandSnowLogo';
import FooterMenu from '../components/FooterMenu';
import FullWidthImage from '../components/FullWidthImage';
import MiddleMenu from '../components/MiddleMenu';

export default class IslandSnow extends React.Component {

    render() {
        return (
            <div>
                <TopMenu/>
                <IslandSnowLogo/>
                <MiddleMenu/>
                <FullWidthImage/>
                <FooterMenu/>
            </div>
        );
    }
}
