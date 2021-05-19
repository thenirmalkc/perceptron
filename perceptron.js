class Perceptron {

    constructor(size) {
        this.size = size;
        this.weights = [];
        this.lr = 0.0001;

        this.init();
    }

    init() {
        for (let i = 0; i <= this.size; i++)
            this.weights.push(Math.random() * 2 - 1);
    }

    guess(inputs) {
        inputs.push(1);
        let sum = 0;
        let guess;

        for (let i = 0; i <= this.size; i++)
            sum += inputs[i] * this.weights[i];

        if (sum >= 0)
            guess = 1;
        else
            guess = -1;

        return guess;
    }

    // Todo: Generalize this function
    train(data) {
        data.guess = this.guess([ data.x, data.y ]);

        let error = data.label - data.guess;

        let del_w0 = error * data.x * this.lr;
        let del_w1 = error * data.y * this.lr;
        let del_w2 = error          * this.lr;

        this.weights[0] += del_w0;
        this.weights[1] += del_w1;
        this.weights[2] += del_w2;
    }

    display() {
        let p1 = new Point();
        let p2 = new Point();

        p1.x = -1;
        p1.y = -(this.weights[0] * p1.x + this.weights[2]) / this.weights[1];
        p2.x = 1;
        p2.y = -(this.weights[0] * p2.x + this.weights[2]) / this.weights[1];

        strokeWeight(1);
        stroke(color(255));
        line(p1.getX(), p1.getY(), p2.getX(), p2.getY());
    }

}