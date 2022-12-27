
import TopBar from "../component/molecules/top-bar";
import GifCardList from "../component/organisms/gif-card-list";
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Todo() {

  const baseURL = process.env.REACT_API_GIF

  let valueInitial = {
    url: "",
    author_id: 1014
  };

  const [formValue, setFormValue] = useState(valueInitial);

  const [gifList, setGifList] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    //console.log(event.target.value);
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    axios
      .get("https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=1014")
      .then((response) => {
        console.log(response.data);
        setGifList(response.data);
      })
      .catch((error) => setError(error));
  }, []);

  const createGif = () => {

    if (formValue.value === '') {
      alert('No puede estar vacio');
      return false;
    } else if (formValue.url.trim() === '') {
      alert('Debe ingresar un valor en el campo');
      return false;
    }

    axios.post("https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/", formValue)
      .then((response) => {
        console.log(response.data);
        setGifList([...gifList, response.data]);
        setFormValue(valueInitial);
      }).catch((error) => {
        alert('Url no valida');

      });
  }

  const deleteGif = (event) => {
    event.preventDefault();
    let id = event.target.getAttribute("id");
    let url = event.target.dataset.url;

    /* "id": 2,
    "url": "example.com",
    "author_id": 1 */

    axios.delete('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', {
      "id": id,
      "url": url,
      "author_id": 1014
    })
      .then(response => {
        const result = gifList.filter(data => data.id !== parseInt(id));
        console.log(result);
        /* gifList(result); */
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', padding: '5px' }}>
      <Card style={{ width: '25rem' }} className="text-center">
        <Card.Header>
          <h3>Gif Galery</h3>
          <TopBar
            value={formValue.url}
            name="url"
            handleChange={handleChange}
            onClick={createGif}
          ></TopBar>
        </Card.Header>
        <Card.Body>
          <GifCardList
            gifList={gifList}
            onClick={deleteGif}></GifCardList>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Todo;