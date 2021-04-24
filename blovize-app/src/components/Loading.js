import {Flex, FlexStyled, H3} from './UI'

const Loading = () => {

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
                <H3>Loading...</H3>
            </FlexStyled>
        </Flex>
       
    )
}

export default Loading;