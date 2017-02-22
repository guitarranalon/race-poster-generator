# Race poster generator
So I'm the community manager of a trail running team called [Cumbre Llangréu](http://gmcumbre.blogspot.com.es/). Almost every week some members go to a race (sometimes even more than one race a week). And I was asked to do a poster to publish in some social networks, like Facebook or Instagram. And I was fed up with doing almost the same again and again. That's the reason why I decided to create a tool to automate (a little) this task.
I was also willing to play around with React JS so I decided to make a simple web page where you can generate a poster and export it as a SVG compatible with any editor in order to be able to make some changes afterwards.
This was also a good chance to start using widely ES6 features that I've been experimenting with for a while now.

## Interesting things about the project
I wanted to spread my knowledge so I decided to use:

  - React JS: as I said before, I could have done this project faster without any framework because of its simplicity but I decided to learn something useful.
  - ES6: thanks to Babel transpiler you can use ES6 features today without any risk! And this is not a matter of being cool: it is sooo useful. Sometimes just sintactic sugar, but even in those cases the code tends to be clearer.
  - Images of the runners and sponsors base64 encoded in the JSON: just a way to have all of them grouped under one file (one http request).
  - Data uri: I used data URI to create a downloadable file without the need of a server side language (so I can deploy it even in Github Pages).
  - Fetch API: there were many options for this task, but this one seems to be the first easy to use standard way.
  - Promises: fetching the JSON file is a kind of promising thing.
  - Custom checkboxes: thanks to *Lea Verou's* and her excellent *CSS Secrets* book I learnt how to do it without complex hacking.