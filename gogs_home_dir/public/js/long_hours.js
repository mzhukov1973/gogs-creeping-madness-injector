//    ╔╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╗
//    ╠╬╬╬╬╬╣╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╠╬╬╬╬╬╣
//    ╠╬╬╬╬╬╣"LongHours" ─ Brain-teasing, Sanity-tilting, Subtle Repository Augmentation╠╬╬╬╬╬╣
//    ╠╬╬╬╬╬╬╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╬╬╬╬╬╬╣
//    ╠╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╣
//    ║   Author:  Maxim Zhukov <mzhukov31415dev@gmail.com>                                   ║
//    ║   GitHub:  https://github.com/mzhukov1973/gogs-creeping-madness-injector              ║
//    ║   Demo:    https://testbed2.cloud.tilaa.com:7443                                      ║
//    ║   License: MIT                                                                        ║
//    ╟┬────────────┬────────────────────────────────────────────────────────────────────────┬╢
//    ║│MIT License:├────────────────────────────────────────────────────────────────────────┤║
//    ║├────────────╯                                                                        │║
//    ║│    Copyright (c) 2018 Maxim Zhukov                                                  │║
//    ║│                                                                                     │║
//    ║│    Permission is hereby granted, free of charge, to any person obtaining a copy     │║
//    ║│    of this software and associated documentation files (the "Software"), to deal    │║
//    ║│    in the Software without restriction, including without limitation the rights     │║
//    ║│    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell        │║
//    ║│    copies of the Software, and to permit persons to whom the Software is            │║
//    ║│    furnished to do so, subject to the following conditions:                         │║
//    ║│                                                                                     │║
//    ║│    The above copyright notice and this permission notice shall be included in all   │║
//    ║│    copies or substantial portions of the Software.                                  │║
//    ║│                                                                                     │║
//    ║│    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR       │║
//    ║│    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,         │║
//    ║│    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE      │║
//    ║│    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER           │║
//    ║│    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,    │║
//    ║│    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE    │║
//    ║│    SOFTWARE.                                                                        │║
//    ║├─────────────────────────────────────────────────────────────────────────────────────┤║
//    ╠╪═══════════╤═════════════════════════════════════════════════════════════════════════╧╣
//    ║│Parameters:│                                                                          ║
//    ║╰───────────╯                                                                          ║
//    ║       The maximum amount (in degrees) any affected element shall be rotated           ║
//    ║     relative to each of the three axes, each time its' timer fires.                   ║
//    ║       I.e. the element would: "transform:rotateX(±1°) rotateY(±1°) rotateZ(±1°)"      ║
//    ║     using 3 random numbers [-1°; +1°] as the amount to rotate around each of          ║
//    ║     the 3 axes.                                                                       ║
//    ║     ╭──────────────────────────────────────╮                                          ║
//    ║     │         rotAmpl = 1;                 │  Default: 1    (±1°)                     ║
//    ║     ╰──────────────────────────────────────╯                                          ║
//    ║                                                                                       ║
//    ║       The maximum amount (in em) any affected element would be translated along each  ║
//    ║     of the three axes, each time its attached timer fires.                            ║
//    ║       I.e. the element would "transform:translate3D(±0.3em, ±0.3em, ±0.3em)"          ║
//    ║     using 3 random numbers [-0.3em; +0.3em] as the measure of how far to move along   ║
//    ║     each of the axes.                                                                 ║
//    ║     ╭──────────────────────────────────────╮                                          ║
//    ║     │         transAmpl = 0.3;             │  Default: 0.3  (±0.3em)                  ║
//    ║     ╰──────────────────────────────────────╯                                          ║
//    ║                                                                                       ║
//    ║       The minimum and maximum amount of time (in seconds) each new transition is      ║
//    ║     to take.                                                                          ║
//    ║     ╭──────────────────────────────────────╮                                          ║
//    ║     │         transitMin = 4;              │  Default: 4    (⩾4sec)                   ║
//    ║     │         transitMax = 8;              │  Default: 8    (⩽8sec)                   ║
//    ║     ╰──────────────────────────────────────╯                                          ║
//    ║                                                                                       ║
//    ║       The minimum and maximum amount of time (in seconds) that would elapse since     ║
//    ║     UI animation has commenced until each affected element would start its first      ║
//    ║     transformation.                                                                   ║
//    ║       Random part is set much larger for the wait time until the first                ║
//    ║     transformation, because we want to attract as little attention as possible        ║
//    ║     and spread the mass beginning of motion across relatively large period.           ║
//    ║       This affects only the first transformation.                                     ║
//    ║       Once it is complete, every next one happens much faster, since there's no       ║
//    ║     'stillness'/'motion' visual threshold to attract users' attention.                ║
//    ║     ╭──────────────────────────────────────╮                                          ║
//    ║     │         firstTransfWaitMin = 3;      │  Default: 3    (⩾3sec)                   ║
//    ║     │         firstTransfWaitMax = 20;     │  Default: 20   (⩽20sec)                  ║
//    ║     ╰──────────────────────────────────────╯                                          ║
//    ║                                                                                       ║
//    ║       The minimum and maximum amount of time (in seconds) that would elapse between   ║
//    ║     two consecutive transformations of each affected element for all transformations  ║
//    ║     after the first one.                                                              ║
//    ║     ╭──────────────────────────────────────╮                                          ║
//    ║     │         transfWaitMin = 4;           │  Default: 4    (⩾4sec)                   ║
//    ║     │         transfWaitMax = 8;           │  Default: 8    (⩽8sec)                   ║
//    ║     ╰──────────────────────────────────────╯                                          ║
//    ║                                                                                       ║
//    ║       The amount of time there should be no Gogs-related UI activity for animation    ║
//    ║     to launch.                                                                        ║
//    ║     ╭──────────────────────────────────────╮                                          ║
//    ║     │         preStartDelay = 40;          │  Default: 40   (40sec)                   ║
//    ║     ╰──────────────────────────────────────╯                                          ║
//    ║                                                                                       ║
//    ╚═══════════════════════════════════════════════════════════════════════════════════════╝
//╞═══════════════════════════════════════════════════════════════════════════════════════════════╡
if (!window.longHoursGlobObj) {window.longHoursGlobObj = {}}
const lHGlobObj = window.longHoursGlobObj

if (Object.entries(lHGlobObj).length===0) {
  lHGlobObj.userParams    = {}
  const gOUP              = lHGlobObj.userParams
  gOUP.rotAmpl            = 1
  gOUP.transAmpl          = 0.3
  gOUP.transitMin         = 4
  gOUP.transitMax         = 8
  gOUP.firstTransfWaitMin = 3
  gOUP.firstTransfWaitMax = 20
  gOUP.transfWaitMin      = 4
  gOUP.transfWaitMax      = 8
  gOUP.preStartDelay      = 40
  lHGlobObj.persistentVars  = {}
  const gOPV              = lHGlobObj.persistentVars
  gOPV.transitRnd         = gOUP.transitMax         - gOUP.transitMin
  gOPV.firstTransfWaitRnd = gOUP.firstTransfWaitMax - gOUP.firstTransfWaitMin
  gOPV.transfWaitRnd      = gOUP.transfWaitMax      - gOUP.transfWaitMin
  gOPV.myEvList           = false
  gOPV.evList             = ['mousemove','click']
  gOPV.myMouseTim         = undefined
  lHGlobObj.settingsUI      = {
    myMutationObserver: undefined,
    dfNavedTo: false,
    dfMnObj: {
      id:          'longHoursUserSettingsMenuItem',
      actBg:       'rgba(135,206,235,0.4)',
      inactBg:     'rgba(135,206,235,0.0)',
      nodeValue:   'LongHours UI mod',
      text:        'LongHours UI mod',
      textContent: 'LongHours UI mod',
      img:         {src:'sec-01.svg', id:'longHoursUserSettingsMenuItemImg', class:'longHoursUserSettingsMenuItemImg', act:'longHoursUserSettingsMenuItemImgAct', anim:'longHoursUserSettingsMenuItemImgAni'},
      href:        '',
      baseURI:     '',
      pathname:    '',
      transition:  'all .5s ease-in-out 0s'
    },
    dfCloneSrcSel:      'a[href$="/user/settings/ssh"]',
    mnCloneSrc:         undefined,
    mnObj:              undefined,
    navedTo:            undefined,
    myMutationObserver: undefined,
    dfNav:              {
      contInnerHTML:   '....LongHours settings go here....'
    }
  }
}

lHGlobObj.tRandom = () => (window.crypto.getRandomValues(new Uint16Array(1))[0]/65536).toFixed(6)

lHGlobObj.recurToutPt = function(el) {
  el.style.transition = 'all ' + (lHGlobObj.userParams.transitMin + lHGlobObj.tRandom()*lHGlobObj.persistentVars.transitRnd).toFixed(6) + 's ease'
  el.style.transform  = 'rotateX(' + parseInt(lHGlobObj.tRandom()*lHGlobObj.userParams.rotAmpl*2 - lHGlobObj.userParams.rotAmpl, 10) + 'deg) rotateY(' + parseInt(lHGlobObj.tRandom()*lHGlobObj.userParams.rotAmpl*2 - lHGlobObj.userParams.rotAmpl,10) + 'deg) rotateZ(' + parseInt(lHGlobObj.tRandom()*lHGlobObj.userParams.rotAmpl*2 - lHGlobObj.userParams.rotAmpl, 10) + 'deg) translate3d(' + (lHGlobObj.tRandom()*lHGlobObj.userParams.transAmpl*2 - lHGlobObj.userParams.transAmpl).toFixed(6) + 'em,' + (lHGlobObj.tRandom()*lHGlobObj.userParams.transAmpl*2 - lHGlobObj.userParams.transAmpl).toFixed(6) + 'em,' + (lHGlobObj.tRandom()*lHGlobObj.userParams.transAmpl*2 - lHGlobObj.userParams.transAmpl).toFixed(6) + 'em)'
  if (!el.hasOwnProperty('longHoursLab3dTim')) {
    el.longHoursLab3dTim = setTimeout(lHGlobObj.recurToutPt, parseInt(1000*lHGlobObj.userParams.firstTransfWaitMin + lHGlobObj.tRandom()*1000*lHGlobObj.persistentVars.firstTransfWaitRnd, 10), el)
  } else {
    clearTimeout(el.longHoursLab3dTim)
    el.longHoursLab3dTim = setTimeout(lHGlobObj.recurToutPt, parseInt(1000*lHGlobObj.userParams.transfWaitMin + lHGlobObj.tRandom()*1000*lHGlobObj.persistentVars.transfWaitRnd, 10), el)
  }
}

lHGlobObj.my3DStart = () => {
  const selList = ['ui label', 'ui button', 'item']
  selList.forEach((classList) => Object.values(document.getElementsByClassName(classList)).forEach(el => {
    el.parentNode.classList.add('longHoursLabelContPersp')
    el.classList.add('longHoursLabel3D')
    lHGlobObj.recurToutPt(el)
  }))
}

lHGlobObj.userUIActivityHandler = ev => {
  Object.values(document.querySelectorAll('.longHoursLabelContPersp')).forEach(el => el.classList.remove('longHoursLabelContPersp'))

  Object.values(document.querySelectorAll('.longHoursLabel3D')).forEach(el => {
    el.classList.remove('longHoursLabel3D')
    el.style.transition = 'all 0s ease 0s'
    el.style.transform  = 'none'
    if (el.hasOwnProperty('longHoursLab3dTim')) {
      clearTimeout(el.longHoursLab3dTim)
      delete el.longHoursLab3dTim
    }
  })

  if (lHGlobObj.persistentVars.myMouseTim) {
    clearTimeout(lHGlobObj.persistentVars.myMouseTim)
  }
  lHGlobObj.persistentVars.myMouseTim = setTimeout(lHGlobObj.my3DStart, 1000*lHGlobObj.userParams.preStartDelay)
}

lHGlobObj.removeMyEvList = () => {
  const evList = lHGlobObj.persistentVars.evList
  evList.forEach(el => window.removeEventListener(el, lHGlobObj.userUIActivityHandler, {capture:false, once:false, passive:true}))
  clearTimeout(lHGlobObj.persistentVars.myMouseTim)
  lHGlobObj.persistentVars.myEvList = false
}

lHGlobObj.addMyEvList = () => {
  const evList = lHGlobObj.persistentVars.evList
  evList.forEach(el => window.addEventListener(el, lHGlobObj.userUIActivityHandler, {capture:false, once:false, passive:true}))
  lHGlobObj.persistentVars.myEvList = true
// ToDo: Add addon-disable eventListener here
}

//  ╒══════╤════════════════╦═════╦═══╦═══════════════════════════════════════════════════════╕
//  │ URL: │ /user/settings ║start║   ╠═══════════════════════════════════════════════════════╡
//  ╘══════╧════════════════╩═════╩═══╩═══════════════════════════════════════════════════════╛

lHGlobObj.setupSettingsUI = uiSt => {

  const navIfNeeded = ev => {
    const uiContainer = document.querySelector('div.user.settings>div.ui.container>div.ui.grid>div.twelve.wide.column.content')
    if ((uiSt.navedTo === true) || (uiContainer === null)) { return              }
    else                                                   { uiSt.navedTo = true }
    uiContainer.innerHTML = uiSt.dfNav.contInnerHTML
  }

  const menuObjOnClick = ev => {
    ev.preventDefault()
    Object.values(document.querySelectorAll('a.active.item')).forEach(el => el.classList.remove('active'))
    Object.values(document.getElementsByClassName(dfMnImg.act)).forEach(el => el.classList.remove(dfMnImg.act))
    document.getElementById(dfMnImg.id).classList.add(dfMnImg.act)
    navIfNeeded(ev)
  }

  const menuImgOnTransitEnd = ev => {
    if (ev.target.width==0) {
      ev.target.classList.remove(dfMnImg.anim)
      ev.target.parentNode.style.backgroundColor = dfMnObj.inactBg
    } else {
      ev.target.classList.add(dfMnImg.anim)
      ev.target.parentNode.style.backgroundColor = dfMnObj.actBg
    }
  }

//const removeAllEventListenersFromElement = (element) => {
//  let clone = element.cloneNode() //why not use 'true'?...
//  while (element.firstChild) clone.appendChild(element.lastChild)
//  element.parentNode.replaceChild(clone, element)
//}

//  const mutObsCB = (mutationRecords, observerInstance) => {
//    const tsBasB = '0 0 1px rgba(255,255,255,0.50)'
//    const tsTopB = '0 0 1px rgba(0,0,0,1.00)'
//    let tsBas,tsTop,i
//    for (i=0,tsBas=tsBasB;i<=3;i++) {tsBas += ','+tsBasB}
//    for (i=0,tsTop=tsTopB;i<=7;i++) {tsTop += ','+tsTopB}
//    const logStl = {
//      base:    'color:beige;  font-weight:400; font-size:1.00rem; text-shadow:unset;',
//      boldOne: 'color:yellow; font-wieght:700; font-size:1.00rem; text-shadow:'+tsBas+','+tsTop+';',
//      norm:    'color:beige;  font-wieght:400; font-size:1.00rem; text-shadow:unset;'
//    }
//    for(const mutation of mutationRecords) {
//      if (mutation.oldValue.split(' ').sort().join(' ') !==  mutation.target.getAttribute('class').split(' ').sort().join(' ')) {
//        console.log('%cmutObsCB('+dfMnImg.id+'): The %c' + mutation.attributeName + '%c attribute was modified. Old value is: \'%c'+mutation.oldValue+'%c\', and the new one - \'%c'+mutation.target.getAttribute('class')+'%c\'.',
//          logStl.base,      logStl.boldOne, logStl.norm,      logStl.boldOne, logStl.norm,      logStl.boldOne, logStl.norm
//        )
//      }
//    }
////    observerInstance.disconnect()
//  }

  uiSt.mnCloneSrc  = document.querySelector(uiSt.dfCloneSrcSel)
  const mnCloneSrc = uiSt.mnCloneSrc
  if (mnCloneSrc === null) {return}
  const dfMnObj    = uiSt.dfMnObj
  const dfMnImg    = uiSt.dfMnObj.img
  if (!uiSt.navedTo) {uiSt.navedTo = uiSt.dfNavedTo}
  if (!uiSt.mnObj)   {uiSt.mnObj   = {}            }
  if (Object.entries(uiSt.mnObj).length === 0) {
    uiSt.mnObj  = mnCloneSrc.cloneNode(true)
    uiSt.mnObj  = mnCloneSrc.parentNode.insertBefore(uiSt.mnObj, mnCloneSrc.nextSibling)
    const mnObj = uiSt.mnObj
    mnObj.id                      = dfMnObj.id              /*Use one big, fat Object.assign instead?........*/
    mnObj.childNodes[0].nodeValue = dfMnObj.nodeValue
    mnObj.text                    = dfMnObj.text
    mnObj.textContent             = dfMnObj.textContent
    mnObj.innerHTML               = dfMnObj.text + '<img src=\'/img/' + dfMnImg.src + '\' id=\'' + dfMnImg.id + '\' class=\'' + dfMnImg.class + '\'/></a>'
    mnObj.href                    = dfMnObj.href
    mnObj.baseURI                 = dfMnObj.baseURI
    mnObj.pathname                = dfMnObj.pathname
    mnObj.style.transition        = dfMnObj.transition
    mnObj.addEventListener(                              'click',         menuObjOnClick,      {capture:false, once:false, passive:false})
    document.getElementById(dfMnImg.id).addEventListener('transitionend', menuImgOnTransitEnd, {capture:false, once:false, passive:true })
//    if (!uiSt.myMutationObserver) {uiSt.myMutationObserver = new MutationObserver(mutObsCB)}
//    uiSt.myMutationObserver.observe(document.getElementById(dfMnImg.id),{childList:false, attributes:true, characterData:false, subtree:false, attributeOldValue:true, characterDataOldValue:false, attributeFilter:['class']})
  }
}
//╞═══════════════════════════════════════════════════════════════════════════════════════════════╡
lHGlobObj.setupSettingsUI(lHGlobObj.settingsUI)

if (!lHGlobObj.persistentVars.myEvList) { lHGlobObj.addMyEvList() }

if (lHGlobObj.persistentVars.myMouseTim) {clearTimeout(lHGlobObj.persistentVars.myMouseTim)}
lHGlobObj.persistentVars.myMouseTim = setTimeout(lHGlobObj.my3DStart, 1000*lHGlobObj.userParams.preStartDelay)
