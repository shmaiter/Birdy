import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
	Container,
	Button,
	InputGroup,
	FormControl,
	Row,
	Form,
	FormGroup,
	Col,
	Carousel,
	Image
} from "react-bootstrap";

export const ResetPassword = () => {
	let { token } = useParams();
	console.log("estoy en resetpassword func", token);
	useEffect(() => {
		fetch(`https://3001-plum-sailfish-6xymnh0z.ws-us04.gitpod.io/confirm_email/${token}`)
			.then(resp => {
				return resp.json();
			})
			.then(resp => {
				console.log(resp);
			});
	}, []);
	return (
		<Container>
			<Row className="justify-content-center pt-5 mt-5 mr-1">
				<Col className="col-md-4 formulary">
					<Form action="">
						<FormGroup className="text-center pb-3">
							<h1 className="text-light">Restore Password</h1>
						</FormGroup>

						<FormGroup className="mx-sm-4 pb-3">
							<input
								type="password"
								className="form-control"
								placeholder="New Password"
								onChange={e => setPass(e.target.value)}
							/>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<Button className="btn btn-block signin" onClick={() => reset_Password()}>
								Restore
							</Button>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};