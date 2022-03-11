import React, { Component } from 'react'
import { FormGroup, Input } from 'reactstrap';
import { RiDragMove2Fill } from 'react-icons/ri';
import { BsPlus, BsSquareFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import './index.css'

export class AddItem extends Component
{
	removeItem(item)
	{
		//this.props.updateItem(this.props.value.id, index);
		this.props.removeItem(this.props.value.id);
	}

	removeSubItem(index)
	{
		this.props.removeSubItem(this.props.value.id, index);
	}

	addSubItem()
	{
		this.props.addSubItem(this.props.value.id);
	}

	render()
	{
		return (
			<div>
				<div className="flex-container">
					<div style={{ marginTop: "-10px", width: '7%' }}>
						<div style={{ background: "#1fb3d1", padding: "1px", margin: "10px" }}><RiDragMove2Fill size="2em" className="icons-align" color='white' /></div>
					</div>

					<FormGroup className="item" style={{ width: '10%' }} disabled={true}>
						<Input type="select" name="select" id="exampleSelect" disabled={true}>
					
						</Input>
					</FormGroup>
					<FormGroup className="item" style={{ width: '7%' }}>
						<Input type="text" name="text" id="exampleText" placeholder="gun" value={this.props.value.gun} />
					</FormGroup>
					<FormGroup className="item" style={{ width: '7%' }}>
						<Input type="text" name="text2" id="exampleText2" placeholder="saat" value={this.props.value.saat} />
					</FormGroup>
					<FormGroup className="item" style={{ width: '40%' }}>
						<Input type="text" name="text3" id="exampleText3" placeholder="egitimYontemi" value={this.props.value.egitimYontemi} />
					</FormGroup>
					<div style={{ marginTop: "-10px", width: '7%' }}>
						<div style={{ background: "#d15656", padding: "1px", margin: "10px" }} onClick={() => this.removeItem(this.props.value)}>
							<MdOutlineClose className='icons-align' size='2em' color='white' />
						</div>
					</div>
					<div style={{ marginTop: "-10px", width: '7%' }}>
						<div style={{ background: "#40b76f", padding: "1px", margin: "10px" }} onClick={() => this.addSubItem()}>
							<BsPlus className='icons-align' size='2em' color='white' />
						</div>
					</div>
				</div>
				<div>
					{this.props.value.items.map((item, index) => <div key={item.id} className="flex-container">
						<div style={{ width: '6%' }}>&nbsp;</div>
						<FormGroup className="item" style={{ width: '10%' }} >
							<Input type="select" name="select" id="exampleSelect">
								<option>1</option>
								<option>2</option>
							</Input>
						</FormGroup>
						<div style={{ width: '7%' }}>&nbsp;</div>
						<FormGroup className="item" style={{ width: '7%' }}>
							<Input type="text" name="text2" id="exampleText2" placeholder="text" defaultValue={item.saat} />
						</FormGroup>
						<FormGroup className="item" style={{ width: '40%', whiteSpace: "nowrap" }}>
							<Input type="text" name="text3" id="exampleText3" placeholder="text" defaultValue={item.egitimYontemi} style={{ display: "inline-block", width: "88%" }} />
							<div style={{ marginTop: "-10px", display: "inline-block" }}>
								<div style={{ background: "#d15656", padding: "1px", margin: "10px" }} onClick={() => this.removeSubItem(index)}>
									<MdOutlineClose className='icons-align' size='2em' color='white' />
								</div>
							</div>
						</FormGroup>
						<div style={{ width: '7%' }}>&nbsp;</div>
						<div style={{ width: '7%' }}>&nbsp;</div>
					</div>)}
				</div>
			</div>
		)
	}
}
