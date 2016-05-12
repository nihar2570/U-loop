/**
 * Created by Nihar on 5/10/2016.
 */
//create a button
// add innerHTML according to youtube
var button = document.createElement('BUTTON');
button.innerHTML =
    '<button \
        id="myBtn" \
        class="yt-uix-button yt-uix-button-text yt-uix-tooltip" \
        data-button-toggle="true" \
        data-tooltip-text="Keep playing this" \
        role="button"> \
            <span id = "buttonText" class="yt-uix-button-content">loop OFF </span> \
    </button>';
document.getElementById('watch8-secondary-actions').appendChild(button);



// write the function for it
document.getElementById("myBtn").addEventListener("click", loop);

// first click changes loop to true and alternates to false and true for next click(s).
var clickedMemory = false;
function loop() {
    clickedMemory = !clickedMemory;
    if (clickedMemory){
        document.getElementById("buttonText").innerHTML = "loop ON";
    }else{
        document.getElementById("buttonText").innerHTML = "loop OFF";
    }

    document.querySelector('video').loop = clickedMemory;
}
