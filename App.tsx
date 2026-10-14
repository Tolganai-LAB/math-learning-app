import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Login from "./src/components/Login";
import Register from "./src/components/Register";
import ForgetPassword from "./src/components/ForgetPassword";
import VerifyCode from "./src/components/VerifyCode";
import ResetPasswordScreen from "./src/components/ResetPasswordScreen";
import SelectCity from "./src/components/SelectCity";

import MathHomeScreen from "./src/components/MathHomeScreen";
import TopicsScreen from "./src/components/TopicsScreen";
import TheoryScreen from "./src/components/TheoryScreen";
import TasksScreen from "./src/components/TasksScreen";
import HomeworkScreen from "./src/components/HomeworkScreen";

import ProfileScreen from "./src/components/ProfileScreen";
import SettingsScreen from "./src/components/SettingsScreen";

export default function App() {
  const [screen, setScreen] = useState("login");

  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Алматы");
  const [score, setScore] = useState(0);

  const go = (next: string) => {
    if (next === "home" || next === "courses") {
      setScreen("mathHome");
    } else {
      setScreen(next);
    }
  };

  return (
    <>
      <StatusBar style="dark" />

      {screen === "login" && (
        <Login
          go={go}
          phone={phone}
          setPhone={setPhone}
        />
      )}

      {screen === "register" && (
        <Register
          go={go}
          name={studentName}
          setName={setStudentName}
          phone={phone}
          setPhone={setPhone}
        />
      )}

      {screen === "forgot" && (
        <ForgetPassword
          go={go}
          phone={phone}
          setPhone={setPhone}
        />
      )}

      {screen === "verify" && (
        <VerifyCode go={go} />
      )}

      {screen === "reset" && (
        <ResetPasswordScreen go={go} />
      )}

      {screen === "city" && (
        <SelectCity
          go={go}
          city={city}
          setCity={setCity}
        />
      )}

      {screen === "mathHome" && (
        <MathHomeScreen
          onBack={() => setScreen("login")}
          onNext={() => setScreen("topics")}
          onProfile={() => setScreen("profile")}
          studentName={studentName}
        />
      )}

      {screen === "topics" && (
        <TopicsScreen
          onBack={() => setScreen("mathHome")}
          onNext={() => setScreen("theory")}
          onProfile={() => setScreen("profile")}
        />
      )}

      {screen === "theory" && (
        <TheoryScreen
          onBack={() => setScreen("topics")}
          onNext={() => setScreen("tasks")}
          onProfile={() => setScreen("profile")}
        />
      )}

      {screen === "tasks" && (
        <TasksScreen
          onBack={() => setScreen("theory")}
          onNext={() => setScreen("homework")}
          onProfile={() => setScreen("profile")}
          onScore={(points: number) => {
            setScore((previous) => previous + points);
          }}
        />
      )}

      {screen === "homework" && (
        <HomeworkScreen
          onBack={() => setScreen("tasks")}
          onNext={() => setScreen("profile")}
          onProfile={() => setScreen("profile")}
          onScore={(points: number) => {
            setScore((previous) => previous + points);
          }}
        />
      )}

      {screen === "profile" && (
        <ProfileScreen
          onBack={() => setScreen("mathHome")}
          onSettings={() => setScreen("settings")}
          onLogout={() => setScreen("login")}
          studentName={studentName}
          phone={phone}
          city={city}
          score={score}
        />
      )}

      {screen === "settings" && (
        <SettingsScreen
          onBack={() => setScreen("profile")}
        />
      )}
    </>
  );
}