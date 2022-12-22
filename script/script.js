// кнопка старт
let start = document.querySelector(".but--start");
let rock = document.querySelector(".rocket");
let chet = document.querySelector(".chetchik");
let count = 0;
let counter = document.querySelector(".chetchik");

start.addEventListener("click", () => {
  start.classList.add("noVisible");
  let samolet = document.querySelector(".samolet");
  samolet.classList.remove("noVisible");
  rock.classList.remove("noVisible");
  chet.classList.remove("noVisible");
  dvigParig();
  flyClawa();
});
//

// движение самолета
let dvigParig = () => {
  var samolet = document.querySelector(".samolet");
  let y = 600;
  let x = 480;

  let dvigPin = samolet.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };
    onPulMov();
    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };
      if (samolet.offsetTop - shift.y < 300) {
        samolet.style.top = 300 + "px";
      }
      if (samolet.offsetTop - shift.y > 500) {
        samolet.style.top = 500 + "px";
      }
      samolet.style.top = samolet.offsetTop - shift.y + "px";

      if (samolet.offsetLeft - shift.x < 400) {
        samolet.style.left = 400 + "px";
      }
      if (samolet.offsetLeft - shift.x > 815) {
        samolet.style.left = 815 + "px";
      }

      samolet.style.left = samolet.offsetLeft - shift.x + "px";
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
  //

  //
  let speed = () => {
    setInterval(poletRaketi, 10);
  };

  // Ракеты

  let xRock = 600;
  let rand;
  let setRand = () => {
    rand = Math.floor(450 + Math.random() * (800 + 1 - 450));
    return rand;
  };
  setRand();

  window.yRocks = -50;
  let poletRaketi = () => {
    rock.style.top = yRocks + 1 + "px";
    rock.style.left = rand + "px";

    if (yRocks > 480) {
      yRocks = -50;
      setRand();
      count = count + 1;
      setCounter();

      return yRocks, count;
    }

    yRocks = yRocks + 1;
    return yRocks, count;
  };
  speed();
  //

  // счетчик

  let setCounter = () => {
    counter.innerText = "Cчёт:" + count;
  };
};
//

// облака
let cloud = document.querySelector(".cloud");
let cloud2 = document.querySelector(".cloud2");
let cloud3 = document.querySelector(".cloud3");
let xCloud1 = 600;
let yCloud1 = 50;
let xCloud2 = 450;
let yCloud2 = 250;
let xCloud3 = 700;
let yCloud3 = 150;

let random;
let setRandom = () => {
  random = Math.floor(450 + Math.random() * (800 + 1 - 450));
  return random;
};
setRandom();

let poletOblaka = () => {
  cloud.style.top = yCloud1 + 1 + "px";
  if (yCloud1 > 480) {
    yCloud1 = 0;
    setRandom();
    xCloud1 = random;
    cloud.style.left = xCloud1 + "px";
    return yCloud1;
  }

  yCloud1 = yCloud1 + 1;
  return yCloud1;
};

setInterval(poletOblaka, 150);

let poletOblaka2 = () => {
  cloud2.style.top = yCloud2 + 1 + "px";
  if (yCloud2 > 480) {
    yCloud2 = 0;
    setRandom();
    xCloud2 = random;
    cloud2.style.left = xCloud2 + "px";
    return yCloud2;
  }

  yCloud2 = yCloud2 + 1;
  return yCloud2;
};

setInterval(poletOblaka2, 150);

let poletOblaka3 = () => {
  cloud3.style.top = yCloud3 + 1 + "px";
  if (yCloud3 > 480) {
    yCloud3 = 0;
    setRandom();
    xCloud3 = random;
    cloud3.style.left = xCloud3 + "px";
    return yCloud3;
  }

  yCloud3 = yCloud3 + 1;
  return yCloud3;
};

setInterval(poletOblaka3, 150);

//Движение самолета с клавиатуры
let flyClawa = () => {
  const left = 37,
    right = 39,
    top = 38,
    down = 40;
  let app = document.querySelector(".case");
  let samfly = document.querySelector(".samolet");

  window.addEventListener("keydown", (e) => {
    let bl = samfly.getBoundingClientRect();

    if (e.keyCode == left) {
      if (bl.left > 400) {
        samfly.style.left = bl.left - 4 + "px";
      }
    } else if (e.keyCode == right) {
      if (bl.left < 820) {
        samfly.style.left = bl.left + 4 + "px";
      }
    } else if (e.keyCode == top) {
      e.preventDefault;
      if (bl.top > 300) {
        samfly.style.top = bl.top + -4 + "px";
      }
    } else if (e.keyCode == down) {
      e.preventDefault;
      if (bl.top < 500) {
        samfly.style.top = bl.top + 4 + "px";
      }
    } else if (e.keyCode == 32) {
      e.preventDefault;
      onPulMov();
    }
  });
};
// взрыв самолета
let samolet = document.querySelector(".samolet");
samolet.addEventListener("dblclick", () => {
  samolet.src = "./img/vzriv.gif";
});

let vzrivRocketa = () => {
  let xRock = rock.style.top;
  let xRockF = Number(xRock.slice(0, 3));
  let xSamolet = samolet.style.top;
  let xSamoletF = Number(xSamolet.slice(0, 3));

  let yRock = rock.style.left;
  let yRockF = Number(yRock.slice(0, 3));
  let ySamolet = samolet.style.left;
  let ySamoletF = Number(ySamolet.slice(0, 3));

  if (
    yRockF + 25 >= ySamoletF &&
    yRockF - 25 <= ySamoletF &&
    xRockF === xSamoletF - 29
  ) {
    samolet.src = "./img/vzriv.gif";
    setTimeout(finish, 1500);
  }
};

setInterval(vzrivRocketa, 0);

// конец игры
let finish = () => {
  finishWindow = document.querySelector(".finish");
  finishSchet = document.querySelector("#chet__finish");
  finishButton = document.querySelector(".finish__button ");
  finishWindow.classList.remove("noVisible");
  samolet.classList.add("noVisible");
  rock.classList.add("noVisible");
  chet.classList.add("noVisible");
  finishSchet.innerText = count;

  // кнопка начать игру
  finishButton.addEventListener("click", () => {
    finishWindow.classList.add("noVisible");
    count = 0;
    rock.classList.remove("noVisible");
    chet.classList.remove("noVisible");
    samolet.classList.remove("noVisible");
    samolet.src = "./img/plane.png";

    return count;
  });
};
///

// пуля
let onPulMov = () => {
  let pul1 = document.querySelector(".bullet");

  let pul2 = document.querySelector(".bullet2");

  let xSamolet = samolet.style.top;
  let xSamoletF = Number(xSamolet.slice(0, 3));
  let ySamolet = samolet.style.left;
  let ySamoletF = Number(ySamolet.slice(0, 3));

  pul1.style.top = xSamoletF + 3 + "px";
  pul1.style.left = ySamoletF + 5 + "px";
  pul2.style.top = xSamoletF + 3 + "px";
  pul2.style.left = ySamoletF + 38 + "px";

  let coordPuli = xSamoletF + 3;
  let coordPuli2 = xSamoletF + 3;

  let pulka1 = pul1.cloneNode();
  let destination = document.querySelector(".samolet__puli");
  destination.appendChild(pulka1);
  let pulka2 = pul2.cloneNode();
  let destination2 = document.querySelector(".samolet__puli");
  destination2.appendChild(pulka2);

  let poletPuli = () => {
    if (coordPuli > -10) {
      pulka1.classList.remove("noVisible");
      pulka2.classList.remove("noVisible");
      coordPuli = coordPuli - 1;
      pulka1.style.top = coordPuli + "px";
      coordPuli2 = coordPuli - 1;
      pulka2.style.top = coordPuli + "px";

      //функция взрыва при попадании в ракету

      let vzrivPuli = () => {
        let xRock = rock.style.top;
        let xRockF = Number(xRock.slice(0, 3));
        let xPulka1 = pulka1.style.top;
        let xPulka1F = Number(xPulka1.slice(0, 3));

        let yRock = rock.style.left;
        let yRockF = Number(yRock.slice(0, 3));
        let yPulka1 = pulka1.style.left;
        let yPulka1F = Number(yPulka1.slice(0, 3));

        if (yPulka1F + 30 >= yRockF && xRockF + 50 === xPulka1F) {
          let vozvratRacketi = () => {
            rock.src = "./img/rocket.png";
            yRocks = -50;
          };
          rock.src = "./img/vzriv.gif";
          setTimeout(vozvratRacketi, 1000);

          return yRock;
        }
      };

      setInterval(vzrivPuli, 10);
      //
      return coordPuli, coordPuli2;
    }
    if (coordPuli === -10) {
      pulka1.classList.add("noVisible");
      pulka2.classList.add("noVisible");
      // coordPuli = xSamoletF + 3;
      // coordPuli2 = xSamoletF + 3;
    }
  };
  setInterval(poletPuli, 50);
};
