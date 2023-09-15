import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    // a copy of the current tags array and the new tag
    const newTags = [...tags, newTag];
    setTags(newTags);
  }
  function handleDeleteTag(tagToDelete) {
    // Filter out the tag to delete from
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    // Update the state with the new tags array
    setTags(newTags);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
