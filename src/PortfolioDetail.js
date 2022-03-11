import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Label } from "reactstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { MdOutlineClose } from 'react-icons/md';
import "./index.css";
import { AddItem } from "./AddItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const liste = [
	{ id: "1", gun: 1, saat: 7, egitimYontemi: "Ticari Kredi Mevzuatı - Giriş", items: [] },
	{
		id: "2", gun: 1, saat: 8.5, egitimYontemi: "Bireysel Kredi Mevzuatı ve Operasyonu / Sınıf içi", items: [
			{ id: "2.1", ayniGun: 0, saat: 4, egitimYontemi: "Çizelge 1 - Mevzuat" },
			{ id: "2.2", ayniGun: 0, saat: 3, egitimYontemi: "Çizelge 1 - Süreç" },
			{ id: "2.3", ayniGun: 0, saat: 1.5, egitimYontemi: "Çizelge 1 - Tahsis" }
		]
	},
	{
		id: "3", gun: 1, saat: 7, egitimYontemi: "Operasyonel Risk ve Verimlilik", items: [
			{ id: "2.1", ayniGun: 0, saat: 3, egitimYontemi: "Çizelge 1" },
			{ id: "2.2", ayniGun: 0, saat: 4, egitimYontemi: "Çizelge 2" }
		]
	},
	{ id: "4", gun: 0.5, saat: 4, egitimYontemi: "Ticari Kredi Operasyon Süreci / Sınıf İçi", items: [
			{ id: "2.1", ayniGun: 0, saat: 2, egitimYontemi: "Çizelge 1" },
			{ id: "2.2", ayniGun: 0, saat: 2, egitimYontemi: "Çizelge 2" }
	] }
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
		<div style={{ marginTop: "15vh" }}>
			  <div className="header">
            <h4>Portföyünüzü oluşturun</h4>
            <p>2/2</p>
            <p><MdOutlineClose size='2em'/></p>
        </div>
			<h1
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Eğitim Yöntemi Çizelge Tanımları
			</h1>
			<div style={{ marginLeft: "20vh", marginTop: "5vh" }}>
		
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
			</div>
			<div className="footer">
				<div>
					<Link to="/CreatePortfolio">
						<Button size="lg" style={{backgroundColor:"gray"}}>
							 <BsArrowLeft />
						</Button>
					</Link>
				</div>
				<div>					
				</div>
				<div >
					<Link to="/PortfolioDetail">
						<Button size="lg" style={{backgroundColor:"#30b36b"}}>
							Oluştur <BsArrowRight />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetail;