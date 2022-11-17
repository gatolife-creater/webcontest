import React, { useState } from "react";
import Sketch from "react-p5";
import P5 from "p5";

export const Particles = () => {
    const [canvas, setCanvas] = useState<P5.Element>();
    const [particles, setParticles] = useState<any[]>([]);
    // this class describes the properties of a single particle.
    class Particle {
        p5: P5;
        x: number;
        y: number;
        size: number;
        xSpeed: number;
        ySpeed: number;
        constructor(p5: P5) {
            this.p5 = p5;
            this.x = p5.random(0, p5.width);
            this.y = p5.random(0, p5.height);
            this.size = p5.random(10, 20);
            this.xSpeed = p5.random(-2, 2);
            this.ySpeed = p5.random(-1, 1.5);
        }

        // creation of a particle.
        createParticle() {
            this.p5.noStroke();
            this.p5.fill(0, 0, 0, 200);
            this.p5.rect(this.x, this.y, this.size, this.size);
        }

        // setting the particle in motion.
        moveParticle() {
            if (this.x < 0 || this.x > this.p5.width) {
                this.xSpeed *= -1;
            }
            if (this.y < 0 || this.y > this.p5.height) {
                this.ySpeed *= -1;
            }
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }

        joinParticles(particles: any[]) {
            particles.forEach(element => {
                let dis = this.p5.dist(this.x, this.y, element.x, element.y);
                if (dis < 100) {
                    const col = this.p5.map(dis, 0, 85, 255, 0);
                    this.p5.stroke(col, col, col, 125);
                    this.p5.line(this.x + this.size / 2, this.y + this.size / 2, element.x + element.size / 2, element.y + element.size / 2);
                }
            });
        }
    }

    const setup = (p5: P5, canvasParentRef: Element) => {
        setCanvas(p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef));
    };

    const draw = (p5: P5) => {
        if (p5.frameCount < 20 && p5.frameCount < 70) {
            setParticles([...particles, new Particle(p5)]);
        }
        p5.background(250, 204, 0);
        for (let i = 0; i < particles.length; i++) {
            particles[i].createParticle();
            particles[i].joinParticles(particles.slice(i));
            particles[i].moveParticle();
        }
    };

    const windowResized = (p5: P5) => {
        // @ts-ignore
        setCanvas(p5.resizeCanvas(p5.windowWidth, p5.windowHeight));
    }

    return (
        <>
            <Sketch
                className="particles -z-50 absolute top-0 left-0"
                // @ts-ignore
                setup={setup}
                // @ts-ignore
                draw={draw}
                // @ts-ignore
                windowResized={windowResized}
            />
        </>
    );
};
