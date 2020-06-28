export class Flag {
  constructor(twoColours, cross, multipleCross, whiteCross, redCross, bigCross, emblemOrLogo, emblemOrLogoInMiddle, emblemOrLogoBlue,
    emblemOrLogoMostlyRed, verticalStripes, horizontalStripes, blueStripeBottom, redStripeBottom, redStripeTop, blueStripeMiddle,
    threeStripes, black, white, shadeOfBlue, darkBlue, shadeOfgreen, shadeOfRed, whiteAndRed, darkRed, yellowOrOrange,
    sun, eagle, stars, moon, crown, name,) { // added name and element
    this.twoColours = twoColours;
    this.cross = cross;
    this.multipleCross = multipleCross;
    this.whiteCross = whiteCross;
    this.redCross = redCross;
    this.bigCross = bigCross;
    this.emblemOrLogo = emblemOrLogo;
    this.emblemOrLogoInMiddle = emblemOrLogoInMiddle;
    this.emblemOrLogoBlue = emblemOrLogoBlue;
    this.emblemOrLogoMostlyRed = emblemOrLogoMostlyRed;
    this.verticalStripes = verticalStripes;
    this.horizontalStripes = horizontalStripes;
    this.blueStripeBottom = blueStripeBottom;
    this.redStripeBottom = redStripeBottom;
    this.redStripeTop = redStripeTop;
    this.blueStripeMiddle = blueStripeMiddle;
    this.threeStripes = threeStripes;
    this.black = black;
    this.white = white;
    this.shadeOfBlue = shadeOfBlue;
    this.darkBlue = darkBlue;
    this.shadeOfgreen = shadeOfgreen;
    this.shadeOfRed = shadeOfRed;
    this.whiteAndRed = whiteAndRed;
    this.darkRed = darkRed;
    this.yellowOrOrange = yellowOrOrange;
    this.sun = sun;
    this.eagle = eagle;
    this.stars = stars;
    this.moon = moon;
    this.crown = crown;
    this.name = name; //ADDED
  }
  get country() {
    console.log(this);
    document.getElementById(this.name).style.opacity = '1';

  }

}


//When you answer the questions, it eleminates the object against the opposite condition
// After replying to a question, check whether there is more than one flag visible, if not: give the name of the flag

// let flag = new Flag(twoColours, cross, multipleCross, whiteCross, redCross, bigCross, emblemOrLogo, emblemOrLogoInMiddle, emblemOrLogoBlue,
//   emblemOrLogoMostlyRed, verticalStripes, horizontalStripes, blueStripeBottom, redStripeBottom, redStripeTop, blueStripeMiddle,
//   threeStripes, black, white, shadeOfBlue, darkBlue, shadeOfgreen, shadeOfRed, whiteAndRed, darkRed, yellowOrOrange,
//   sun, eagle, stars, moon, crown)


// two colours with cross

export let finland = new Flag(true, true, false, false, false, true, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'finland') //added finland

console.log(finland);

export let georgia = new Flag(true, true, true, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'georgia')

  export let denmark = new Flag(true, true, false, true, false, true, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'denmark')

  export let greece = new Flag(true, true, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'greece')

  export let malta = new Flag(true, true, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'malta')

  export let sweden = new Flag(true, true, false, false, false, true, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, false,
  false, false, false, false, false, 'sweden')

  export let switzerland = new Flag(true, true, false, true, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'switzerland')

// two colours without cross

export let albania = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'albania');

  export let austria = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  true, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'autria')

  export let latvia = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'latvia')

  export let monaco = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, true, false,
  false, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'monaco')

  export let macedonia = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, true,
  true, false, false, false, false, 'macedonia')

  export let poland = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'poland')

  export let sanMarino = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'sanMarino')

  export let ukraine = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'ukraine')

  export let turkey = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'turkey')

  export let spain = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, true,
  false, false, false, false, false, 'spain')

  export let vatican = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'vatican')

  export let israel = new Flag(true, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, 'israel')



// Multiple colours with a symbol

export let andorra = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, true,
  false, false, false, false, false, 'andorra')

  export let kosovo = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, true,
  false, false, true, false, false, 'kosovo')

  export let portugal = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'portugal')

  export let slovakia = new Flag(false, false, false, false, false, false, true, false, true,
  true, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'slovakia')
false
export let slovenia = new Flag(false, false, false, false, false, false, true, false, true,
  false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'slovenia')

  export let cyprus = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'cyprus')

  export let montenegro = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, true,
  false, false, false, false, false, 'montenegro')

  export let serbia = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, true, false, false, false, false, false, false, true,
  false, false, false, false, true, 'serbia')

  export let moldova = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, true,
  false, true, false, false, false, 'moldova')

  export let liechtenstein = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, true, 'liechtenstein')

  export let croatia = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'croatia')

  export let bosnia = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, true, false, false, 'bosnia')

  export let azerbaijan = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, 'azerbaijan')

  export let belarus = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'belarus')

// more than 2 colours with no symbols

export let armenia = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, false, false,
  false, false, true, false, false, false, false, false, false, false,
  false, false, false, false, false, 'armenia')

  export let belgium = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, true, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'belgium')

  export let bulgaria = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, true, false, false,
  false, false, true, false, false, false, false, false, false, false,
  false, false, false, false, false, 'bulgaria')

  export let czech = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'czech')

  export let estonia = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, false, true,
  false, false, false, true, false, false, false, false, false, false,
  false, false, false, false, false, 'estonia')

  export let france = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'france')

  export let germany = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'germany')

  export let iceland = new Flag(false, true, false, false, true, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'iceland')

  export let ireland = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, true, false, false, false, false,
  false, false, false, false, false, 'ireland')

  export let hungary = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, true, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'hungary')

  export let italy = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, true, true, false, false, false,
  false, false, false, false, false, 'italy')

  export let lithuania = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, true, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'lithuania')

  export let luxembourg = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, false, false,
  false, false, false, true, false, false, false, false, false, false,
  false, false, false, false, false, 'luxembourg')

  export let netherlands = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, false, false,
  false, false, false, true, true, false, false, false, false, false,
  false, false, false, false, false, 'netherlands')

  export let norway = new Flag(false, true, false, false, false, false, false, false, false,
  false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'norway')

  export let romania = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'romania')

  export let russia = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, false, false,
  false, false, true, true, false, false, false, false, false, false,
  false, false, false, false, false, 'russia')

  export let uk = new Flag(false, true, true, false, true, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'uk')

  export const flagArray = [malta,
    turkey, andorra, kosovo, portugal, slovakia, slovenia, finland, cyprus, montenegro, serbia, moldova, greece, switzerland, liechtenstein, croatia, bosnia, azerbaijan, belarus, armenia, belgium, bulgaria,
    czech, france, macedonia, estonia, germany, monaco, iceland, ireland, spain, hungary, italy, latvia, poland, sanMarino, vatican, israel, ukraine, sweden, denmark, austria, monaco, albania, austria, lithuania, luxembourg,georgia, netherlands, norway, romania, russia, uk];
