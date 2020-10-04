<template>
    <div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
    let xPoint;
    let yPoint;
    export default {
        data() {
            return {
                canvas: null,
                ctx: null,
                w: 1000,
                h: 1000,
                particles: [],
                probability: 0.04,
            }
        },
        beforeMount() {
            window.addEventListener("resize", this.resizeCanvas, false);
            window.addEventListener("DOMContentLoaded", this.onLoad, false);
            window.requestAnimationFrame = 
            window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function (callback) {
                window.setTimeout(callback, 1000/60);
            };
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.resizeCanvas, false);
            window.removeEventListener("DOMContentLoaded", this.onLoad, false);
        },
        methods: {
            onLoad() {
                this.canvas = document.getElementById("canvas");
                this.ctx = canvas.getContext("2d");
                this.resizeCanvas();
                
                window.requestAnimationFrame(this.updateWorld);
            },
            resizeCanvas() {
                if (!!this.canvas) {
                    this.w = canvas.width = window.innerWidth;
                    this.h = canvas.height = window.innerHeight;
                }
            },
            updateWorld() {
                this.update();
                this.paint();
                window.requestAnimationFrame(this.updateWorld);
            },
            update() {
                if (this.particles.length < 500 && Math.random() < this.probability) {
                    this.createFirework();
                }
                var alive = [];
                for (var i=0; i<this.particles.length; i++) {
                    if (this.particles[i].move()) {
                        alive.push(this.particles[i]);
                    }
                }
                this.particles = alive;
            },
            paint() {
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.fillStyle = "rgba(0,0,0,0.2)";
                this.ctx.fillRect(0, 0, this.w, this.h);
                this.ctx.globalCompositeOperation = 'lighter';
                for (var i=0; i<this.particles.length; i++) {
                    this.particles[i].draw(this.ctx);
                }
            },
            createFirework() {
                xPoint = Math.random()*(this.w-200)+100;
                yPoint = Math.random()*(this.h-200)+100;
                var nFire = Math.random()*50+100;
                var c = "rgb("+(~~(Math.random()*200+55))+","
                        +(~~(Math.random()*200+55))+","+(~~(Math.random()*200+55))+")";
                for (var i=0; i<nFire; i++) {
                    var particle = new Particle();
                    particle.color = c;
                    var vy = Math.sqrt(25-particle.vx*particle.vx);
                    if (Math.abs(particle.vy) > vy) {
                        particle.vy = particle.vy>0 ? vy: -vy;
                    }
                    this.particles.push(particle);
                }
            },
        }
    }
    function Particle() {
        this.w = this.h = Math.random()*4+1;
        
        this.x = xPoint-this.w/2;
        this.y = yPoint-this.h/2;
        
        this.vx = (Math.random()-0.5)*10;
        this.vy = (Math.random()-0.5)*10;
        
        this.alpha = Math.random()*.5+.5;
        
        this.color;
    } 

    Particle.prototype = {
        gravity: 0.05,
        move: function () {
            this.x += this.vx;
            this.vy += this.gravity;
            this.y += this.vy;
            this.alpha -= 0.01;
            // console.log('screen.width', screen.width)
            if (this.x <= -this.w || this.x >= screen.width ||
                this.y >= screen.height ||
                this.alpha <= 0) {
                    return false;
            }
            return true;
        },
        draw: function (c) {
            c.save();
            c.beginPath();
            
            c.translate(this.x+this.w/2, this.y+this.h/2);
            c.arc(0, 0, this.w, 0, Math.PI*2);
            c.fillStyle = this.color;
            c.globalAlpha = this.alpha;
            
            c.closePath();
            c.fill();
            c.restore();
        }
    }
</script>

<style lang="scss" scoped>
    body {
        background: rgb(0 0 0 / 0%);
        overflow: hidden;
        margin: 0%;
    }
    canvas {
        position: absolute;
    }
</style>