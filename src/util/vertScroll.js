/* 
  this is an implementation of Wes Bos click & drag scroll algorythm. In his video, he shows how to do the horizontal scroll. I have implemented the vertical scroll for those wondering how to make it as well.
  
  Wes Bos video:
    https://www.youtube.com/watch?v=C9EWifQ5xqA
*/

const addVertDragScroll = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  const hasPointerEvent = window.PointerEvent;

  const touchDevice =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i);

  let startY;
  //let startX;
  //let scrollLeft;
  let scrollTop;
  let isDown;

  let tCancel = (e) => {
    console.log("tCancel called!!!");
  };

  let tStart = (e) => {
    console.log(
      `tStart called!!! container.offsetTop: ${container.offsetTop}, container.scrollTop: ${container.scrollTop}`
    );
    var touch = e.touches[0] || e.changedTouches[0];
    isDown = true;
    startY = touch.pageY - container.offsetTop;
    //startX = e.pageX - container.offsetLeft;
    //scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
  };
  let tEnd = (e) => {
    console.log("tEnd called!!!");
    isDown = false;
  };
  let tMove = (e) => {
    console.log("tMove called!!!");
    if (isDown) {
      e.preventDefault();
      //Move vertcally
      var touch = e.touches[0] || e.changedTouches[0];
      const y = touch.pageY - container.offsetTop;
      const walkY = y - startY;
      container.scrollTop = scrollTop - walkY;

      //Move Horizontally
      /*
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        container.scrollLeft = scrollLeft - walkX;
        */
    }
  };
  let pDown = (e) => {
    console.log("pDown called!!!");
    isDown = true;
    startY = e.pageY - container.offsetTop;
    //startX = e.pageX - container.offsetLeft;
    //scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
  };
  let pUp = (e) => {
    console.log("pUp called!!!");
    isDown = false;
  };
  let pMove = (e) => {
    console.log("pMove called!!!");
    if (isDown) {
      e.preventDefault();
      //Move vertcally
      const y = e.pageY - container.offsetTop;
      const walkY = y - startY;
      container.scrollTop = scrollTop - walkY;

      //Move Horizontally
      /*
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        container.scrollLeft = scrollLeft - walkX;
        */
    }
  };

  if (touchDevice) {
    container.addEventListener("touchstart", tStart);
    container.addEventListener("touchend", tEnd);
    container.addEventListener("touchmove", tMove);
  } else {
    container.addEventListener("pointerdown", pDown);
    container.addEventListener("pointerup", pUp);
    container.addEventListener("pointermove", pMove);
  }

  /*
  container.addEventListener("pointerhover", (e) => pHover(e));
  container.addEventListener("pointerout", (e) => pOut(e));
  container.addEventListener("pointerleave", (e) => pLeave(e));
  container.addEventListener("pointercancel", (e) => pCancel(e));

  container.addEventListener("touchcancel", (e) => tCancel(e));
*/

  function removeVertDragScroll() {
    console.log("removeVertDragScroll called!!!");
    if (touchDevice) {
      container.removeEventListener("touchstart", tStart);
      container.removeEventListener("touchmove", tMove);
      container.removeEventListener("touchend", tEnd);
    } else {
      container.removeEventListener("pointerdown", pDown);
      container.removeEventListener("pointermove", pMove);
      container.removeEventListener("pointerup", pUp);
    }
  }

  return removeVertDragScroll;
};

export default addVertDragScroll;
