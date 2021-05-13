import {Flex, FlexStyled, H3} from './UI'

const NotFound = () => {

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
                <H3>Page not found</H3>
                <H3>Sorry, we couldn't find the page you're looking for.</H3>
            </FlexStyled>
        </Flex>
       
    )
}

export default NotFound;