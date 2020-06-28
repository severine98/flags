// import {Flag, finland, georgia, denmark, greece, malta, sweden, switzerland, albania, austria, latvia, 
// monaco, macedonia, poland, sanMarino, ukraine, turkey, spain, vatican, israel, andorra, kosovo, portugal, 
// slovakia, slovenia, cyprus, montenegro, serbia, moldova, liechtenstein, bosnia, croatia, azerbaijan, belarus, 
// armenia, belgium, bulgaria, czech, estonia, france, germany, iceland, ireland, hungary, italy, lithuania, luxembourg, 
// netherlands, norway, romania, russia, uk, flagArray } from "./flags";

const start = document.getElementById('start');
let question = document.getElementById('question');
const yes = document.getElementById('yes');
const no = document.getElementById('no');


//All questions are answered by true or false 31

class Flag {
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


// When you answer the questions, it eleminates the object against the opposite condition
// After replying to a question, check whether there is more than one flag visible, if not: give the name of the flag

// let flag = new Flag(twoColours, cross, multipleCross, whiteCross, redCross, bigCross, emblemOrLogo, emblemOrLogoInMiddle, emblemOrLogoBlue,
//   emblemOrLogoMostlyRed, verticalStripes, horizontalStripes, blueStripeBottom, redStripeBottom, redStripeTop, blueStripeMiddle,
//   threeStripes, black, white, shadeOfBlue, darkBlue, shadeOfgreen, shadeOfRed, whiteAndRed, darkRed, yellowOrOrange,
//   sun, eagle, stars, moon, crown)


//two colours with cross

let finland = new Flag(true, true, false, false, false, true, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'finland') //added finland


let georgia = new Flag(true, true, true, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'georgia')

let denmark = new Flag(true, true, false, true, false, true, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'denmark')

let greece = new Flag(true, true, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'greece')

let malta = new Flag(true, true, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'malta')

let sweden = new Flag(true, true, false, false, false, true, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, false,
  false, false, false, false, false, 'sweden')

let switzerland = new Flag(true, true, false, true, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, false,
  false, false, false, false, false, 'switzerland')

//two colours without cross

let albania = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'albania');

let austria = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  true, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'austria')

let latvia = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'latvia')

let monaco = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, true, false,
  false, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'monaco')

let macedonia = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, true,
  true, false, false, false, false, 'macedonia')

let poland = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'poland')

let sanMarino = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'sanMarino')

let ukraine = new Flag(true, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'ukraine')

let turkey = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, 'turkey')

let spain = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, true,
  false, false, false, false, false, 'spain')

let vatican = new Flag(true, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'vatican')

let israel = new Flag(true, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, 'israel')



//Multiple colours with a symbol

let andorra = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, true,
  false, false, false, false, false, 'andorra')

let kosovo = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, true,
  false, false, true, false, false, 'kosovo')

let portugal = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'portugal')

let slovakia = new Flag(false, false, false, false, false, false, true, false, true,
  true, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'slovakia')
false
let slovenia = new Flag(false, false, false, false, false, false, true, false, true,
  false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'slovenia')

let cyprus = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'cyprus')

let montenegro = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, true, false, false, true,
  false, false, false, false, false, 'montenegro')

let serbia = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, true, false, false, false, false, false, false, true,
  false, false, false, false, true, 'serbia')

let moldova = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, true, false, false, false, false, false, true,
  false, true, false, false, false, 'moldova')

let liechtenstein = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, true, 'liechtenstein')

let croatia = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'croatia')

let bosnia = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, true, false, false, 'bosnia')

let azerbaijan = new Flag(false, false, false, false, false, false, true, true, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, 'azerbaijan')

let belarus = new Flag(false, false, false, false, false, false, true, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'belarus')

//more than 2 colours with no symbols

let armenia = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, false, false,
  false, false, true, false, false, false, false, false, false, false,
  false, false, false, false, false, 'armenia')

let belgium = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, true, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'belgium')

let bulgaria = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, true, false, false,
  false, false, true, false, false, false, false, false, false, false,
  false, false, false, false, false, 'bulgaria')

let czech = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'czech')

let estonia = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, false, true,
  false, false, false, true, false, false, false, false, false, false,
  false, false, false, false, false, 'estonia')

let france = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'france')

let germany = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'germany')

let iceland = new Flag(false, true, false, false, true, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'iceland')

let ireland = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, true, false, false, false, false,
  false, false, false, false, false, 'ireland')

let hungary = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, true, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'hungary')

let italy = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, true, true, false, false, false,
  false, false, false, false, false, 'italy')

let lithuania = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, true, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'lithuania')

let luxembourg = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, false, false,
  false, false, false, true, false, false, false, false, false, false,
  false, false, false, false, false, 'luxembourg')

let netherlands = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, true, false, false, false,
  false, false, false, true, true, false, false, false, false, false,
  false, false, false, false, false, 'netherlands')

let norway = new Flag(false, true, false, false, false, false, false, false, false,
  false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'norway')

let romania = new Flag(false, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, true,
  false, false, false, false, false, 'romania')

let russia = new Flag(false, false, false, false, false, false, false, false, false,
  false, false, true, false, false, false, false,
  false, false, true, true, false, false, false, false, false, false,
  false, false, false, false, false, 'russia')

let uk = new Flag(false, true, true, false, true, false, false, false, false,
  false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, 'uk')

const flagArray = [malta, turkey, andorra, kosovo, portugal, slovakia, slovenia, finland, cyprus, montenegro, serbia, moldova, greece, switzerland, liechtenstein, croatia, bosnia, azerbaijan, belarus, armenia, belgium, bulgaria,
  czech, france, macedonia, estonia, germany, monaco, iceland, ireland, spain, hungary, italy, latvia, poland, sanMarino, vatican, israel, ukraine, sweden, denmark, austria, monaco, albania, austria, lithuania, luxembourg,georgia, 
  netherlands, norway, romania, russia, uk];

const questionArray = ['Does your flag have only two colours?', 'Does it contain a cross?', 'Does it contain more than one cross?', 'Does in have a white cross?', 'Does it have a red cross?',
  'Is the cross big?', 'Does it contain a symbol?', 'Is that symbol in the centre of the flag?', 'Does the symbol contain the colour blue?', 'Is the symbol mostly red?',
  'Does the flag have vertical stripes?', 'Does the flag have horizontal stripes?', 'Is the blue stripe at the bottom?', 'Is the red stripe at the bottom?', 'Is the red stripe at the top?',
  'Is the blue stripe in the middle?', 'Does it have three stripes?', 'Does it include the colour back?', 'Does it contain the colour white?', 'Does it contain a shade of blue?',
  'Is your flag dark blue?', 'Does it contain a shade of green?', 'Does it contain a shade of red?', 'Is your flag red and white?', 'Is it a darker red?', 'Does in contain yellow or orange?',
  'Does is have a sun?', 'Does it have an eagle?', 'Does it have at least one star?', 'Does it have a moon?', 'Does it have a crown?']


start.addEventListener("click", () => {
  yes.classList.add('visible');
  no.classList.add('visible');
  question.innerHTML = questionArray[0];
})

const flagGuess = () => {
  let newArray = [];
  yes.addEventListener('click', () => {
    if (question.innerHTML === questionArray[0]) {
      let passingFlags = (filterYes(flagArray, 'twoColours'));
      console.log(passingFlags);
      passingFlags.forEach(element => {
        console.log(element);
        newArray.push(element);
        let selected = document.getElementById(element.name); 
        console.log(selected);
        selected.style.visibility = "hidden";
        return element;
      })
      return question.innerHTML = questionArray[1];
    }
  })
}

flagGuess();

// yes.addEventListener('click', () => {
//   if (question.innerHTML === questionArray[1]) {
//     console.log('hi');
//     flags = (filterYes(flags, 'cross'));
//     console.log(flags);
//     question.innerHTML = questionArray[23];
//   }
// })

// yes.addEventListener('click', () => {
//   if (question.innerHTML === questionArray[23]) {
//     console.log('hi');
//     flags = (filterYes(flags, 'shadeOfRed'));
//     console.log(flags);
//     question.innerHTML = questionArray[24];
//   }
// })






const filterYes = (array, property) => {
  return array.filter((flag) => {
    if (flag[property] === true) {
      return flag;
    }
  })
};

const filterNo = (array, property) => {
  return array.filter((flag) => {
    if (flag[property] === false) {
      return flag;
    }
  })
};



// yes.addEventListener("click", () => {
//   if (question.innerHTML = questionArray[0]) {
//     flags = filterYes(flagArray, 'twoColours');
//     console.log(flags);
//     question.innerHTML = questionArray[1];
//   }

// })
// yes.addEventListener("click", () => {
//   if (question.innerHTML = questionArray[1]) {
//     flags = filterYes(flag, 'cross');
//     console.log(array1);
//     question.innerHTML = questionArray[1];
//   }
// })




// if ((event.target.id === 'yes') && (question.innerHTML = questionArray[1])) {
//   console.log(question.innerHTML);
//   let array1 = filterYes(flags, 'cross');
//   console.log(array1);
//   question.innerHTML = questionArray[23];
// }

// if ((event.target.id === 'yes') && (question.innerHTML = questionArray[23])) {
//   let array3 = filterYes(array2, 'shadeOfRed');
//   question.innerHTML = questionArray[3];
// }

// if (event.target.id === 'yes') {
//   let array4 = filterYes(array3, 'whiteCross');
//   question.innerHTML = questionArray[1];
// }


//     if (event.target.id === 'yes') {
//       let array5 = filterYes(array4, 'bigCross');
//       question.innerHTML = questionArray[5];
//     }
//     if (event.target.id === 'yes') {
//       question.innerHTML = 'Your flag is Danemark!!';
//     }

//     if (event.target.id === 'no') {
//   let newArray = filterNo(flagArray, 'twoColours');
//   console.log(newArray);
// }


