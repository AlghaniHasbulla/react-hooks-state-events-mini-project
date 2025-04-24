import React, { useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories = []}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState(categories[0])

  
  function handleSubmit(event){
    event.preventDefault()
    if (!text.trim()) return
    onTaskFormSubmit({text, category})
    setCategory(categories[0])
    setText("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={e=>setText(e.target.value)} />
      </label>

      <label>
        Category
        <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {
            categories.map((category)=>{
              return <option key={category} value={category}>
                {category}
              </option>
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;