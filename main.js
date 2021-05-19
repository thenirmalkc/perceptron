const width = 640;
const height = 480;

let perceptron = new Perceptron(2);
let data_size = 200;
let data = [];

// Html elements
let lr_html;


function f(x) {
    return 0.2 * x - 0.1;
}


function setup() {
    const canvas = createCanvas(width, height);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2)

    // Initializing Data
    InitData();

    // Loading Html elements
    lr_html = document.querySelector("#lr");
    lr_html.innerHTML += " " + perceptron.lr * 100 + "%";
}


function draw() {
    background(color(40));

    drawFunc();
    perceptron.display();
    DisplayData();

    // Training Perceptron
    TrainData();
}


function drawFunc() {
    let p1 = new Point();
    let p2 = new Point();

    p1.x = -1;
    p1.y = f(p1.x);
    p2.x = 1;
    p2.y = f(p2.x);

    strokeWeight(1);
    stroke(color(0));
    line(p1.getX(), p1.getY(), p2.getX(), p2.getY());
}


function InitData() {
    for (let i = 0; i < data_size; i++) {
        let pt = new Point(Math.random() * 2 - 1, Math.random() * 2 - 1);
        let y = f(pt.x);

        if (pt.y >= y)
            pt.label = 1;
        else
            pt.label = -1;

        pt.guess = perceptron.guess([ pt.x, pt.y ]);

        data.push(pt);
    }
}


function DisplayData() {
    for (let i = 0; i < data_size; i++)
        data[i].display();
}


function TrainData() {
    for (let i = 0; i < data_size; i++)
        perceptron.train(data[i]);
}