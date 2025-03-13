'use client'
import { useRef } from "react";
import ProjectBox from "@/components/ProjectBox";
import ProjectSideBar from "@/components/ProjectSideBar";

export default function Home() {
    const methEmblemRef = useRef<HTMLDivElement | null>(null);
    const digitalCpuRef = useRef<HTMLDivElement | null>(null);
    const wordleRef = useRef<HTMLDivElement | null>(null);
    const connect4Ref = useRef<HTMLDivElement | null>(null);

  return (
    <main className="flex">
      <ProjectSideBar 
        projects={[
          { name: "Meth-Emblem", ref : methEmblemRef },
          { name: "Digital CPU", ref: digitalCpuRef },
          { name: "Wordle In Python", ref: wordleRef },
          { name: "Connect-4 With ML Bot", ref: connect4Ref }
        ]}
      />

      <div className="ml-64 p-6 space-y-10">
        <ProjectBox ref={methEmblemRef} name="Meth-Emblem" 
        description="Meth Emblem is a tactical, grid-based strategy game inspired by Fire Emblem. Players command a team of unique units, managing their equipment and abilities while engaging in turn-based battles. Careful planning, positioning, and resource management are key to victory. Between battles, players can visit the shop, upgrade their gear, and prepare for the challenges ahead." 
        image="/img/meth-emblem.png" link="https://github.com/AsherS61/Meth-Emblem" tags={["Java", "JavaFx", "OOP", "Game Development"]} />

        <ProjectBox ref={digitalCpuRef} name="Digital CPU" description="This is an 8-bit CPU that is made from a digital simulation software using logic gates. It can do basic arithmetics, logics, and memory operations using opcode/oprand." 
        image="/img/digital.png" link="https://github.com/AsherS61/DigitalLogicCPU" tags={["Digital Logic", "Hardware", "Computer Architecture"]} />

        <ProjectBox ref={wordleRef} name="Wordle In Python" description="A python program that simulates the game wordle. Getting a words from a dictionary online." 
        image="/img/wordle.png" link="https://github.com/AsherS61/Wordle" tags={["Python", "Game Development", "Dictionary API"]} />

        <ProjectBox ref={connect4Ref} name="Connect-4 With ML Bot" description="A C++ program that simulates the Connect-4 in the terminal. There is both singleplayer with a bot and multiplayer" 
        image="/img/connect-4.png" link="https://github.com/AsherS61/Connect-Four-in-Cpp-With-ML" tags={["C++", "Game Development", "Machine Learning"]} />

      </div>
    </main>
  );
}
