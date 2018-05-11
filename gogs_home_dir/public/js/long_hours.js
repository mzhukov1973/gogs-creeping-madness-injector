/*    ╔════════════════════════════════════════════════════════════════════════════════════════╗    */
/*    ║      "Long Hours" ─ Brain-teasing, Sanity-tilting, Subtle Repository Augmentation      ║    */
/*    ║    ────────────────────────────────────────────────────────────────────────────────    ║    */
/*    ║                                                                                        ║    */
/*    ╠════════════════════════════════════════════════════════════════════════════════════════╣    */
/*    ║   Author:  Maxim Zhukov <mzhukov31415dev@gmail.com>                                    ║    */
/*    ║   GitHub:  https://github.com/mzhukov1973/gogs-creeping-madness-injector               ║    */
/*    ║   Demo:    https://testbed2.cloud.tilaa.com:7443                                       ║    */
/*    ║   License: MIT                                                                         ║    */
/*    ╟────────────────────────────────────────────────────────────────────────────────────────╢    */
/*    ║     MIT License                                                                        ║    */
/*    ║                                                                                        ║    */
/*    ║     Copyright (c) 2018 Maxim Zhukov                                                    ║    */
/*    ║                                                                                        ║    */
/*    ║     Permission is hereby granted, free of charge, to any person obtaining a copy       ║    */
/*    ║     of this software and associated documentation files (the "Software"), to deal      ║    */
/*    ║     in the Software without restriction, including without limitation the rights       ║    */
/*    ║     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell          ║    */
/*    ║     copies of the Software, and to permit persons to whom the Software is              ║    */
/*    ║     furnished to do so, subject to the following conditions:                           ║    */
/*    ║                                                                                        ║    */
/*    ║     The above copyright notice and this permission notice shall be included in all     ║    */
/*    ║     copies or substantial portions of the Software.                                    ║    */
/*    ║                                                                                        ║    */
/*    ║     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR         ║    */
/*    ║     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,           ║    */
/*    ║     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE        ║    */
/*    ║     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER             ║    */
/*    ║     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,      ║    */
/*    ║     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE      ║    */
/*    ║     SOFTWARE.                                                                          ║    */
/*    ╠════════════════════════════════════════════════════════════════════════════════════════╣    */
/*    ║   Parameters:                                                                          ║    */
/*    ║    ────────────────────────────────────────────────────────────────────────────────    ║    */
/*    ║       The maximum amount (in degrees) any affected element shall be rotated            ║    */
/*    ║     relative to each of the three axes, each time its' timer fires.                    ║    */
/*    ║       I.e. the element would: "transform:rotateX(±1°) rotateY(±1°) rotateZ(±1°)"       ║    */
/*    ║     using 3 random numbers [-1°; +1°] as the amount to rotate around each of           ║    */
/*    ║     the 3 axes.                                                                        ║    */
/*    ║     ╭──────────────────────────────────────╮                                           ║    */
/*    ║     │*/ const rotAmpl = 1;               /*│  Default: 1  (±1°)                        ║    */
/*    ║     ╰──────────────────────────────────────╯                                           ║    */
/*    ║                                                                                        ║    */
/*    ║       The maximum amount (in em) any affected element would be translated along each   ║    */
/*    ║     of the three axes, each time its attached timer fires.                             ║    */
/*    ║       I.e. the element would "transform:translate3D(±0.3ᴱᴹ, ±0.3ᴱᴹ, ±0.3ᴱᴹ)"           ║    */
/*    ║     using 3 random numbers [-0.3ᴱᴹ; +0.3ᴱᴹ] as the measure of how far to move along    ║    */
/*    ║     each of the axes.                                                                  ║    */
/*    ║     ╭──────────────────────────────────────╮                                           ║    */
/*    ║     │*/ const transAmpl = 0.3;           /*│  Default: 0.3  (±0.3ᴱᴹ)ₑₘᵉᵐͤͫʰ🄴 🄼 🅔 🅜            ║    */
/*    ║     ╰──────────────────────────────────────╯                                     🅴 🅼 🄔 🄜   ║    */
/*    ║                                                                                        ║    */
/*    ║       The minimum and maximum amount of time (in seconds) each new transition is       ║    */
/*    ║     to take.                                                                           ║    */
/*    ║     ╭──────────────────────────────────────╮                                           ║    */
/*    ║     │*/ const transitMin = 4;            /*│  Default: 4  (⩾4sec)                      ║    */
/*    ║     │*/ const transitMax = 8;            /*│  Default: 8  (⩽8sec)                      ║    */
/*    ║     ╰──────────────────────────────────────╯                                           ║    */
/*    ║                                                                                        ║    */
/*    ║       The minimum and maximum amount of time (in seconds) that would elapse since      ║    */
/*    ║     UI animation has commenced until each affected element would start its first       ║    */
/*    ║     transformation.                                                                    ║    */
/*    ║       Random part is set much larger for the wait time until the first                 ║    */
/*    ║     transformation, because we want to attract as little attention as possible         ║    */
/*    ║     and spread the mass beginning of motion across relatively large period.            ║    */
/*    ║       This affects only the first transformation.                                      ║    */
/*    ║       Once it is complete, every next one happens much faster, since there's no        ║    */
/*    ║     'stillness'/'motion' visual threshold to attract users' attention.                 ║    */
/*    ║     ╭──────────────────────────────────────╮                                           ║    */
/*    ║     │*/ const firstTransfWaitMin = 3;    /*│  Default: 3   (⩾3sec)                     ║    */
/*    ║     │*/ const firstTransfWaitMax = 20;   /*│  Default: 20  (⩽20sec)                    ║    */
/*    ║     ╰──────────────────────────────────────╯                                           ║    */
/*    ║                                                                                        ║    */
/*    ║       The minimum and maximum amount of time (in seconds) that would elapse between    ║    */
/*    ║     two consequitive transformations of each affected element for all transformations  ║    */
/*    ║     after the first one.                                                               ║    */
/*    ║     ╭──────────────────────────────────────╮                                           ║    */
/*    ║     │*/ const transfWaitMin = 4;         /*│  Default: 4  (⩾4sec)                      ║    */
/*    ║     │*/ const transfWaitMax = 8;         /*│  Default: 8  (⩽8sec)                      ║    */
/*    ║     ╰──────────────────────────────────────╯                                           ║    */
/*    ║                                                                                        ║    */
/*    ║       The amount of time there should be no Gogs-related UI activity for animation     ║    */
/*    ║     to launch.                                                                         ║    */
/*    ║     ╭──────────────────────────────────────╮                                           ║    */
/*    ║     │*/ const preStartDelay = 40;        /*│  Default: 40  (40sec)                     ║    */
/*    ║     ╰──────────────────────────────────────╯                                           ║    */
/*    ║                                                                                        ║    */
/*    ╚════════════════════════════════════════════════════════════════════════════════════════╝    */
/*   ╤
/* ╟─┼─╢
/*   │


/*==============================================================================================================================================================================*/


//  ⟪⟪⟪⟪⟪⟪⟪⟪  ⟫⟫⟫⟫⟫⟫⟫⟫
//  ««««««««  »»»»»»»»
//   left-top-right:     ╔═╤═╗
// left-middle-right:    ╟─┼─╢
// left-middle-right:    ║ │ ║
// left-middle-right:    ╟─┼─╢
// left-bottom-right:    ╚═╧═╝



const transitRnd         = transitMax         - transitMin;
const firstTransfWaitRnd = firstTransfWaitMax - firstTransfWaitMin;
const transfWaitRnd      = transfWaitMax      - transfWaitMin;

const tRandom = () => (window.crypto.getRandomValues(new Uint16Array(1))[0]/65536).toFixed(6);

const recurToutPt = function(el) {
  el.style.transition = 'all '+(transitMin+tRandom()*transitRnd).toFixed(6)+'s ease';
  el.style.transform = 'rotateX('+parseInt(tRandom()*rotAmpl*2-rotAmpl,10)+'deg)    rotateY('+parseInt(tRandom()*rotAmpl*2-rotAmpl,10)+'deg) rotateZ('+parseInt(tRandom()*rotAmpl*2-rotAmpl,10)+'deg) translate3d('+(tRandom()*transAmpl*2-transAmpl).toFixed(6)+'em,'+(tRandom()*transAmpl*2-transAmpl).toFixed(6)+'em,'+(tRandom()*transAmpl*2-transAmpl).toFixed(6)+'em)';
  if (!el.hasOwnProperty('lab3dTim')) {el.lab3dTim = setTimeout(recurToutPt,parseInt(1000*firstTransfWaitMin+tRandom()*1000*firstTransfWaitRnd,10),el);}
  else {clearTimeout(el.lab3dTim); el.lab3dTim = setTimeout(recurToutPt,parseInt(1000*transfWaitMin+tRandom()*1000*transfWaitRnd,10),el);}
}

const my3DStart = () => {
  Object.values(document.getElementsByClassName('ui label')).map(
    el => {
      el.parentNode.classList.add('labelContPersp');
      el.classList.add('label3D');
      recurToutPt(el);
    }
  );
  Object.values(document.getElementsByClassName('ui button')).map(
    el => {
      el.parentNode.classList.add('labelContPersp');
      el.classList.add('label3D');
      recurToutPt(el);
    }
  );
  Object.values(document.getElementsByClassName('item')).map(
    el => {
      if (el.tagName!=='LI') {
        el.parentNode.classList.add('labelContPersp');
        el.classList.add('label3D');
        recurToutPt(el);
      }
    }
  );
}

const mousemoveHandler = (ev) => {
  Object.values(document.querySelectorAll('.labelContPersp')).map(el=>el.classList.remove('labelContPersp'));
  let iLst = Object.values(document.querySelectorAll('.label3D')).map(el=>{
    el.style.transition = 'all 0s ease 0s'; 
    el.style.transform  = 'none';
    el.classList.remove('label3D');
    if (el.hasOwnProperty('lab3dTim')) {
      clearTimeout(el.lab3dTim);
//      delete el.lab3dTim;
    }
  });

  if ((typeof window.myMouseTim)==='undefined') {
    window.myMouseTim = setTimeout(my3DStart,1000*preStartDelay);
  } else {
    clearTimeout(window.myMouseTim);
    window.myMouseTim = setTimeout(my3DStart,1000*preStartDelay);
  }
}

const addMyEvList = () => {
  window.document.addEventListener('mousemove',mousemoveHandler,{'capture':true,'once':false,'passive':true});
  window.myEvList = true;
}
/*================================================================================================*/
//Init and run the injected code:
if (!window.myEvList) {
  addMyEvList();
}

window.myMouseTim = setTimeout(my3DStart,1000*preStartDelay);
