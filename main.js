function setup() {
    canvas = createCanvas(750, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 45, 650, 450);

    fill(255, 104, 190);
    stroke(255, 104, 190);
    rect(10, 1, 740, 50, 20, );

    fill(255, 104, 190);
    stroke(255, 104, 190);
    rect(1, 495, 740, 50, 20, );

    fill(255, 104, 190);
    stroke(255, 104, 190);
    rect(4, 1, 50, 540, 20, );

    fill(255, 104, 190);
    stroke(255, 104, 190);
    rect(694, 1, 50, 540, 20, );

    fill(255, 188, 0);
    stroke(255, 188, 0);
    circle(1,1,200)

    fill(255, 188, 0);
    stroke(255, 188, 0);
    circle(1,550,200)

    fill(255, 188, 0);
    stroke(255, 188, 0);
    circle(750,550,200)

    fill(255, 188, 0);
    stroke(255, 188, 0);
    circle(750,1,200)

}

function take_snapshot() {
    save("MyImage.png");
}