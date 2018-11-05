import React,{Component} from "react"
import {Container,Content,Text} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";

class ScreenOrder extends Component{
    render(){
        return(
            <Container>
                <Header title={"Order"}/>
                <Content>
                    <Text>
                        Order
                    </Text>
                </Content>
            </Container>
        )
    }
}
function mapStateToProps() {
    return{}
}
export default connect(mapStateToProps)(ScreenOrder)