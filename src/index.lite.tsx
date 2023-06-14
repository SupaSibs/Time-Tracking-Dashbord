import { useStore } from "@builder.io/mitosis";
function Index(props) {
  const state = useStore({
    time: "daily",
  });
  return (
    <>
<link rel="stylesheet" type="text/css" href="index.css">
      <div>
        Report for Jeremy Robson
        <button onClick={() => (state.time = "daily")}>Daily</button>
        <button onClick={() => (state.time = "weekly")}>Weekly</button>
        <button onClick={() => (state.time = "monthly")}>Monthly</button>
      </div>
      <div>
        Work 5hrs {/* daily */}
        Previous - 7hrs {/* daily */}
        Play 1hr {/* daily */}
        Previous - 2hrs {/* daily */}
        Study 0hrs {/* daily */}
        Previous - 1hr {/* daily */}
        Exercise 1hr {/* daily */}
        Previous - 1hr {/* daily */}
        Social 1hr {/* daily */}
        Previous - 3hrs {/* daily */}
        Selfcare 0hrs {/* daily */}
        Previous - 1hr {/* daily */}
        Work 32hrs {/* weekly */}
        Previous - 36hrs {/* weekly */}
        Play 10hrs {/* weekly */}
        Previous - 8hrs {/* weekly */}
        Study 4hrs {/* weekly */}
        Previous - 7hrs {/* weekly */}
        Exercise 4hrs {/* weekly */}
        Previous - 5hrs {/* weekly */}
        Social 5hrs {/* weekly */}
        Previous - 10hrs {/* weekly */}
        Selfcare 2hrs {/* weekly */}
        Previous - 2hrs {/* weekly */}
        Work 103hrs {/* monthly */}
        Previous - 128hrs {/* monthly */}
        Play 23hrs {/* monthly */}
        Previous - 29hrs {/* monthly */}
        Study 13hrs {/* monthly */}
        Previous - 19hrs {/* monthly */}
        Exercise 11hrs {/* monthly */}
        Previous - 18hrs {/* monthly */}
        Social 21hrs {/* monthly */}
        Previous - 23hrs {/* monthly */}
        Self Care 7hrs {/* monthly */}
        Previous - 11hrs {/* monthly */}
      </div>
    </>
  );
}
