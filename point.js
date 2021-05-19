class Point {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.label;
        this.guess;
    }

    getX() {
        return map(this.x, -1, 1, 0, width);
    }

    getY() {
        return map(this.y, 1, -1, 0, height);
    }

    display() {
        noStroke();

        if (this.label == 1)
            fill(color(255));
        else
            fill(color(0));

        circle(this.getX(), this.getY(), 20);

        if (this.label == this.guess)
            fill(color(0, 255, 0));
        else
            fill(color(255, 0, 0));

        circle(this.getX(), this.getY(), 12);
    }

}