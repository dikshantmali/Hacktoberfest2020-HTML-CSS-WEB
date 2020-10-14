// init controller
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.8, // show, when scrolled 10% into view
    duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
    .setClassToggle("#reveal1", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.8, // show, when scrolled 10% into view
    duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
    .setClassToggle("#reveal2", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.8, // show, when scrolled 10% into view
    duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
    .setClassToggle("#reveal3", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger4",
    triggerHook: 0.8, // show, when scrolled 10% into view
    duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
    .setClassToggle("#reveal4", "visible") // add class to reveal
    .addTo(controller);

var pinAnimation = new TimelineMax()
    .fromTo("section.panel.pin", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "500%"
})
    .setPin("#pinContainer")
    .setTween(pinAnimation)
    .addTo(controller);


// define movement of panels
var wipeAnimation = new TimelineMax()
    // animate to second panel
    .to("#slideContainer", 0.5, { z: -150 })		// move back in 3D space
    .to("#slideContainer", 1, { x: "-25%" })	// move in to first panel
    .to("#slideContainer", 0.5, { z: 0 })			// move back to origin in 3D space
    // animate to third panel
    .to("#slideContainer", 0.5, { z: -150, delay: 1 })
    .to("#slideContainer", 1, { x: "-50%" })
    .to("#slideContainer", 0.5, { z: 0 })
    // animate to forth panel
    .to("#slideContainer", 0.5, { z: -150, delay: 1 })
    .to("#slideContainer", 1, { x: "-75%" })
    .to("#slideContainer", 0.5, { z: 0 });

// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: "#pinContainer1",
    triggerHook: "onLeave",
    duration: "500%"
})
    .setPin("#pinContainer1")
    .setTween(wipeAnimation)
    .addTo(controller);