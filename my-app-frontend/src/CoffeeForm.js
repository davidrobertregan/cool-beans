import {Form, FormControl, Button, Row, Col} from "react-bootstrap"

function CoffeeForm( {handleFetch, formData, setFormData}){

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <Form style={{padding: "1em"}} onSubmit = {handleFetch}>
            <Row>
                <Col>
                    <FormControl type = "text" value={formData.content} onChange={handleChange} name="content" placeholder="Ginny Weasly says..."/>
                </Col>
                <Col md="auto">
                    <Form.Label>⭐️</Form.Label>
                </Col>
                <Col md="auto">
                    <FormControl type = "number" value={formData.rating}  min="0" max="5" onChange={handleChange} name="rating" />
                </Col>
                <Col md="auto">
                    <Button variant="light" type="submit">✅</Button>
                </Col>
            </Row>
        </Form>
    )

}

export default CoffeeForm