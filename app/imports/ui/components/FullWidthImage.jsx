import React from 'react';
import {  Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
    render() {
        return (
            <Image
                src='https://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png'
                fluid />
        )
    }
}