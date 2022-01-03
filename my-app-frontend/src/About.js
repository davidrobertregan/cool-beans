import {Container, Figure} from "react-bootstrap"

function About () {
    return (
        <Container className="p-3">
            <div>
                <h1>☕ Cool Beans!</h1>
                <Container className='p-5'>
                    <h3>It's the little things...</h3>
                    <div>
                        <p>...that make or break your day. Like the quality of your morning cup of coffee. Life's too short for bad coffee. And so we search with you for the coveted cup. Don't lose heart. It's out there. You just might find it here, at <em>☕️ Cool Beans.</em></p>
                    </div>
                </Container>
            </div>
            <Container bg='primary' className='p-1'>
                <h3>Meet the Creators</h3>
                <div>
                    <Figure className='p-3'>
                        <Figure.Image
                            src="https://res.cloudinary.com/do4zijkje/image/upload/v1641247811/1640102957686_pnsax2.jpg"
                            thumbnail
                            width={200}/>
                        <Figure.Caption>
                            David Regan
                        </Figure.Caption>
                    </Figure>
                    <Figure className='p-3'>
                        <Figure.Image
                            src="https://ca.slack-edge.com/T02MD9XTF-U025DNXMGT1-4563e47e63e5-512"
                            thumbnail
                            width={200}/>
                        <Figure.Caption>
                            Nicholas Christensen
                        </Figure.Caption>
                    </Figure>
                </div>
            </Container>
        </Container>
    )
}

export default About