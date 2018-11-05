import React,{Component} from "react"
import {Container,Content,Text} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";
class ScreenHome extends Component{
    render(){
        return(
            <Container>
                <Header title={"Home"}/>
                <Content>
                    <Text>Home</Text>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenHome)