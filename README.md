# datamapsNg
This is my first serious foray into the opensource world.

datamapsNg is a directive built using Angular 1.5 for the purposes of acting as a wrapper to fairly handy http://datamaps.github.io/.

I am by no means a master at javascript, in fact I'm not even a huge fan of it (Something about any language that doesn't do static type casting just rubs me the wrong way), so if I have done anything wrong, please don't hesitate to put up an issue with your grievence and I'll see if I can fix it.

# Dependencies
* Angular 1.5 (will probably work with earlier versions though this wasn't tested)
* All dependencies of http://datamaps.github.io/
 
Thats it :)

# Difference to angular-datamaps

The directive provided by https://github.com/dmachat/angular-datamaps I will not deny is more fleshed out then mine in a number of ways (they have been around longer, have more contributors, and just from looking through the project appear to have a much better grasp of the nuances of developing in JS).

I built this directive rather then using theirs for several reasons:

* Although I do like some things about angular, I don't like everything about it
  * Dirty watches aren't something I like (I know I use 1, but its only 1 and on a pretty small field)
* I enjoy learning about what I'm using
  * We use angular at my work place, and since somehow I am the only one who has to use it, I enjoy learning the nuances and tricks of the tools I use
  * The business needed something, and in my spare time I though, I'm on holiday, I either make one or a stuff around with another persons one for twice as long and learn about another persons thing rather then my a core technology (I do get that reading other peoples code is useful, but after going through all of what they did in angular-datamaps, I felt pretty comfortable I was aware of everything they were doing)
* I had a few issues with the angular-datamaps project
  * It lumps alot of configuration details into a single parameter (map)
  * It was inactive for about 9 months 
  * It would use that clearElement() function which seemed to me to be quite inefficient.
    * rather then do that, I actually tied into some of the internal workings of datamaps to side step this.

# Thank you

Thanks for reading my rant, enjoy the code, I know it doesn't use commonjs, or requirejs, mainly since I've never used them and have no clue as to how (no need so not learned).



