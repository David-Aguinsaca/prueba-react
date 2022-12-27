
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
            createGif={createGif}
          ></TopBar>
        </Card.Header>
        <Card.Body>
          <GifCardList gifList={gifList}></GifCardList>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Todo;