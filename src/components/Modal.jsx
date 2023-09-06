import React,{useState} from 'react'

export const Modal=({closeModal, onSubmit, defaultValue}) => {
    const [formState, setFormState]=useState(
        defaultValue || {
        title:"",
        description : ""
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
    
      const handleSubmitCard = (e) => {
        e.preventDefault();
    
    
        onSubmit(formState);
    
        closeModal();
      };
    return (
        <>
  <div
      className="editing"
    >
            <div className="edits">
            <div className="form-group">
                <label htmlFor="title" className="form-label">Name</label>
                <input type="text" name="title" onChange={handleChange} value={formState.title}  />
            </div>
            <div className="form-group">
                <label htmlFor="description" className="form-label">Address</label>
                <textarea rows="3"
                 name="description" 
                 onChange={handleChange}
                 value={formState.description}/>
            </div>
            <button type="submit" className="btn" id="sub" onClick={handleSubmitCard}>
            Submit
          </button>
          <button type="submit" className="btn" onClick={(e) => {
        closeModal();
      }}>
            Cancel
          </button>
            </div>
            </div>


        </>
    )
}

export default Modal