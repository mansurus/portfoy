import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Label } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";
import "./index.css";
import { AddItem } from "./AddItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const liste = [
	{ id: "1", gun: 1, saat: 7, egitimYontemi: "Ticari Kredi Mevzuatı - Giriş", items: [] },
	{
		id: "2", gun: 2, saat: 4, egitimYontemi: "Def", items: [
			{ id: "2.1", ayniGun: 1, saat: 2, egitimYontemi: "aa" },
			{ id: "2.2", ayniGun: 1, saat: 2, egitimYontemi: "bb" },
			{ id: "2.3", ayniGun: 1, saat: 2, egitimYontemi: "cc" }
		]
	},
	{ id: "3", gun: 3, saat: 5, egitimYontemi: "Xyz", items: [] }
];

function PortfolioDetail()
{
	const [finalListe, updatedListe] = useState(liste);

	function handleOnDragEnd(result)
	{
		if (!result.destination)
			return;
		const items = Array.from(finalListe);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		updatedListe(items);
	}

	function addSubItem(id)
	{
		const items = Array.from(finalListe);
		for (let i of items)
		{
			if (i.id === id)
				i.items.push({ id: id + "." + i.items.length.toString(), ayniGun: 0, saat: 0, egitimYontemi: "" });
		}

		updatedListe(items);
	}

	function removeSubItem(id, index)
	{
		const items = Array.from(finalListe);
		for (let i of items)
		{
			if (i.id === id)
				i.items.splice(index, 1);
		}

		updatedListe(items);
	}

	function removeItem(id)
	{
		const items = Array.from(finalListe);

		
		for( var i = 0; i < items.length; i++)
		{ 
			if ( items[i].id === id)
				items.splice(i, 1); 
		}

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
			<div className="flex-container">
				<Label for="exampleSelect">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
				<Label for="exampleSelect" style={{ width: '8%' }}>Aynı Gün</Label>
				<Label for="exampleText" style={{ width: '6%' }}>Gün</Label>
				<Label for="exampleText2" style={{ width: '6%' }}>Saat</Label>
				<Label for="exampleText3" style={{ width: '41%' }}>Eğitim Yönetimi</Label>
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
							{finalListe.map((item, index) =>
							{
								return (
									<Draggable key={item.id} draggableId={item.id} index={index}>
										{(provided) => (
											<li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
												<AddItem value={item} addSubItem={addSubItem} removeSubItem={removeSubItem} removeItem={removeItem} />
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