/* =====================================================================
   DIVE SPOTS DATA — this is the only file you need to edit.
   ---------------------------------------------------------------------
   HOW TO EDIT (on GitHub): open this file → click the pencil icon →
   change text → "Commit changes". The site updates in ~1 minute.

   Each spot is one { ... } block. Copy an existing block to add a new one.
   Keep the commas between blocks, and keep text inside "quotes".

   FIELD GUIDE
   id          short unique name, no spaces (e.g. "tioman")
   name        display name
   country     Malaysia / Indonesia / Philippines / Thailand / Japan / Singapore
   type        "weekend" or "liveaboard" (what kind of trip it is)
   lat, lng    map coordinates (right-click a spot in Google Maps to copy)
   leave       days of annual leave needed, as text (e.g. "0–1").
               The FIRST number decides the tab:
               0 = Weekend · 1–2 = Short getaway · 3+ = Liveaboards
   open        months diving runs (1 = Jan … 12 = Dec)
   best        best months (subset of open)
   cert        minimum cert you realistically need: "OW" or "AOW"
   certNote    explain any cert rules
   ease        1–5, how easy to book & get there (5 = easiest)
   easeNote    why
   tags        filter chips: mantas, whalesharks, threshers, mola, sharks,
               turtles, macro, wrecks, schools, sardines, whales, coral
   see         things to see: { what, where, months (optional), tag }
   getThere    step-by-step route from Singapore
   fees        permits, park fees, cash-only things
   operators   dive shops / boats: { name, url, note }
   trips       upcoming trips run by SG dive shops: { name, url, note }
               (paste the link to a specific trip when you find one;
               the site also adds a live search button automatically)
   cost        rough budget (SGD unless stated)
   tips        anything else worth knowing
   verify      things that change often — re-check before booking
   checked     date you last checked the info
   photo       OPTIONAL — your own photo instead of the drawing, e.g.
               photo: "photos/tioman.jpg"  (upload the image into a
               "photos" folder in your GitHub repo first)
   The first word in "tags" decides which cute creature is drawn.
   ===================================================================== */

window.DIVE_SPOTS = [

  /* ───────────────────────── MALAYSIA ───────────────────────── */
  {
    id: "tioman",
    name: "Tioman",
    country: "Malaysia",
    type: "weekend",
    lat: 2.79, lng: 104.17,
    leave: "0–1",
    open: [3,4,5,6,7,8,9,10,11],
    best: [4,5,6,7,8,9,10],
    cert: "OW",
    certNote: "Plenty of easy reef sites; Renggis and Tiger Reef are fine for new divers. Deeper pinnacles and wrecks benefit from AOW.",
    ease: 5,
    easeNote: "Drive + ferry, no flight. Every SG dive shop runs weekend trips. Ferry timetables follow the tide and change daily.",
    tags: ["turtles","sharks","coral","schools","wrecks"],
    see: [
      { what: "Green & hawksbill turtles", where: "Renggis Island, Salang house reef", tag: "turtles" },
      { what: "Blacktip reef sharks", where: "Shallow reefs around Salang & ABC", tag: "sharks" },
      { what: "Barracuda & trevally schools", where: "Renggis Island, Chebeh, Tiger Reef", tag: "schools" },
      { what: "Whale shark / manta (lucky)", where: "Renggis & outer pinnacles", months: [4,10], tag: "whalesharks" },
      { what: "Soft coral pinnacles", where: "Tiger Reef (Salang), Chebeh", tag: "coral" }
    ],
    getThere: [
      "Road to Mersing Jetty (~3.5h) or Tanjung Gemok Jetty (~4h) from Singapore.",
      "Private cab/MPV charter: about S$220 one way or S$420 return for an 8-seater to Mersing. Leave SG by ~5–6am to make the late-morning ferry.",
      "Cheaper: coach packages (e.g. EU Holidays coaches leave Suntec ~5:30am) or a bus to the jetty.",
      "Ferry ~1.5–2h with Bluewater Express (~RM60 one way) or Cataferry. Book on redBus (Bluewater's official partner) or at the jetty counter.",
      "Ferry stops: Genting → Paya → Tekek → ABC → Salang (last). Tell the crew your stop.",
      "Tanjung Gemok terminal doesn't run Nov–Feb; Mersing is the main gateway."
    ],
    fees: [
      "Marine Park Conservation Fee: RM30/adult (non-Malaysian) — CASH ONLY at the jetty before boarding.",
      "Tourism Tax: RM10 per room per night for foreigners, paid at check-in.",
      "Bring ringgit — ATMs on Tioman are few and often run dry on weekends."
    ],
    operators: [
      { name: "B&J Diving (Salang & ABC)", url: "https://www.google.com/search?q=B%26J+Diving+Tioman", note: "PADI 5-Star, two centres, own resort at ABC" },
      { name: "Tioman Dive Centre (Tekek)", url: "http://www.tioman-dive-centre.com", note: "Long-running, courses + fun dives" },
      { name: "Bali Hai Dive Shop", url: "https://www.google.com/search?q=Bali+Hai+Dive+Shop+Tioman", note: "Commonly recommended" },
      { name: "Dive Asia", url: "https://www.google.com/search?q=Dive+Asia+Tioman", note: "Commonly recommended" },
      { name: "SG-run weekenders (Fri 6:30pm → Sun night)", url: "https://travel.padi.com/dive-trip/singapore/week-end-tioman-2d2n-11659", note: "All-in coach + ferry + 5 dives + stay; zero leave" }
    ],
    trips: [
      { name: "Tioman 2D2N Weekender (PADI Travel)", url: "https://travel.padi.com/dive-trip/singapore/week-end-tioman-2d2n-11659", note: "Leaves SG Fri 6:30pm, back Sun night; 5 dives" },
      { name: "GS Diving: scheduled trips", url: "https://gs-diving.com/scheduled-dive-trips/", note: "SG dive school; weekend trips & liveaboards (Tioman, Aur, Bintan, Batam)" },
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Fun dives ~RM130 each incl. gear (cheaper in packages). All-in weekend packages from SG ≈ S$400–700.",
    tips: [
      "Ferry times shift with the tide — schedules come out mid-month for the next month.",
      "Visibility swings a lot week to week; Aur/Dayang is the backup when Tioman is murky.",
      "Salang = compact dive village; ABC = quieter; Tekek = main village & ATMs."
    ],
    verify: ["Cab prices", "Ferry fares & timetable", "Whether Tanjung Gemok is running"],
    checked: "2026-10"
  },

  {
    id: "aur",
    name: "Pulau Aur & Dayang",
    country: "Malaysia",
    type: "weekend",
    lat: 2.45, lng: 104.52,
    leave: "0–1",
    open: [3,4,5,6,7,8,9,10],
    best: [4,5,6,7,8,9],
    cert: "OW",
    certNote: "House reef/platform dives are easy, but the better sites (Captain's Point, Rayner's Rock, Jack Rock) have currents and down-currents — AOW + some experience recommended.",
    ease: 4,
    easeNote: "Almost always booked as a package via a Singapore dive shop. Long overnight journey (~9h door to door).",
    tags: ["schools","coral","macro","sharks"],
    see: [
      { what: "Bumphead parrotfish schools", where: "Rayner's Rock", tag: "schools" },
      { what: "Big pelagic schools & current dives", where: "Jack Rock (said to be Cousteau's favourite in the South China Sea)", tag: "schools" },
      { what: "Cuttlefish, nudibranchs, clams", where: "Dayang Bay, Telok Miriam, Sebukang", tag: "macro" },
      { what: "Deep wall & down-currents", where: "Captain's Point", tag: "coral" }
    ],
    getThere: [
      "Bus leaves Singapore Friday ~7–8pm, reaches Mersing around midnight.",
      "Boat Mersing → Aur/Dayang ~4h overnight; arrive ~4am, nap, dive Saturday.",
      "Return Sunday after lunch; back in SG ~9pm."
    ],
    fees: [
      "Johor marine park/recreational charges are folded into package prices (Aur/Dayang tends to cost more than Tioman).",
      "Bring cash for tips and drinks; very little on the islands."
    ],
    operators: [
      { name: "GS Diving (SG)", url: "https://gs-diving.com/scheduled-dive-trips/", note: "Runs Aur trips & liveaboards" },
      { name: "Dayang Diving / Aur dive lodges", url: "https://www.google.com/search?q=Pulau+Dayang+dive+resort", note: "Book through your SG dive shop" }
    ],
    trips: [
      { name: "GS Diving: scheduled trips", url: "https://gs-diving.com/scheduled-dive-trips/", note: "SG dive school; weekend trips & liveaboards (Tioman, Aur, Bintan, Batam)" }
    ],
    cost: "All-in weekend packages ≈ S$450–750 (transport, boat, lodge, meals, ~6 dives).",
    tips: [
      "It's a 'dive, eat, sleep' trip — no beach scene, basic lodges.",
      "Take seasick meds for the overnight boat.",
      "Often clearer than Tioman when Tioman viz is bad."
    ],
    verify: ["Package prices", "Season start/end each year"],
    checked: "2026-10"
  },

  {
    id: "redang",
    name: "Redang",
    country: "Malaysia",
    type: "weekend",
    lat: 5.78, lng: 103.01,
    leave: "1–2",
    open: [3,4,5,6,7,8,9,10],
    best: [4,5,6,7,8],
    cert: "OW",
    certNote: "Mostly easy reef diving — great for newer divers.",
    ease: 4,
    easeNote: "Short flight to Kuala Terengganu + boat. Resorts sell packages with boat transfers. Book a morning flight or you'll miss the boat.",
    tags: ["turtles","coral","schools","wrecks"],
    see: [
      { what: "Green & hawksbill turtles", where: "Most reefs around the marine park", tag: "turtles" },
      { what: "Hard coral gardens", where: "Pulau Lima, Mak Simpan", tag: "coral" },
      { what: "WWII wrecks (HMS Prince of Wales & Repulse — tech/deep)", where: "Offshore, specialised trips only", tag: "wrecks" }
    ],
    getThere: [
      "Fly Singapore → Kuala Terengganu (TGG), ~1h10. Scoot, AirAsia and Firefly have direct or connecting options.",
      "Transfer to Merang or Shahbandar Jetty (depends on your resort's boat).",
      "Boat to Redang ~1h. Usually included in resort packages.",
      "Luxury option: Berjaya Air charter Seletar → Redang (~1h20), sold with The Taaras resort packages."
    ],
    fees: ["Marine park conservation fee (cash) — usually collected via resort/jetty."],
    operators: [
      { name: "Redang dive centres (resort-based)", url: "https://www.google.com/search?q=Redang+dive+centre+PADI", note: "Most resorts have their own dive shop" }
    ],
    cost: "Flights ≈ S$150–300 return. Resort packages with meals + transfers vary widely.",
    tips: ["Closed Nov–Feb for monsoon.", "Lang Tengah is a quieter nearby alternative using the same airport."],
    verify: ["Direct flight schedule SIN–TGG", "Marine park fee amount"],
    checked: "2026-10"
  },

  {
    id: "perhentian",
    name: "Perhentian Islands",
    country: "Malaysia",
    type: "weekend",
    lat: 5.91, lng: 102.74,
    leave: "1–2",
    open: [3,4,5,6,7,8,9,10],
    best: [4,5,6,7,8,9],
    cert: "OW",
    certNote: "Popular training ground; most sites are easy. Night dive at the Vietnamese Wreck is a highlight.",
    ease: 3,
    easeNote: "Flight usually needs a KL connection, then 1h drive + speedboat. Cheap, backpacker-friendly island.",
    tags: ["turtles","sharks","wrecks","coral"],
    see: [
      { what: "Turtles & blacktip reef sharks", where: "Shark Point, around Perhentian Besar", tag: "turtles" },
      { what: "Wreck dives", where: "Sugar Wreck, Vietnamese Wreck (great at night)", tag: "wrecks" },
      { what: "Pinnacle with schooling fish", where: "Tokong Laut (Temple of the Sea)", tag: "schools" },
      { what: "Stingrays & cuttlefish at night", where: "Long Beach north end, Perhentian Kecil", tag: "macro" }
    ],
    getThere: [
      "Fly to Kota Bharu (KBR) — typically via Kuala Lumpur. Kuala Terengganu (TGG) also works but is a longer drive.",
      "Taxi/Grab KBR → Kuala Besut Jetty ~1h.",
      "Speedboat 30–45 min; 4–5 departures a day from 7:30am. Tickets at the jetty office."
    ],
    fees: ["Marine park fee (cash) at Kuala Besut jetty.", "No reliable ATM on the islands — withdraw in Kota Bharu or Kuala Besut."],
    operators: [
      { name: "Perhentian dive centres", url: "https://www.padi.com/diving-in/malaysia/perhentian-islands/", note: "PADI dive shop list; many on Perhentian Kecil" }
    ],
    cost: "Budget-friendly — dives and stays are among the cheapest in the region.",
    tips: ["Islands effectively close Nov–Feb.", "Kecil = budget/backpacker; Besar = families, mid-range."],
    verify: ["Whether any direct SIN–KBR flights run"],
    checked: "2026-10"
  },

  {
    id: "sipadan",
    name: "Sipadan & Mabul",
    country: "Malaysia",
    type: "weekend",
    lat: 4.115, lng: 118.63,
    leave: "2+",
    open: [1,2,3,4,5,6,7,8,9,10,11,12],
    best: [4,5,6,7,8,9],
    cert: "AOW",
    certNote: "Advanced Open Water is REQUIRED to dive Sipadan (since Sept 2022). Mabul & Kapalai are fine with OW.",
    ease: 1,
    easeNote: "Daily permit cap (roughly 170–250 divers/day, split between licensed operators). Permits sell out Mar–Aug. Needs a domestic connection. Realistically 4–5 nights to get 1–2 Sipadan days.",
    tags: ["turtles","schools","sharks","macro"],
    see: [
      { what: "Barracuda tornado", where: "Barracuda Point, Sipadan", tag: "schools" },
      { what: "Dozens of green & hawksbill turtles per dive", where: "Everywhere on Sipadan; Turtle Cavern", tag: "turtles" },
      { what: "Bumphead parrotfish herds & jacks", where: "Barracuda Point, South Point", tag: "schools" },
      { what: "Whitetip & grey reef sharks", where: "South Point, Drop-off", tag: "sharks" },
      { what: "Frogfish, mandarinfish, mantis shrimp", where: "Mabul & Kapalai muck sites", tag: "macro" }
    ],
    getThere: [
      "No direct flight to Tawau (TWU). Fly SIN → Kuala Lumpur or Kota Kinabalu → Tawau. AirAsia also flies Senai (JB) → Tawau a few days a week.",
      "Land in Tawau by ~2pm, or you'll overnight in Tawau/Semporna.",
      "Taxi Tawau → Semporna ~1h15 (RM100–150). Resorts usually arrange it.",
      "Boat Semporna → Mabul/Kapalai ~45 min. Nobody can stay on Sipadan itself."
    ],
    fees: [
      "Sipadan entry permit: ~RM140/person/day (on top of dive fees).",
      "Some resorts sell 'outsourced' permits when their quota is full — very expensive.",
      "Tourism Tax RM10/room/night."
    ],
    operators: [
      { name: "Sipadan-Mabul Resort / Mabul Water Bungalows", url: "https://www.google.com/search?q=Sipadan+Mabul+Resort", note: "Own permit quota" },
      { name: "Borneo Divers Mabul Resort", url: "https://www.google.com/search?q=Borneo+Divers+Mabul", note: "Long-established" },
      { name: "Uncle Chang's Sipadan Mabul Dive Lodge", url: "https://www.google.com/search?q=Uncle+Chang+Mabul", note: "Budget option" }
    ],
    trips: [
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Flights ≈ S$250–450 return. Dive packages vary; Sipadan days cost extra.",
    tips: [
      "Book 4–5 nights; ask the resort how many Sipadan days are guaranteed in writing.",
      "Fly-in day and no-fly day eat into a short trip — this is really a 2-day-leave long weekend at minimum.",
      "Since mid-2026 Sabah Parks again allows 3 Sipadan dives per diver per day."
    ],
    verify: ["Daily permit cap & fee", "Flight connections to Tawau"],
    checked: "2026-10"
  },

  /* ───────────────────────── INDONESIA ───────────────────────── */
  {
    id: "nusapenida",
    name: "Nusa Penida & Lembongan (Bali)",
    country: "Indonesia",
    type: "weekend",
    lat: -8.70, lng: 115.47,
    leave: "1–2",
    open: [1,2,3,4,5,6,7,8,9,10,11,12],
    best: [7,8,9,10],
    cert: "AOW",
    certNote: "Mola mola usually sit at 25–30m+ and the channel has strong down-currents — AOW and drift experience needed for Crystal Bay. Manta Point is fine for OW.",
    ease: 5,
    easeNote: "Many direct SIN–Bali flights daily, 30–45 min fast boat from Sanur, hundreds of dive shops.",
    tags: ["mola","mantas","coral","sharks"],
    see: [
      { what: "Mola mola (ocean sunfish)", where: "Crystal Bay, also Ceningan Wall, Gamat Bay, Manta Point", months: [7,8,9,10], tag: "mola" },
      { what: "Reef manta rays (year-round)", where: "Manta Point & Manta Bay", tag: "mantas" },
      { what: "Fast drift dives & healthy coral", where: "Ceningan Wall, Toyapakeh", tag: "coral" },
      { what: "Whitetip sharks", where: "Around the channel", tag: "sharks" }
    ],
    getThere: [
      "Fly SIN → Denpasar (DPS), ~2.5h, many flights a day.",
      "Drive to Sanur (~30–45 min).",
      "Fast boat Sanur → Nusa Lembongan or Nusa Penida (~30–45 min). Many shops pick up from Sanur or include it."
    ],
    fees: ["Bali tourist levy for foreigners (paid online/on arrival).", "Small marine park fee per diver, usually in the dive price."],
    operators: [
      { name: "Legend Diving (Nusa Penida)", url: "https://www.google.com/search?q=Legend+Diving+Nusa+Penida", note: "PADI centre on Penida" },
      { name: "Lembongan / Penida dive shops", url: "https://www.padi.com/diving-in/indonesia/", note: "Lots of choice — book a mola-focused trip in season" }
    ],
    trips: [
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Flights ≈ S$200–400 return. Fun dives roughly S$40–60 each.",
    tips: [
      "⚠️ Mola season is Jul–Oct (some say late Jun–Nov), NOT December. Dec–Mar brings rough surface and same-day cancellations — plan buffer days.",
      "Even in season, think ~1 sighting per few dives — book 2–3 days of diving.",
      "Penida is drier than mainland Bali in rainy season."
    ],
    verify: ["Bali tourist levy amount"],
    checked: "2026-10"
  },

  {
    id: "tulamben",
    name: "Tulamben & Amed (Bali)",
    country: "Indonesia",
    type: "weekend",
    lat: -8.275, lng: 115.593,
    leave: "1–2",
    open: [1,2,3,4,5,6,7,8,9,10,11,12],
    best: [4,5,6,7,8,9,10],
    cert: "OW",
    certNote: "Shore entry, little current — the Liberty wreck starts at ~4m. Great for OW.",
    ease: 5,
    easeNote: "Direct flights + 2.5–3h drive. Dive shops run day trips from south Bali with transfers.",
    tags: ["wrecks","macro","schools","turtles"],
    see: [
      { what: "USAT Liberty WWII wreck (4–29m)", where: "Tulamben beach, ~30m from shore", tag: "wrecks" },
      { what: "Sleeping bumphead parrotfish (night dive)", where: "Liberty wreck", tag: "schools" },
      { what: "Pygmy seahorses, nudibranchs, frogfish", where: "Drop-off, Coral Garden, Seraya Secrets", tag: "macro" },
      { what: "Turtles & reef sharks", where: "Amed reefs", tag: "turtles" }
    ],
    getThere: [
      "Fly SIN → Denpasar (DPS).",
      "Private driver/taxi ~2.5–3h to Tulamben (most dive resorts arrange transfers).",
      "Or join a day trip from Sanur/Ubud/south Bali."
    ],
    fees: ["Bali tourist levy.", "Small local beach/porter fees — porters carry your tanks for a tip."],
    operators: [
      { name: "Tulamben dive resorts", url: "https://www.padi.com/diving-in/indonesia/tulamben/", note: "Most sit right on the beach" }
    ],
    trips: [
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Shore dives are cheap; stay in Tulamben or Amed.",
    tips: ["Dive the wreck at dawn to beat day-trippers.", "Dec–Mar: lower viz and some rubbish, but fewer crowds and good macro."],
    verify: [],
    checked: "2026-10"
  },

  /* ───────────────────────── PHILIPPINES ───────────────────────── */
  {
    id: "malapascua",
    name: "Malapascua (Cebu)",
    country: "Philippines",
    type: "weekend",
    lat: 11.33, lng: 124.11,
    leave: "2",
    open: [1,2,3,4,5,6,7,8,9,10,11,12],
    best: [10,11,12,1,2,3,4,5],
    cert: "AOW",
    certNote: "Malapascua dive shops require AOW (or a Deep Adventure Dive) for the dawn thresher dive — sharks sit at ~25–30m.",
    ease: 3,
    easeNote: "Flight to Cebu, then ~4h drive north + 30 min boat. Long but well-trodden route.",
    tags: ["threshers","macro","sharks","mantas"],
    see: [
      { what: "Pelagic thresher sharks (dawn dive)", where: "Kimud Shoal (main site now) & Monad Shoal", tag: "threshers" },
      { what: "Mandarinfish mating at dusk", where: "Lighthouse", tag: "macro" },
      { what: "Whitetip sharks in a tunnel, walls & macro", where: "Gato Island (2-dive day trip)", tag: "sharks" },
      { what: "Mantas / tiger sharks (occasional)", where: "Monad & Kimud Shoals", tag: "mantas" }
    ],
    getThere: [
      "Fly SIN → Cebu (CEB).",
      "Van/taxi Cebu airport → Maya Port, ~4h. Resorts arrange transfers.",
      "Boat Maya → Malapascua ~30 min."
    ],
    fees: ["Voluntary ~₱50 per Monad Shoal dive for the shark sanctuary.", "Small island environmental fee on arrival (cash)."],
    operators: [
      { name: "Devocean Divers", url: "https://www.google.com/search?q=Devocean+Divers+Malapascua", note: "Daily 5am thresher dive" },
      { name: "Sea Explorers Malapascua", url: "https://sea-explorers.com", note: "Multi-location operator" }
    ],
    trips: [
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Flights ≈ S$250–450 return. Dives are cheap.",
    tips: [
      "Thresher boats leave around 5am — sleep early.",
      "Flash photography is banned on thresher dives.",
      "Sightings are year-round; peak months roughly Oct–May."
    ],
    verify: ["Direct SIN–CEB flight schedule"],
    checked: "2026-10"
  },

  {
    id: "moalboal",
    name: "Moalboal (Cebu)",
    country: "Philippines",
    type: "weekend",
    lat: 9.95, lng: 123.37,
    leave: "1–2",
    open: [1,2,3,4,5,6,7,8,9,10,11,12],
    best: [11,12,1,2,3,4,5],
    cert: "OW",
    certNote: "The sardine run is a few metres off the beach — snorkel or shore dive. Pescador Island walls suit all levels.",
    ease: 4,
    easeNote: "Flight to Cebu + ~2.5–3h drive. Many cheap dive shops on Panagsama Beach.",
    tags: ["sardines","turtles","coral","macro"],
    see: [
      { what: "Millions-strong sardine run", where: "Right off Panagsama Beach", tag: "sardines" },
      { what: "Sea turtles", where: "Shallows near Panagsama", tag: "turtles" },
      { what: "Walls, caves & frogfish", where: "Pescador Island", tag: "coral" },
      { what: "Plane wreck & muck", where: "Plane Wreck, Tongo, Sunken Island", tag: "macro" }
    ],
    getThere: [
      "Fly SIN → Cebu (CEB).",
      "Taxi from the airport ~2.5h (₱2,000–2,500, haggle) or a hotel pickup.",
      "Budget: bus from Cebu South Bus Terminal (~3h)."
    ],
    fees: ["Small Pescador Island marine sanctuary fee (cash)."],
    operators: [
      { name: "Cebu Dive Center", url: "https://www.google.com/search?q=Cebu+Dive+Center+Moalboal", note: "Budget-friendly, frequently recommended" }
    ],
    cost: "One of the cheapest dive destinations in the region.",
    tips: ["Combine with Malapascua (other end of Cebu) if you have 4+ days.", "Kawasan Falls canyoneering is nearby for a non-dive day."],
    verify: [],
    checked: "2026-10"
  },

  {
    id: "anilao",
    name: "Anilao (Batangas)",
    country: "Philippines",
    type: "weekend",
    lat: 13.76, lng: 120.92,
    leave: "1–2",
    open: [1,2,3,4,5,6,10,11,12],
    best: [11,12,1,2,3,4,5],
    cert: "OW",
    certNote: "Mostly shallow macro and muck dives; blackwater dives need some buoyancy confidence.",
    ease: 4,
    easeNote: "Flight to Manila + ~3h van (traffic dependent). Resorts handle transfers.",
    tags: ["macro"],
    see: [
      { what: "Nudibranchs (600+ species)", where: "Secret Bay, Twin Rocks, Basura", tag: "macro" },
      { what: "Rhinopias, blue-ringed octopus, frogfish", where: "Muck sites — 'hot' sites change each season", tag: "macro" },
      { what: "Blackwater (larval) night dives", where: "Offshore, with specialist guides", tag: "macro" },
      { what: "Healthy coral & reef fish", where: "Twin Rocks, Cathedral", tag: "coral" }
    ],
    getThere: [
      "Fly SIN → Manila (MNL).",
      "Van to Anilao ~2.5–3.5h (resorts arrange; ~US$100 return).",
      "Book departure flights after ~2:30–3pm to be safe."
    ],
    fees: ["Small municipal environmental/diver fees (cash) per day."],
    operators: [
      { name: "Crystal Blue Resort", url: "https://www.google.com/search?q=Crystal+Blue+Resort+Anilao", note: "Photographer-focused" },
      { name: "Buceo Anilao", url: "http://www.buceoanilao.com", note: "2.5h from airport, transfers 24/7" }
    ],
    trips: [
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Mid-range; transfers add up — share a van.",
    tips: ["Shoulder months Nov and May are often the sweet spot.", "A macro camera or a good torch makes this trip."],
    verify: [],
    checked: "2026-10"
  },

  /* ───────────────────────── THAILAND ───────────────────────── */
  {
    id: "kohtao",
    name: "Koh Tao",
    country: "Thailand",
    type: "weekend",
    lat: 10.09, lng: 99.84,
    leave: "1–2",
    open: [1,2,3,4,5,6,7,8,9,10],
    best: [3,4,5,6,7,8],
    cert: "OW",
    certNote: "Huge training hub; most sites easy. Chumphon Pinnacle (15–35m, currents) is better with AOW.",
    ease: 4,
    easeNote: "Fly to Koh Samui + 1.5–2h ferry. Tons of dive shops, many include accommodation.",
    tags: ["whalesharks","schools","turtles","coral"],
    see: [
      { what: "Whale sharks (seasonal)", where: "Chumphon Pinnacle, Southwest Pinnacle, Sail Rock", months: [2,3,4,5,6,7,8,9], tag: "whalesharks" },
      { what: "Barracuda, groupers, batfish", where: "Chumphon Pinnacle", tag: "schools" },
      { what: "Turtles & coral gardens", where: "Shark Island, Hin Wong Pinnacle, Japanese Gardens", tag: "turtles" }
    ],
    getThere: [
      "Fly SIN → Koh Samui (USM) direct.",
      "Lomprayah catamaran/speedboat from Samui ~1.5–2h, from ~฿700. Book on 12Go or Lomprayah's site.",
      "Alternative: Seatran Discovery or Songserm (slower, cheaper)."
    ],
    fees: ["Small Koh Tao island fee may apply on arrival."],
    operators: [
      { name: "Big Blue Diving", url: "https://www.bigbluediving.com", note: "Large PADI/SSI centre, tech too" },
      { name: "Ban's Diving Resort", url: "https://www.google.com/search?q=Ban%27s+Diving+Resort+Koh+Tao", note: "Big resort + dive school" }
    ],
    trips: [
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Very affordable diving; Samui flights are the main cost.",
    tips: ["Worst weather Nov–Dec (NE monsoon).", "Whale shark timing varies by year — some say Feb–May, others Jun–Sep."],
    verify: ["SIN–Samui flight schedule & price"],
    checked: "2026-10"
  },

  /* ───────────────────────── JAPAN ───────────────────────── */
  {
    id: "kerama",
    name: "Kerama Islands (Okinawa)",
    country: "Japan",
    type: "weekend",
    lat: 26.21, lng: 127.30,
    leave: "2",
    open: [1,2,3,4,5,6,7,8,9,10,11,12],
    best: [4,5,6,7,8,9,10],
    cert: "OW",
    certNote: "Wide range of sites from beginner to drift; 'Kerama blue' viz of 30m+ in season.",
    ease: 3,
    easeNote: "Needs a connection to Naha (via Taipei, HK, Tokyo etc.). Then easy ferry. Day trips from Naha are simple to book.",
    tags: ["turtles","whales","coral","schools"],
    see: [
      { what: "Sea turtles", where: "Aka & Zamami", months: [5,6,7,8,9,10], tag: "turtles" },
      { what: "Humpback whales (hear them singing underwater)", where: "Around the islands", months: [12,1,2,3,4], tag: "whales" },
      { what: "Sardine & sweeper schools, hard coral", where: "Zamami, Tokashiki sites", tag: "schools" }
    ],
    getThere: [
      "Fly SIN → Naha (OKA), usually with one stop.",
      "Ferry from Tomari Port: Tokashiki ~35 min, Zamami 50–70 min, Aka ~50 min.",
      "Or join a day-boat from Naha (e.g. Seasir) — no ferry planning needed."
    ],
    fees: ["Kerama visitor/environment fee may apply."],
    operators: [
      { name: "Seasir (Naha / Zamami)", url: "https://www.seasir.com/lang/en/", note: "English-friendly day trips" }
    ],
    cost: "Japan prices — dives cost more than SE Asia.",
    tips: ["Winter water ~22°C — bring a 5mm.", "Book Jul–Sep early; peak domestic holidays."],
    verify: ["Flight routings SIN–OKA", "Visitor fee"],
    checked: "2026-10"
  },

  {
    id: "ishigaki",
    name: "Ishigaki (Yaeyama)",
    country: "Japan",
    type: "weekend",
    lat: 24.46, lng: 124.13,
    leave: "2",
    open: [3,4,5,6,7,8,9,10,11],
    best: [6,7,8,9,10],
    cert: "OW",
    certNote: "Manta Scramble is ~15m with little current — beginner friendly.",
    ease: 2,
    easeNote: "Two flights (via Tokyo, Osaka, Naha or Taipei) — long for a 2-day-leave trip.",
    tags: ["mantas","coral","turtles"],
    see: [
      { what: "Reef manta rays (very high odds)", where: "Kabira Manta Scramble & Manta City", months: [6,7,8,9,10,11], tag: "mantas" },
      { what: "Mantas in winter", where: "South side & Iriomote", months: [12,1,2,3,4], tag: "mantas" },
      { what: "Coral & turtles", where: "Around Kabira Bay & Yonara Channel", tag: "coral" }
    ],
    getThere: [
      "Fly SIN → Tokyo/Osaka/Naha (or Taipei) → Ishigaki (ISG).",
      "Kabira Bay is ~30 min drive from Ishigaki city; most shops pick up."
    ],
    fees: [],
    operators: [
      { name: "Ishigaki manta tours", url: "https://ishigaki-tours.com/en/column/manta", note: "List of manta dive tours" }
    ],
    cost: "Japan prices + domestic flight.",
    tips: ["Sep–Oct = breeding 'trains' of mantas.", "Typhoons possible Jul–Oct — keep plans flexible."],
    verify: ["Flight routings"],
    checked: "2026-10"
  },

  /* ───────────────────────── LIVEABOARDS ───────────────────────── */
  {
    id: "sg-lob",
    name: "Weekend liveaboard from Singapore",
    country: "Singapore",
    type: "liveaboard",
    lat: 1.41, lng: 103.92,
    leave: "0",
    open: [3,4,5,6,7,8,9,10],
    best: [4,5,6,7,8,9],
    cert: "OW",
    certNote: "Suitable for all certified divers; Jack Rock/Aur sites have current.",
    ease: 4,
    easeNote: "Board in Singapore Friday night, back Sunday night — no leave, no buses.",
    tags: ["schools","coral","turtles","wrecks"],
    see: [
      { what: "Tioman marine park & nearby wrecks", where: "Tioman", tag: "wrecks" },
      { what: "Pelagic schools on pinnacles", where: "Aur, Dayang, Jack Rock", tag: "schools" },
      { what: "Off-season wrecks", where: "Riau Islands, Batam/Bintan (e.g. Igara wreck)", tag: "wrecks" }
    ],
    getThere: [
      "Board at a Singapore marina Friday ~7pm (e.g. KP Explorer leaves from Marina Country Club, Punggol).",
      "Sail overnight; dive Sat–Sun; back Sunday night."
    ],
    fees: ["Port & park fees ~US$114/trip on some boats.", "Passport needed — you clear immigration."],
    operators: [
      { name: "KP Explorer", url: "https://www.dive-the-world.com/liveaboard-malaysia-kp-explorer.php", note: "Tioman & wrecks, 17 divers" },
      { name: "MV DiveRACE", url: "https://www.google.com/search?q=DiveRACE+liveaboard+Singapore", note: "Budget; Aur / Dayang / Jack Rock" },
      { name: "MV Seaborne (GS Diving)", url: "https://gs-diving.com/scheduled-dive-trips/", note: "Tioman, Bintan, Batam, Riau" }
    ],
    trips: [
      { name: "KP Explorer weekend liveaboard", url: "https://www.dive-the-world.com/liveaboard-malaysia-kp-explorer.php", note: "Departs Punggol 7pm; check dates" },
      { name: "GS Diving: scheduled trips", url: "https://gs-diving.com/scheduled-dive-trips/", note: "SG dive school; weekend trips & liveaboards (Tioman, Aur, Bintan, Batam)" }
    ],
    cost: "≈ S$500–900 for a weekend, plus fees and gear rental.",
    tips: ["Nov–Feb boats switch to Riau/Batam/Bintan wrecks.", "Take seasick meds for the first night."],
    verify: ["Which boats are still operating", "Prices"],
    checked: "2026-10"
  },

  {
    id: "similan",
    name: "Similan & Richelieu Rock",
    country: "Thailand",
    type: "liveaboard",
    lat: 8.65, lng: 97.64,
    leave: "3–4",
    open: [10,11,12,1,2,3,4,5],
    best: [12,1,2,3,4],
    cert: "AOW",
    certNote: "AOW recommended for Koh Tachai and Richelieu Rock (mild–moderate currents).",
    ease: 4,
    easeNote: "Direct flights to Phuket; dozens of boats from budget to luxury; book Dec–Feb early.",
    tags: ["mantas","whalesharks","coral","schools"],
    see: [
      { what: "Whale sharks", where: "Richelieu Rock, Koh Tachai Pinnacle", months: [2,3,4], tag: "whalesharks" },
      { what: "Manta rays", where: "Koh Bon, Koh Tachai", tag: "mantas" },
      { what: "Granite boulders & soft coral", where: "Elephant Head Rock, Similan islands", tag: "coral" },
      { what: "Seahorses, harlequin shrimp", where: "Richelieu Rock", tag: "macro" }
    ],
    getThere: [
      "Fly SIN → Phuket (HKT), direct.",
      "Boats pick up from Phuket hotels; depart from Thap Lamu (Khao Lak)."
    ],
    fees: ["National park fees ~฿1,800 per trip (Similan + Surin), often paid on board.", "Entry ฿500/day per park for foreigners."],
    operators: [
      { name: "Compare boats on liveaboard sites", url: "https://divehappy.com/diving-similan-islands-quick-guide/", note: "Season dates & boat list" }
    ],
    trips: [
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "3D3N ≈ ฿18,000–26,000; 4–5 days incl. Richelieu ≈ ฿22,000–56,000 (+ park fees).",
    tips: ["Park is open 15 Oct – 15 May only.", "Dec–Feb = busiest; Feb–Apr = best whale shark odds."],
    verify: ["Park fees", "Boat prices"],
    checked: "2026-10"
  },

  {
    id: "komodo",
    name: "Komodo",
    country: "Indonesia",
    type: "liveaboard",
    lat: -8.55, lng: 119.49,
    leave: "3–5",
    open: [1,2,3,4,5,6,7,8,9,10,11,12],
    best: [5,6,7,8,9,10],
    cert: "AOW",
    certNote: "Strong, fast drifts — AOW and current experience strongly recommended.",
    ease: 4,
    easeNote: "Fly to Bali then 1h to Labuan Bajo; many boats at every budget.",
    tags: ["mantas","sharks","schools","coral","macro"],
    see: [
      { what: "Manta cleaning stations", where: "Karang Makassar, Manta Alley (south)", tag: "mantas" },
      { what: "Sharks & giant trevally in current", where: "Castle Rock, Crystal Rock, Batu Bolong", tag: "sharks" },
      { what: "Frogfish, pygmy seahorses", where: "South Komodo, Horseshoe Bay", tag: "macro" },
      { what: "Komodo dragons (on land)", where: "Rinca / Komodo Island" }
    ],
    getThere: ["Fly SIN → Denpasar (DPS) → Labuan Bajo (LBJ), ~1h.", "Most boats depart Labuan Bajo harbour."],
    fees: ["Komodo National Park fees (vary, often paid on board)."],
    operators: [
      { name: "Komodo liveaboard list", url: "https://www.bluewaterdivetravel.com/liveaboard-destination/komodo-liveaboards", note: "Compare boats & dates" }
    ],
    trips: [
      { name: "White Manta (SG-based liveaboards)", url: "https://padi.com/dive-center/singapore/white-manta", note: "Indonesia liveaboards incl. Komodo & Raja Ampat" },
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "Budget phinisi boats to luxury — wide range.",
    tips: ["North = drifts & mantas (May–Sep); South = colder, mantas & macro (Sep–Dec).", "Nov–Feb is rainy — fewer boats."],
    verify: ["Park fees"],
    checked: "2026-10"
  },

  {
    id: "rajaampat",
    name: "Raja Ampat",
    country: "Indonesia",
    type: "liveaboard",
    lat: -0.50, lng: 130.50,
    leave: "6–9",
    open: [10,11,12,1,2,3,4,5],
    best: [10,11,12,1,2,3,4],
    cert: "AOW",
    certNote: "Currents on many sites; AOW recommended.",
    ease: 2,
    easeNote: "Remote — via Jakarta/Makassar to Sorong. Pricey; book months ahead.",
    tags: ["mantas","coral","schools","macro","sharks"],
    see: [
      { what: "Oceanic & reef mantas", where: "Manta Sandy, Blue Magic, Misool", tag: "mantas" },
      { what: "World's richest coral reefs", where: "Dampier Strait, Misool", tag: "coral" },
      { what: "Wobbegong sharks, pygmy seahorses", where: "Misool, Arborek", tag: "macro" }
    ],
    getThere: ["Fly SIN → Jakarta or Makassar → Sorong (SOQ).", "Boats depart Sorong or Waisai."],
    fees: ["Raja Ampat marine park entry tag (pay on arrival/online)."],
    operators: [
      { name: "Raja Ampat liveaboard list", url: "https://bluewaterdivetravel.com/raja-ampat-liveaboards", note: "Compare boats & dates" }
    ],
    trips: [
      { name: "White Manta (SG-based liveaboards)", url: "https://padi.com/dive-center/singapore/white-manta", note: "Indonesia liveaboards incl. Komodo & Raja Ampat" },
      { name: "Gill Divers (SG)", url: "https://cursosdebuceo.com/pt/centros/singapore/gill-divers/10062", note: "Runs group trips to Bali, Tioman, Sipadan, Raja Ampat, Komodo, Phuket, Koh Tao, Malapascua, Anilao; ask for dates" }
    ],
    cost: "High — this is a big bucket-list trip.",
    tips: ["Mid-Jun to mid-Sep is monsoon — most boats move to Komodo/Banda."],
    verify: ["Park fee", "Flight routings"],
    checked: "2026-10"
  },

  {
    id: "tubbataha",
    name: "Tubbataha Reefs",
    country: "Philippines",
    type: "liveaboard",
    lat: 8.90, lng: 119.93,
    leave: "5–7",
    open: [3,4,5,6],
    best: [4,5],
    cert: "AOW",
    certNote: "Boats require AOW and around 50 logged dives; remote, changeable currents.",
    ease: 1,
    easeNote: "Only open ~mid-Mar to mid-Jun; few boats; trips sell out a year or more ahead. Passport copies needed ~60 days before.",
    tags: ["sharks","mantas","turtles","whalesharks","coral"],
    see: [
      { what: "Reef sharks, tiger sharks (lucky)", where: "Shark Airport, walls", tag: "sharks" },
      { what: "Mantas & whale sharks", where: "Both atolls", tag: "mantas" },
      { what: "Turtles everywhere, pristine walls", where: "North & South atolls", tag: "turtles" }
    ],
    getThere: ["Fly SIN → Manila or Cebu → Puerto Princesa (PPS), ~1h.", "Arrive a day early; ~10–12h overnight sail to the reef."],
    fees: ["Conservation fee ~US$145 per diver (subject to change)."],
    operators: [
      { name: "Tubbataha liveaboard list", url: "https://divehappy.com/tubbataha-reef-liveaboards/", note: "Philippine Siren, Aggressor, Infiniti and more" }
    ],
    cost: "≈ US$2,000–5,000 for a 6–7 night trip.",
    tips: ["UNESCO site, no gloves/reef hooks/pointers.", "No hospital nearby — dive conservatively."],
    verify: ["Season dates", "Conservation fee"],
    checked: "2026-10"
  }

];
