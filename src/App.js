import React, { useState, useEffect } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  ListGroup,
  Container,
} from "react-bootstrap";
import { Header } from "./components";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(
    localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
  );

  const handelSubmit = (e) => {
    e.preventDefault();
    if (value.length !== 0) {
      setList((prev) => [
        ...prev,
        {
          id: list.length,
          text: value,
        },
      ]);
      setValue("");
    }
  };

  const handelRemove = (id) => {
    const new_list = list.filter((item) => item.id !== id);
    setList(new_list);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Header />
      <Container className="mt-4">
        <form onSubmit={(e) => handelSubmit(e)}>
          <InputGroup>
            <FormControl
              placeholder="برنامه جدید ..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <InputGroup.Prepend>
              <Button type="submit" variant="success">
                اضافه کن
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
        </form>
        {list.length ? (
          <ListGroup className="mt-4 text-right">
            {list.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {item.text}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handelRemove(item.id)}
                >
                  حذف
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <div className="mt-4 text-center text-success">
            هورا ! همه کارات تموم شدن !
          </div>
        )}
      </Container>
    </>
  );
};

export default App;
