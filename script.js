const GLOSSARY = [
  ["Asset","Something that puts money in your pocket every month without you lifting a finger. Dividend stocks, a rental, a piece of a business."],
  ["Liability","Something that takes money out of your pocket every month. A loan, a car payment, credit card debt. A car or a house you live in usually isn't an asset, it's a liability, because it costs you money to keep."],
  ["Cashflow","Income minus expenses. Positive means you've got money left over at the end of the month. Negative means you're sliding backward."],
  ["Passive income","Money that shows up whether or not you clocked in that day. Dividends, rent, royalties, profit from a business you don't run day to day."],
  ["Good debt vs bad debt","Good debt buys something that pays you more than the loan costs, like a rental or a business loan. Bad debt buys something that loses value and just costs you every month, like most credit card debt."],
  ["Diversification","Don't put all your eggs in one basket. Spread money across different investments so one bad outcome doesn't wipe you out."],
  ["Compound interest","Interest that earns interest on itself. Small amounts invested early can turn into a lot, because every year's gains start earning their own gains."],
  ["Emergency fund","Cash set aside, usually three to six months of expenses, so one surprise bill doesn't force you onto a credit card."],
  ["Net worth","Everything you own minus everything you owe. A better health check than income, since a big earner with big debt can still be worth less than zero."],
  ["Capital gain","Profit from selling something for more than you paid. Different from cashflow, which is money you collect while still holding the asset."],
];

const PROFESSIONS = [
  {key:"teacher", name:"Teacher", sub:"Steady paycheck, not much left over", salary:3200, cash:1200,
   expenses:{tax:640,home:900,car:380,credit:120,other:460}, liabilities:[]},
  {key:"engineer", name:"Engineer", sub:"Good pay, but the bills scale up too", salary:5400, cash:2400,
   expenses:{tax:1300,home:1500,car:480,credit:260,other:700}, liabilities:[{name:"Student loan",bal:18000,payment:210}]},
  {key:"doctor", name:"Doctor", sub:"Big salary, bigger overhead", salary:9200, cash:3500,
   expenses:{tax:2600,home:2400,car:650,credit:420,other:900}, liabilities:[{name:"Student loan",bal:60000,payment:640}]},
  {key:"founder", name:"Small business owner", sub:"Lean spender, thin safety net", salary:4000, cash:5200,
   expenses:{tax:600,home:1000,car:300,credit:150,other:400}, liabilities:[{name:"Business loan",bal:12000,payment:180}]},
  {key:"nurse", name:"Nurse", sub:"Dependable income, long shifts", salary:4100, cash:1800,
   expenses:{tax:750,home:1050,car:400,credit:150,other:520}, liabilities:[{name:"Student loan",bal:9000,payment:130}]},
  {key:"driver", name:"Rideshare driver", sub:"Flexible hours, unpredictable income", salary:2900, cash:900,
   expenses:{tax:400,home:850,car:520,credit:180,other:380}, liabilities:[{name:"Car loan",bal:11000,payment:260}]},
];

function totalExpenses(p){
  const e=p.expenses;
  const liabPay = p.liabilities.reduce((s,l)=>s+l.payment,0);
  return e.tax+e.home+e.car+e.credit+e.other+liabPay;
}

const BOARD = ["opportunity","market","payday","opportunity","chance","minigame",
  "opportunity","payday","minigame","chance","downsized","opportunity",
  "payday","market","doodad","opportunity","chance","payday","opportunity","minigame"];

const SPACE_META = {
  opportunity:{label:"DEAL", color:"#8A9B6E", icon:"deal"},
  doodad:{label:"OOPS", color:"#C4573F", icon:"doodad"},
  payday:{label:"PAY", color:"#E0A93B", icon:"pay"},
  market:{label:"MKT", color:"#5E85A6", icon:"market"},
  downsized:{label:"CUT", color:"#5C5C68", icon:"cut"},
  chance:{label:"LIFE", color:"#8677B3", icon:"chance"},
  minigame:{label:"PLAY", color:"#D9A441", icon:"game"},
};

const OPPORTUNITIES = [
  {name:"Index fund shares", cost:2000, cashflow:22,
   body:"You put money into a fund that owns tiny slices of hundreds of companies at once.",
   lesson:"Honestly this is the boring but smart move. You're not betting on one company doing well. You're betting that businesses in general keep growing, which historically they do. That's basically what diversification means, it's just spreading your risk around instead of going all in on one thing."},
  {name:"Rental duplex", cost:15000, cashflow:180, loanAmount:60000, loanPayment:420,
   body:"A small duplex near the university. You put down cash, take out a loan for the rest, and tenants' rent covers the loan payment with money left over.",
   lesson:"This is what people mean by good debt. You're borrowing money, sure, but the thing you bought pays more than the loan costs every month. Compare that to borrowing for something that just loses value the second you buy it. Same word, debt, completely different outcome."},
  {name:"Vending machine route", cost:4000, cashflow:70,
   body:"You buy eight vending machines already placed in offices around town. A management company restocks them.",
   lesson:"People hear passive income and picture stocks, but it can be way more random than that. A laundromat, vending machines, whatever. The real test isn't what it is, it's whether it still pays you if you go on vacation for a month."},
  {name:"Government bond", cost:1000, cashflow:6,
   body:"You lend money to the government and they pay you back with steady, unexciting interest.",
   lesson:"Not going to lie, this one's pretty boring. Low return, but also very low risk. Most people who actually build wealth long term hold a mix, some safe boring stuff like this, and some riskier stuff with higher upside. All eggs, one basket, bad idea."},
  {name:"Friend's coffee cart franchise", cost:6000, cashflow:95,
   body:"A friend is franchising her coffee cart business. Six thousand dollars buys you a cart and a cut of the profits, run by someone she hires.",
   lesson:"Buying into a friend's deal is exactly when you should still check the actual numbers instead of just trusting the vibe. Investors call that due diligence. Good friendships and good investments deserve to be checked separately."},
  {name:"Growth stock, no cashflow yet", cost:2500, cashflow:0, capitalGainOnly:true, saleMultiplier:1.8,
   body:"A fast growing company that reinvests every dollar of profit instead of paying you anything monthly.",
   lesson:"This one pays you nothing right now. The whole bet is that the company's worth way more later and you sell for a profit, a capital gain. That's a different game than the stuff that pays you monthly, and a riskier one, since you're relying on someone else wanting to buy it off you later at a higher price."},
  {name:"Peer-to-peer lending fund", cost:3000, cashflow:45,
   body:"You lend small amounts to a bunch of different borrowers through a platform that spreads your money across all of them.",
   lesson:"Higher return than a bond, because you're taking on the risk that some borrowers won't pay you back. Spreading it across many small loans instead of one big one is diversification again, showing up in a completely different kind of asset."},
  {name:"Self-storage units", cost:8000, cashflow:110, loanAmount:20000, loanPayment:230,
   body:"A small block of storage units on the edge of town, financed the same way as the duplex: cash down, loan for the rest, tenants cover the payment.",
   lesson:"Real estate doesn't have to mean houses. Storage units, parking lots, warehouses, they all work on the same idea: borrow to buy something that produces more income than the loan costs."},
  {name:"Royalties on a course you made", cost:1500, cashflow:35,
   body:"You put in the upfront work once, an online course, and it keeps selling copies without you doing anything new.",
   lesson:"This is what people mean when they say build something once, get paid repeatedly. The work happens up front. After that, it's closer to passive than almost anything else on this board."},
  {name:"Local laundromat", cost:9000, cashflow:140,
   body:"An existing laundromat, already running, already has customers. You buy it outright and hire someone part time to handle upkeep.",
   lesson:"Boring businesses are often the best cash-flowing ones precisely because nobody's excited about them, so the price isn't inflated by hype the way trendy investments sometimes are."},
];

const DOODADS = [
  {name:"Car needs new brakes", amount:400, lesson:"This is exactly why people keep an emergency fund. Cash just sitting there for moments like this, so a four hundred dollar surprise doesn't end up on a credit card racking up interest."},
  {name:"Phone screen shatters", amount:220, lesson:"None of these doodads are huge on their own, but they show up more often than you'd think. That's kind of the point of this space, the small stuff adds up over a year."},
  {name:"Weekend trip with friends", amount:350, lesson:"Nothing wrong with spending on fun, but every dollar spent is a dollar that isn't buying you an asset. Doesn't mean don't do it, just means it's worth noticing the trade off."},
  {name:"Medical co-pay", amount:180, lesson:"Health stuff is unpredictable by nature, which is basically the whole reason insurance and emergency funds exist in the first place."},
  {name:"Late fee on a forgotten bill", amount:75, lesson:"Seventy five dollars for forgetting to pay something on time, that's money for literally nothing. Autopay exists for exactly this reason."},
];

const MARKET_EVENTS = [
  {name:"Real estate boom", body:"Property values just jumped across town.",
   effect:"realestate_up", amount:2, lesson:"Nothing you did caused this. Markets just move in cycles sometimes for reasons that have nothing to do with you. Trying to perfectly time these swings is way harder than just holding good stuff for a long time."},
  {name:"Market dip", body:"Stock prices fell 15 percent this week on the news.",
   effect:"stocks_down", amount:0.85, lesson:"It only actually costs you money if you sell during the dip. A lot of people panic and sell low, then buy back in later once it feels safe again, which is exactly backwards."},
  {name:"Interest rates rise", body:"The central bank raised interest rates.",
   effect:"none", amount:0, lesson:"Higher rates make borrowing more expensive across the board, which is why loan payments on new debt, and some existing variable rate loans, can creep up after news like this."},
];

// Life events. Some help, some hurt, none of them are things you controlled,
// which is kind of the point: skill is how you're positioned when they land, not whether they happen.
const CHANCE_EVENTS = [
  {name:"Promotion at work", body:"Your manager pushes your raise through. Your salary goes up for good.",
   effect:"salary", amount:400, lesson:"A raise is basically a permanent asset upgrade to your paycheck. It's also the one deal on this board you can actually influence in real life, by asking for it, unlike almost everything else here."},
  {name:"Side hustle takes off", body:"A weekend project earned way more than expected this month.",
   effect:"cash", amount:600, lesson:"Extra income only turns into wealth if it goes toward assets instead of getting absorbed into slightly nicer everyday spending. What you do with a windfall matters more than the windfall itself."},
  {name:"Tax refund", body:"You overpaid taxes last year and the refund just landed.",
   effect:"cash", amount:450, lesson:"A refund isn't free money, it's your own money coming back late with zero interest. Some people prefer to adjust their withholding so they get it in each paycheck instead, where it could be earning something the whole year."},
  {name:"Distant relative leaves you a little money", body:"Not life-changing, but a nice surprise.",
   effect:"cash", amount:1200, lesson:"Windfalls like this are exactly when people either buy their first real asset or blow it in a month and have nothing to show for it. Same amount of money, very different outcomes."},
  {name:"Company cuts back on raises", body:"Budgets are tight this year and your pay stays flat instead of rising with inflation.",
   effect:"salary", amount:-150, lesson:"If prices rise but your pay doesn't, you're quietly getting poorer even though the number on your paycheck looks the same. That gap is exactly why building income outside a single job matters."},
  {name:"Minor lawsuit settled in your favor", body:"A dispute you almost forgot about finally paid out.",
   effect:"cash", amount:900, lesson:"Unpredictable income is still income. The habit of automatically directing some of any windfall toward an asset, before you can spend it, is what separates people who compound luck from people who just enjoy it once."},
  {name:"Random tax audit", body:"Nothing serious, but you owe a bit more than expected after review.",
   effect:"cash", amount:-350, lesson:"Bureaucratic surprises are annoying precisely because they're small and unpredictable, which is exactly the category of expense an emergency fund is built for."},
  {name:"Referral bonus", body:"A friend you referred for a job got hired, and the bonus lands in your account.",
   effect:"cash", amount:500, lesson:"Small, irregular income like this rarely gets budgeted for in advance, which is exactly why it tends to just evaporate. Deciding where it goes before it arrives is the whole trick."},
];

const STATS_KEY = "moneyrace_stats_v1";

function loadStats(){
  try{
    const raw = localStorage.getItem(STATS_KEY);
    if(!raw) return {gamesPlayed:0, bestTurns:null, bestNetWorth:null, recentTurns:[], achievements:[]};
    return JSON.parse(raw);
  }catch(e){
    return {gamesPlayed:0, bestTurns:null, bestNetWorth:null, recentTurns:[], achievements:[]};
  }
}
function saveStats(stats){
  try{ localStorage.setItem(STATS_KEY, JSON.stringify(stats)); }catch(e){}
}

// Each of these rewards a different strategy, not just "won the game",
// so replaying to chase a different badge naturally means playing differently.
const ACHIEVEMENTS = [
  {id:"debt_free", name:"Never Financed", desc:"Won without ever carrying credit card debt.",
   check:(s)=> !s.everWentIntoDebt},
  {id:"self_made", name:"Clean Sheet", desc:"Won with zero liabilities left, every loan paid off.",
   check:(s)=> s.liabilities.length===0 && s.cardDebt<=0},
  {id:"diversified", name:"Spread The Risk", desc:"Won holding assets in three or more different categories.",
   check:(s)=> new Set(s.assets.map(a=>a.category)).size>=3},
  {id:"fast_escape", name:"Quick Exit", desc:"Reached financial freedom in 15 turns or fewer.",
   check:(s)=> s.turns<=15},
  {id:"sharp_bidder", name:"Sharp Bidder", desc:"Won an auction with a lowball bid.",
   check:(s)=> !!s.wonLowballBid},
  {id:"reinvestor", name:"Compounder", desc:"Upgraded the same asset to its max level.",
   check:(s)=> s.assets.some(a=>a.upgrades>=3)},
  {id:"hard_mode_win", name:"No Easy Mode", desc:"Won a game on hard mode.",
   check:(s)=> !!s.hardMode},
];

function renderStatsPanel(){
  const stats = loadStats();
  const mount = document.getElementById('modalMount');
  const trend = stats.recentTurns.length>=2
    ? (stats.recentTurns[stats.recentTurns.length-1] <= stats.recentTurns[0] ? "trending faster" : "trending slower")
    : "not enough runs yet";
  const badgeHtml = ACHIEVEMENTS.map(a=>{
    const unlocked = stats.achievements.includes(a.id);
    return `<div style="display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-top:1px dashed rgba(0,0,0,0.15);opacity:${unlocked?'1':'0.4'};">
      <div style="width:10px;height:10px;border-radius:50%;margin-top:5px;flex-shrink:0;background:${unlocked?'var(--green-3)':'var(--ink-soft)'};"></div>
      <div><div style="font-weight:700;font-size:0.9rem;">${a.name}</div><div style="font-size:0.78rem;color:var(--ink-soft);">${a.desc}</div></div>
    </div>`;
  }).join('');
  mount.innerHTML = `
    <div class="overlay">
      <div class="cardmodal" style="max-width:440px;">
        <div class="ribbon">your progress</div>
        <div class="cbody">
          <h3>Stats and badges</h3>
          <div class="cardnums" style="margin-bottom:16px;">
            <div class="numchip">Games played<b>${stats.gamesPlayed}</b></div>
            <div class="numchip">Best turns<b>${stats.bestTurns ?? "-"}</b></div>
            <div class="numchip">Best net worth<b>${stats.bestNetWorth!=null ? "$"+stats.bestNetWorth.toLocaleString() : "-"}</b></div>
          </div>
          <div style="font-family:var(--mono);font-size:0.76rem;color:var(--ink-soft);margin-bottom:16px;">${trend}</div>
          <div style="max-height:280px;overflow-y:auto;">${badgeHtml}</div>
          <div class="modalbtns" style="margin-top:18px;"><button class="buyb" id="closeStats">Close</button></div>
        </div>
      </div>
    </div>`;
  document.getElementById('closeStats').addEventListener('click', ()=>{ mount.innerHTML=''; });
}
document.getElementById('statsBtn').addEventListener('click', renderStatsPanel);

let state = null;
let currentProf = null;

function newState(p, hardMode){
  const scale = hardMode ? 1.25 : 1;
  const scaledExpenses = {};
  Object.keys(p.expenses).forEach(k=> scaledExpenses[k] = Math.round(p.expenses[k]*scale));
  return {
    profession:p, cash:p.cash, salary:p.salary, baseExpenses:scaledExpenses,
    liabilities: p.liabilities.map(l=>({...l})), assets:[], pos:0,
    won:false, cardDebt:0, hardMode:!!hardMode,
    turns:0, everWentIntoDebt:false, wonLowballBid:false,
  };
}
function totalMonthlyExpenses(s){
  const e=s.baseExpenses;
  const liabPay = s.liabilities.reduce((sum,l)=>sum+l.payment,0);
  return e.tax+e.home+e.car+e.credit+e.other+liabPay;
}
function totalAssetsValue(s){ return s.assets.reduce((sum,a)=>sum+a.currentValue,0); }
function totalLiabBalance(s){ return s.liabilities.reduce((sum,l)=>sum+l.bal,0) + s.cardDebt; }
function netWorth(s){ return s.cash + totalAssetsValue(s) - totalLiabBalance(s); }
// Passive income is computed fresh from your actual holdings every time,
// so selling, upgrading, or category bonuses are always reflected correctly.
// Owning two or more assets in the same category gets a synergy bonus,
// this rewards specializing a little instead of collecting one of everything.
function computePassive(s){
  const byCat = {};
  const countByCat = {};
  s.assets.forEach(a=>{
    byCat[a.category] = (byCat[a.category]||0) + a.cashflow;
    countByCat[a.category] = (countByCat[a.category]||0) + 1;
  });
  let total = 0;
  Object.keys(byCat).forEach(cat=>{
    const mult = countByCat[cat] >= 2 ? 1.15 : 1;
    total += byCat[cat]*mult;
  });
  return Math.round(total);
}
function cashflow(s){ return (s.salary + computePassive(s)) - totalMonthlyExpenses(s); }

// If cash can't cover a cost, the shortfall goes on a credit card instead of vanishing.
// This makes debt visible and something you have to manage, not just a random punishment.
function chargeToCashOrDebt(amount, label){
  if(state.cash >= amount){
    state.cash -= amount;
    return {wentToDebt:false, debtAmount:0};
  }
  const shortfall = amount - state.cash;
  state.cash = 0;
  state.cardDebt += shortfall;
  state.everWentIntoDebt = true;
  return {wentToDebt:true, debtAmount:shortfall};
}
function payDownDebt(amount){
  const pay = Math.min(amount, state.cash, state.cardDebt);
  state.cash -= pay;
  state.cardDebt -= pay;
  return pay;
}

const jobzone = document.getElementById('jobzone');

function renderJobCard(p){
  const exp = totalExpenses(p);
  const cf = p.salary - exp;
  currentProf = p;
  jobzone.innerHTML = `
    <div class="jobcard">
      <div class="tag">Your job</div>
      <h3>${p.name}</h3>
      <div class="sub">${p.sub}</div>
      <div class="profrow"><span>Salary</span><b>$${p.salary.toLocaleString()}/mo</b></div>
      <div class="profrow"><span>Expenses</span><b>$${exp.toLocaleString()}/mo</b></div>
      <div class="profrow"><span>Starting cash</span><b>$${p.cash.toLocaleString()}</b></div>
      <div class="profrow cf"><span>Job cashflow</span><b>$${cf.toLocaleString()}/mo</b></div>
    </div>
    <div class="startwrap">
      <button class="startbtn" id="startBtn">Start playing</button>
      <button class="rerollbtn" id="rerollBtn">Try a different job</button>
    </div>
  `;
  document.getElementById('startBtn').addEventListener('click', beginGame);
  document.getElementById('rerollBtn').addEventListener('click', shuffleJob);
}

function shuffleJob(){
  const p = PROFESSIONS[Math.floor(Math.random()*PROFESSIONS.length)];
  renderJobCard(p);
}

document.getElementById('shuffleBtn').addEventListener('click', shuffleJob);

function beginGame(){
  const hardMode = document.getElementById('hardModeToggle').checked;
  state = newState(currentProf, hardMode);
  document.getElementById('setup').style.display='none';
  document.getElementById('game').style.display='block';
  document.getElementById('whoName').textContent = currentProf.name;
  document.getElementById('whoRole').textContent = 'turn 0, just getting started';
  buildBoard();
  setDieFace(1);
  renderAll();
  log(`You're starting out as a ${currentProf.name} with $${currentProf.cash.toLocaleString()} cash and $${(currentProf.salary-totalExpenses(currentProf)).toLocaleString()}/mo left over from your job.`);
}

const glossaryList = document.getElementById('glossaryList');
GLOSSARY.forEach(([term,def])=>{
  const d=document.createElement('div'); d.className='gterm';
  d.innerHTML=`<h4>${term}</h4><p>${def}</p>`;
  glossaryList.appendChild(d);
});
document.getElementById('openGlossary').addEventListener('click',()=>document.getElementById('glossary').classList.add('open'));
document.getElementById('closeGlossary').addEventListener('click',()=>document.getElementById('glossary').classList.remove('open'));

const PIP_LAYOUTS = {
  1:[5],
  2:[1,9],
  3:[1,5,9],
  4:[1,3,7,9],
  5:[1,3,5,7,9],
  6:[1,3,4,6,7,9],
};
function setDieFace(n){
  const die = document.getElementById('die1');
  die.innerHTML='';
  for(let i=1;i<=9;i++){
    const p=document.createElement('div');
    p.className='pip'+(PIP_LAYOUTS[n].includes(i)?' on':'');
    die.appendChild(p);
  }
}

function iconPath(kind){
  switch(kind){
    case 'deal':
      return '<path d="M-6,5 L-6,-2 L-2,-2 L-2,5 Z M-1,5 L-1,-6 L3,-6 L3,5 Z M4,5 L4,1 L8,1 L8,5 Z" fill="#12211B"/>';
    case 'doodad':
      return '<path d="M0,-7 L2,1 L-2,1 Z" fill="#12211B"/><circle cx="0" cy="4.5" r="1.4" fill="#12211B"/>';
    case 'pay':
      return '<circle cx="0" cy="0" r="6" fill="none" stroke="#12211B" stroke-width="1.3"/><text x="0" y="3" text-anchor="middle" font-size="7" font-family="JetBrains Mono" fill="#12211B">$</text>';
    case 'market':
      return '<path d="M-7,4 L-3,-1 L0,2 L3,-5 L7,-1" fill="none" stroke="#12211B" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>';
    case 'cut':
      return '<path d="M0,-6 L0,4 M-3,1 L0,4 L3,1" fill="none" stroke="#12211B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
    case 'chance':
      return '<path d="M0,-7 L1.8,-2.3 L7,-2.1 L2.8,1.2 L4.3,6.2 L0,3.1 L-4.3,6.2 L-2.8,1.2 L-7,-2.1 L-1.8,-2.3 Z" fill="#12211B"/>';
    case 'game':
      return '<path d="M1.5,-7 L-5,1.5 L-0.5,1.5 L-1.5,7 L5,-1.5 L0.5,-1.5 Z" fill="#12211B"/>';
    default: return '';
  }
}

const svgNS = "http://www.w3.org/2000/svg";
let spaceCoords = [];

function buildBoard(){
  const svg = document.getElementById('boardsvg');
  svg.innerHTML='';
  const N = BOARD.length;
  const cx=200, cy=200, r=172;
  spaceCoords = [];

  const ringShadow = document.createElementNS(svgNS,'circle');
  ringShadow.setAttribute('cx',cx); ringShadow.setAttribute('cy',cy); ringShadow.setAttribute('r',r+21);
  ringShadow.setAttribute('fill','none'); ringShadow.setAttribute('stroke','rgba(0,0,0,0.15)');
  ringShadow.setAttribute('stroke-width','24');
  svg.appendChild(ringShadow);

  const trackBand = document.createElementNS(svgNS,'circle');
  trackBand.setAttribute('cx',cx); trackBand.setAttribute('cy',cy); trackBand.setAttribute('r',r);
  trackBand.setAttribute('fill','none'); trackBand.setAttribute('stroke','#D8CDA6');
  trackBand.setAttribute('stroke-width','20');
  svg.appendChild(trackBand);

  const trackBandInner = document.createElementNS(svgNS,'circle');
  trackBandInner.setAttribute('cx',cx); trackBandInner.setAttribute('cy',cy); trackBandInner.setAttribute('r',r);
  trackBandInner.setAttribute('fill','none'); trackBandInner.setAttribute('stroke','rgba(27,42,34,0.25)');
  trackBandInner.setAttribute('stroke-width','1');
  svg.appendChild(trackBandInner);

  for(let i=0;i<N;i++){
    const angle = (i/N)*2*Math.PI - Math.PI/2;
    const x = cx + r*Math.cos(angle);
    const y = cy + r*Math.sin(angle);
    spaceCoords.push({x,y});
    const meta = SPACE_META[BOARD[i]];
    const g = document.createElementNS(svgNS,'g');
    g.setAttribute('transform',`translate(${x},${y})`);

    const shadow = document.createElementNS(svgNS,'circle');
    shadow.setAttribute('r','16'); shadow.setAttribute('cy','1.5');
    shadow.setAttribute('fill','rgba(0,0,0,0.2)');
    g.appendChild(shadow);

    const circle = document.createElementNS(svgNS,'circle');
    circle.setAttribute('r','15.5');
    circle.setAttribute('fill',meta.color);
    circle.setAttribute('stroke','#12211B');
    circle.setAttribute('stroke-width','1.4');
    g.appendChild(circle);

    const highlight = document.createElementNS(svgNS,'circle');
    highlight.setAttribute('r','15.5'); highlight.setAttribute('fill','none');
    highlight.setAttribute('stroke','rgba(255,255,255,0.35)'); highlight.setAttribute('stroke-width','2');
    highlight.setAttribute('stroke-dasharray','24 80');
    highlight.setAttribute('transform','rotate(-40)');
    g.appendChild(highlight);

    const iconG = document.createElementNS(svgNS,'g');
    iconG.innerHTML = iconPath(meta.icon);
    g.appendChild(iconG);

    svg.appendChild(g);
  }

  const token = document.createElementNS(svgNS,'g');
  token.setAttribute('id','token');
  const c0 = spaceCoords[0];
  token.setAttribute('transform',`translate(${c0.x},${c0.y-28})`);
  token.innerHTML = `
    <ellipse cx="0" cy="12" rx="9" ry="3" fill="rgba(0,0,0,0.3)"/>
    <path d="M0,10 C-8,10 -9,-2 -6,-9 C-4,-13 4,-13 6,-9 C9,-2 8,10 0,10 Z" fill="#E0A93B" stroke="#12211B" stroke-width="1.3"/>
    <circle cx="0" cy="-11" r="4.2" fill="#F3EEDF" stroke="#12211B" stroke-width="1.3"/>
  `;
  svg.appendChild(token);
}

function moveTokenTo(i){
  const c = spaceCoords[i];
  const token = document.getElementById('token');
  token.style.transition = 'transform .45s ease';
  token.setAttribute('transform',`translate(${c.x},${c.y-28})`);
}

const rollBtn = document.getElementById('rollBtn');
rollBtn.addEventListener('click', doRoll);

function doRoll(){
  rollBtn.disabled=true;
  state.turns += 1;
  const dieEl = document.getElementById('die1');
  dieEl.classList.add('rolling');
  let ticks=0;
  const iv = setInterval(()=>{
    setDieFace(1+Math.floor(Math.random()*6));
    ticks++;
    if(ticks>7){
      clearInterval(iv);
      dieEl.classList.remove('rolling');
      const roll = 1+Math.floor(Math.random()*6);
      setDieFace(roll);
      advance(roll);
    }
  },70);
}

function advance(steps){
  let i=0;
  const iv = setInterval(()=>{
    state.pos = (state.pos+1) % BOARD.length;
    moveTokenTo(state.pos);
    i++;
    if(i>=steps){
      clearInterval(iv);
      landOn(state.pos);
    }
  },170);
}

function landOn(i){
  const type = BOARD[i];
  if(type==='opportunity') showOpportunity();
  else if(type==='doodad') showDoodad();
  else if(type==='payday') doPayday();
  else if(type==='market') showMarket();
  else if(type==='downsized') doDownsized();
  else if(type==='chance') showChance();
  else if(type==='minigame') showMinigame();
  renderAll();
}

function log(msg, isLesson){
  const el = document.getElementById('turnlog');
  const d = document.createElement('div');
  if(isLesson) d.className='lesson';
  d.textContent = msg;
  el.prepend(d);
}

function endTurn(){
  checkWin();
  rollBtn.disabled=false;
}

function doPayday(){
  const cf = cashflow(state);
  state.cash += (state.salary + computePassive(state));
  const result = chargeToCashOrDebt(totalMonthlyExpenses(state), "expenses");
  let msg = `Payday. Salary and passive income landed, expenses went out. Net ${cf>=0?'+':''}$${cf}.`;
  if(result.wentToDebt){
    msg += ` You came up short by $${result.debtAmount}, so that much went on the credit card.`;
  }
  if(state.cardDebt > 0){
    const rate = state.hardMode ? 0.05 : 0.03;
    const interest = Math.round(state.cardDebt * rate);
    state.cardDebt += interest;
    msg += ` Card balance grew by $${interest} in interest.`;
  }
  log(msg);
  endTurn();
}

function doDownsized(){
  // Only the fixed cost of living hits you here, not loan payments,
  // since a missed loan payment would be its own separate problem in real life.
  const e = state.baseExpenses;
  const livingCosts = e.tax + e.home + e.car + e.credit + e.other;
  const result = chargeToCashOrDebt(livingCosts, "living costs");
  let msg = `Downsized. No paycheck this round, but $${livingCosts} of bills still came due.`;
  if(result.wentToDebt){
    msg += ` You didn't have the cash for all of it, so $${result.debtAmount} went on the credit card instead.`;
  } else {
    msg += ` Your cash cushion covered it.`;
  }
  log(msg);
  log("This is exactly why a cash cushion matters. The people who get hurt worst by a job loss are the ones with nothing saved, not the ones who lose the job.", true);
  endTurn();
}

function showMarket(){
  const ev = MARKET_EVENTS[Math.floor(Math.random()*MARKET_EVENTS.length)];
  let extra='';
  if(ev.effect==='realestate_up'){
    let gained=0;
    state.assets.forEach(a=>{ if(a.category==='realestate'){ a.currentValue = Math.round(a.currentValue*ev.amount); gained++; } });
    extra = gained? ` Your ${gained} real estate asset(s) just went up in value.` : " You don't own any real estate yet, so this one doesn't touch you.";
  } else if(ev.effect==='stocks_down'){
    let hit=0;
    state.assets.forEach(a=>{ if(a.category==='stock'){ a.currentValue = Math.round(a.currentValue*ev.amount); hit++; } });
    extra = hit? ` Your ${hit} stock asset(s) dropped on paper.` : " You don't own any stocks yet, so no effect on your sheet.";
  }
  openModal({
    ribbon:"market news", icon:"market", title:ev.name, body:ev.body+extra, lesson:ev.lesson, buyLabel:null,
    onPass:()=>{ closeModal(); endTurn(); renderAll(); }
  });
}

function showChance(){
  const ev = CHANCE_EVENTS[Math.floor(Math.random()*CHANCE_EVENTS.length)];
  let extra = '';
  if(ev.effect==='salary'){
    state.salary += ev.amount;
    extra = ev.amount>=0 ? ` Salary up $${ev.amount}/mo.` : ` Salary down $${Math.abs(ev.amount)}/mo.`;
  } else if(ev.effect==='cash'){
    if(ev.amount>=0){ state.cash += ev.amount; extra = ` $${ev.amount} landed in your cash.`; }
    else { chargeToCashOrDebt(Math.abs(ev.amount), ev.name); extra = ` $${Math.abs(ev.amount)} came out, from cash or the card if cash was short.`; }
  }
  openModal({
    ribbon:"life happens", icon:"chance", title:ev.name, body:ev.body+extra, lesson:ev.lesson, buyLabel:null,
    onPass:()=>{ closeModal(); endTurn(); renderAll(); }
  });
}

function showDoodad(){
  const d = DOODADS[Math.floor(Math.random()*DOODADS.length)];
  openModal({
    ribbon:"unplanned expense", icon:"doodad", title:d.name,
    body:`This one costs you $${d.amount}. It comes out of cash if you have it.`,
    lesson:d.lesson, buyLabel:null,
    onPass:()=>{
      const result = chargeToCashOrDebt(d.amount, d.name);
      let msg = `Doodad: ${d.name}, $${d.amount} gone.`;
      if(result.wentToDebt) msg += ` $${result.debtAmount} of that went on the credit card since cash ran short.`;
      log(msg);
      closeModal(); endTurn(); renderAll();
    }
  });
}

function buyAsset(o, pricePaid){
  const price = (pricePaid!=null) ? pricePaid : o.cost;
  state.cash -= price;
  let category='other';
  if(o.name.toLowerCase().includes('duplex')) category='realestate';
  if(o.name.toLowerCase().includes('stock')||o.name.toLowerCase().includes('fund')) category='stock';
  const asset = {
    name:o.name, currentValue:o.cost, cashflow:o.cashflow||0, category,
    capitalGainOnly:!!o.capitalGainOnly, saleMultiplier:o.saleMultiplier||1,
    loanName: o.loanAmount ? (o.name+" loan") : null,
    upgrades:0, baseCashflow:o.cashflow||0, baseCost:price
  };
  state.assets.push(asset);
  if(o.loanAmount){
    state.liabilities.push({name:o.name+" loan", bal:o.loanAmount, payment:o.loanPayment});
  }
  let msg = `You bought ${o.name} for $${price.toLocaleString()}. Passive income up $${o.cashflow||0}/mo.`;
  if(price < o.cost){
    msg += ` You paid under the true value of $${o.cost.toLocaleString()}, so you're already ahead if you sold today.`;
  }
  log(msg);
  closeModal(); endTurn(); renderAll();
}

function dealChips(o){
  const chips = [];
  chips.push(`<div class="numchip">Cost<b>$${o.cost.toLocaleString()}</b></div>`);
  if(o.cashflow>0) chips.push(`<div class="numchip">Cashflow<b>+$${o.cashflow}/mo</b></div>`);
  if(o.loanAmount) chips.push(`<div class="numchip">Loan<b>$${o.loanAmount.toLocaleString()} at $${o.loanPayment}/mo</b></div>`);
  if(o.capitalGainOnly) chips.push(`<div class="numchip">Type<b>Growth, no cashflow</b></div>`);
  return chips.join('');
}

// This deal is going to auction, same as Monopoly's unbought-property auction.
// You choose how hard to bid. Lowball it and you might lose the deal entirely.
// Overpay and you're guaranteed it, but you've eaten into your own return.
// That tension, not the dice, is the actual skill here.
const BID_OPTIONS = [
  {label:"Lowball", mult:0.7, winChance:0.35, tag:"risky, cheap"},
  {label:"Fair offer", mult:1.0, winChance:0.75, tag:"balanced"},
  {label:"Aggressive", mult:1.3, winChance:0.97, tag:"safe, pricier"},
];

function showOpportunity(){
  const raw = OPPORTUNITIES[Math.floor(Math.random()*OPPORTUNITIES.length)];
  const priceScale = state.hardMode ? 1.3 : 1;
  const o = {...raw, cost: Math.round(raw.cost*priceScale)};
  const mount = document.getElementById('modalMount');

  function renderBidScreen(){
    const optionsHtml = BID_OPTIONS.map((b,i)=>{
      const price = Math.round(o.cost*b.mult);
      const afford = state.cash>=price;
      return `
        <button class="bidBtn" data-i="${i}" style="flex:1;min-width:140px;padding:12px 10px;border-radius:12px;border:1px solid rgba(0,0,0,0.15);background:${afford?'#fff':'rgba(0,0,0,0.04)'};cursor:${afford?'pointer':'not-allowed'};text-align:left;" ${afford?'':'disabled'}>
          <div style="font-weight:700;font-size:0.92rem;">${b.label}</div>
          <div style="font-family:var(--mono);font-size:0.78rem;color:var(--ink-soft);margin-top:4px;">$${price.toLocaleString()}, ${Math.round(b.winChance*100)}% chance</div>
        </button>`;
    }).join('');

    mount.innerHTML = `
      <div class="overlay" id="ov">
        <div class="cardmodal">
          <div class="ribbon">deal going to auction</div>
          <div class="cbody">
            <h3>${o.name}</h3>
            <div class="body">${o.body}</div>
            <div class="cardnums">${dealChips(o)}</div>
            <div class="lessonbox"><span class="who">worth knowing</span>${o.lesson}</div>
            <div style="font-family:var(--mono);font-size:0.72rem;color:var(--ink-soft);margin-bottom:10px;">true value is $${o.cost.toLocaleString()}. bid your price:</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">${optionsHtml}</div>
            <div class="modalbtns"><button class="passb" id="passAuction">Walk away</button></div>
          </div>
        </div>
      </div>`;
    mount.querySelectorAll('.bidBtn').forEach(btn=>{
      if(btn.disabled) return;
      btn.addEventListener('click', ()=>{
        const b = BID_OPTIONS[parseInt(btn.dataset.i,10)];
        const price = Math.round(o.cost*b.mult);
        const won = Math.random() < b.winChance;
        renderResultScreen(b, price, won);
      });
    });
    document.getElementById('passAuction').addEventListener('click',()=>{
      log(`You walked away from ${o.name}.`);
      closeModal(); endTurn();
    });
  }

  function renderResultScreen(b, price, won){
    mount.innerHTML = `
      <div class="overlay">
        <div class="cardmodal">
          <div class="ribbon">${won?'deal won':'outbid'}</div>
          <div class="cbody">
            <h3>${won? 'You got it' : 'Someone else bid higher'}</h3>
            <div class="body">${won
              ? `Your ${b.label.toLowerCase()} bid of $${price.toLocaleString()} for ${o.name} came through.`
              : `Your ${b.label.toLowerCase()} bid of $${price.toLocaleString()} for ${o.name} wasn't enough this time.`}</div>
            <div class="modalbtns"><button class="buyb" id="okBtn">Continue</button></div>
          </div>
        </div>
      </div>`;
    document.getElementById('okBtn').addEventListener('click', ()=>{
      if(won){
        if(b.label==="Lowball") state.wonLowballBid = true;
        buyAsset(o, price);
      } else {
        log(`You were outbid on ${o.name} after offering $${price.toLocaleString()}.`);
        closeModal(); endTurn();
      }
    });
  }

  renderBidScreen();
}

function sellAsset(idx){
  const a = state.assets[idx];
  if(!a) return;
  let proceeds = a.currentValue;
  let msg = `You sold ${a.name} for $${Math.round(proceeds).toLocaleString()}.`;
  if(a.loanName){
    const li = state.liabilities.findIndex(l=>l.name===a.loanName);
    if(li>=0){
      const owed = state.liabilities[li].bal;
      proceeds -= owed;
      msg += ` $${Math.round(owed).toLocaleString()} of that paid off the linked loan.`;
      state.liabilities.splice(li,1);
    }
  }
  if(proceeds >= 0){
    state.cash += proceeds;
  } else {
    chargeToCashOrDebt(-proceeds, a.name+" shortfall");
    msg += ` The loan was bigger than the sale price, so the difference went on the credit card.`;
  }
  state.assets.splice(idx,1);
  log(msg);
  renderAll();
}

// Paying off a loan early permanently lowers your monthly expenses,
// which is one of the fastest ways to reach the passive income goal.
function payOffLiability(idx){
  const l = state.liabilities[idx];
  if(!l || state.cash < l.bal) return;
  state.cash -= l.bal;
  log(`You paid off ${l.name} completely. That's $${l.payment}/mo you don't owe anymore.`);
  state.liabilities.splice(idx,1);
  renderAll();
}

// Reinvesting in something you already own instead of always buying new is
// its own skill. Each upgrade costs more than the last and boosts that asset's
// own cashflow, capped so it can't be improved forever.
function improveCost(a){
  return Math.round(a.baseCost * 0.35 * (a.upgrades+1));
}
function improveAsset(idx){
  const a = state.assets[idx];
  if(!a || a.upgrades>=3) return;
  const cost = improveCost(a);
  if(state.cash < cost) return;
  state.cash -= cost;
  const bump = Math.round(a.baseCashflow * 0.4);
  a.cashflow += bump;
  a.upgrades += 1;
  log(`You reinvested $${cost.toLocaleString()} into ${a.name}. Its cashflow is now $${a.cashflow}/mo.`);
  renderAll();
}

// Four quick minigames live on the "PLAY" space. All are short, skill based,
// and pay out a cash bonus based on how well you actually do, not luck.
// They exist to make a few ideas (prioritizing bills, knowing the vocab,
// the cost of waiting on debt, how hard market timing really is) stick
// through repetition and a bit of time pressure, not more reading.

function showMinigame(){
  const games = [showBudgetBlitz, showTermSprint, showDebtClock, showMarketTiming];
  games[Math.floor(Math.random()*games.length)]();
}

const ESSENTIAL_POOL = [
  {name:"Rent", amt:900}, {name:"Taxes", amt:600}, {name:"Car payment", amt:350},
  {name:"Insurance", amt:180}, {name:"Utilities", amt:140},
];
const OPTIONAL_POOL = [
  {name:"Dining out", amt:80}, {name:"New shoes", amt:60}, {name:"Streaming", amt:15},
  {name:"Coffee runs", amt:25}, {name:"Concert ticket", amt:120}, {name:"Video game", amt:50},
];

function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }

function showBudgetBlitz(){
  const essentials = shuffle(ESSENTIAL_POOL).slice(0,3);
  const optionals = shuffle(OPTIONAL_POOL).slice(0,3);
  const tiles = shuffle([
    ...essentials.map(t=>({...t, essential:true})),
    ...optionals.map(t=>({...t, essential:false})),
  ]);
  const startPool = essentials.reduce((s,t)=>s+t.amt,0) + 180;
  let pool = startPool;
  let paid = new Set();
  let essentialsPaid = 0;
  let timeLeft = 8000;
  let timerHandle = null;
  const mount = document.getElementById('modalMount');

  function render(){
    const tilesHtml = tiles.map((t,i)=>{
      const isPaid = paid.has(i);
      const afford = pool>=t.amt;
      return `<button class="bbTile" data-i="${i}" ${isPaid||!afford?'disabled':''}
        style="padding:12px 8px;border-radius:10px;border:1px solid rgba(0,0,0,0.15);
        background:${isPaid?'var(--green-3)':(afford?'#fff':'rgba(0,0,0,0.05)')};
        color:${isPaid?'#fff':'var(--ink)'};cursor:${isPaid||!afford?'default':'pointer'};text-align:left;">
        <div style="font-weight:700;font-size:0.85rem;">${t.name}${t.essential?' *':''}</div>
        <div style="font-family:var(--mono);font-size:0.78rem;margin-top:3px;">$${t.amt}</div>
      </button>`;
    }).join('');
    mount.innerHTML = `
      <div class="overlay">
        <div class="cardmodal" style="max-width:480px;">
          <div class="ribbon">quick game: budget blitz</div>
          <div class="cbody">
            <h3>Cover your bills before time runs out</h3>
            <div class="body">You've got $${pool.toLocaleString()} left. Items marked with * are essential, pay those first if you can, everything else is optional.</div>
            <div style="height:8px;background:rgba(0,0,0,0.1);border-radius:5px;overflow:hidden;margin-bottom:14px;">
              <div id="bbTimerBar" style="height:100%;width:100%;background:var(--rust);transition:width 0.1s linear;"></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px;">${tilesHtml}</div>
            <div class="modalbtns"><button class="passb" id="bbQuit">End early</button></div>
          </div>
        </div>
      </div>`;
    mount.querySelectorAll('.bbTile').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const i = parseInt(btn.dataset.i,10);
        const t = tiles[i];
        if(paid.has(i) || pool<t.amt) return;
        pool -= t.amt;
        paid.add(i);
        if(t.essential) essentialsPaid++;
        render();
        if(paid.size===tiles.length) finish();
      });
    });
    document.getElementById('bbQuit').addEventListener('click', finish);
  }

  function finish(){
    if(timerHandle) clearInterval(timerHandle);
    const allEssentialsPaid = essentialsPaid===essentials.length;
    const bonus = allEssentialsPaid ? pool : Math.round(pool*0.25);
    state.cash += bonus;
    const lesson = allEssentialsPaid
      ? "Paying the essentials first, then deciding what's left over for wants, is basically the whole game of budgeting. You just did it under a clock."
      : "When you run out of time or money, the essentials should get paid first. Missing rent to afford a video game is a real trap people fall into when things feel tight.";
    mount.innerHTML = `
      <div class="overlay">
        <div class="cardmodal" style="max-width:440px;">
          <div class="ribbon">round over</div>
          <div class="cbody">
            <h3>${allEssentialsPaid? 'All essentials covered' : 'Some essentials went unpaid'}</h3>
            <div class="body">You picked up a $${bonus.toLocaleString()} bonus.</div>
            <div class="lessonbox"><span class="who">worth knowing</span>${lesson}</div>
            <div class="modalbtns"><button class="buyb" id="bbDone">Continue</button></div>
          </div>
        </div>
      </div>`;
    document.getElementById('bbDone').addEventListener('click', ()=>{
      log(`Budget Blitz: picked up a $${bonus.toLocaleString()} bonus.`);
      closeModal(); endTurn(); renderAll();
    });
  }

  render();
  timerHandle = setInterval(()=>{
    timeLeft -= 100;
    const bar = document.getElementById('bbTimerBar');
    if(bar) bar.style.width = Math.max(0,(timeLeft/8000)*100)+'%';
    if(timeLeft<=0) finish();
  },100);
}

const TERM_BANK = [
  {term:"Asset", def:"Something that pays you money every month without extra work."},
  {term:"Liability", def:"Something that costs you money every month to keep."},
  {term:"Cashflow", def:"Income minus expenses."},
  {term:"Passive income", def:"Money that shows up whether or not you worked that day."},
  {term:"Diversification", def:"Spreading money across different investments so one bad outcome doesn't wipe you out."},
  {term:"Compound interest", def:"Interest that earns interest on itself over time."},
  {term:"Emergency fund", def:"Cash set aside for a surprise bill so it doesn't become debt."},
  {term:"Net worth", def:"Everything you own minus everything you owe."},
  {term:"Capital gain", def:"Profit from selling something for more than you paid."},
  {term:"Good debt", def:"Borrowing for something that pays you more than the loan costs."},
];

function showTermSprint(){
  const rounds = shuffle(TERM_BANK).slice(0,5);
  let idx = 0;
  let correctCount = 0;
  let timerHandle = null;
  const mount = document.getElementById('modalMount');

  function nextRound(){
    if(idx>=rounds.length) return finish();
    const q = rounds[idx];
    const wrongDefs = shuffle(TERM_BANK.filter(t=>t.term!==q.term)).slice(0,2).map(t=>t.def);
    const choices = shuffle([q.def, ...wrongDefs]);
    let timeLeft = 5000;
    let answered = false;

    function render(){
      const choicesHtml = choices.map((c,i)=>`
        <button class="tsChoice" data-c="${i}" style="width:100%;text-align:left;padding:12px 14px;margin-bottom:8px;
          border-radius:10px;border:1px solid rgba(0,0,0,0.15);background:#fff;cursor:pointer;font-size:0.85rem;">${c}</button>
      `).join('');
      mount.innerHTML = `
        <div class="overlay">
          <div class="cardmodal" style="max-width:460px;">
            <div class="ribbon">quick game: term sprint, ${idx+1} of ${rounds.length}</div>
            <div class="cbody">
              <h3>${q.term}</h3>
              <div class="body">Which definition is right?</div>
              <div style="height:8px;background:rgba(0,0,0,0.1);border-radius:5px;overflow:hidden;margin-bottom:14px;">
                <div id="tsTimerBar" style="height:100%;width:100%;background:var(--rust);transition:width 0.1s linear;"></div>
              </div>
              <div>${choicesHtml}</div>
            </div>
          </div>
        </div>`;
      mount.querySelectorAll('.tsChoice').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          if(answered) return;
          answered = true;
          clearInterval(timerHandle);
          const picked = choices[parseInt(btn.dataset.c,10)];
          if(picked===q.def) correctCount++;
          btn.style.background = picked===q.def ? 'var(--green-3)' : 'var(--rust)';
          btn.style.color = '#fff';
          setTimeout(()=>{ idx++; nextRound(); }, 500);
        });
      });
    }
    render();
    timerHandle = setInterval(()=>{
      timeLeft -= 100;
      const bar = document.getElementById('tsTimerBar');
      if(bar) bar.style.width = Math.max(0,(timeLeft/5000)*100)+'%';
      if(timeLeft<=0 && !answered){
        answered = true;
        clearInterval(timerHandle);
        idx++; nextRound();
      }
    },100);
  }

  function finish(){
    const bonus = correctCount*50;
    state.cash += bonus;
    mount.innerHTML = `
      <div class="overlay">
        <div class="cardmodal" style="max-width:440px;">
          <div class="ribbon">round over</div>
          <div class="cbody">
            <h3>${correctCount} of ${rounds.length} correct</h3>
            <div class="body">You picked up a $${bonus.toLocaleString()} bonus.</div>
            <div class="lessonbox"><span class="who">worth knowing</span>Knowing this vocabulary isn't trivia for its own sake, it's what lets you actually read a deal, a loan offer, or a pay stub and know what you're looking at.</div>
            <div class="modalbtns"><button class="buyb" id="tsDone">Continue</button></div>
          </div>
        </div>
      </div>`;
    document.getElementById('tsDone').addEventListener('click', ()=>{
      log(`Term Sprint: ${correctCount}/${rounds.length} correct, picked up a $${bonus.toLocaleString()} bonus.`);
      closeModal(); endTurn(); renderAll();
    });
  }

  nextRound();
}

// The debt keeps growing the longer you wait to deal with it, on purpose.
// The only decision is when to stop it. Waiting for a "better moment" costs you.
function showDebtClock(){
  const mount = document.getElementById('modalMount');
  let balance = 500;
  const maxMs = 6000;
  let elapsed = 0;
  let stopped = false;
  let handle = null;

  function render(){
    mount.innerHTML = `
      <div class="overlay">
        <div class="cardmodal" style="max-width:420px;">
          <div class="ribbon">quick game: debt clock</div>
          <div class="cbody">
            <h3>This debt is growing. Stop it whenever you're ready.</h3>
            <div class="body" style="font-family:var(--mono);font-size:2rem;text-align:center;color:var(--rust);margin:14px 0;">$${Math.round(balance).toLocaleString()}</div>
            <div class="modalbtns"><button class="buyb" id="dcStop">Pay it off now</button></div>
          </div>
        </div>
      </div>`;
    document.getElementById('dcStop').addEventListener('click', stop);
  }

  function stop(){
    if(stopped) return;
    stopped = true;
    clearInterval(handle);
    const bonus = Math.max(20, Math.round(320 - (elapsed/maxMs)*300));
    state.cash += bonus;
    const mount2 = document.getElementById('modalMount');
    mount2.innerHTML = `
      <div class="overlay">
        <div class="cardmodal" style="max-width:420px;">
          <div class="ribbon">round over</div>
          <div class="cbody">
            <h3>Stopped it at $${Math.round(balance).toLocaleString()}</h3>
            <div class="body">You picked up a $${bonus.toLocaleString()} bonus for acting when you did.</div>
            <div class="lessonbox"><span class="who">worth knowing</span>That balance grows faster the longer it sits, same as real interest. Waiting for a better time to deal with debt almost never pays off, it just gets bigger while you wait.</div>
            <div class="modalbtns"><button class="buyb" id="dcDone">Continue</button></div>
          </div>
        </div>
      </div>`;
    document.getElementById('dcDone').addEventListener('click', ()=>{
      log(`Debt Clock: stopped it at $${Math.round(balance).toLocaleString()}, picked up a $${bonus.toLocaleString()} bonus.`);
      closeModal(); endTurn(); renderAll();
    });
  }

  render();
  handle = setInterval(()=>{
    elapsed += 100;
    balance *= 1.025;
    const el = mount.querySelector('.body');
    if(el) el.textContent = `$${Math.round(balance).toLocaleString()}`;
    if(elapsed>=maxMs) stop();
  },100);
}

// A price wobbles around for a few seconds. Selling too early leaves money on
// the table, waiting too long can lose it. There's no reliably right answer,
// which is itself the lesson about trying to time a market perfectly.
function showMarketTiming(){
  const mount = document.getElementById('modalMount');
  let price = 100;
  const maxMs = 6000;
  let elapsed = 0;
  let stopped = false;
  let handle = null;

  function render(){
    mount.innerHTML = `
      <div class="overlay">
        <div class="cardmodal" style="max-width:420px;">
          <div class="ribbon">quick game: market timing</div>
          <div class="cbody">
            <h3>Sell whenever you think the price is good.</h3>
            <div class="body" style="font-family:var(--mono);font-size:2rem;text-align:center;color:var(--green-3);margin:14px 0;">$${Math.round(price).toLocaleString()}</div>
            <div class="modalbtns"><button class="buyb" id="mtSell">Sell now</button></div>
          </div>
        </div>
      </div>`;
    document.getElementById('mtSell').addEventListener('click', stop);
  }

  function stop(){
    if(stopped) return;
    stopped = true;
    clearInterval(handle);
    const bonus = Math.max(0, Math.round((price-100)*3));
    state.cash += bonus;
    const mount2 = document.getElementById('modalMount');
    mount2.innerHTML = `
      <div class="overlay">
        <div class="cardmodal" style="max-width:420px;">
          <div class="ribbon">round over</div>
          <div class="cbody">
            <h3>Sold at $${Math.round(price).toLocaleString()}</h3>
            <div class="body">You picked up a $${bonus.toLocaleString()} bonus.</div>
            <div class="lessonbox"><span class="who">worth knowing</span>Nobody consistently sells at the exact top, not you, not professionals. That's the actual reason a lot of investors focus on holding steady for a long time instead of chasing the perfect moment.</div>
            <div class="modalbtns"><button class="buyb" id="mtDone">Continue</button></div>
          </div>
        </div>
      </div>`;
    document.getElementById('mtDone').addEventListener('click', ()=>{
      log(`Market Timing: sold at $${Math.round(price).toLocaleString()}, picked up a $${bonus.toLocaleString()} bonus.`);
      closeModal(); endTurn(); renderAll();
    });
  }

  render();
  handle = setInterval(()=>{
    elapsed += 150;
    price += (Math.random()-0.45)*9;
    price = Math.max(40, price);
    const el = mount.querySelector('.body');
    if(el) el.textContent = `$${Math.round(price).toLocaleString()}`;
    if(elapsed>=maxMs) stop();
  },150);
}

function openModal(cfg){
  const mount = document.getElementById('modalMount');
  const iconSvg = cfg.icon ? `<svg viewBox="-10 -10 20 20" width="26" height="26">${iconPath(cfg.icon)}</svg>` : '';
  mount.innerHTML = `
    <div class="overlay" id="ov">
      <div class="cardmodal">
        <div class="ribbon">${cfg.ribbon}</div>
        <div class="cbody">
          ${iconSvg?`<div class="cardicon">${iconSvg}</div>`:''}
          <h3 style="${iconSvg?'text-align:center;':''}">${cfg.title}</h3>
          <div class="body">${cfg.body}</div>
          ${cfg.chips?`<div class="cardnums">${cfg.chips}</div>`:''}
          <div class="lessonbox"><span class="who">worth knowing</span>${cfg.lesson}</div>
          <div class="modalbtns">
            ${cfg.buyLabel?`<button class="buyb" id="buyB" ${cfg.canBuy?'':'disabled'}>${cfg.canBuy?cfg.buyLabel:'Not enough cash'}</button>`:''}
            <button class="passb" id="passB">${cfg.buyLabel? 'Pass' : 'Continue'}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  if(cfg.buyLabel){
    const b=document.getElementById('buyB');
    if(cfg.canBuy) b.addEventListener('click',cfg.onBuy);
  }
  document.getElementById('passB').addEventListener('click',cfg.onPass);
}
function closeModal(){ document.getElementById('modalMount').innerHTML=''; }

function renderAll(){
  document.getElementById('whoRole').textContent = `turn ${state.turns}`;
  const exp = totalMonthlyExpenses(state);
  const cf = cashflow(state);
  document.getElementById('stSalary').textContent = `$${state.salary.toLocaleString()}`;
  const livePassive = computePassive(state);
  document.getElementById('stPassive').textContent = `$${livePassive.toLocaleString()}`;
  document.getElementById('stExpenses').textContent = `$${exp.toLocaleString()}`;
  const cfEl = document.getElementById('stCashflow');
  cfEl.textContent = `${cf>=0?'+':''}$${cf.toLocaleString()}`;
  cfEl.className = 'mono '+(cf>=0?'pos':'neg');

  document.getElementById('stCash').textContent = `$${Math.round(state.cash).toLocaleString()}`;
  document.getElementById('stAssetsTotal').textContent = `$${Math.round(totalAssetsValue(state)).toLocaleString()}`;
  document.getElementById('stLiabTotal').textContent = `$${Math.round(totalLiabBalance(state)).toLocaleString()}`;
  document.getElementById('stNetWorth').textContent = `$${Math.round(netWorth(state)).toLocaleString()}`;

  const aList = document.getElementById('assetList');
  if(state.assets.length){
    aList.innerHTML = state.assets.map((a,i)=>{
      const stars = a.upgrades>0 ? ` ${'*'.repeat(a.upgrades)}` : '';
      const canImprove = a.upgrades<3 && !a.capitalGainOnly;
      const cost = improveCost(a);
      return `
      <div style="align-items:center;flex-wrap:wrap;">
        <span>${a.name}${stars}${a.cashflow?` (+$${a.cashflow}/mo)`:''}</span>
        <span style="display:flex;gap:6px;align-items:center;">
          $${Math.round(a.currentValue).toLocaleString()}
          ${canImprove?`<button class="improveBtn" data-idx="${i}" title="Reinvest $${cost.toLocaleString()} to boost cashflow" style="font-family:var(--mono);font-size:0.68rem;background:${state.cash>=cost?'var(--green-3)':'transparent'};color:${state.cash>=cost?'#fff':'var(--ink-soft)'};border:1px solid rgba(0,0,0,0.15);border-radius:6px;padding:2px 7px;cursor:pointer;" ${state.cash>=cost?'':'disabled'}>+ $${cost.toLocaleString()}</button>`:''}
          <button class="sellBtn" data-idx="${i}" style="font-family:var(--mono);font-size:0.68rem;background:var(--paper-2);border:1px solid rgba(0,0,0,0.15);border-radius:6px;padding:2px 7px;cursor:pointer;color:var(--ink);">sell</button>
        </span>
      </div>`;
    }).join('');
    aList.querySelectorAll('.sellBtn').forEach(btn=>{
      btn.addEventListener('click', ()=> sellAsset(parseInt(btn.dataset.idx,10)) );
    });
    aList.querySelectorAll('.improveBtn').forEach(btn=>{
      btn.addEventListener('click', ()=> improveAsset(parseInt(btn.dataset.idx,10)) );
    });
  } else {
    aList.innerHTML = '<div><span>None yet</span><span></span></div>';
  }

  const lList = document.getElementById('liabList');
  let liabRows = state.liabilities.map((l,i)=>`
    <div style="align-items:center;">
      <span>${l.name}</span>
      <span style="display:flex;gap:6px;align-items:center;">
        $${Math.round(l.bal).toLocaleString()}
        <button class="payoffBtn" data-idx="${i}" style="font-family:var(--mono);font-size:0.68rem;background:${state.cash>=l.bal?'var(--paper-2)':'transparent'};border:1px solid rgba(0,0,0,0.15);border-radius:6px;padding:2px 7px;cursor:pointer;color:var(--ink);" ${state.cash>=l.bal?'':'disabled'}>pay off</button>
      </span>
    </div>`).join('');
  if(state.cardDebt > 0){
    liabRows += `<div><span>Credit card (3%/mo interest)</span><span>$${Math.round(state.cardDebt).toLocaleString()}</span></div>`;
  }
  lList.innerHTML = liabRows || '<div><span>None</span><span></span></div>';
  lList.querySelectorAll('.payoffBtn').forEach(btn=>{
    btn.addEventListener('click', ()=> payOffLiability(parseInt(btn.dataset.idx,10)) );
  });

  const debtZone = document.getElementById('debtPayZone');
  if(state.cardDebt > 0){
    const payAmount = Math.min(state.cash, state.cardDebt);
    debtZone.innerHTML = `<button id="payDebtBtn" style="width:100%;margin-top:8px;padding:9px;border-radius:8px;border:none;background:var(--rust);color:#fff;font-family:var(--display);font-weight:700;font-size:0.82rem;cursor:pointer;" ${payAmount<=0?'disabled':''}>Pay down card, $${Math.round(payAmount).toLocaleString()} available</button>`;
    const btn = document.getElementById('payDebtBtn');
    if(btn && payAmount > 0){
      btn.addEventListener('click', ()=>{
        const paid = payDownDebt(payAmount);
        log(`You paid down $${Math.round(paid).toLocaleString()} of credit card debt.`);
        renderAll();
      });
    }
  } else {
    debtZone.innerHTML = '';
  }

  document.getElementById('cfReadout').textContent = `$${livePassive.toLocaleString()}`;
  document.getElementById('goalReadout').textContent = `need $${exp.toLocaleString()} / mo`;

  const pct = Math.min(100, Math.round((livePassive/exp)*100));
  document.getElementById('progressFill').style.width = pct+'%';
  document.getElementById('progressPct').textContent = pct+'%';
}

function checkWin(){
  const exp = totalMonthlyExpenses(state);
  const livePassive = computePassive(state);
  if(!state.won && livePassive >= exp){
    state.won = true;
    rollBtn.disabled = true;

    const nw = Math.round(netWorth(state));
    const stats = loadStats();
    const earnedThisRun = ACHIEVEMENTS.filter(a=>a.check(state)).map(a=>a.id);
    const newBadges = earnedThisRun.filter(id=>!stats.achievements.includes(id));

    const isNewBestTurns = stats.bestTurns===null || state.turns < stats.bestTurns;
    const isNewBestNW = stats.bestNetWorth===null || nw > stats.bestNetWorth;

    stats.gamesPlayed += 1;
    stats.bestTurns = stats.bestTurns===null ? state.turns : Math.min(stats.bestTurns, state.turns);
    stats.bestNetWorth = stats.bestNetWorth===null ? nw : Math.max(stats.bestNetWorth, nw);
    stats.recentTurns.push(state.turns);
    if(stats.recentTurns.length>10) stats.recentTurns.shift();
    earnedThisRun.forEach(id=>{ if(!stats.achievements.includes(id)) stats.achievements.push(id); });
    saveStats(stats);

    const badgeHtml = newBadges.length
      ? newBadges.map(id=>{
          const a = ACHIEVEMENTS.find(x=>x.id===id);
          return `<div style="padding:8px 0;border-top:1px dashed rgba(0,0,0,0.15);"><div style="font-weight:700;font-size:0.88rem;">New badge: ${a.name}</div><div style="font-size:0.78rem;color:var(--ink-soft);">${a.desc}</div></div>`;
        }).join('')
      : '';

    const mount = document.getElementById('modalMount');
    mount.innerHTML = `
      <div class="overlay">
        <div class="cardmodal winbox">
          <div class="ribbon">you did it</div>
          <div class="cbody">
            <div class="seal"></div>
            <h3>You quit the rat race</h3>
            <div class="body">Your passive income, $${livePassive.toLocaleString()}/mo, now covers your expenses, $${exp.toLocaleString()}/mo, in ${state.turns} turns. Your money's working for you now, not the other way around.</div>
            <div class="cardnums" style="justify-content:center;">
              <div class="numchip">Turns taken<b>${state.turns}${isNewBestTurns?' (new best)':''}</b></div>
              <div class="numchip">Net worth<b>$${nw.toLocaleString()}${isNewBestNW?' (new best)':''}</b></div>
            </div>
            ${badgeHtml? `<div style="margin-top:12px;">${badgeHtml}</div>` : ''}
            <div class="lessonbox" style="margin-top:16px;"><span class="who">worth knowing</span>That's actually the real definition financial planners use for financial freedom. Not some specific dollar amount, just the point where your assets pay your bills instead of your job having to.</div>
            <div class="modalbtns"><button class="buyb" onclick="location.reload()">Play again</button></div>
          </div>
        </div>
      </div>`;
  }
}
