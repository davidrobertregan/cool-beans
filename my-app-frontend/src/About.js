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
                    <Figure>
                        <Figure.Image
                            src="https://static.wixstatic.com/media/065e6b_dd1a8624bd5b40c9848aeec671ed811b.png/v1/fit/w_936%2Ch_733%2Cal_c/file.png"
                            thumbnail
                            width={250}/>
                        <Figure.Image
                            src="http://i.imgur.com/psBBZIV.png"
                            thumbnail
                            width={210}/>
                    </Figure>
                </div>
            </Container>
        </Container>
    )
}

export default About