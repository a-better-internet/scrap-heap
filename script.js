(()=>{
'use strict';

/* =========================================================
   SCRAP HEAP — same engine as Chaos Modem, new sample set & UI
   - Placeholder array for NeoCities 'ScrapHeap' samples.
   - Junkyard-themed UI text.
   - Per-channel optional granular time‑stretch.
   ========================================================= */

// ---------- Placeholder Sample Library (replace with your links) ----------
const SCRAP_URLS = [
    "https://thelossless.neocities.org/ScrapHeap/0_BOWL%20KLANG.wav",
  "https://thelossless.neocities.org/ScrapHeap/1_BOWL%20RING%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/2_BOWL%20RING%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/3_BOWL%20RING%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/4_BOWL%20RING%204.wav",
  "https://thelossless.neocities.org/ScrapHeap/5_BOWL%20RING%205.wav",
  "https://thelossless.neocities.org/ScrapHeap/6_BRUSH%20BOWL%20A.wav",
  "https://thelossless.neocities.org/ScrapHeap/7_BRUSH%20BOWL_1.wav",
  "https://thelossless.neocities.org/ScrapHeap/8_BRUSH%20BOWL%20H.wav",
  "https://thelossless.neocities.org/ScrapHeap/9_BRUSH%20BOWL%20S.wav",
  "https://thelossless.neocities.org/ScrapHeap/10_BRUSH%20BOWL_2.wav",
  "https://thelossless.neocities.org/ScrapHeap/11_BRUSH%20BOWL_3.wav",
  "https://thelossless.neocities.org/ScrapHeap/12_BRUSH%20BOWL_4.wav",
  "https://thelossless.neocities.org/ScrapHeap/13_BRUSH%20BOWL_5.wav",
  "https://thelossless.neocities.org/ScrapHeap/14_BRUSH%20BOWL_6.wav",

  "https://thelossless.neocities.org/ScrapHeap/Metal%20Favit.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Hardfist.wav",

  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2001.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2002.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2003.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2004.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2005.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2006.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2007.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2008.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2009.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2010.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2011.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2012.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2013.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2014.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2015.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2016.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2017.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2018.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2019.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2020.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2021.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2022.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2023.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2024.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2025.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2026.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2027.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2028.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2029.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2030.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2031.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2032.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2033.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2034.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2035.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2036.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2037.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2038.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2039.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2040.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2041.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2042.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2043.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2044.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2045.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2046.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2047.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Kitchen%20Knife%20-%2048.wav",

  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2001.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2002.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2003.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2004.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2005.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2006.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2007.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2008.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2009.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2010.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2011.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2012.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2013.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2014.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2015.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2016.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2017.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2018.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2019.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2020.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2021.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2022.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2023.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2024.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2025.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2026.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2027.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2028.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2029.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2030.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2031.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2032.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2033.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2034.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2035.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2036.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2037.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2038.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metal%20Scrape%20%26%20Impact%20-%20Large%20Saucepan%20-%2039.wav",

  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Absynth%20A.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20AllOver.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20AmonTobin.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Ball.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20BoomPap.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Boundary.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20BowlBell.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20BowlPing.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20BridgeIsOver.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20BrokenFork.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20CarRoom.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Cave.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ChromePlated.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ClangBit.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20CleanGutter.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20CrispPipe.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DeadDing.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DeadNow.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DidRing.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Digibit.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Digigong%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Digigong%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DigiHard.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DontFront.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DontTrip.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Doom.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DriveBy.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DropTwo.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DubTao%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DubTao%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DullRez.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DuoTone%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20DuoTone%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Ecstatic.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Ektl%20B.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Eulberg.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%204.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%205.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%206.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%207.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Factory%208.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20FeedBack.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Foreshadow.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20FoundOne.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Funkstorung%20A%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Funkstorung%20A%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Funkstorung%20B.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Futronic.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Garbage%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Garbage%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Generator.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20GeneSlidder.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Glitch.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20GoldenKnights.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Handy%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Handy%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20HardWhack.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Herbert%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Herbert%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Herbert%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Herbert%204.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Herbert%205.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Herbert%206.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20HighHammer.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20HugePiece.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Jostle.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20JustIs.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20KeepDown.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20KerKlang.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20KindaChord.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Kingdom.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Kitchen%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Kitchen%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Kitchen%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Kitchen%204.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Kitchen%205.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Kittens.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20LateMute.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20LittlePot.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20LockedBox.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20LongClank.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20LowBelled.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20LowDown.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20MagnetJump.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Materials%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Materials%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Materials%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Materials.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%204.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%205.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%206.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%207.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Metallite%208.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20MidDunk.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20MostlyBell.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20NeverSame.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Nomad%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Nomad%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Nomad%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20OddPot.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20OnBlock%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20OnBlock%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20OnTheRail.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Ordinance.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Orgami%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Orgami%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PanHit%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PanHit%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PanHit%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PanHit%204.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PanHit%205.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PanHit%206.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PanHit%207.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Papua.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Parole.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PastNoise.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PeakPipe.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PelleBuys.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Pencilpot.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PingHard.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PingRing.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PlayPole.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20PlinkHigh.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ProgHouse.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Psyched.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20QLounge.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Quainted%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Quainted%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RachetIt.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ReallyOn.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ReduceGong.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ResoClap.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RingOut.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RingRod.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RippleTone.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RodAnnoy.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Roisin.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RollDice.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RollerPipe.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20RotatePlank.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Satiated%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Satiated%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Satiated%203.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ScrapeShake.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Shave%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Shave%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Shotty.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20SinkTap.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Sintheti.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Softpot.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Solidified.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Somedis.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20SquealBell%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20SquealBell%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20StayShocked.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20SteelGlass.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20SureClank.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20SureIs.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Sutekh%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Sutekh%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Swikin.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20SwooshBy.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Sylt.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Tempered.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ThinPiece.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ThinRod.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ThriceOver.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Tiananmen.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20ToTheFifth.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20UrbanHip.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20WaterChime.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Wicked.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20WireTap.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20WontBreak.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Workshop%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Workshop%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20XOR%201.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20XOR%202.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic%20Zephat.wav",

  "https://thelossless.neocities.org/ScrapHeap/Metallic_01.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_02.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_03.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_04.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_05.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_06.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_07.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_08.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_09.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_10.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_11.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_12.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_13.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_14.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_15.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_16.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_17.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_18.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_19.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_20.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_21.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_22.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_23.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_24.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_25.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_26.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_27.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_28.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_29.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_30.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_31.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_32.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_33.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_34.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_35.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_36.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_37.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_38.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_39.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_40.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_41.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_42.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_43.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_44.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_45.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_46.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_47.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_48.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_49.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_50.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_51.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_52.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_53.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_54.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_55.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_56.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_57.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_58.wav",
  "https://thelossless.neocities.org/ScrapHeap/Metallic_59.wav"
];

// ---------- DOM Helpers ----------
const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
const byId = id => document.getElementById(id);

// ---------- UI Refs ----------
const btnStart   = byId('btnStart');
const btnStop    = byId('btnStop');
const btnArm     = byId('btnArm');
const btnRand    = byId('btnRandomize');
const btnPanic   = byId('btnPanic');
const libCount   = byId('libCount');
const libBar     = byId('libBar');
const libState   = byId('libState');
const readyPads  = byId('readyPads');
const statusEl   = byId('status');
const clockEl    = byId('clock');

const masterVol  = byId('masterVol');
const reverbMix  = byId('reverbMix');
const freeRun    = byId('freeRun');
const globalDensity = byId('globalDensity');
const fadeMs     = byId('fadeMs');
const sliceMin   = byId('sliceMin');
const sliceMax   = byId('sliceMax');
const grainMs    = byId('grainMs');
const overlap    = byId('overlap');
const bpm        = byId('bpm');
const syncSlices = byId('syncSlices');
const sliceMinNote = byId('sliceMinNote');
const sliceMaxNote = byId('sliceMaxNote');
const sliceModeHint = byId('sliceModeHint');
const syncRangeGroup = byId('syncRangeGroup');
const chCards = $$('#chGrid .ch');

// ---------- Clock ----------
const tickClock = () => { clockEl.textContent = new Date().toLocaleString(); };
setInterval(tickClock, 1000); tickClock();

// ---------- Audio Engine ----------
let audioCtx = null;
let masterGain, reverbConvolver, reverbGain;
let libraryBuffers = [];
let armed = false;
let running = false;

const fromSemitones = st => Math.pow(2, st/12);
const clamp = (v,min,max)=> Math.min(max, Math.max(min,v));

function noteToBeats(v){
  if (v.includes('/')){ const [a,b] = v.split('/').map(Number); return a/b; }
  const n = Number(v); return isFinite(n) ? n : 1;
}
const beatsToSeconds = (beats,bpmVal)=>(60/Math.max(1,bpmVal))*beats;
function updateSliceModeHint(){
  if (syncSlices && syncSlices.checked){
    sliceModeHint.textContent = `Slice mode: Sync (${sliceMinNote.value}–${sliceMaxNote.value}, BPM ${bpm.value})`;
  } else {
    sliceModeHint.textContent = `Slice mode: Free (${sliceMin.value}–${sliceMax.value} s)`;
  }
}

// Procedural impulse response
function makeImpulseResponse(ctx, seconds=2.5, decay=2.0){
  const rate = ctx.sampleRate;
  const length = Math.floor(seconds*rate);
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch=0; ch<2; ch++){
    const data = impulse.getChannelData(ch);
    for (let i=0;i<length;i++){
      data[i] = (Math.random()*2-1) * Math.pow(1 - i/length, decay);
    }
  }
  return impulse;
}

function initAudio(){
  if (audioCtx) return;
  audioCtx = new (window.AudioContext||window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  reverbConvolver = audioCtx.createConvolver();
  reverbGain = audioCtx.createGain();

  reverbConvolver.buffer = makeImpulseResponse(audioCtx, 2.6, 2.4);
  reverbGain.gain.value = +reverbMix.value;
  masterGain.gain.value = +masterVol.value;

  const dry = audioCtx.createGain(); dry.gain.value = 1.0;
  dry.connect(masterGain);
  reverbGain.connect(masterGain);
  masterGain.connect(audioCtx.destination);

  engine.buses = { dry, reverb: { node: reverbConvolver, gain: reverbGain } };
}

// ---------- Library Preload ----------
async function preloadLibrary(urls){
  const total = urls.length;
  libraryBuffers = new Array(total);
  libCount.textContent = `0 / ${total}`;
  libBar.style.width = '0%';
  libState.textContent = 'PRELOADING';

  const decodeOne = async (url, idx) => {
    const res = await fetch(url);
    const arr = await res.arrayBuffer();
    const buf = await audioCtx.decodeAudioData(arr);
    libraryBuffers[idx] = { url, buffer: buf };
    const loaded = libraryBuffers.filter(Boolean).length;
    libCount.textContent = `${loaded} / ${total}`;
    libBar.style.width = `${Math.round(loaded/total*100)}%`;
  };

  for (let i=0;i<urls.length;i++){
    try{ await decodeOne(urls[i], i); }
    catch(e){ console.warn('Failed to load', urls[i], e); }
  }

  libState.textContent = 'READY';
  libState.classList.add('ready');
  $$('.pad', readyPads).forEach(p => p.classList.add('active'));
  btnStart.disabled = false;
  btnArm.disabled = false;
  btnRand.disabled = false;
  btnPanic.disabled = false;
  statusEl.textContent = 'Library loaded. Click Start, then Arm Channels.';
}

// ---------- Channel Engine ----------
const engine = { buses:null, channels:[], allVoices:new Set() };
function pickRandomBuffer(){
  let item = libraryBuffers[Math.floor(Math.random()*libraryBuffers.length)];
  while(!item) item = libraryBuffers[Math.floor(Math.random()*libraryBuffers.length)];
  return item;
}
function randomSlice(buffer, minSec, maxSec){
  const len = buffer.duration;
  if (syncSlices && syncSlices.checked){
    const notes = ["1/16","1/8","1/4","1/2","1","2","4","8"];
    const minIdx = Math.max(0, notes.indexOf(sliceMinNote.value));
    const maxIdx = Math.max(minIdx, notes.indexOf(sliceMaxNote.value));
    const pickIdx = Math.floor(minIdx + Math.random()*(maxIdx - minIdx + 1));
    const beats = noteToBeats(notes[pickIdx]);
    const dur = Math.min(beatsToSeconds(beats, +bpm.value), len);
    const maxStart = Math.max(0, len - dur);
    const start = Math.random()*maxStart;
    return { start, dur };
  } else {
    const dur = Math.min(Math.max(minSec + Math.random()*(maxSec-minSec), 0.05), len);
    const maxStart = Math.max(0, len - dur);
    const start = Math.random()*maxStart;
    return { start, dur };
  }
}

function createVoice(ch, item, pitchSt, fadeTimeMs, minSec, maxSec, vol){
  const ctx = audioCtx;
  const { buffer, url } = item;
  const { start, dur } = randomSlice(buffer, minSec, maxSec);
  const src = ctx.createBufferSource(); src.buffer = buffer; src.playbackRate.value = fromSemitones(pitchSt);
  const gain = ctx.createGain();
  const reverbSend = ctx.createGain(); reverbSend.gain.value = 0.35;

  const now = ctx.currentTime;
  const fade = Math.max(0.01, fadeTimeMs/1000);
  const end = now + dur;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(vol, now + fade);
  gain.gain.setValueAtTime(vol, end - fade);
  gain.gain.linearRampToValueAtTime(0, end);

  src.connect(gain);
  gain.connect(engine.buses.dry);
  gain.connect(reverbSend);
  reverbSend.connect(engine.buses.reverb.node);
  engine.buses.reverb.node.connect(engine.buses.reverb.gain);

  src.start(now, start, dur);
  src.stop(end + 0.02);

  const voice = { src, gain, url, stopAt: end + 0.1 };
  src.onended = () => engine.allVoices.delete(voice);
  engine.allVoices.add(voice);
  const nowPlaying = $('.nowplaying', ch.card);
  if (nowPlaying) nowPlaying.textContent = decodeURIComponent(url.split('/').pop());
  return voice;
}

function createGranularVoice(ch, item, pitchSt, fadeTimeMs, minSec, maxSec, vol){
  const ctx = audioCtx;
  const { buffer, url } = item;
  const { start: sliceStart, dur: sliceDurSrc } = randomSlice(buffer, minSec, maxSec);
  const pitchRate = Math.pow(2, pitchSt/12);

  const voiceGain = ctx.createGain(); voiceGain.gain.value = 0;
  const reverbSend = ctx.createGain(); reverbSend.gain.value = 0.35;
  voiceGain.connect(engine.buses.dry);
  voiceGain.connect(reverbSend);
  reverbSend.connect(engine.buses.reverb.node);
  engine.buses.reverb.node.connect(engine.buses.reverb.gain);

  const grainSize = Math.max(0.02, (+grainMs.value)/1000);
  const ov = Math.min(0.95, Math.max(0, +overlap.value));
  const period = grainSize * (1 - ov);

  const stretch = ch.state.stretch || 1.0;
  const totalOut = sliceDurSrc * stretch;

  const now = ctx.currentTime;
  const fade = Math.max(0.01, fadeTimeMs/1000);
  const t0 = now;

  voiceGain.gain.setValueAtTime(0, t0);
  voiceGain.gain.linearRampToValueAtTime(vol, t0 + fade);
  voiceGain.gain.setValueAtTime(vol, t0 + Math.max(0, totalOut - fade));
  voiceGain.gain.linearRampToValueAtTime(0, t0 + totalOut);

  const N = Math.max(1, Math.ceil(totalOut / Math.max(0.005, period)));
  let readPos = sliceStart;
  const readEnd = Math.min(buffer.duration, sliceStart + sliceDurSrc);

  for (let i=0;i<N;i++){
    const startTime = t0 + i * period;
    const src = ctx.createBufferSource(); src.buffer = buffer; src.playbackRate.value = pitchRate;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, startTime);
    g.gain.linearRampToValueAtTime(1, startTime + Math.min(grainSize*0.5, 0.02));
    g.gain.setValueAtTime(1, startTime + Math.max(0, grainSize - Math.min(grainSize*0.5, 0.02)));
    g.gain.linearRampToValueAtTime(0, startTime + grainSize);
    src.connect(g); g.connect(voiceGain);

    const maxReadable = Math.max(0, readEnd - readPos);
    const playDur = Math.min(grainSize, maxReadable);
    if (playDur <= 0) break;
    try{ src.start(startTime, readPos, playDur); }catch(e){}
    readPos += period / Math.max(0.001, stretch);
  }

  const voice = { url, stopAt: t0 + totalOut + 0.05, node: voiceGain };
  engine.allVoices.add(voice);
  const nowPlaying = $('.nowplaying', ch.card);
  if (nowPlaying) nowPlaying.textContent = decodeURIComponent(url.split('/').pop());
  const endTimer = setTimeout(()=>{ try{ voiceGain.disconnect(); }catch(e){} engine.allVoices.delete(voice); }, Math.ceil((totalOut+0.1)*1000));
  voice._endTimer = endTimer;
  return voice;
}

function Channel(index){
  const card = chCards[index];
  const enableEl = $('.ch-enable', card);
  const volEl    = $('.ch-vol', card);
  const pitchEl  = $('.ch-pitch', card);
  const densEl   = $('.ch-density', card);
  const stretchEnEl = $('.ch-stretch-en', card);
  const stretchEl = $('.ch-stretch', card);
  const stretchValEl = $('.ch-stretch-val', card);
  const soloBtn  = $('.ch-solo', card);
  const muteBtn  = $('.ch-mute', card);
  const nextBtn  = $('.ch-next', card);

  const state = {
    enabled: enableEl.checked,
    muted: false,
    solo: false,
    vol: +volEl.value,
    pitch: +pitchEl.value,
    density: +densEl.value,
    stretchEnabled: !!(stretchEnEl && stretchEnEl.checked),
    stretch: stretchEl ? (+stretchEl.value/100) : 1.0,
    nextTimer: null,
    card
  };

  function scheduleNext(immediate=false){
    if (!running || !armed || !state.enabled) return;
    const dens = clamp((+globalDensity.value + state.density)/2, 0, 1);
    const minS = +sliceMin.value;
    const maxS = Math.max(minS+0.1, +sliceMax.value);
    const fade = +fadeMs.value;
    const vol  = state.muted ? 0 : state.vol;
    const playNow = () => {
      const item = pickRandomBuffer();
      if (state.stretchEnabled && (grainMs && overlap)) {
        createGranularVoice(api, item, state.pitch, fade, minS, maxS, vol);
      } else {
        createVoice(api, item, state.pitch, fade, minS, maxS, vol);
      }
    };
    if (immediate){ playNow(); }
    else {
      const base = 1.6, jitter = Math.random()*0.75;
      const delay = base * (1.0 - dens) + jitter;
      state.nextTimer = setTimeout(()=>{
        if (running && armed && state.enabled && freeRun.checked){
          playNow(); scheduleNext(false);
        }
      }, Math.max(60, delay*1000));
    }
  }
  function clearTimer(){ if(state.nextTimer){ clearTimeout(state.nextTimer); state.nextTimer=null; }}

  if (stretchValEl && stretchEl) stretchValEl.textContent = Math.round(+stretchEl.value);
  if (stretchEnEl) stretchEnEl.addEventListener('change', e => { state.stretchEnabled = !!e.target.checked; });
  if (stretchEl) stretchEl.addEventListener('input', e => { state.stretch = (+e.target.value)/100; if (stretchValEl) stretchValEl.textContent = Math.round(+e.target.value); });

  const api = {
    index, card, state,
    start(){ clearTimer(); scheduleNext(true); scheduleNext(false); },
    stop(){ clearTimer(); },
    setEnabled(v){ state.enabled=v; if (running && armed && v){ scheduleNext(true); scheduleNext(false);} },
    setVol(v){ state.vol=v; }, setPitch(v){ state.pitch=v; }, setDensity(v){ state.density=v; },
    soloOn(){ state.solo=true; muteBtn.disabled=true; applySoloMute(); },
    soloOff(){ state.solo=false; muteBtn.disabled=false; applySoloMute(); },
    muteOn(){ state.muted=true; applySoloMute(); },
    muteOff(){ state.muted=false; applySoloMute(); },
    nextNow(){ scheduleNext(true); }
  };

  enableEl.addEventListener('change', e=>api.setEnabled(e.target.checked));
  volEl.addEventListener('input', e=>api.setVol(+e.target.value));
  pitchEl.addEventListener('input', e=>api.setPitch(+e.target.value));
  densEl.addEventListener('input', e=>api.setDensity(+e.target.value));
  soloBtn.addEventListener('click', ()=>{ if(state.solo){ api.soloOff(); soloBtn.textContent='Solo'; } else { api.soloOn(); soloBtn.textContent='Unsolo'; } });
  muteBtn.addEventListener('click', ()=>{ if(state.muted){ api.muteOff(); muteBtn.textContent='Mute'; } else { api.muteOn(); muteBtn.textContent='Unmute'; } });
  nextBtn.addEventListener('click', ()=>api.nextNow());

  return api;
}

function applySoloMute(){
  const anySolo = engine.channels.some(c=>c.state.solo);
  engine.channels.forEach(ch => { ch.card.style.opacity = anySolo ? (ch.state.solo ? '1' : '0.6') : '1'; });
}

// ---------- Transport ----------
function startEngine(){
  if (!audioCtx) initAudio();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  running = true;
  btnStart.disabled = true; btnStop.disabled = false;
  statusEl.textContent = 'Running…';
  if (armed) engine.channels.forEach(ch => ch.start());
}
function stopEngine(){
  running = false;
  btnStart.disabled = false; btnStop.disabled = true;
  statusEl.textContent = 'Stopped.';
  engine.channels.forEach(ch => ch.stop());
}
function panic(){
  engine.allVoices.forEach(v => { try{ v.src ? v.src.stop(0) : 0; }catch(e){} });
  engine.allVoices.clear();
  statusEl.textContent = 'Panic: All voices silenced.';
}

// ---------- Global Wiring ----------
document.addEventListener('DOMContentLoaded', async () => {
  initAudio();
  function applySliceUi(){
    const syncOn = syncSlices.checked;
    if (syncRangeGroup) syncRangeGroup.style.display = syncOn ? '' : 'none';
    if (sliceMin) sliceMin.disabled = syncOn;
    if (sliceMax) sliceMax.disabled = syncOn;
    updateSliceModeHint();
  }
  [bpm, syncSlices, sliceMinNote, sliceMaxNote, sliceMin, sliceMax].forEach(el => {
    if (!el) return;
    el.addEventListener('input', applySliceUi);
    el.addEventListener('change', applySliceUi);
  });
  applySliceUi();

  for (let i=0;i<4;i++){ engine.channels.push(Channel(i)); }
  masterVol.addEventListener('input', e=>{ if(masterGain) masterGain.gain.value = +e.target.value; });
  reverbMix.addEventListener('input', e=>{ if(reverbGain) reverbGain.gain.value = +e.target.value; });

  btnStart.addEventListener('click', startEngine);
  btnStop.addEventListener('click', stopEngine);
  btnPanic.addEventListener('click', panic);
  btnArm.addEventListener('click', ()=>{
    armed = true;
    statusEl.textContent = 'Channels armed. Adjust and enjoy.';
    if (running) engine.channels.forEach(ch => ch.start());
  });
  btnRand.addEventListener('click', ()=>{
    engine.channels.forEach(ch => {
      const p = (Math.random()*24)-12;
      const v = 0.6 + Math.random()*0.4;
      const d = 0.35 + Math.random()*0.5;
      ch.setPitch(+p.toFixed(2));
      ch.setVol(+v.toFixed(3));
      ch.setDensity(+d.toFixed(3));
      $('.ch-pitch', ch.card).value = ch.state.pitch;
      $('.ch-vol', ch.card).value = ch.state.vol;
      $('.ch-density', ch.card).value = ch.state.density;
    });
    sliceMin.value = (0.3 + Math.random()*1.2).toFixed(1);
    sliceMax.value = (2.0 + Math.random()*5.0).toFixed(1);
    globalDensity.value = (0.4 + Math.random()*0.5).toFixed(3);
  });

  await preloadLibrary(SCRAP_URLS);
});
})();