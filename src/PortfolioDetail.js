import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button,Label } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";
import "./index.css";
import { AddItem } from "./AddItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const liste = [{ id: "1"}, { id: "2" }, { id: "3" }];


function PortfolioDetail() {
    const [finalListe, updatedListe] = useState(liste);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(finalListe);
        const [reorderedItem] = items.splice(result.source.index,1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatedListe(items);
    }
  
    return (
      <div style={{ marginTop: "20vh" }}>
        <div className="header">
          <p>This is some content in sticky footer</p>
        </div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Eğitim Yöntemi Çizelge Tanımları{" "}
        </h1>
        <div class="flex-container">
        <Label for="exampleSelect">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
        <Label for="exampleSelect" style={{width:'8%'}}>Aynı Gün</Label>
        <Label for="exampleText" style={{width:'6%'}}>Gün</Label>
        <Label for="exampleText2" style={{width:'6%'}}>Saat</Label>
        <Label for="exampleText3" style={{width:'41%'}}>Eğitim Yönetimi</Label>
        <Label for="exampleSelect">&nbsp;&nbsp;</Label>
        <Label for="exampleSelect">&nbsp;&nbsp; </Label>
          </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="liste">
            {(provided) => (
              <ul
                className="listStyle"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {finalListe.map(({ id }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <AddItem />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <div className="footer">
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Link to="/PortfolioDetail">
              <Button>
                Deneme Button <BsArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default PortfolioDetail;