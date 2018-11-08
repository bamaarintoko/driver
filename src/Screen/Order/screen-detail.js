import React,{Component} from "react"
import {Container,Text} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";
class ScreenDetail extends Component{
    render(){
        return(
            <Container>
                <Header left={"arrow-left"} leftPress={() => this.props.navigation.goBack()} title={"Detail Order"}/>
                <Text>Detail order</Text>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenDetail)