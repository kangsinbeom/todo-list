import React from "react";
import ListItemContainer from "../containers/ListItemContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";
function TodoList({ items }) {
  console.log(items);
  return (
    <ListWrapper>
      <StList>
        {items.map(
          (item) =>
            !item.checked && (
              <Link to={`/detail/${item.id}`}>
                <ListItemContainer key={item.id} item={item} />
              </Link>
            )
        )}
      </StList>
      <StList>
        {items.map(
          (item) =>
            item.checked && (
              <Link to={`/detail/${item.id}`}>
                <ListItemContainer key={item.id} item={item} />
              </Link>
            )
        )}
      </StList>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-around;
  background-color: tomato;
  padding-top: 100px;
`;

const StList = styled.div`
  border-radius: 30px;

  box-shadow: 5px 5px 5px 5px gray;
  padding: 20px;
  width: 40%;
  background-color: ivory;
`;

export default TodoList;
