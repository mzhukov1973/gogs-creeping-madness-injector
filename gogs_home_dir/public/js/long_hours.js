//    ╔╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╗
//    ╠╬╬╬╬╬╣╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╠╬╬╬╬╬╣
//    ╠╬╬╬╬╬╣"LongHours" ─ Brain-teasing, Sanity-tilting, Subtle Repository Augmentation╠╬╬╬╬╬╣
//    ╠╬╬╬╬╬╬╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╬╬╬╬╬╬╣
//    ╠╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╣
//    ║   Version: 1.0.1                                                                      ║
//    ║   Author:  Maxim Zhukov <mzhukov31415dev@gmail.com>                                   ║
//    ║   GitHub:  https://github.com/mzhukov1973/gogs-creeping-madness-injector              ║
//    ║   Demo:    https://testbed2.cloud.tilaa.com:7443                                      ║
//    ║   License: MIT                                                                        ║
//    ╟┬────────────┬─────────────────────────────────────────────────────────────────────────╢
//    ║│MIT License:│                                                                         ║
//    ║╰────────────╯                                                                         ║
//    ║ ╭┬┬┬────────────────────────────────────────────────────────────────────────────────╮ ║
//    ║ ├┼┼┤ Copyright (c) 2018 Maxim Zhukov                                                │ ║
//    ║ ├┼┼┤                                                                                │ ║
//    ║ ├┼┼┤ Permission is hereby granted, free of charge, to any person obtaining a copy   │ ║
//    ║ ├┼┼┤ of this software and associated documentation files (the "Software"), to deal  │ ║
//    ║ ├┼┼┤ in the Software without restriction, including without limitation the rights   │ ║
//    ║ ├┼┼┤ to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      │ ║
//    ║ ├┼┼┤ copies of the Software, and to permit persons to whom the Software is          │ ║
//    ║ ├┼┼┤ furnished to do so, subject to the following conditions:                       │ ║
//    ║ ├┼┼┤                                                                                │ ║
//    ║ ├┼┼┤ The above copyright notice and this permission notice shall be included in all │ ║
//    ║ ├┼┼┤ copies or substantial portions of the Software.                                │ ║
//    ║ ├┼┼┤                                                                                │ ║
//    ║ ├┼┼┤ THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     │ ║
//    ║ ├┼┼┤ IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       │ ║
//    ║ ├┼┼┤ FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    │ ║
//    ║ ├┼┼┤ AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         │ ║
//    ║ ├┼┼┤ LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  │ ║
//    ║ ├┼┼┤ OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  │ ║
//    ║ ├┼┼┤ SOFTWARE.                                                                      │ ║
//    ║ ╰┴┴┴────────────────────────────────────────────────────────────────────────────────╯ ║
//    ║                                                                                       ║
//    ╠╤═══════════╤══════════════════════════════════════════════════════════════════════════╣
//    ║│Parameters:│                                                                          ║
//    ║╰───────────╯                                                                          ║
//    ║       The maximum amount (in degrees) any affected element shall be rotated           ║
//    ║     relative to each of the three axes, each time its' timer fires.                   ║
//    ║       I.e. the element would: "transform:rotateX(±1°) rotateY(±1°) rotateZ(±1°)"      ║
//    ║     using 3 random numbers [-1°; +1°] as the amount to rotate around each of          ║
//    ║     the 3 axes.                                                                       ║
//    ║ ╭┬┬┬───────────────────────────────────╮                                              ║
//    ║ ├┼┼┤      rotAmpl = 1                  │      Default: 1    (±1°)                     ║
//    ║ ╰┴┴┴───────────────────────────────────╯                                              ║
//    ║                                                                                       ║
//    ║       The maximum amount (in em) any affected element would be translated along each  ║
//    ║     of the three axes, each time its attached timer fires.                            ║
//    ║       I.e. the element would "transform:translate3D(±0.3em, ±0.3em, ±0.3em)"          ║
//    ║     using 3 random numbers [-0.3em; +0.3em] as the measure of how far to move along   ║
//    ║     each of the axes.                                                                 ║
//    ║ ╭┬┬┬───────────────────────────────────╮                                              ║
//    ║ ├┼┼┤      transAmpl = 0.3              │      Default: 0.3  (±0.3em)                  ║
//    ║ ╰┴┴┴───────────────────────────────────╯                                              ║
//    ║                                                                                       ║
//    ║       The minimum and maximum amount of time (in seconds) each new transition is      ║
//    ║     to take.                                                                          ║
//    ║ ╭┬┬┬───────────────────────────────────╮                                              ║
//    ║ ├┼┼┤      transitMin = 4               │      Default: 4    (⩾4sec)                   ║
//    ║ ├┼┼┤      transitMax = 8               │      Default: 8    (⩽8sec)                   ║
//    ║ ╰┴┴┴───────────────────────────────────╯                                              ║
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
//    ║ ╭┬┬┬───────────────────────────────────╮                                              ║
//    ║ ├┼┼┤      firstTransfWaitMin = 3       │      Default: 3    (⩾3sec)                   ║
//    ║ ├┼┼┤      firstTransfWaitMax = 20      │      Default: 20   (⩽20sec)                  ║
//    ║ ╰┴┴┴───────────────────────────────────╯                                              ║
//    ║                                                                                       ║
//    ║       The minimum and maximum amount of time (in seconds) that would elapse between   ║
//    ║     two consecutive transformations of each affected element for all transformations  ║
//    ║     after the first one.                                                              ║
//    ║ ╭┬┬┬───────────────────────────────────╮                                              ║
//    ║ ├┼┼┤      transfWaitMin = 4            │      Default: 4    (⩾4sec)                   ║
//    ║ ├┼┼┤      transfWaitMax = 8            │      Default: 8    (⩽8sec)                   ║
//    ║ ╰┴┴┴───────────────────────────────────╯                                              ║
//    ║                                                                                       ║
//    ║       The amount of time there should be no Gogs-related UI activity for animation    ║
//    ║     to launch.                                                                        ║
//    ║ ╭┬┬┬───────────────────────────────────╮                                              ║
//    ║ ├┼┼┤      preStartDelay = 40           │      Default: 40   (40sec)                   ║
//    ║ ╰┴┴┴───────────────────────────────────╯                                              ║
//    ║                                                                                       ║
//    ╚═══════════════════════════════════════════════════════════════════════════════════════╝

  let LongHoursGlobObj = function() {

    this.userParams = {
      rotAmpl: 1,
      transAmpl: 0.3,
      transitMin: 4,
      transitMax: 8,
      firstTransfWaitMin: 3,
      firstTransfWaitMax: 20,
      transfWaitMin: 4,
      transfWaitMax: 8,
      preStartDelay: 40
    }

    this.persistentVars = {
      transitRnd:         this.userParams.transitMax         - this.userParams.transitMin,
      firstTransfWaitRnd: this.userParams.firstTransfWaitMax - this.userParams.firstTransfWaitMin,
      transfWaitRnd:      this.userParams.transfWaitMax      - this.userParams.transfWaitMin,
      myEvList: false,
      evList: [
        'focus', 'blur', 'reset', 'submit', 'compositionstart', 'compositioupdate', 'compositionend',
        'resize', 'scroll', 'fullscreenchange', 'cut', 'copy', 'paste', 'keydown', 'keypress', 'keyup',
        'mousedown', 'mouseup', 'mouseenter', 'mousemove', 'mouseover', 'auxclick', 'click', 'contextmenu',
        'wheel', 'mouseleave', 'mouseout', 'select', 'input', 'valueChange', 'RadioStateChange', 'CheckBoxStateChange'
      ],
      myMouseTim: undefined
    }

    this.settingsUI = {
      dfMnObj: {
        id:          'longHoursUserSettingsMenuItem',
        actBg:       'rgba(247, 223, 30, 0.4)',
        inactBg:     'rgba(247, 223, 30, 0.2)',
        nodeValue:   'LongHours UI mod',
        text:        'LongHours UI mod',
        textContent: 'LongHours UI mod',
        img:         {src:'javascript.svg', id:'longHoursUserSettingsMenuItemImg', class:'longHoursUserSettingsMenuItemImg', act:'longHoursUserSettingsMenuItemImgAct', anim:'longHoursUserSettingsMenuItemImgAni'},
        href:        '',
        baseURI:     '',
        pathname:    '',
        transition:  'all .2s ease-in-out'
      },
      dfCloneSrcSel:      'a[href$="/user/settings/ssh"]',
      mnCloneSrc:         undefined,
      mnObj:              undefined,
      myMutationObserver: undefined,
      dfNav:              {
        contInnerHTML:   '....LongHours settings go here....'








      }
    }

    this.tRandom = () => (window.crypto.getRandomValues(new Uint16Array(1))[0]/65536).toFixed(6)

    this.recurToutPt = (el) => {
      el.style.transition = 'all ' + (this.userParams.transitMin + this.tRandom()*this.persistentVars.transitRnd).toFixed(6) + 's ease'
      el.style.transform  = 'rotateX(' + parseInt(this.tRandom()*this.userParams.rotAmpl*2 - this.userParams.rotAmpl, 10) + 'deg) rotateY(' + parseInt(this.tRandom()*this.userParams.rotAmpl*2 - this.userParams.rotAmpl,10) + 'deg) rotateZ(' + parseInt(this.tRandom()*this.userParams.rotAmpl*2 - this.userParams.rotAmpl, 10) + 'deg) translate3d(' + (this.tRandom()*this.userParams.transAmpl*2 - this.userParams.transAmpl).toFixed(6) + 'em,' + (this.tRandom()*this.userParams.transAmpl*2 - this.userParams.transAmpl).toFixed(6) + 'em,' + (this.tRandom()*this.userParams.transAmpl*2 - this.userParams.transAmpl).toFixed(6) + 'em)'
      if (!el.hasOwnProperty('longHoursLab3dTim')) {
        el.longHoursLab3dTim = setTimeout(this.recurToutPt, parseInt(1000*this.userParams.firstTransfWaitMin + this.tRandom()*1000*this.persistentVars.firstTransfWaitRnd, 10), el)
      } else {
        clearTimeout(el.longHoursLab3dTim)
        el.longHoursLab3dTim = setTimeout(this.recurToutPt, parseInt(1000*this.userParams.transfWaitMin + this.tRandom()*1000*this.persistentVars.transfWaitRnd, 10), el)
      }
    }

    this.my3DStart = () => {
      const selList = ['ui label', 'ui button', 'item']
      selList.forEach((classList) => Object.values(document.getElementsByClassName(classList)).forEach(el => {
        el.parentNode.classList.add('longHoursLabelContPersp')
        el.classList.add('longHoursLabel3D')
        this.recurToutPt(el)
      }))
    }

    this.userUIActivityHandler = ev => {
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
      if (this.persistentVars.myMouseTim) {
        clearTimeout(this.persistentVars.myMouseTim)
      }
      this.persistentVars.myMouseTim = setTimeout(this.my3DStart, 1000*this.userParams.preStartDelay)
    }

    this.removeMyEvList = () => {
      const evList = this.persistentVars.evList
      evList.forEach(el => window.removeEventListener(el, this.userUIActivityHandler, {capture:false, once:false, passive:true}))
      clearTimeout(this.persistentVars.myMouseTim)
      this.persistentVars.myEvList = false
    }

    this.addMyEvList = () => {
      const evList = this.persistentVars.evList
      evList.forEach(el => window.addEventListener(el, this.userUIActivityHandler, {capture:false, once:false, passive:true}))
      this.persistentVars.myEvList = true
// ToDo: Add addon-disable eventListener here
    }

    this.setupSettingsUI = () => {
      const uiSt = this.settingsUI

      const navTo = ev => {
        const uiContainer = document.querySelector('div.user.settings>div.ui.container>div.ui.grid>div.twelve.wide.column.content')
        if (uiContainer !== null) { 
          uiContainer.innerHTML = uiSt.dfNav.contInnerHTML
        }
      }

      const menuObjOnClick = ev => {
        ev.preventDefault()
        if (!ev.currentTarget.classList.contains('active')) {
          Object.values(document.querySelectorAll('a.active.item')).forEach(
            el => {
              if (el.style.backgroundColor == dfMnObj.actBg) {el.style.backgroundColor = dfMnObj.inactBg}
console.log(el.style.backgroundColor);
              el.classList.remove('active')
            }
          )
          ev.currentTarget.classList.add('active')
          ev.currentTarget.style.backgroundColor = dfMnObj.actBg
          navTo(ev)
        }
      }

//const removeAllEventListenersFromElement = (element) => {
//  let clone = element.cloneNode() //why not use 'true'?...
//  while (element.firstChild) clone.appendChild(element.lastChild)
//  element.parentNode.replaceChild(clone, element)
//}

      uiSt.mnCloneSrc  = document.querySelector(uiSt.dfCloneSrcSel)
      if (uiSt.mnCloneSrc === null) {return}
      const dfMnObj    = uiSt.dfMnObj
      const dfMnImg    = uiSt.dfMnObj.img
      if (!uiSt.mnObj) {
        uiSt.mnObj = uiSt.mnCloneSrc.cloneNode(true)
        uiSt.mnObj.classList.remove('active')
        uiSt.mnObj.style.backgroundColor   = uiSt.dfMnObj.inactBg
        uiSt.mnObj = uiSt.mnCloneSrc.parentNode.insertBefore(uiSt.mnObj, uiSt.mnCloneSrc.nextSibling)
        Object.assign(
          uiSt.mnObj, {
            'id':uiSt.dfMnObj.id,
            'text':uiSt.dfMnObj.text,
            'textContent':uiSt.dfMnObj.textContent,
            'innerHTML':(uiSt.dfMnObj.text + '<img src=\'/img/' + uiSt.dfMnObj.img.src + '\' id=\'' + uiSt.dfMnObj.img.id + '\' class=\'' + uiSt.dfMnObj.img.class + '\'/></a>'),
            'href':uiSt.dfMnObj.href,
            'pathname':uiSt.dfMnObj.pathname
          }
        )
        uiSt.mnObj.baseURI                 = uiSt.dfMnObj.baseURI
        uiSt.mnObj.childNodes[0].nodeValue = uiSt.dfMnObj.nodeValue
        uiSt.mnObj.style.transition        = uiSt.dfMnObj.transition
        uiSt.mnObj.addEventListener(                         'click',         menuObjOnClick,      {capture:false, once:false, passive:false})
      }
    }

//Constructor per se: (Add our UI event listener if one doesn't exist already, schedule the first script launch in preStartDelay seconds (default: 40) and mutate current page if it is /user/settings.)
    !this.persistentVars.myEvList && this.addMyEvList()
    this.persistentVars.myMouseTim && clearTimeout(this.persistentVars.myMouseTim)
    this.persistentVars.myMouseTim = setTimeout(this.my3DStart, 1000*this.userParams.preStartDelay)
    this.setupSettingsUI()
  }
//═══════════════════════════════════════════════════════════════════════════════════════════════

//Create the new global object if one doesn't exist yet:
!window.longHoursGlobObj && (window.longHoursGlobObj = new LongHoursGlobObj())
const lHGlobObj = window.longHoursGlobObj

