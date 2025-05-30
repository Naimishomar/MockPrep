import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "@gradio/client";

function Interview({ skill, experience, resume, duration }) {

  const videoRef = useRef(null);
  const recognitionRef = useRef(null);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const [changeMode, setchangeMode] = useState(false);
  const [cutCall, setcutCall] = useState(null);
  const [micMuted, setMicMuted] = useState(false);
  const [closeChat, setcloseChat] = useState(false);
  const [logText, setLogText] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [confidence, setConfidence] = useState(0);
  const hasStartedRef = useRef(false);

  const navigate = useNavigate();

  const appendLog = (msg) => {
    setLogText((prev) => prev + msg + "\n");
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        setcutCall(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
        startConfidenceTracking();
      } catch (err) {
        console.error("Camera access error:", err);
        alert("Please allow camera access or check your device settings.");
      }
    };
    startCamera();
  }, []);

  const startConfidenceTracking = async () => {
    const client = await Client.connect("NavneetYadav207002/Confidence");
    intervalRef.current = setInterval(async () => {
      if (!videoRef.current) return;
      const canvas = document.createElement("canvas");
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (!blob) return;
        let dateStr = new Date(Date.now()).toLocaleString();
        try {
          const result = await client.predict("/predict", {
            img: blob,
          });
          console.log(result.data[0].confidences[1].confidence , dateStr);
          const score = result.data[0].confidences[1].confidence;
          setConfidence(Math.round(score * 100));
        } catch (err) {
          console.error("Confidence fetch error:", err);
        }
      }, "image/png");
    }, 20000);
  };

  const stopConfidenceTracking = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const stopCamera = () => {
    // Stop video/audio stream
    if (cutCall) {
      cutCall.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setcutCall(null);
      console.log("Call is disconnected");
    }

    stopConfidenceTracking()
  
    // Cancel any speaking
    if (audioRef.current) {
      if (audioRef.current instanceof Audio) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      speechSynthesis.cancel();
      audioRef.current = null;
    }
  
    // Cancel recognition
    if (recognitionRef.current) {
      recognitionRef.current.onend = null;
      recognitionRef.current.onerror = null;
      recognitionRef.current.onresult = null;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
  
    // Reset session
    setSessionId(null);
    setQuestionCount(0);
    setConversationHistory([]);
  
    // Go home
    navigate("/");
  };
  

  const toggleMic = () => {
    if (cutCall) {
      const audioTrack = cutCall.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setMicMuted(!audioTrack.enabled);
      }
    }
  };

  const speakTextNormal = async (text) => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.3;
      utterance.pitch = 2;
      utterance.onend = () => {
        audioRef.current = null;
        resolve();
      };
      audioRef.current = utterance;
      speechSynthesis.speak(utterance);
    });
  };

  // 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

  // const speakTextNormal = async (text) => {
  //   const apiKey = "  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";
  //   const url = "https://api.openai.com/v1/audio/speech";
  
  //   console.log("Fetching TTS for:", text);
  
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Bearer ${apiKey}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       model: "tts-1",
  //       input: text,
  //       voice: "shimmer",
  //     }),
  //   });
  
  //   if (!response.ok) {
  //     console.error("TTS Error:", await response.text());
  //     return;
  //   }
  
  //   const audioBlob = await response.blob();
  //   if (audioBlob.size === 0) {
  //     console.error("TTS returned empty blob.");
  //     return;
  //   }
  
  //   const audioUrl = URL.createObjectURL(audioBlob);
  //   const audio = new Audio(audioUrl);
  //   audioRef.current = audio;
  
  //   return new Promise((resolve) => {
  //     audio.onended = () => {
  //       audioRef.current = null;
  //       resolve();
  //     };
  //     audio.play().catch((err) => {
  //       console.error("Playback error:", err);
  //       resolve(); // still resolve so the flow continues
  //     });
  //   });
  // };
  

  const callGeminiAPI = async (updatedHistory) => {
    const contents = updatedHistory.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text }],
    }));

    const API_KEY = "AIzaSyDmRdVGppLT6FBq3ouKzk1YCxWNdAQTx0s";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents }),
    });

    const data = await response.json();
    const geminiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "(No response)";

    return geminiText;
  };

  const startInterview = async () => {
    const id = "session-" + Date.now();
    setSessionId(id);
    setQuestionCount(0);
    
    const initialHistory = [
      {
        role: "user",
        text: `You are a friendly and professional Interviewer (Name Yourself Randomly) Interviewing a student for ${skill} role. they have ${experience} years of experience. ask a mix of hard and simple problem one by one ask practical yet unique question. Keep the interview concise and on-topic. dont ask long question`,
      },
    ];
    setConversationHistory(initialHistory);

    // appendLog(`Session ID: ${id}`);

    const welcome = await callGeminiAPI(initialHistory.concat({
      role: "user",
      text: "Start the interview. Welcome me and ask me to introduce myself. in one line"
    }));

    appendLog("Interviewer: " + welcome);
    await speakTextNormal(welcome);
    recordUserAnswer(initialHistory.concat({ role: "model", text: welcome }));
  };


  useEffect(() => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      if (!sessionId) {
        startInterview();
      }
    }
  }, []);
  

  const recordUserAnswer = (historyOverride = null) => {
    const recognition =
      window.SpeechRecognition || window.webkitSpeechRecognition
        ? new (window.SpeechRecognition || window.webkitSpeechRecognition)()
        : null;

    if (!recognition) {
      appendLog("SpeechRecognition API not supported in this browser.");
      return;
    }

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    appendLog("Listening for answer...");
    let gotResult = false;

    recognition.start();

    recognition.onresult = async (event) => {
      gotResult = true;
      recognition.stop();
      const text = event.results[0][0].transcript;
      appendLog("User: " + text);

      const nextCount = questionCount + 1;
      setQuestionCount(nextCount);

      const prevHistory = historyOverride || conversationHistory;
      const updatedHistory = prevHistory.concat({ role: "user", text });

      if (nextCount >= 5) {
        const goodbye = await callGeminiAPI(
          updatedHistory.concat({ role: "user", text: "Say goodbye and end the interview." })
        );
        appendLog("Interviewer: " + goodbye);
        await speakTextNormal(goodbye);
      } else {
        const nextQuestion = await callGeminiAPI(updatedHistory);
        appendLog("Interviewer: " + nextQuestion);
        await speakTextNormal(nextQuestion);
        recordUserAnswer(updatedHistory.concat({ role: "model", text: nextQuestion }));
      }

      setConversationHistory(updatedHistory);
    };

    recognition.onerror = async () => {
      recognition.stop();
      if (!gotResult) {
        const prevHistory = historyOverride || conversationHistory;
        const prompt = "Ask the user to speak up again politely because no input was detected.";
        const updatedHistory = prevHistory.concat({ role: "user", text: prompt });

        const retryPrompt = await callGeminiAPI(updatedHistory);
        appendLog("Interviewer: " + retryPrompt);
        await speakTextNormal(retryPrompt);
        recordUserAnswer(updatedHistory.concat({ role: "model", text: retryPrompt }));

        setConversationHistory(updatedHistory);
      }
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };
  };

  return (
    <>
      <div className="flex-1 bg-white/10 relative rounded-xl">
        <div className={`absolute z-20 p-2 text-xl font-semibold ${(confidence<50)?"text-red-500":"text-green-400"}`}>Confidence: {confidence}</div>
        <video ref={videoRef} autoPlay playsInline className={`border rounded-xl object-cover scale-x-[-1] ${
            changeMode ? "w-[25%] h-[25%] absolute right-0 bottom-0 m-1": "w-full h-full"}`}/>
        <div className={`bg-black rounded-xl ${changeMode? "w-full h-full": "absolute right-0 bottom-0 w-[25%] h-[25%] m-1"}`}></div>
        <div className="w-full h-14 absolute bottom-0 mb-5 flex justify-center items-center gap-10">
          <i className="ri-camera-switch-fill text-2xl bg-white/15 p-4 rounded-full cursor-pointer" onClick={() => setchangeMode(!changeMode)}></i>
          <i className="ri-mic-off-fill text-2xl bg-white/15 p-4 rounded-full cursor-pointer" onClick={toggleMic}></i>
          <i className="ri-phone-fill text-2xl bg-red-500 p-4 rounded-full cursor-pointer" onClick={stopCamera}
          ></i>
        </div>
      </div>

      <div className="mt-60">
        <i className="ri-contract-left-right-line text-center text-2xl bg-white/20 p-2 rounded-full mx-3" onClick={() => setcloseChat(!closeChat)}></i>
      </div>

      <div className={`bg-white overflow-auto rounded-xl transition-all duration-300 ease-in-out ${closeChat ? "w-0 absolute right-0" : "w-[30%] h-screen p-4"}`}>
        <h2 className="font-bold mb-2">Interview Log</h2>
        <pre className="whitespace-pre-wrap text-sm text-black">
          {logText}</pre>
      </div>
    </>
  );
}

export default Interview;