import "./EntryForm.css";
import Button from "../Button";
import { useState } from "react";

export default function EntryForm({ onAddEntry }) {
  const [formData, setFormData] = useState({ motto: "", notes: "" });

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new entry object with the values from the form
    const newEntry = {
      motto: formData.motto,
      notes: formData.notes,
    };

    // Call the onAddEntry function and pass the new entry
    onAddEntry(newEntry);

    // Reset the form
    setFormData({ motto: "", notes: "" });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input
            type="text"
            name="motto"
            id="motto"
            value={formData.motto}
            onChange={handleInputChange}
          />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows="4"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
