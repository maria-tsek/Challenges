import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid"; // Import the uid function

function App() {
  const initialEntries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: Yay!",
    },
  ];

  const [entries, setEntries] = useState(initialEntries);

  //  add a new entry
  function handleAddEntry(newEntry) {
    // Generate a date string in the desired format
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    //  unique ID for the new entry
    const id = uid();

    //  the new entry object with date and ID
    const entryWithIdAndDate = {
      ...newEntry,
      date,
      id,
    };

    // Update the entries state by adding the new entry
    setEntries([entryWithIdAndDate, ...entries]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {/* Pass entries state to EntriesSection component */}
        <EntriesSection entries={entries} />
        {/* Pass the handleAddEntry function to EntryForm component */}
        <EntryForm onAddEntry={handleAddEntry} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
