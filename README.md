# gogs-creeping-madness-injector <small><small></small>*Brain-teasing, Sanity-tilting, Subtle Repository Augmentation*</small></small>

A script, to be injected into GOGS installation ([Gogs](https://github.com/gogits/gogs) is a painless self-hosted Git service.), that after a little while begins to screw with your mind. Especially effective during long hours spent in front of the computer: all-night coding sessions, work / academic emergencies, etc.. Not for the fainthearted.

This is a 100% harmless script, (as opposed to a hack) written entirely according to relevant GOGS documentation, namely the [Custom Template](https://gogs.io/docs/features/custome_template) section, where the proper procedure to inject your own custom header and footer into a working Gogs installation is described.

It doesn't contaminate namespace (apart from a very few globals), doesn't slow down normal work process (it kicks in after a set period of inactivity, by default - after 40 seconds), installation is trivial (you just copy one file and create or modify another), all resulting changes are non-breaking and so far no adverse effects on users work have been detected.

You can fine-tune it to your tastes (parameters and a short description can be found at the top of long_hours.js file), though I sincerely recommend that you at least try it out for a short while with original settings.. 

Of course everyone is different, but I think I've managed to nail the parameters required for the most pyschedelic effect.. ))))

Check out the working [demo](https://testbed2.clous.tilaa.com:7443). 

Effect can be observed anywhere in the repository, regardless of wether you are logged in or not.

Just sit quietly for 40 seconds. )

So, the gist:

Once injected, script scans the current GOGS page (every page, wherever you go inside Gogs, since it sits in its footer) for elements, suitable to its task, sets up a (40 second) timer and waits.

Any UI activity during that period (for now it's only mousemove, but I'll add other events soon enough) resets the timer, so it times out only after 40 solid seconds of inactivity (hopefully at the point where a weary and porobably somewhat sleepy user stops or slows down working for a few moments to stretch/rub tired eyes/spend a few minutes staring dumbly at the monitor with unseeing eyes (truth be told, this last one is my personal favourite )) )).

Once its timer timed out, it sets up another listener to capture ui events (again, so far it's only mousemove) so that it can instantly react to any user activity by bring UI back to its current condition, and starts randomly and veeery slowly rotating (in 3D) and translating (also in 3D) various page elements.

Changes are miniscule (rotation is limited to &#x00B1;1 degrees around each axis and translation - to &#x00B1;0.3em in each of the three directions) and slow (transitions fire randomly for each element every 4 to 8 seconds and take 4 to 8 seconds to play out), so hopefully user would mistake the suddenly slightly alive UI for his/her failing eyes or assume that they just fancy it all...) 

If/when any UI action is attempted (i.e. a mouse moves inside Gogs window), script instantly ceases operation, returns page to the state it has found it initially and starts a new wait for the next 40 seconds of inactivity.

Hopefully, all this produces a few more smiles for this dreary old world.... )

Installation:

0. Pre-requisites:
 - A working Gogs installation. (If you don't have one - try it out! No, really - it's light, feature rich and a pleasure to work with. It's like your own personal private GitHub, only free.)

1. Installation itself:
 - Copy ```long_hours.js``` to your Gogs installation directory tree, namely to public/js subdirectory in Gogs installations' root. (By default, if it was installed according to [these](https://www.howtoforge.com/tutorial/how-to-install-gogs-go-git-service-on-ubuntu-1604) convenient instructions, it should reside in your home directory, like this: ```/home/<username>/go/src/github.com/gogits/gogs/public/js```.
 - Similarly, copy ```long_hours.css``` to ```<gogs_home_dir>/public/css```.
 - If you've already done some customisations to your Gogs installation (i.e. if the files ```<gogs_home_dir>/custom/templates/inject/footer.tmpl``` and ```<gogs_home_dir>/custom/templates/inject/head.tmpl``` already exist), then add these lines to each opf them:
   - to ```head.tmpl```:

```html
        <link rel='stylesheet' href='/css/long_hours.css'>
```

   - and to ```footer.tmpl```:

```html
        <script src='/js/long_hours.js'></script>
```
 - And if you haven't and these files do not yet exist, than create and fill them like this:

```console
        cd <gogs_home_dir>
        mkdir -p ./custom/templates/inject
        echo "<script src='/js/long_hours.js'></script>" > ./custom/templates/inject/footer.tmpl
        echo "<link rel='stylesheet' href='/css/long_hours.css'>" > ./custom/templates/inject/head.tmpl
```

 - Restart Gogs:

```console
        sudo service gogs restart
```
And you are all set! ) 

Now if you or any other user of your Gogs installation idle in front of it for longer than 40 seconds in a row, you may (hopefully) spent some quality time, questioning your eyesight and/or sanity... )

Enjoy! ))
