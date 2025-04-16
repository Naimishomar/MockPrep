import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Interview() {
  const videoRef = useRef(null);
  const [changeMode, setchangeMode] = useState(false);
  const [cutCall, setcutCall] = useState(null);
  const [micMuted, setMicMuted] = useState(false);
  const [closeChat, setcloseChat] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: true,
        });
        setcutCall(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
      } catch (err) {
        console.error("Camera access error:", err);
        alert("Please allow camera access or check your device settings.");
      }
    };
    startCamera();   
  }, []);

  const stopCamera = () => {
    if (cutCall) {
      cutCall.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setcutCall(null);
      navigate("/");
       }
    };

    const toggleMic = () => {
        if (cutCall) {
        const audioTrack = cutCall.getAudioTracks()[0];
        if (audioTrack) {
            audioTrack.enabled = !audioTrack.enabled;
            setMicMuted(!audioTrack.enabled);
            console.log(micMuted);   
        }
        }
    }

  return (
    <>
      <div className="flex-1 bg-white/10 relative rounded-xl">
        <video ref={videoRef} autoPlay playsInline className={`border rounded-xl object-cover scale-x-[-1] ${changeMode? "w-[25%] h-[25%] absolute right-0 bottom-0 m-1": "w-full h-full"}`}/>
        <div className={`bg-black rounded-xl ${changeMode? "w-full h-full": "absolute right-0 bottom-0 w-[25%] h-[25%] m-1"}`}></div>
        <div className="w-full h-14 absolute bottom-0 mb-5 flex justify-center items-center gap-10">
          <i class="ri-camera-switch-fill text-2xl bg-white/15 p-4 rounded-full cursor-pointer" onClick={() => setchangeMode(!changeMode)}></i>
          <i class="ri-mic-off-fill text-2xl bg-white/15 p-4 rounded-full cursor-pointer" onClick={toggleMic}></i>
          <i class="ri-phone-fill text-2xl bg-red-500 p-4 rounded-full cursor-pointer" onClick={stopCamera}></i>
        </div>
      </div>
      <div className="mt-60">
        <i class="ri-contract-left-right-line text-center text-2xl bg-white/20 p-2 rounded-full mx-3" onClick={()=>setcloseChat(!closeChat)}></i>
      </div>
      <div className={`bg-white overflow-auto rounded-xl ${closeChat?"w-0 absolute right-0":"w-[30%]"}`}>
        <p>Hello</p>
      </div>
    </>
  );
}

export default Interview;
