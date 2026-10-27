/* Shared script for the FYI pages: header doodles (PNG line art in /doodles) + fade-in sections. */
(function(){
  const P = [
    {k:"manta",x:78,y:6,s:90,r:"-6deg"},{k:"mask",x:64,y:46,s:56,r:"6deg",c:"hide-sm"},
    {k:"starfish",x:4,y:74,s:44,r:"-14deg"},{k:"turtle",x:90,y:50,s:64,r:"4deg"},
    {k:"tanks",x:52,y:6,s:48,r:"10deg",c:"hide-sm"},{k:"scallop",x:24,y:76,s:38,r:"12deg"},
    {k:"fins",x:74,y:74,s:54,r:"0deg",c:"hide-sm"},{k:"jellyfish",x:38,y:2,s:44,r:"-6deg",c:"hide-sm"},
    {k:"camera",x:46,y:72,s:46,r:"-8deg",c:"hide-sm"},{k:"fish",x:94,y:14,s:44,r:"0deg",c:"hide-sm"}
  ];
  const el = document.querySelector(".doodles");
  if(el) el.innerHTML = P.map((p,i)=>`<span class="${p.c||""}" style="left:${p.x}%;top:${p.y}%;width:${p.s}px;height:${p.s}px;--r:${p.r};animation-delay:${-i*0.9}s;animation-duration:${6+(i%4)}s"><img src="doodles/${p.k}.png" alt="" loading="lazy"></span>`).join("");

  const blocks = document.querySelectorAll("section.block");
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.06});
    blocks.forEach(b=>io.observe(b));
  } else blocks.forEach(b=>b.classList.add("in"));
})();
