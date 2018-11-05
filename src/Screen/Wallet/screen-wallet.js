import React,{Component} from "react"
import {Container,Content,Text} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";

class ScreenWallet extends Component{
    render(){
        return(
            <Container>
                <Header title={"Wallet"}/>
                <Content>
                    <Text>
                        wallet
                    </Text>
                </Content>
            </Container>
        )
    }
}
function mapStateToProps() {
    return{}
}
export default connect(mapStateToProps)(ScreenWallet)