function preload(){
}

    function setup()
    {
        canvas = createCanvas(640, 480);
        canvas.position(300, 110);
        video = createCapture(VIDEO);
        video.hide();

        tint_color = "";
    }
    function draw()
{
    image(video, 100, 50, 400, 400);
    
    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(40, 40, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);
}
