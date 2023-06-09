import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userData } from "../../../userSlice";
import { useNavigate } from "react-router-dom";
import { InputComponent } from "../../../../components/input/InputComponent";
import { createEvents, getAllBusinesses } from "../../../../service/apiCalls";
import "./CreateEventByAdmin.css";
import dayjs from 'dayjs';

export const CreateEventByAdmin = () => {

  const navigate = useNavigate();
  const credentialsRdx = useSelector(userData);

  const [businesses, setBusinesses] = useState([]);
  const [welcome, setWelcome] = useState("");

  const [credential, setCredential] = useState({
    name: "",
    description: "",
    place: "",
    date: "",
    hour: "",
    business_id: "",
  });

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (businesses.length === 0) {
      getAllBusinesses()
        .then((result) => {
          setBusinesses(result.data.business);
        })
        .catch((error) => console.log(error));
    }
  }, [businesses]);

  const checkError = (e) => { };

  const createEvent = () => {
    createEvents(credential, credentialsRdx.credentials.token)
      .then((respuesta) => {
        setCredential(respuesta.data);
        setWelcome('event created')
        setTimeout(() => {
          navigate("/all/events");
        }, 500);
      }).catch(error => {
        setCredential(error.message),
          setWelcome('event already exist');
        setTimeout(() => {
          getAllBusinesses()
          .then((result) => {
            setBusinesses(result.data.business);
          })
          .catch((error) => console.log(error));
        }, 2000)
      })
  };

  const today = dayjs().format('YYYY-MM-DD');
  return (
    <>
    {welcome !== "" ? (
            <Card>
                <Card.Header>{welcome}</Card.Header>
            </Card>
        ) : (
            <>
      <h5>Create event!</h5>
      <div className="main-background">
        <Form>
          <Row className="card-main">
            <div className="card-style card-shadow">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label variant="white">Url Image</Form.Label>
                <InputComponent
                  className={"input-style"}
                  required={true}
                  type={"text"}
                  name={"image"}
                  placeholder={"Enter event URL... "}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label variant="white">Name</Form.Label>
                <InputComponent
                  className={"input-style"}
                  required={true}
                  maxLength={30}
                  type={"text"}
                  name={"name"}
                  placeholder={"Enter event name..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSurname">
                <Form.Label>Description</Form.Label>
                <InputComponent
                  className={"input-style"}
                  type={"text"}
                  maxLength={500}
                  name={"description"}
                  placeholder={"Enter event description..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Place</Form.Label>
                <InputComponent
                  className={"input-style"}
                  type={"text"}
                  name={"place"}
                  maxLength={50}
                  placeholder={"Enter event place..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Date</Form.Label>
                <input
                  className='input-style dayjs'
                  type='date'
                  name='date'
                  min={today}
                  onChange={inputHandler}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formPasswordZip">
                <Form.Label>Hour</Form.Label>
                <InputComponent
                  className={"input-style"}
                  type={"time"}
                  name={"hour"}
                  maxLength={10}
                  placeholder={"Enter event time..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Label>Business:</Form.Label>
              <Form.Select
                name={"business_id"}
                onChange={(e) => inputHandler(e)}
                aria-label="Default select example"
              >
                <option>Choose business:</option>
                {businesses.map((business) => {
                  return (
                    <option key={business.User.name} value={business.id}>
                      {business.User.name}
                    </option>
                  );
                })}
              </Form.Select>
              <div className="buton-action button-action-eventPro">
                <Button onClick={createEvent} variant="primary" className="buttonOk">Create!</Button>
              </div>
            </div>
          </Row>
        </Form>
      </div>
      </>
        )}
        </>
    );
}
