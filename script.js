function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();


// canvas ka code





function p1() {
  

const canvas = document.querySelector("#page1>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0000.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0001.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0002.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0003.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0004.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0005.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0006.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0007.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0008.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0009.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0010.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0011.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0012.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0013.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0014.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0015.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0016.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0017.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0018.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0019.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0020.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0021.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0022.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0023.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0024.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0025.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0026.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0027.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0028.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0029.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0030.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0031.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0032.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0033.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0034.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0035.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0036.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0037.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0038.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0039.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0040.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0041.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0042.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0043.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0044.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0045.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0046.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0047.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0048.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0049.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0050.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0051.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0052.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0053.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0054.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0055.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0056.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0057.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0058.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0059.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0060.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0061.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0062.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0063.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0064.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0065.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0066.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0067.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0068.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0069.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0070.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0071.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0072.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0073.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0074.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0075.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0076.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0077.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0078.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0079.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0080.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0081.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0082.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0083.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0084.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0085.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0086.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0087.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0088.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0089.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0090.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0091.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0092.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0093.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0094.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0095.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0096.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0097.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0098.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0099.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0100.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0101.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0102.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0103.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0104.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0105.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0106.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0107.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0108.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0109.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0110.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0111.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0112.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0113.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0114.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0115.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0116.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0117.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0118.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0119.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0120.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0121.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0122.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0123.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0124.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0125.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0126.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0127.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0128.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0129.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0130.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0131.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0132.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0133.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0134.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0135.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0136.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0137.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0138.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0139.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0140.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0141.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0142.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0143.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0144.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0145.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0146.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0147.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0148.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0149.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0150.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0151.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0152.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0153.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0154.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0155.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0156.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0157.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0158.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0159.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0160.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0161.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0162.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0163.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0164.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0165.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0166.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0167.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0168.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0169.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0170.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0171.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0172.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0173.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0174.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0175.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0176.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0177.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0178.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0179.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0180.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0181.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0182.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0183.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0184.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0185.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0186.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0187.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0188.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0189.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0190.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0191.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0192.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0193.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0194.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0195.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0196.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0197.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0198.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0199.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0200.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0201.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0202.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0203.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0204.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0205.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0206.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0207.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0208.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0209.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0210.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0211.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0212.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0213.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0214.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0215.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0216.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0217.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0218.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0219.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0220.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0221.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0222.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0223.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0224.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0225.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0226.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0227.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0228.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0229.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0230.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0231.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0232.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0233.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0234.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0235.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0236.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0237.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0238.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0239.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0240.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0241.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0242.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0243.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0244.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0245.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0246.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0247.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0248.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0249.png?auto=compress,format&w=960&q=30
https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0250.png?auto=compress,format&w=960&q=30
 `;
  return data.split("\n")[index];
}

const frameCount = 250;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#hh1`,
    //   set start end according to preference
    start: `top center`,
    end: `2000% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page1",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});



}
p1();















// page11 canvas



function can() {
  

  const canvas = document.querySelector("#page11>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
   
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0001.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0002.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0003.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0004.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0005.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0006.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0007.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0008.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0009.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0010.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0011.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0012.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0013.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0014.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0015.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0016.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0017.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0018.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0019.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0020.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0021.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0022.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0023.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0024.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0025.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0026.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0027.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0028.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0029.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0030.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0031.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0032.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0033.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0034.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0035.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0036.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0037.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0038.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0039.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0040.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0041.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0042.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0043.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0044.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0045.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0046.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0047.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0048.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0049.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0050.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0051.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0052.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0053.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0054.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0055.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0056.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0057.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0058.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0059.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0060.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0061.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0062.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0063.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0064.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0065.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0066.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0067.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0068.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0069.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0070.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0071.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0072.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0073.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0074.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0075.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0076.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0077.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0078.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0079.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0080.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0081.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0082.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0083.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0084.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0085.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0086.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0087.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0088.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0089.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0090.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0091.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0092.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0093.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0094.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0095.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0096.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0097.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0098.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0099.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0100.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0101.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0102.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0103.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0104.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0105.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0106.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0107.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0108.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0109.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0110.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0111.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0112.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0113.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0114.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0115.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0116.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0117.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0118.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0119.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0120.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0121.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0122.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0123.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0124.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0125.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0126.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0127.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0128.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0129.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0130.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0131.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0132.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0133.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0134.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0135.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0136.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0137.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0138.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0139.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0140.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0141.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0142.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0143.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0144.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0145.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0146.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0147.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0148.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0149.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0150.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0151.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0152.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0153.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0154.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0155.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0156.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0157.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0158.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0159.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0160.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0161.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0162.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0163.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0164.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0165.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0166.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0167.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0168.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0169.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0170.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0171.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0172.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0173.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0174.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0175.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0176.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0177.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0178.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0179.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0180.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0181.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0182.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0183.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0184.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0185.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0186.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0187.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0188.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0189.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0190.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0191.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0192.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0193.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0194.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0195.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0196.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0197.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0198.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0199.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0200.png?auto=compress,format&w=800&q=20
    
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 200;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page1`,
      //   set start end according to preference
      start: `top top`,
      end: `1000% end`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page11",
    // pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% center`,
  });
  
  }
  can();
  




















// second page canvas









function csn() {
  

  const canvas = document.querySelector("#page2>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0000.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0001.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0002.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0003.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0004.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0005.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0006.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0007.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0008.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0009.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0010.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0011.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0012.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0013.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0014.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0015.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0016.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0017.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0018.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0019.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0020.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0021.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0022.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0023.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0024.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0025.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0026.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0027.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0028.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0029.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0030.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0031.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0032.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0033.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0034.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0035.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0036.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0037.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0038.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0039.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0040.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0041.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0042.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0043.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0044.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0045.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0046.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0047.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0048.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0049.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0050.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0051.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0052.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0053.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0054.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0055.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0056.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0057.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0058.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0059.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0060.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0061.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0062.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0063.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0064.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0065.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0066.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0067.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0068.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0069.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0070.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0071.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0072.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0073.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0074.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0075.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0076.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0077.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0078.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0079.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0080.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0081.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0082.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0083.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0084.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0085.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0086.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0087.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0088.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0089.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0090.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0091.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0092.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0093.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0094.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0095.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0096.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0097.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0098.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0099.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0100.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0101.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0102.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0103.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0104.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0105.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0106.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0107.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0108.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0109.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0110.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0111.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0112.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0113.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0114.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0115.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0116.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0117.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0118.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0119.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0120.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0121.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0122.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0123.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0124.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0125.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0126.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0127.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0128.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0129.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0130.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0131.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0132.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0133.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0134.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0135.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0136.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0137.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0138.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0139.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0140.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0141.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0142.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0143.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0144.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0145.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0146.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0147.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0148.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0149.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0150.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0151.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0152.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0153.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0154.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0155.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0156.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0157.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0158.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0159.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0160.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0161.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0162.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0163.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0164.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0165.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0166.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0167.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0168.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0169.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0170.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0171.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0172.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0173.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0174.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0175.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0176.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0177.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0178.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0179.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0180.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0181.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0182.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0183.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0184.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0185.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0186.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0187.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0188.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0189.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0190.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0191.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0192.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0193.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0194.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0195.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0196.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0197.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0198.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0199.png?auto=compress,format&w=800&q=20
    https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0200.png?auto=compress,format&w=800&q=20
    
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 200;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page2`,
      //   set start end according to preference
      start: `top center`,
      end: `1000% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page2",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  
  }
  csn();
  
  

  







  






function caan() {
  

  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
   
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0001.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0002.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0003.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0004.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0005.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0006.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0007.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0008.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0009.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0010.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0011.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0012.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0013.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0014.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0015.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0016.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0017.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0018.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0019.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0020.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0021.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0022.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0023.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0024.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0025.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0026.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0027.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0028.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0029.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0030.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0031.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0032.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0033.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0034.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0035.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0036.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0037.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0038.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0039.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0040.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0041.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0042.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0043.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0044.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0045.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0046.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0047.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0048.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0049.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0050.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0051.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0052.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0053.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0054.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0055.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0056.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0057.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0058.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0059.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0060.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0061.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0062.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0063.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0064.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0065.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0066.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0067.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0068.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0069.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0070.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0071.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0072.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0073.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0074.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0075.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0076.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0077.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0078.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0079.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0080.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0081.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0082.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0083.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0084.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0085.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0086.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0087.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0088.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0089.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0090.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0091.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0092.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0093.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0094.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0095.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0096.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0097.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0098.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0099.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0100.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0101.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0102.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0103.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0104.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0105.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0106.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0107.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0108.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0109.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0110.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0111.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0112.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0113.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0114.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0115.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0116.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0117.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0118.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0119.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0120.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0121.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0122.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0123.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0124.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0125.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0126.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0127.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0128.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0129.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0130.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0131.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0132.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0133.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0134.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0135.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0136.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0137.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0138.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0139.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0140.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0141.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0142.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0143.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0144.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0145.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0146.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0147.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0148.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0149.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0150.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0151.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0152.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0153.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0154.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0155.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0156.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0157.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0158.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0159.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0160.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0161.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0162.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0163.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0164.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0165.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0166.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0167.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0168.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0169.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0170.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0171.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0172.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0173.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0174.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0175.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0176.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0177.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0178.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0179.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0180.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0181.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0182.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0183.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0184.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0185.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0186.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0187.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0188.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0189.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0190.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0191.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0192.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0193.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0194.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0195.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0196.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0197.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0198.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0199.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0200.png?auto=compress,format&w=800&q=20
    
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 200;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page2`,
      //   set start end according to preference
      start: `top top`,
      end: `1000% center`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page3",
    // pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  
  }
  caan();
  


















function caann() {
  

  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
   
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0001.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0002.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0003.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0004.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0005.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0006.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0007.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0008.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0009.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0010.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0011.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0012.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0013.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0014.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0015.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0016.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0017.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0018.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0019.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0020.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0021.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0022.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0023.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0024.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0025.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0026.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0027.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0028.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0029.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0030.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0031.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0032.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0033.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0034.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0035.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0036.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0037.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0038.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0039.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0040.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0041.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0042.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0043.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0044.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0045.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0046.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0047.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0048.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0049.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0050.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0051.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0052.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0053.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0054.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0055.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0056.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0057.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0058.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0059.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0060.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0061.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0062.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0063.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0064.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0065.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0066.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0067.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0068.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0069.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0070.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0071.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0072.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0073.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0074.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0075.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0076.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0077.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0078.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0079.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0080.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0081.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0082.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0083.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0084.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0085.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0086.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0087.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0088.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0089.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0090.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0091.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0092.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0093.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0094.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0095.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0096.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0097.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0098.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0099.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0100.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0101.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0102.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0103.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0104.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0105.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0106.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0107.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0108.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0109.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0110.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0111.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0112.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0113.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0114.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0115.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0116.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0117.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0118.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0119.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0120.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0121.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0122.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0123.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0124.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0125.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0126.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0127.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0128.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0129.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0130.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0131.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0132.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0133.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0134.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0135.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0136.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0137.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0138.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0139.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0140.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0141.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0142.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0143.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0144.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0145.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0146.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0147.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0148.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0149.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0150.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0151.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0152.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0153.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0154.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0155.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0156.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0157.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0158.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0159.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0160.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0161.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0162.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0163.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0164.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0165.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0166.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0167.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0168.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0169.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0170.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0171.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0172.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0173.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0174.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0175.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0176.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0177.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0178.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0179.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0180.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0181.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0182.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0183.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0184.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0185.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0186.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0187.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0188.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0189.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0190.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0191.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0192.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0193.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0194.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0195.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0196.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0197.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0198.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0199.png?auto=compress,format&w=800&q=20
https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0200.png?auto=compress,format&w=800&q=20
    
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 200;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page5`,
      //   set start end according to preference
      start: `top top`,
      end: `1000% center`,
      scroller: `#page3`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page5",
    // pin: true,
    // markers:true,
    scroller: `#page3`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  
  }
  caann();
  

























































