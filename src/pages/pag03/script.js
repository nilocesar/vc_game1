events.on("ready", function () {
  

  effectCanvas();

  //Chama na ultima imagem
  $(".step5").on("animationend", () => {
    // do something
    setTimeout(() => {
      navigate.next();
    }, 1000 * 2);
  });
});

const effectCanvas = () => {
  var ctx,
    w,
    h,
    cx,
    cy,
    PI,
    PI_HALF,
    cos,
    sin,
    random,
    lineWidth,
    C,
    rings,
    ringsLength,
    data;

  ctx = document.createElement("canvas").getContext("2d");
  w = 600;
  h = 600;
  cx = w / 2;
  cy = h / 2;
  rings = [];
  ringsLength = 0;

  PI = Math.PI;
  PI_HALF = PI / 2;
  cos = Math.cos;
  sin = Math.sin;
  random = Math.random;

  lineWidth = 0.2;
  C = ["#ABF8FF", "#ffffff", "#ffffff", "#4F3762", "#ffffff", "#ffffff"];

  data = [
    /* ring {t:total_particles, r:radius, d:distance, s:speed, c:color} */
    [
      { t: 80, r: cx - 10, d: 40, s: 30, c: C[1] },
      { t: 60, r: cx - 20, d: 40, s: 80, c: C[2] },
      { t: 20, r: cx - 30, d: 20, s: 80, c: C[2] },
    ],
    [
      { t: 80, r: cx - 80, d: 40, s: 40, c: C[4] },
      { t: 80, r: cx - 90, d: 20, s: 40, c: C[4] },
      { t: 20, r: cx - 100, d: 20, s: 40, c: C[2] },
      { t: 40, r: cx - 110, d: 20, s: 40, c: C[2] },
    ],
    [
      { t: 60, r: cx - 160, d: 40, s: 20, c: C[2] },
      { t: 20, r: cx - 170, d: 30, s: 60, c: C[2] },
      { t: 40, r: cx - 180, d: 40, s: 60, c: C[2] },
    ],
    [
      { t: 40, r: cx - 230, d: 40, s: 20, c: C[5] },
      { t: 20, r: cx - 240, d: 20, s: 10, c: C[5] },
    ],
    [{ t: 10, r: cx - 290, d: 10, s: 10, c: C[4] }],
  ];

  /* */
  ctx.canvas.width = w;
  ctx.canvas.height = h;
  document.body.appendChild(ctx.canvas);

  data.forEach(function (group) {
    var ring = [];

    group.forEach(function (orbit, i) {
      var total_particles, index;

      total_particles = orbit.t;
      index = 0;

      for (; index < total_particles; index++) {
        var radius, distance, speed, color, opacity;

        radius = orbit.r;
        distance = orbit.d;
        speed = random() / orbit.s;
        speed = i % 2 ? speed : speed * -1;
        color = orbit.c;
        opacity = orbit.o;

        ring.push(new P(radius, distance, speed, color, opacity));

        radius = distance = speed = color = opacity = null;
      }
    });

    rings.push(ring);
  });

  ringsLength = rings.length;

  /* */
  function P(radius, distance, speed, color) {
    this.a = PI / 180;
    this.d = distance;
    this.d2 = this.d * this.d;
    this.x = cx + radius * cos(this.a);
    this.y = cy + radius * sin(this.a);
    this.c = color;
    this.r = random() * 8;
    this.R = random() > 0.5 ? radius : radius - 5;
    this.s = speed;
    this.pos = random() * 360;
  }

  function draw() {
    var i, j, k, xd, yd, d, ring, ringLength, ringLength2, particle, p2;

    ctx.beginPath();
    ctx.globalCompositeOperation = "source-in";
    ctx.rect(0, 0, w, h);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();

    for (i = 0; i < ringsLength; i++) {
      ring = rings[i];
      ringLength = ring.length;
      ringLength2 = ringLength - 100;

      for (j = 0; j < ringLength; j++) {
        particle = ring[j];

        particle.x = cx + particle.R * sin(PI_HALF + particle.pos);
        particle.y = cy + particle.R * cos(PI_HALF + particle.pos);
        particle.pos += particle.s;

        ctx.beginPath();
        ctx.globalAlpha = 0.12;
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = particle.c;
        ctx.arc(particle.x, particle.y, particle.r, PI * 2, false);
        ctx.fill();
        ctx.closePath();

        for (k = 0; k < ringLength2; k++) {
          p2 = ring[k];

          yd = p2.y - particle.y;
          xd = p2.x - particle.x;
          d = xd * xd + yd * yd;

          if (d < particle.d2) {
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p2.c;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }

  function loop() {
    draw();
    requestAnimationFrame(loop);
  }

  loop();
};
