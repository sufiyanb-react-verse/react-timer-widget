import { useEffect, useState } from "react";

export default function Timer() {

    const [minutes, setMinutes] = useState(60);

    const [seconds, setSeconds] = useState(60);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running || seconds <= 0) return;

        const id = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(id);
    }, [running, seconds]);

    const startTimer = (e) => {
        setSeconds(minutes * 60)
        setRunning(true);
    }

    const reset = () => {
        setSeconds(minutes * 60);
        setRunning(false);
    };

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    // const initiateDragging = (e) => {

    //     console.log(e)
    //     e.clientX = e.clientX + 30
    //     document.getElementById('timer_container').addEventListener('mousemove', function (mouseE) {
    //         console.log(mouseE)
    //         e.clientX = mouseE.clientX + 30
    //     })
    // }

    return (
        <>
            <div id="timer_container" style={{
                position: "absolute",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                width: "200px",
                textAlign: "center",
                fontFamily: "Arial"
            }}>
                <h2>Timer</h2>

                {
                    !running ? <>
                        <div>

                            <input value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                            <button onClick={startTimer}>
                                {running ? "Pause" : "Start"}
                            </button>
                        </div>
                    </>
                        : <div>

                            <div style={{ fontSize: "40px" }}>
                                {formatTime(seconds)}
                            </div>


                            <button onClick={reset}>
                                Reset
                            </button>
                        </div>
                }
            </div>
        </>
    );
}