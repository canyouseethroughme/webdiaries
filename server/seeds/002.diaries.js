exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("diaries")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("diaries").insert([
        {
          title: "Friday weirdness and tequila weekends 🚀",
          text: `M gave me a few moments of computer access, mainly to prepare for tomorrow's workday. This weekend has been exhausting and right now, i have a major hangover from the tequila. Believe me, the alcohol made it all easier.
          Friday, we talked about new boundaries and what he wanted for us this weekend. He over dramatizes but this time,not so much. He out and out made his desires known.When i'm at work tomorrow, i'll spill.
          
          But Friday also had a couple weirdness's too. We both went for Covid19 testing, even though it's pretty clear neither of us have it. Ouch!
          
          Later, he dropped that his friend was flying in from NYC and he offered him MY APARTMENT for the guy to stay in for the week, since i'm here and not using it. i guess that clarifies (in his mind) i'm staying put, even though i have a 35 mile each way trip to work three times a week and i was considering staying at my place on work nights. Not to mention, it's MY APARTMENT. But fuck, i caved and agreed. i guess why not. What would i say anyway? The interesting part of this is that the last time i saw the friend was when we played a paintball match a few years ago. The friend killed M and i killed the guy's wife, plus i was the second last to die. We did a hard swap, winners with winners that night. OOOO La La! There' s something cooking there. M thinks longer term and always has a plan.. Wonder if the wife is here too?
          
          As always, be safe,
          XOXO,
          mariel`,
          favorite: false,
          user_id: 1,
        },
        {
          title: "Who the hell text so early on a Sunday morning? 📱",
          text: `Got woken up at 8AM⏰!!! On a Sunday morning!1 You kidding me? But it was Jenny... so she's forgiven. Haha. She asked if we could do breakfast later. TBH, I sorta forgot we set that up. She asked if 10:30AM would be ok and I said that's more than fine. Apparently, $2 Buck Chuck bottles of wine can still get you drunk.

          Then Missy texted too. She was with the meetup group for a few years but disappeared being a busy single Mom. I used to call her Suzy Homemaker because she had that kind of personality. She's cool though and pretty innocent except for that one time at adult camp years ago and drunkenly grabbed my ass. lol. Anyway, I asked is she wanted to join us for breakfast and she said ok. So it'll be three of us and it'll be fun to catch up with each other's lives once again.
          
          Ok, I wasn't going to post this part but I had a dream last night. Apparently in the dream, I got married. haha. She was wearing a nice beige or white dress with some sparkly material on it too. What's it called? Those bedazzle things. Forgot the words. She was pretty, black hair and a nice slender nose is what I recall from the side view. She had blue or green eyes. I'm guessing she was about my height. Not super skinny. Maybe around 130 lbs. I think she was from a Greek decent. Don't ask me how I dreamt that. I don't even know one Greek person in my life nor any movie stars that is Greek but she looked Greek.
          
          We were having a big after wedding party so we were running around trying to make sure the guests were taken care of. I recall we bumping into each other and my "wife" lol said that she was craving for just a few minutes to hug and kiss me. Awwwwue. That was sweet. I recall thinking that it'll be so nice to discover and learn more about how she tics and the years we'll have discovering that. I do recall how I told myself that I will work on making her happy and at the same time, making sure I take care of myself and make me happy too. The things that make you go hmmmmm...
          
          Back to the real world, I realize now that I could have been a better husband in the past. I guess I wasn't as aware before about life so yeah, I can man up to that and say so. Not that I was evil before. It's just that now, I am more aware of the other person's well being and I think I'd do a much better job at being a husband.
          
          For now, I'm going to just say "Whew! It was just a dream! Thank God it wasn't real!" haha. Nope, not even close to wanting that. I know what I do want right now. I want my 2nd cup of coffee, to take a shower, and a fricking hair cut. That's more than enough for now.
          
          It's an awesome day today. The high will be 74° F (23.3° C) and sunny. Makes me want to go out and put on a white or beige dress and enjoy the sun :) Not!!! (Holding on extra hard to my man card). Need to get ready to meet my friends. Everyone go out there and smile at people. They do smile back. When the cute ladies smile back, I'm so tempted to walk backwards and start a conversation in reverse but no, I never do. lol`,
          favorite: true,
          user_id: 1,
        },
        {
          title: "Today is my sister's Birthday🎂🎉🥳",
          text: `Today is my sister’s birthday. She turned 65 this year and has been doing all the Medicare search and paperwork this past week or so. She showed me the books that have all the programs for her particular chosen Medicare deal. I call it deal but I know that’s not the right word. I remember when Mom had to choose her Medicare health and then renew it every year. It sucked. I am not looking forward to that day when I have to choose a Medicare package. Luckily I don’t have to for now.
          She will be spending her birthday fairly quiet. She will probably see her son and then talk with grandchildren via skype or facetime and then do her regular Sunday activities. Since the pandemic and quarantine she rarely goes anywhere other than to the store, or doctor appointments. She isn’t anxious to go to the reopening’s of anywhere including church. Don’t blame her.
          Well it seems that the “argument “between Cousin J and Niece D has escalated a little further. Two of our cousins defended Diane and one was his brother I am guessing although he didn’t post it but as a result (and he blames the cousin) my niece unfriended him. It couldn’t be the obnoxious attitude and belligerent attitude you had would it? I am staying out of it. I would like to tell him off but as I said to Liz it would backfire on me.
          It is a beautiful morning. A breezy and sunny day is the forecast and it it’s going to get in to the mid 70’s. I will be going out soon. I want to get a box to the Good will distribution collection center and then pick up a couple of things. Like my prescription of D-12 that I was supposed to have yesterday.
          I also have to do phone calls that I didn’t make yesterday. What a great union committee person I am. Maybe can do more tomorrow if I don’t get it down today. I still don’t like doing this.
          Well the dryer is done so I am going to go fold them.`,
          favorite: false,
          user_id: 1,
        },
        {
          title: "All Around Me🌎",
          text: `The air turned black all around me, as my phone started to ring! I had a bad feeling Don Paradis was going to call me. Sure enough when my phone rang it was Don Paradis. He just come by as he was leaving the VA hospital!
          I told him there was no way I could let him in the building when I saw him in may. Plus I wasn't home when he showed up. So what's the deal with him just showing up.
          Oh I know what it is .... He is off probation now so he thinks things are going to be just like they were when I lived at Barton apartments. You know he was an ass hole to me when I lived at Barton apartments. I doubt things will be any different now. But maybe he thinks I'll take pitty on him due to his cancer.
          When Don Paradis and I parted ways almost a year ago he accused me of dating someone else. Why? Because some bitch who lives in my building took upon herself to open her fat lieing mouth and tell him I was seeing another man. Granted I didn't want Don Paradis around even then. But I would like to know where it is written my nieghbor's have stir up more trouble than I already have?`,
          favorite: true,
          user_id: 1,
        },
        {
          title: "Lightening Up💡",
          text: `I've been a little heavy lately. My lust for Mr. Curved Line has been very grounding, very earthy. I like that solidness to my feelings, I do so enjoy my dark recesses and wandering their winding corridors, map in one hand and a candle in the other. Discovering new ways of thinking about myself and others is fascinating, opulent work. But the weight of it is grounding, and I have another place I'd like to flit to on a swirling breeze. I do have, so called, loftier concerns.

          A strange aside to my deep want of Mr. Curved Line is the way it affects my spirituality, rather how his wife's words have. She was arresting in her frankness and communication of things I thought too important for a first chat. She made a point out of telling me to hold fast to her story that she had passed on to me, a message of sorts, and I feel it resonating in that particular way my views call on me. And so I have thoughts not of this terrestrial plane and it feels like a homecoming of sorts. I am never far from my faith, some of us have a shorter tether. And mine has pulled taunt and I am happily snapping back to my home.
          
          I had thought I would not find others who shared my spirituality, besides Voldemort (aka First Whatever), because it was experienced and I thought that time in my life was at an end. Believed it with all of me, that although more people come to me for help and comfort, I would no longer have that to share so fluidly again. It was as if I had wandered from my monastery and now found myself in amongst the people. I was content to relegate it to my past, much as Voldemort, himself. And while I was touched at Mr. Curved Line's wife's story, I thought it unlikely to help me.
          
          Now I see what I failed to see earlier, that it was not a message for me to pass on, but rather it was a call for my return. The world picked up, rotated and slide effortlessly back into place in front of me and I see the path ahead. This meeting has the added dimension of celebrating my newfound old place. Now to soar, when the world is new to me once more, I marvel at the unending serendipity of it all, perfect as the curve of a wing... or a line.`,
          favorite: true,
          user_id: 1,
        },
        {
          title: "I spoke 🦜 too soon",
          text: `Update. In life in general. Coronavirus, George Floyd murder, looters and riots, chaos all around.

          I am in finance at Harley. Loving it. It is crazy and fast paced but just what I need.
          
          Still fucking my coworker. I think I love him. Pretty sure I do but not ready to venture down that avenue.
          
          Got a new nose. I got filler! Loving it. Definitely getting rhinoplasty.`,
          favorite: true,
          user_id: 1,
        },
        {
          title: "another diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: true,
          user_id: 2,
        },
        {
          title: "two diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: true,
          user_id: 2,
        },
        {
          title: "three diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: true,
          user_id: 2,
        },
        {
          title: "four diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: true,
          user_id: 2,
        },
        {
          title: "five diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: true,
          user_id: 2,
        },
        {
          title: "six diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: false,
          user_id: 2,
        },
        {
          title: "seven diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: false,
          user_id: 2,
        },
        {
          title: "eight diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: false,
          user_id: 2,
        },
        {
          title: "nine diary",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          favorite: true,
          user_id: 2,
        },
      ]);
    });
};
