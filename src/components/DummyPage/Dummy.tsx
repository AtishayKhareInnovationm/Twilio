import React from 'react';

export default function Dummy() {

    // Here we would like the height of the main container to be the height of the viewport.
    // On some mobile browsers, 'height: 100vh' sets the height equal to that of the screen,
    // not the viewport. This looks bad when the mobile browsers location bar is open.
    // We will dynamically set the height with 'window.innerHeight', which means that this
    // will look good on mobile browsers even after the location bar opens or closes.

    return (
        <div>
            <h1>
                This is the dummy page
            </h1>
        </div>
    );
}
