import React,{Component} from "react"
import {Container, Content,Text} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";

class ScreenAccount extends Component{
    render(){
        return(
            <Container>
                <Header left={"arrow-right"} title={"Account"}/>
                <Content>
                    <Text>Account</Text>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenAccount)