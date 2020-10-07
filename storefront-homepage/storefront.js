let scroll_position = 0;
let scroll_direction;
let count = 1;
let index = 0;
let opacityValue = 0;
let radius = 0;
let width = 100;
let margintop = 0;

window.onload = function () {
    document.getElementsByTagName('body')[0].onscroll = () => {
        //let top = window.document.documentElement.scrollTop;
        let clientRect = (document.body.getBoundingClientRect());
        let wbanner = document.getElementsByClassName("w-banner")[0];
        let rlabel = document.getElementsByClassName("cat-label")[0];
        let pBlock = document.getElementsByClassName("p-block");
        let length = pBlock.length;
        scroll_direction = clientRect.top > scroll_position ? 0 : 1;
        scroll_position = clientRect.top;
        // Reset at top
        for (let i = 0; i < length; i++) {
            if (clientRect.top === 0) {
                if (i == 0) {
                    pBlock[i].setAttribute("style", "opacity:1");
                } else {
                    pBlock[i].setAttribute("style", "opacity:0");
                }
            }
            
        }

        // Find the active block
        for (let i = 0; i < length; i++) {
            opacityValue = parseFloat(pBlock[i].getAttribute('style').split(":")[1]);
            if (opacityValue != 0) {
                index = i;
                break;
            }
        }

        // up scroll
        if (scroll_direction === 0) {
            if (opacityValue == 1 && index != 0) {
                pBlock[index].setAttribute("style", "opacity:0");
                index = index - 1;
                opacityValue = 0;
            }
            opacityValue = opacityValue + 0.01;
            if (opacityValue > 1) opacityValue = 1;
            pBlock[index].setAttribute("style", "opacity:" + opacityValue);

            radius = radius - 1;
            margintop = margintop - 1;
            width = width + 1;
            if (radius < 0) radius = 0;
            if (margintop < 0) margintop = 0;
            if (width > 100) width = 100;
            wbanner.setAttribute("style", "border-radius:" + radius + "%;" + "width:" + width + "%");
            rlabel.setAttribute("style", "margin-top:-" + margintop + "vh");
        }
        else { // down scroll
            if (opacityValue == 0 && pBlock[index + 1] != null) {
                index = index + 1;
                opacityValue = 1;
            }
            opacityValue = opacityValue - 0.015;
            if (opacityValue < 0) opacityValue = 0;
            pBlock[index].setAttribute("style", "opacity:" + opacityValue);
            if ((wbanner.getBoundingClientRect()).top < 500) {
                radius = radius + 1;
                margintop = margintop + 1;
                width = width - 1;
                if (radius > 50) radius = 50;
                if (width < 50) width = 50;
                if (margintop > 10) margintop = 10;
                wbanner.setAttribute("style", "border-radius:" + radius + "%;" + "width:" + width + "%");
                rlabel.setAttribute("style", "margin-top:-" + margintop + "vh");
            }

        }

    }
}