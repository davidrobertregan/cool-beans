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
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQFWyS5Gv7ZE0A/profile-displayphoto-shrink_800_800/0/1614719833892?e=1643846400&v=beta&t=95Ntw_a9HCjfDo5R6NIRoExb-GwbnMeM0os2O2GPNA8"
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
                            Nick Christensen
                        </Figure.Caption>
                    </Figure>
                </div>
            </Container>
        </Container>
    )
}

export default About