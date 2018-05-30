# "LongHours" ─ Brain-teasing, Sanity-tilting, Subtle Repository Augmentation
### *...Gogs Creeping Madness Injector...*
###### Version: 1.0.2+
###### License: MIT
A script, to be injected into [Gogs](https://github.com/gogits/gogs) installation ([Gogs](https://github.com/gogits/gogs) is a painless self-hosted Git service), that after a little while begins to screw with your mind. Especially effective during long hours spent in front of the computer: all-night coding sessions, work / academic emergencies, etc.. Not for the fainthearted.

This is a 100% harmless script, (as opposed to a hack) written entirely according to relevant [Gogs](https://github.com/gogits/gogs) documentation, namely the [Custom Template](https://gogs.io/docs/features/custome_template) section, where the proper procedure to inject your own custom header and footer into every page of a working [Gogs](https://github.com/gogits/gogs) installation is described.

It doesn't contaminate namespace (apart from a very few globals), doesn't slow down normal work process (it kicks in after a set period of user inactivity, by default - after 40 seconds), installation is trivial (you just copy three files and create or modify another two), all resulting changes are non-breaking and so far no adverse effects on users' work have been detected.

You can fine-tune it to your tastes (parameters and a short description can be found at the top of ```long_hours.js``` file), though I sincerely recommend that you at least try it out for a short while with original settings.

Obviously, everyone is different, but I think I've managed to nail down the perfect parameters required for the most psychedelic effect.. )))

Check out the working [demo](https://testbed2.cloud.tilaa.com:7443), look around, click [Explore](https://testbed2.cloud.tilaa.com:7443/explore/repos), look through the test repository and above all don't forget to leave the page alone for 40 seconds.. ) 

Effect can be observed anywhere in the repository, regardless of whether you are logged in or not.

Just sit quietly for 40 seconds. )

<br>

#### So, the gist, what does the script do:

Once injected, script scans the current [Gogs](https://github.com/gogits/gogs) page (every page, wherever you go inside [Gogs](https://github.com/gogits/gogs), since script gets injected in the footer of every page) for HTML elements, suitable to its task, sets up a (40 second) timer and waits.

Any UI activity during that period (for now it's only mousemove, but I'll add other events soon enough) resets the timer, so it times out only after **40** solid seconds of user inactivity (hopefully it happens at the point where a weary and possibly somewhat sleepy user stops or slows down working for a few moments to stretch the legs/rub tired eyes/spend a few minutes staring dumbly at the monitor with unseeing eyes (truth be told, this last one is my personal favourite :) )).

Once its timer times out, it sets up another listener to capture UI events (again, so far it's only mousemove) so that it can instantly react to any user activity by bringing UI back to its current condition, and starts randomly and veeery slowly rotating (in 3D) and translating (also in 3D) various elements it has found on the page.

Visible changes are miniscule: by default any rotation is limited to **&#x00B1;1°** around each axis and translation to **&#x00B1;0.3em** along each of the three directions, and also it is very-very slow (by default transitions fire randomly for each element every **4** to **8** seconds and take **4** to **8** seconds to play out), so hopefully user would mistake the suddenly slightly alive UI for his/her failing eyes or assume that they are just seeing things... 

If/when any UI action is attempted (i.e. a mouse moves inside [Gogs](https://github.com/gogits/gogs) window), script instantly ceases operation, returns page to the state it has found it in initially and starts a new wait for the next **40** seconds of inactivity.

Hopefully, all this will produce a few more smiles for this dreary old world.... )

<br>

#### Installation:

**0.** **Pre-requisites:**
 - A working [Gogs](https://github.com/gogits/gogs) installation. (If you don't have one - try it out! No, really - it's light, feature rich and a pleasure to work with. It's like your own personal private GitHub, only free.)

**1.** **Installation itself:**

<ul>
 <li>Copy <code>long_hours.js</code> to your <a href='https://github.com/gogits/gogs'>Gogs</a> installation directory tree, namely to <code>public/js</code> subdirectory in <a href='https://github.com/gogits/gogs'>Gogs</a> installations' root. (By default, if it was installed according to <a href='https://www.howtoforge.com/tutorial/how-to-install-gogs-go-git-service-on-ubuntu-1604'>these</a>) convenient instructions, it should reside in your home directory, like this: <code>/home/<b>${username}</b>/go/src/github.com/gogits/gogs/public/js</code>.</li>
 <li>Similarly, copy <code>long_hours.css</code> to <code><b>${gogs_home_dir}</b>/public/css</code>.</li>
 <li>Copy <a href='https://github.com/mzhukov1973/gogs-creeping-madness-injector/blob/master/gogs_home_dir/public/img/javascript.svg'><code>javascript.svg</code></a> to <code><b>${gogs_home_dir}</b>/public/img</code>.</li>
 <li>If you've already done some customisations to your <a href='https://github.com/gogits/gogs'>Gogs</a> installation (i.e. if the files <code><b>${gogs_home_dir}</b>/custom/templates/inject/footer.tmpl</code> and <code><b>${gogs_home_dir}</b>/custom/templates/inject/head.tmpl</code> already exist), then add these lines to each of them:
<ul>
<li>to <code>head.tmpl</code>:

```html
<link rel='stylesheet' href='/css/long_hours.css'>
```
 </li>

 <li>and to <code>footer.tmpl</code>:</li>
</ul>

```html
    <script src='/js/long_hours.js'></script>
```

</li>

 <li>And if you haven't and these files do not yet exist, then create and fill them like this:

```console
usr@srvr$ cd ${gogs_home_dir}
usr@srvr$ mkdir -p ./custom/templates/inject
usr@srvr$ echo "<script src='/js/long_hours.js'></script>" > ./custom/templates/inject/footer.tmpl
usr@srvr$ echo "<link rel='stylesheet' href='/css/long_hours.css'>" > ./custom/templates/inject/head.tmpl
```
 </li>
 <li>Restart <a href='https://github.com/gogits/gogs'>Gogs</a>:

```console
usr@srvr$ sudo service gogs restart
```
</li></ul>

And you are all set! ) 

Now if you or any other user of your [Gogs](https://github.com/gogits/gogs) installation will idle in front of it longer than 40 seconds in a row, you may (hopefully) spend some quality time, questioning your eyesight and/or sanity... )

Enjoy! ))

<br>

#### RoadMap:
**1.0.0** - Initial release: works, doesn't break anything, is configurable via parameters, set inside its main .js file.

**1.1.0** - Proper settings page (at ```.../user/settings```)

**1.2.0** - Allow creation of separate timer functions (with the same structure, but different parameters) and assigning them to user-definet selectors.

**1.3.0** - Settings presets (include several presets as an example, along with the default one), selectable (and editable, and definable) by user via their ```.../user/settngs``` page. Allow storing some of the mod's settings inside a repo (a-la *GPG mod*), owned by user or elsewhere in the system while staying 100% client-side (i.e. avoiding adding/changing any backend functionality, thus keeping this addon an addon).

**1.4.0** - Image manipulation as a UI mutation option (CSS filters, etc).

**1.5.0** - Performance penalty assesser, to be run once upon first injection, add setting to make some of the configured mutations conditional on users' perforance hit being below set threshold.

#### ChangeLog:
**1.0.0:**
- Initial release

**1.0.1:**
- Cleaned up namespace, pushed all parameters and relevant variables into one global object (```lHGlobObj```).

**1.0.2:**
- Added more UI events to trigger user activity detection (```focus```, ```blur```, ```reset```, ```submit```, ```compositionstart```, ```compositioupdate```, ```compositionend```, ```resize```, ```scroll```, ```fullscreenchange```, ```cut```, ```copy```, ```paste```, ```keydown```, ```keypress```, ```keyup```, ```mousedown```, ```mouseup```, ```mouseenter```, ```mousemove```, ```mouseover```, ```auxclick```, ```click```, ```contextmenu```, ```wheel```, ```mouseleave```, ```mouseout```, ```select```, ```input```, ```valueChange```, ```RadioStateChange```, ```CheckBoxStateChange```)
- Added a placeholder settings page to ```.../user/settings``` ([here](https://testbed2.cloud.tilaa.com:7443/user/settings), at the [demo](https://testbed2.cloud.tilaa.com:7443) installation).
- Cleaned up the global object definition, moved its initialisation into constructor
- Marked settings menu entry with a small JS logo, to indicate that it's a JS injected functionality as opposed to 'native' one, written in Go.
- Fixed menu styles change semantics at the modified ```.../user/settings``` page for the injected content.

*1.0.3(currently uncommitted):*
- Fixed the [issue](https://github.com/mzhukov1973/gogs-creeping-madness-injector/issues/1) with **`LongHours UI mod`** menu item in `.../user/settings` being not clickable if **`SSH Keys`** item is currently selected. It [works](https://testbed2.cloud.tilaa.com:7443/user/settings/ssh).
- Included javascript.svg logo icon with the mod installation set, amended installation instructions accordingly.

#### [ToDo](https://github.com/mzhukov1973/gogs-creeping-madness-injector/issues/2):
- Add a quick-settings menu drop-up into the standard [Gogs](https://github.com/gogits/gogs) footer.
- Fill the settings page itself with properly named and annotated (even if yet unconnected) controls to set mod's parameters. Use either exactly the elements found in other settings pages or use [Semantic](https://semantic-ui.com) (for now use version 2.3.1, later - guess it from the active [Gogs](https://github.com/gogits/gogs) installation itself).
- Add a general enable/disable control to the `.../user/settings` page, to control if **LongHours** is to run at all upon injection and properly connect it to the data - this one control should be completely functional.
- Make this JS logo change appearance to further indicate injections' status (i.e. ```not present```, ```loaded```, ```active```, ```error(?)```, ```disabled```, ```waiting to go active```, ```modified settings```, ```original settings```) and add the same status as text popup, appearing on hover over the settings item.
- In order to avoid depending on any external framework or library as well as for general lightness of code implement two-way coupling between settings values stored in object' sproperties and controls for setting them, found on `.../user/settings` page. Do so, by creating a Proxy for the object, with handler monitoring `.set(...)` calls and informing all concerned parties of any changes via custom events.

