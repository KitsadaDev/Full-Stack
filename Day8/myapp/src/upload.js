import axios from 'axios';
import config from './config';
import { useState } from 'react';

function Hello() {
    const [fileSelected, setfileSelected] = useState({});
    const selectedFile = (fileInput) => {
      if (fileInput !== undefined) {
        if (fileInput.length > 0) {
           setfileSelected(fileInput[0]);
        }
      }
    }

    const uploadFile = async () => {
      try {
        const formData = new FormData();
        formData.append('myFile', fileSelected);

        await axios.post(config.apiPath + '/book/testUpload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      } catch (e) {
        console.log(e);
      }
    }

    return <>
            <div>
              <input type='file' onChange={e => selectedFile(e.target.files)}></input>
              <button className='btn btn-primary' onClick={uploadFile}>
                Call API
              </button>
            </div>
           </>
    
}

export default Hello;