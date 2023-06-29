import React from 'react';
import './AddHighlight.css';
import { useState } from 'react';

const AddHighlightForm = () => {

    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    const handleVideoInputChange = (event) => {
        const selectedFile = event.target.files[0];
        setVideoFile(selectedFile);
      };
    
      const handleThumbnailInputChange = (event) => {
        const selectedFile = event.target.files[0];
        setThumbnailFile(selectedFile);
      };

      const handleSubmit = () => {
        // Simulate uploading the files to the player card
        if (videoFile && thumbnailFile) {
          console.log('Uploading video:', videoFile);
          console.log('Uploading thumbnail:', thumbnailFile);
          // You can perform additional actions here, such as making API requests to store the files on the server
        }
      };

  return (
    <div className='add-highlight-container'>
        <div className="add-highlight-box">
        <h2 className='h2'>Add Your Highlight</h2>
            <form>
                <button className='exit-button'>
                        X
                </button>

                <div className='buttons'>
                    <p className='p1'>Attach Your Video: </p>
                    <label htmlFor="video-input" className='video-button'>                      
                        <input className='video-input' id="video-input" type="file" accept="video/*" onChange={handleVideoInputChange} />
                    </label>

                    <p className='p2'>Attach Your Player Card: </p>
                    <label htmlFor="thumbnail-input" className='thumbnail-button'>                      
                        <input className='picture-input' id="thumbnail-input" type="file" accept="image/*" onChange={handleThumbnailInputChange} />
                    </label>

                    <button className='submit-highlights' type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddHighlightForm;
