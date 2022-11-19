import React from "react";
import Navbar from "../components/nav"
const Off=()=>{
    return (
        <>
        <Navbar/>
        <div className="ma">
  <div className="bc">
    <h1 className="head-title">The Office(2005–2013)</h1>
    <span id="cer">TV-14</span>
  </div>
  <video width={900} height={450} controls="" autoPlay="" muted="">
    <source
      src="../website/Black Adam – Official Trailer 1.mp4"
      type="video/mp4"
    />
  </video>
  <div className="syno">
    <div className="syn">
      <div className="head">Synopsis:</div>
      <div className="con">
        A mockumentary on a group of typical office workers, where the workday
        consists of ego clashes, inappropriate behavior, and tedium.
      </div>
    </div>
    <div className="headn">
      <div className="tit">Top Cast</div>
      <div className="wrap">
        <div className="im">
          <img src="./ste.jpg" />
          <h4>Steve Carell</h4>
        </div>
        <div className="im">
          <img src="./jen.jpg" alt="" />
          <h4>Jenna Fischer</h4>
        </div>
        <div className="im">
          <img src="./joh.jpg" alt="" />
          <h4>John Krasinski</h4>
        </div>
        <div className="im">
          <img src="./rain.jpg" alt="" />
          <h4>Rainn Wilson</h4>
        </div>
      </div>
      <div className="rev">
        <div className="top">Reviews:</div>
        <div className="h">No Laugh Tracks!!! ⭐10</div>
        <div className="cont">
          The best thing of this show is there are no background audiences
          laughing at even poor jokes. There are many sitcoms who use these
          tricks to add laughter and it is sometimes little bit irritating. The
          show depends on great dialogues, one liners and Steve Carell. PLEASE
          PLEASE DO NOT FORGET TO WATCH S4E8. This one is my favourite after
          Threat Level Midnight episode!!! Michael Scott's character carries the
          show on its shoulders. After Steve Carell's departure, I find it
          difficult to binge watch all the episodes. That's my opinion!! Some
          people liked the show after Steve but few episodes were becoming
          excruciatingly long and boring. But still there were some gags and
          laughs. Must watch!! Everyone for sure will like it. My personal
          favourites are one liners and how Michael jokes around with every
          character like Oscar, Daryll, Stanley etc.
        </div>
      </div>
      <div className="h">The Show you should be watching! ⭐10</div>
      <div className="cont">
        The Office regardless of the British version is probably one of the best
        comedies out there. Steve Carrell is a comic genius and I remember him
        from his days at the Daily Show on Comedy Central. The other cast
        members are really unknown. They look like office workers that you and I
        work beside five days a week. His character of Michael Scott is purely
        genius. This guy is somebody we all know who thinks he's all that and a
        bag of chips but he's not. The characters in the Office do need to be
        more clear. They are all rather vague so far to me. Sometimes, I don't
        know who is which but I can tell you something. This show makes me want
        to watch it again because I work in an office and I have colleagues like
        them too. When they were standing outside during a fire, it was
        interesting to see that a simple fire like a toaster burning because the
        new temp and business school college student left something there in the
        wrong spot. They made the experience watchable and interesting to see
        who would do who on a desert island much like Lost and what movies they
        would see. I bet there are people who have the same movies on their list
        too. Long live the Office.
      </div>
      <div className="h">Your Review:</div>
      <div className="cont">
        <textarea
          placeholder="Enter Your Comments"
          rows={5}
          defaultValue={""}
        />
      </div>
      <center>
        <button id="sub">Submit</button>
      </center>
    </div>
  </div>
</div>
</>
    )
}
export default Off