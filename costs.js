/* =====================================================================
   TRIP COST ESTIMATES  (used by the "Cost" tab and the leave planner)
   ---------------------------------------------------------------------
   All amounts are ROUGH estimates in S$ PER PERSON (twin-share rooms),
   last checked Oct 2026. Edit any number here; the site updates itself.

   flight : [low, high] typical return economy fare from Singapore, or null
   airport: airport code used for the Skyscanner link (e.g. "DPS")
   ground : { label, lo, hi }  coach / ferry / transfers (return)
   stay   : [budget, mid, resort] per person per night
   boat   : [budget, mid, luxury] per person per NIGHT (liveaboards only,
            includes dives + meals)
   dive   : price of one fun dive incl. gear
   fees   : [{ label, amt, per: "trip" | "day" | "night" }]
            "day" = per diving day
   nights : nights options shown as chips,  n: default nights
   note   : optional one-line note shown under the receipt
   time   : optional travel time shown on weekend cards

   Rough exchange rates used: S$1 ≈ RM3.4 ≈ IDR12,500 ≈ PHP44 ≈ THB25
   ≈ JPY115 ≈ NT$24 ≈ US$0.77
   ===================================================================== */
window.DIVE_COSTS = {
  /* ── Malaysia ── */
  tioman:     { time:"~5h by coach + ferry", flight:null, ground:{label:"Coach + ferry", lo:80, hi:130}, stay:[25,50,110], dive:38,
                fees:[{label:"Marine park fee (RM30, cash)", amt:9, per:"trip"},{label:"Tourism tax", amt:1.5, per:"night"}], nights:[1,2,3], n:2 },
  aur:        { time:"~5h by coach + boat", flight:null, ground:{label:"Coach + boat", lo:120, hi:180}, stay:[60,75,100], dive:40, fees:[], nights:[1,2,3], n:2,
                note:"Usually sold as all-in packages (lodge, meals, boat): about S$450–750." },
  redang:     { flight:[180,350], airport:"TGG", ground:{label:"Airport taxi + boat", lo:40, hi:60}, stay:[45,80,150], dive:42,
                fees:[{label:"Marine park fee", amt:9, per:"trip"},{label:"Tourism tax", amt:1.5, per:"night"}], nights:[2,3,4], n:3 },
  perhentian: { flight:[180,350], airport:"KBR", ground:{label:"Taxi + speedboat", lo:40, hi:60}, stay:[20,45,100], dive:32,
                fees:[{label:"Marine park fee", amt:9, per:"trip"},{label:"Tourism tax", amt:1.5, per:"night"}], nights:[2,3,4], n:3 },
  sipadan:    { flight:[250,450], airport:"TWU", ground:{label:"Tawau → Semporna → island", lo:50, hi:80}, stay:[70,110,200], dive:45,
                fees:[{label:"Sipadan permit (1 day, RM350)", amt:103, per:"trip"},{label:"Tourism tax", amt:1.5, per:"night"}], nights:[3,4,5], n:4,
                note:"Island resorts are usually full board. Sipadan permits are limited, so book early." },

  /* ── Indonesia ── */
  nusapenida: { flight:[200,400], airport:"DPS", ground:{label:"Transfers + fast boat", lo:35, hi:55}, stay:[25,60,140], dive:60,
                fees:[{label:"Bali tourist levy", amt:12, per:"trip"}], nights:[2,3,4,5], n:3 },
  tulamben:   { flight:[200,400], airport:"DPS", ground:{label:"Driver Bali ⇄ Tulamben", lo:60, hi:90}, stay:[20,50,120], dive:35,
                fees:[{label:"Bali tourist levy", amt:12, per:"trip"}], nights:[2,3,4,5], n:3 },
  pulauweh:   { flight:[250,450], airport:"BTJ", ground:{label:"Ferry + local transport", lo:25, hi:45}, stay:[20,40,80], dive:33,
                fees:[], nights:[3,4,5], n:4, note:"Bring rupiah cash; foreign cards often fail in Aceh." },

  /* ── Philippines ── */
  malapascua: { flight:[250,450], airport:"CEB", ground:{label:"Van + boat from Cebu", lo:40, hi:70}, stay:[25,55,110], dive:45,
                fees:[{label:"Marine park + shoal fees", amt:14, per:"day"}], nights:[2,3,4,5], n:3 },
  moalboal:   { flight:[250,450], airport:"CEB", ground:{label:"Bus / van from Cebu", lo:25, hi:60}, stay:[20,45,100], dive:35,
                fees:[{label:"Sanctuary fees", amt:5, per:"day"}], nights:[2,3,4,5], n:3 },
  anilao:     { flight:[200,400], airport:"MNL", ground:{label:"Shared van from Manila", lo:60, hi:100}, stay:[55,90,170], dive:45,
                fees:[{label:"Environmental / diver fees", amt:8, per:"day"}], nights:[2,3,4], n:3, note:"Most resorts are full board." },

  /* ── Thailand ── */
  kohtao:     { flight:[350,600], airport:"USM", ground:{label:"Ferry Samui ⇄ Koh Tao", lo:50, hi:70}, stay:[20,50,120], dive:40,
                fees:[], nights:[2,3,4,5], n:3, note:"Cheaper alternative: fly to Bangkok or Chumphon and take the ferry." },
  richelieu:  { flight:[180,350], airport:"HKT", ground:{label:"Phuket ⇄ Khao Lak transfers", lo:50, hi:90}, stay:[25,55,120], dive:80,
                fees:[{label:"National park fee (฿700)", amt:28, per:"day"}], nights:[2,3,4], n:3, note:"Dive price is for the long day trip from Khao Lak (3 dives)." },

  /* ── Japan ── */
  kerama:     { flight:[450,750], airport:"OKA", ground:{label:"Naha transfers / ferry", lo:20, hi:60}, stay:[50,90,180], dive:80,
                fees:[], nights:[3,4,5,6], n:4 },
  ishigaki:   { flight:[600,950], airport:"ISG", ground:{label:"Airport bus / taxi", lo:15, hi:40}, stay:[45,90,180], dive:70,
                fees:[], nights:[3,4,5,6], n:4 },

  /* ── Taiwan ── */
  greenisland:  { flight:[300,550], airport:"TPE", ground:{label:"Train to Taitung + ferry", lo:120, hi:180}, stay:[35,60,110], dive:65,
                  fees:[], nights:[3,4,5,6], n:4 },
  orchidisland: { flight:[300,550], airport:"TPE", ground:{label:"Train to Taitung + ferry", lo:150, hi:220}, stay:[30,55,95], dive:65,
                  fees:[], nights:[3,4,5,6], n:4 },
  xiaoliuqiu:   { flight:[300,550], airport:"KHH", ground:{label:"Kaohsiung ⇄ Donggang + ferry", lo:35, hi:55}, stay:[30,55,100], dive:60,
                  fees:[], nights:[2,3,4,5], n:3 },
  kenting:      { flight:[300,550], airport:"KHH", ground:{label:"Kaohsiung ⇄ Kenting bus", lo:25, hi:40}, stay:[35,70,150], dive:55,
                  fees:[], nights:[2,3,4,5], n:3 },

  /* ── Liveaboards (boat price per night includes dives + meals) ── */
  "sg-lob":   { time:"Departs from Singapore", liveaboard:true, flight:null, ground:{label:"Taxi to the marina", lo:10, hi:30}, boat:[230,300,400],
                fees:[{label:"Port & park fees (~US$114)", amt:150, per:"trip"}], nights:[2], n:2 },
  similan:    { liveaboard:true, flight:[180,350], airport:"HKT", ground:{label:"Phuket ⇄ Khao Lak transfers", lo:40, hi:70}, boat:[220,300,450],
                fees:[{label:"National park fees", amt:72, per:"trip"}], nights:[3,4,5], n:4 },
  komodo:     { liveaboard:true, flight:[300,550], airport:"LBJ", ground:{label:"Airport ⇄ harbour", lo:5, hi:15}, boat:[260,520,900],
                fees:[{label:"Park fee (IDR300k per dive day)", amt:24, per:"day"}], nights:[3,4,5,6,7], n:4 },
  rajaampat:  { liveaboard:true, flight:[600,1000], airport:"SOQ", ground:{label:"Sorong airport ⇄ port", lo:10, hi:30}, boat:[400,650,1000],
                fees:[{label:"Marine park entry tag", amt:80, per:"trip"}], nights:[6,7,8,10], n:7 },
  tubbataha:  { liveaboard:true, flight:[300,550], airport:"PPS", ground:{label:"Puerto Princesa transfers", lo:10, hi:25}, boat:[450,650,900],
                fees:[{label:"Conservation fee (~US$145)", amt:190, per:"trip"}], nights:[5,6,7], n:6 }
};
