// To always start from top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Animation
window.addEventListener("DOMContentLoaded", () => {
  // Open Door Audio
  const openGateAudio = new Audio("./dooropen.mp3");
   
 //Koala Audio
 const audio1 = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cartoon-insect-running-fast-37.mp3');
 const audio2 = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cartoon-insect-complain-32.mp3');
 const audio3 = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cartoon-insect-running-fast-37.mp3');
 const audio4 = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cartoon-kitty-begging-meow-92.mp3');

const koala1 = document.querySelector('#koala1');
const koala2 = document.querySelector('#koala2');
const koala3 = document.querySelector('#koala3');
const koala4 = document.querySelector('#koala4');

const playAudio = function(run){
audio1.pause();
audio2.pause();
audio3.pause();
audio4.pause();
run.currentTime = 0;
run.play();

}
koala1.addEventListener('click', function(){
 playAudio(audio1);
})

koala2.addEventListener('click', function(){
 playAudio(audio2);
 
})

koala3.addEventListener('click', function(){
 playAudio(audio3);

})
koala4.addEventListener('click', function(){
 playAudio(audio4);
});  
  document.body.style.overflowX = "hidden";
  window.gsap.registerPlugin({
    name: "transition",
    init(t) {
      return (this.target = t), !0;
    },
    render: (t, e) =>
      "object" == typeof e?.target &&
      void 0 !== e?.target?.style &&
      void (e.target.style.transition = 0 === t ? "" : "unset"),
  });
  gsap.config({ nullTargetWarn: false });
  gsap.defaults({ duration: 1, transition: "unset" });
  if (
    document.querySelector("#smooth-wrapper") &&
    document.querySelector("#smooth-content")
  ) {
    window._mp_smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 10,
      smoothTouch: 2,
      normalizeScroll: true,
    });
    document.querySelectorAll("a").forEach((e) => {
      const t = e?.getAttribute("href");
      t &&
        t.match(/^#/) &&
        e.addEventListener("click", (e) => {
          e.preventDefault(), window._mp_smoother.scrollTo(t, !0);
        });
    });
  }
  window.addEventListener("load", (e) =>
    window?.ScrollSmoother?.get()?.refresh(true)
  );
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#top",
        start: "top 65%",
        end: "bottom 45%",
        marker:true,
        onEnter: () => {
          openGateAudio.currentTime = 0;
          openGateAudio.play();
          gsap.set(openGateAudio, {volume:0.3})
        },
      },
      
    });
    tl.to(
      "#top",
      {
        rotation: 45,
        transformOrigin: "99.6% 85%",
        duration: 0.8,
      },
      0
    );
    tl.to("#koala5", { transform: "translateY(-9%)" }, 0.3);


    ////////////////////////////////////////////////////////////////////////////
    tl2 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#gateleft1",
        start: "top 70%",
        end: "bottom 45%",
        onEnter: () => {
          openGateAudio.currentTime = 0;
          openGateAudio.play();
          gsap.set(openGateAudio, {volume:0.3})
        },

      },
      
    });
    tl2.to(
      "#gateleft1",
      {
        transform: "scale(1.1) translate(-20%, -5%)",
      },
     0
    );
    tl2.to("#koala1", { transform: "translate(1.6%,-6%)" }, '-=1');
//////////////////////////////////////////////////////////////////////////////////////////
    tl3 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#gateright1",
        start: "top 60%",
        end: "bottom 55",
        onEnter: () => {
          openGateAudio.currentTime = 0;
          openGateAudio.play();
          gsap.set(openGateAudio, {volume:0.3})
        },
      },
    });
    tl3.to(
      "#gateright1",
      {
        transform: "scale(1.1) translate(9%, -5%)",
      },
      0
    );
    tl3.to("#koala2", { transform: "translate(50px, -6%)" }, 0);


    tl4 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#gateleft2",
        start: "top 60%",
        end: "bottom 55%",
        onEnter: () => {
          openGateAudio.currentTime = 0;
          openGateAudio.play();
          gsap.set(openGateAudio, {volume:0.3})
        },
      },
    });
    tl4.to(
      "#gateleft2",
      {
        transform: "scale(1.1) translate(-18%, -5%)",
      },
      0
    );
    tl4.to("#koala3", { transform: "translate(-0.6%, -6.5%)" }, 0);
    tl5 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#gatebottom",
        start: "top 60%",
        end: "bottom 60%",
        onEnter: () => {
          openGateAudio.currentTime = 0;
          openGateAudio.play();
          gsap.set(openGateAudio, {volume:0.3})
        },
      },
    });
    tl5.to(
      "#gatebottom",
      {
        transform: "scale(1.1) translateY(-18%)",
      },
      0
    );
    tl5.to("#koala4", { transform: "translate(10px, -5.7%)" }, 0);





    window._mp_1666859378 = gsap
      .timeline()
      .to(".rocket-bg", { opacity:0, duration: 0.7 }, 0)
      .fromTo(".rocket", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0.4)
      .fromTo(
        "body",
        { overflowY: "hidden" },
        { overflowY: "scroll", duration: 0.4 },
        0.4
      )
      .pause();
    gsap.utils.toArray(".start-rocket").forEach((item) => {
      item?.addEventListener("click", (e) => {
        e.preventDefault();
        if (!e.detail || e.detail === 1) {
          if (_mp_1666859378.progress() === 1) _mp_1666859378.reverse();
          else {
            _mp_1666859378.play();
          }
        }
      });
    });
  }
  
  (window._mp_refresher = (t = 0) => {
    window.ScrollTrigger &&
      setTimeout(() => {
        window.ScrollTrigger.sort(),
          window.ScrollTrigger.getAll().forEach((r) => r.refresh());
      }, t);
  }),
    window.addEventListener("load", () => window._mp_refresher(92));
});
